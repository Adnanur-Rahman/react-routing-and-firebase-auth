import React, { useRef } from 'react';

const Form4 = () => {
    const emailRef=useRef('');
    const passwordRef=useRef('');

     const handleOnSubmit=(e)=>{
    e.preventDefault();
const email=emailRef.current.value;
const password=passwordRef.current.value;

    console.log(email, password);
    
 }
    return (
        <>
         <h1 className='font-bold ml-6'>Uncontrolled Form using useRef()
         </h1>
   <form onSubmit={handleOnSubmit}>
<div className='my-2'>
        <label className="inline-block w-24">Email
       
    </label>
     <input className='border' type="email" name="email" ref={emailRef}  />
</div>
<div>
        <label className="inline-block w-24">Password </label>
             <input className='border ' type="password" name="password" ref={passwordRef} />

</div>
   
    <input  className="border px-2 cursor-pointer mt-5 hover:bg-amber-300" type="submit" value="login" />
   </form>
   </>
    );
};

export default Form4;