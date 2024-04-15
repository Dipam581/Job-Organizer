import { React, useEffect } from 'react'
import axios from 'axios';

function LocationFilter() {
    console.log("inside location");

    const fetchLocation = async () =>  {
        const options = {
            method: 'GET',
            url: 'https://ip-geo-location.p.rapidapi.com/ip/check',
            params: { format: 'json' },
            headers: {
                'X-RapidAPI-Key': '517b6a7ccdmsh09b724099070929p1709a0jsn337969857059',
                'X-RapidAPI-Host': 'ip-geo-location.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchLocation();
    }, [])

    return (
        <>

        </>
    )
}

export default LocationFilter