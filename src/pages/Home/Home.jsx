import React from 'react';
import Banner from '../../component/Banner/Banner';
import BangladeshApp from '../BangladeshApp/BangladeshApp';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <BangladeshApp data={data}></BangladeshApp>
        </div>
    );
};

export default Home;