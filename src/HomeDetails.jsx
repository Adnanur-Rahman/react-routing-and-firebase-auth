import React from 'react';

const HomeDetails = ({pro}) => {
const {id, title, price}=pro;
    
    return (
        <div>
            <h1>{id}</h1>
            <h1>{title}</h1>
            <h1>{price}</h1>

        </div>
    );
};

export default HomeDetails;