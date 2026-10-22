import React, { useState } from 'react';

const Form3 = () => {
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const [error, setError]=useState('');
 const handleOnSubmit=(e)=>{
    e.preventDefault();
    console.log(email, password);
    //after submetting it will show is there any error or not
// if(password.length<6){
//     setError('Provide a password which length will be at least 6 character');
// }else
//     {
//         setError('');
//     }
    
 }
   
   
   
    const emailOnChange=(e)=>{
setEmail(e.target.value);
    }
    const passwordOnChange=(e)=>{
       setPassword(e.target.value);
       if(password.length<6){
    setError('Provide a password which length will be at least 6 character');
    return;
}else
    {
        setError('');
        return;
    }
    
    }
    return (
   
            <>
         <h1 className='font-bold ml-6'>Controlled Form</h1>
   <form onSubmit={handleOnSubmit}>
<div className='my-2'>
        <label className="inline-block w-24">Email
       
    </label>
     <input className='border' type="email" name="email" defaultValue={email} onChange={emailOnChange} />
</div>
<div>
        <label className="inline-block w-24">Password </label>
             <input className='border ' type="password" name="password" defaultValue={password} onChange={passwordOnChange} />

</div>
   
    <input  className="border px-2 cursor-pointer mt-5 hover:bg-amber-300" type="submit" value="login" />
   </form>
   <p><small>{error}</small></p>
   {/* <p><small className="text-red-600">{error}</small></p> */}
   </>
       
    );
};

export default Form3;