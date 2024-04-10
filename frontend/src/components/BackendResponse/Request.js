import React, { useEffect } from 'react';
import axios from 'axios';

function Request() {
    function sendData() {
        const data = { key: 'value' };
        axios.post('http://127.0.0.1:8000/api/', data)
            .then((response) => {
                console.log('Success:', response.data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    useEffect(() => {
        sendData();
    }, [])

    return (
        <>
            <div>Check console for response.</div>
        </>
    )
}

export default Request
