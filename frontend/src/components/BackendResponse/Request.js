import React, { useEffect } from 'react';
import axios from 'axios';

function Request() {
  function sendData() {
    const data = { key: 'value' };
    
    axios.post('http://127.0.0.1:8000/api/', JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      console.log('Success:', response.data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  useEffect(() => {
    sendData();
  }, []); // The empty array as second argument means this effect runs once after initial render

  return (
    <div>Check console for response.</div>
  );
}

export default Request;
