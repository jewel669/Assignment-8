
import React from 'react';
import AppsTaitel from '../AppsTaitel/AppsTaitel';
import { useLoaderData } from 'react-router';

const Apps = () => {
    const data = useLoaderData();
    return (
        <div>
            <AppsTaitel data={data}></AppsTaitel>
        </div>
    );
};

export default Apps;
