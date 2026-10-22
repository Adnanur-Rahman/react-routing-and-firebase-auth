import React from 'react';
import { useLoaderData, useNavigation } from 'react-router';
import Products from './Products';

const Post = () => {
    const product=useLoaderData();
    const {products}=product;
//         const navigation=useNavigation();

//   const isLoading=Boolean(navigation.location); 
  
    
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-1'>
            {/* {
                 isLoading && <h1>Loadding data. . . . . .</h1>
            } */}
        
             {
                products.map(produc=><Products key={produc.id} produc={produc}></Products>)
             }
        </div>
    );
};

export default Post;