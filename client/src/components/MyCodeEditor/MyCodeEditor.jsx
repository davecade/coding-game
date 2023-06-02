import React, { useState, useEffect } from 'react';
import './MyCodeEditor.scss';
import axios from 'axios';
import Editor from 'react-simple-code-editor';
import Prism from 'prismjs';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript'; // Or whatever language you want to support

function MyCodeEditor() {
  const [language, setLanguage] = useState('');
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [socketClient, setSocketClient] = useState(null);
  const [token, setToken] = useState(null);
  const [wsNextId, setWsNextId] = useState(0);

  // Fetch token once when component mounts
  useEffect(() => {
    const fetchToken = async () => {
      const res = await axios.get('http://localhost:3001/token');
      setToken(res.data);
    };
    fetchToken();
  }, []);

  // Create WebSocket client when token changes
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

  // Connect WebSocket client when it changes
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
      });
    };
    const onWsConnectionFailed = (e) => {
      console.log('WebSocket connection failed:', e);
    };
    socketClient.connect({}, onWsConnection, onWsConnectionFailed);
  }, [socketClient]);

  const handleChange = (newCode) => {
    setCode(newCode);
    if (socketClient && socketClient.connected) {
      setTimeout(() => {
        socketClient.send('/app/execute-ws-api-token', newCode, {
          message_type: 'input',
        });
      }, 2000);
    }
  };

  const handleSubmit = async () => {
    socketClient.send(
      '/app/execute-ws-api-token',
      JSON.stringify({
        script: code,
        language: 'nodejs',
        versionIndex: 3,
      }),
      { message_type: 'execute', token },
    );
  };

  const lineNumbers = code
    .split('\n')
    .map((_, i) => i + 1)
    .join('\n');

  const highlight = (code) => {
    return Prism.highlight(
      code,
      Prism.languages.javascript,
      'javascript',
    ).replace(
      /<span class="token operator">=/g,
      '<span class="token operator" style="background-color: transparent;">=',
    );
  };

  return (
    <>
      <div className="code-editor-container">
        <textarea
          value={lineNumbers}
          readOnly
          style={{
            backgroundColor: '#001528',
            color: '#FFFFFF',
            width: '30px',
            overflow: 'hidden',
            lineHeight: '20px',
            resize: 'none',
            borderWidth: '0',
            paddingTop: '10px',
          }}
        />
        <Editor
          value={code}
          onValueChange={handleChange}
          highlight={highlight}
          padding={10}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 12,
            borderWidth: '0',
            lineHeight: '20px',
            width: '100%',
            minHeight: '10rem',
            color: '#FFFFFF',
            borderRadius: 4,
          }}
        />
      </div>
      <button onClick={handleSubmit}>Run Code</button>
      <p>Output: {output}</p>
    </>
  );
}

export default MyCodeEditor;
