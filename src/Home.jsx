import React from 'react';
import { useLoaderData } from 'react-router';
import HomeDetails from './HomeDetails';

const Home = () => {
    const product=useLoaderData().products;
    
    return (
        <div>
            <h1>this is home</h1>
            {
                product.map(pro=><HomeDetails key={pro.id} pro={pro}></HomeDetails>)
            }
            
        </div>
    );
};

export default Home;