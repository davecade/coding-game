import { useState, useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import axios from 'axios';
import { CodeErrorAtom, CodeSuccessAtom, OutputAtom } from '../../Atoms/Atoms';

const useWebSocket = () => {
  const [socketClient, setSocketClient] = useState(null);
  const [token, setToken] = useState(null);
  const setOutput = useSetRecoilState(OutputAtom);
  const [loading, setLoading] = useState(false);
  const setError = useSetRecoilState(CodeErrorAtom);
  const setSuccess = useSetRecoilState(CodeSuccessAtom);

  useEffect(() => {
    if (!socketClient?.connected) {
      setLoading(false);
      fetchToken();
    }
  }, [socketClient?.connected]);

  useEffect(() => {
    if (!socketClient) return;
    const onWsConnection = () => {
      console.log('WebSocket connection succeeded');

      socketClient.subscribe('/user/queue/execute-i', (message) => {
        const statusCode = parseInt(message.headers.statusCode);

        if (message.body.includes('Token Expired')) {
          fetchToken();
          return;
        }

        if (statusCode === 201 || statusCode === 204) {
          return;
        }

        switch (statusCode) {
          case 500:
            console.log('nad request');
            break;
          case 410:
            console.log('server error');
            break;
          case 206:
            break;
          case 429:
            console.log('daily limit reached');
            break;
          case 400:
            console.log('invalid request - invalid signature or token expired');
            break;
          case 401:
            console.log('Unauthorised request');
            break;
          default:
            setOutput(message.body);
            if (message.body.toString().toLowerCase().includes('error')) {
              setError(true);
            } else {
              setSuccess(true);
            }
            break;
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

  const send = async (...args) => {
    if (!socketClient?.connected) {
      await fetchToken();
      setError(true);
      setOutput('Something went wrong.. Please try again.')
      return;
    }

    setError(false);
    setSuccess(false);
    setOutput('');
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
    fetchToken,
  };
};

export default useWebSocket;
