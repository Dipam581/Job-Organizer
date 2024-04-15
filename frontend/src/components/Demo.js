import React, { useState } from 'react';

function Demo() {
    const [data, setData] = useState({});

    const handleSubmit = async (event) => {
        event.preventDefault();
        let a = {"name" : "123"}
        try {
            const response = await fetch('http://127.0.0.1:8000/fetch/api/data/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(a)
            });
            const responseData = await response.json();
            console.log(responseData);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleChange = (event) => {
        setData({...data, [event.target.name]: event.target.value});
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                value={data.name || ''}
                onChange={handleChange}
            />
            <button type="submit">Send Data</button>
        </form>
    );
}

export default Demo;
