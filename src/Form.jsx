import React from 'react';
import { NavLink, Outlet } from 'react-router';

const Form = () => {

    const handleSubmit= e =>{
e.preventDefault();
console.log(e.target.name.value);
console.log(e.target.password.value);

    }


    return (
        <>
       <h1 className='font-bold ml-6'>Simple form with onSubmit</h1>
   <form onSubmit={handleSubmit}>
<div className='my-2'>
        <label className="inline-block w-24">Username
       
    </label>
     <input className='border' type="text" name="name" />
</div>
<div>
        <label className="inline-block w-24">Password </label>
             <input className='border ' type="password" name="password" />

</div>
   
    <input  className="border px-2 cursor-pointer mt-5 hover:bg-amber-300" type="submit" value="submit" />
   </form>  
           

   </>
    );
};

export default Form;