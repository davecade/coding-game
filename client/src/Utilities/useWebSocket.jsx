import React, { useState, useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import axios from 'axios';
import { OutputAtom } from '../Atoms/Atoms';

const useWebSocket = () => {
  const [socketClient, setSocketClient] = useState(null);
  const [token, setToken] = useState(null);
  const setOutput = useSetRecoilState(OutputAtom);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchToken();
  }, []);

  useEffect(() => {
    if (!socketClient) return;
    const onWsConnection = () => {
      console.log('WebSocket connection succeeded');

      socketClient.subscribe('/user/queue/execute-i', (message) => {
        // Process message here
        const statusCode = parseInt(message.headers.statusCode);

        if (statusCode === 201) {
          // do nothing
          return;
        }

        if (statusCode === 204) {
          //executionTime = message.body
        } else if (statusCode === 500 || statusCode === 410) {
          //server error
          console.log('server error');
        } else if (statusCode === 206) {
          //outputFiles = JSON.parse(message.body)
          //returns file list - not supported in this custom api
        } else if (statusCode === 429) {
          //Daily limit reached
          console.log('daily limit reached');
        } else if (statusCode === 400) {
          //Invalid request - invalid signature or token expired - check the body for details
          console.log('invalid request - invalid signature or token expired');
        } else if (statusCode === 401) {
          //Unauthorised request
          console.log('Unauthorised request');
        } else {
          setOutput(message.body);
        }
        setLoading(false);
      });
    };
    const onWsConnectionFailed = (e) => {
      console.log('WebSocket connection failed:', e);
    };
    socketClient.connect({}, onWsConnection, onWsConnectionFailed);
  }, [socketClient]);

  useEffect(() => {
    if (!token) return;
    const connectToWebsocket = async () => {
      /* global SockJS, webstomp */
      const client = webstomp.over(
        new SockJS('https://api.jdoodle.com/v1/stomp'),
        { heartbeat: false, debug: true },
      );
      setSocketClient(client);
    };
    connectToWebsocket();
  }, [token]);

  const send = (...args) => {
    setLoading(true);
    socketClient.send(...args);
  };

  const fetchToken = async () => {
    const res = await axios.get('http://localhost:3001/token');
    setToken(res.data);
  };

  return {
    send,
    token,
    setToken,
    socketClient,
    setSocketClient,
    loading,
  };
};

export default useWebSocket;
