import React from 'react';
import { useLoaderData, useNavigate, useNavigation } from 'react-router';

const ProductDetails = () => {
    const product=useLoaderData();
  const {id, title, description,brand,availabilityStatus}=product;
  const navigate=useNavigate();

    return (
        <div className='container mx-auto my-3 border border-amber-300 rounded-xl px-2'>
            {/* {
                isLoading && <h1>Loadding data. . . . . .</h1>
            } */}
               <h1>Id: {id}</h1>
            <h1>Title: {title}</h1>
            <h1>Description: {description}</h1>
            <h1>Brand: {brand}</h1>
            <h1>Availability Status: {availabilityStatus}</h1>
           
           <button className='border border-amber-600 hover:bg-amber-300' onClick={()=>navigate(-1)}>Go back</button>
            {/* <Link to={navigate(-1)} >Go back</Link> */}
        </div>
    );
};

export default ProductDetails;