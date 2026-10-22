import React from 'react';
import { Link } from 'react-router';

const Products = ({produc}) => {

    const {id, title, description}=produc;
    
    return (
        <div className='rounded-xl p-2 border border-red-600 mb-2'>
            <h1>{id}</h1>
            <h1>{title}</h1>
            <Link to={`/post/${id}`} className='rounded my-2 border border-blue-700 hover:bg-amber-300'>Show details</Link>
          
        </div>
    );
};

export default Products;