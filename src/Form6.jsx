import React, { useState } from 'react';
import useInputField from './useInputField';
import useLocalStorage from './useLocalStorage';

const Form6 = () => {

const emailErrorChecking=(value)=>{
    // for validation you have to give the code above the delaration of useState
        if(!value.includes('@') || !value.includes('.com'))
        {
            return "provide a valid email";
        }
        else{
            return "";
        }
    }
    const passwordErrorChecking = (value) => {
    if (value.length < 6) {
        return 'Password must be at least 6 characters';
    }

    return '';
};

  const [email, emailOnChange, emailError]=useInputField(emailErrorChecking);
  const [password, passwordOnChange, passwordError]=useInputField(passwordErrorChecking);
  const [loginData, setLoginData]=useLocalStorage("Login Data",[]);

  const handleOnSubmit=(e)=>{
     e.preventDefault();
     if(emailError || passwordError)
     {
        return;
     }
     console.log(email, password);
     const loginDatas={
        email,
        password,
     };
    setLoginData([...loginData, loginDatas]);
     

  }

    
     return (
    
             <>
          <h1 className='font-bold ml-6'>Controlled Form using HOOK and Local storage</h1>
    <form onSubmit={handleOnSubmit}>
 <div className='my-2'>
         <label className="inline-block w-24">Email
        
     </label>
      <input className='border' type="email" name="email" defaultValue={email} onChange={emailOnChange} />
 </div>
 <p><small>{emailError}</small></p>
 <div>
         <label className="inline-block w-24">Password </label>
              <input className='border ' type="password" name="password" defaultValue={password} onChange={passwordOnChange} />
 
 </div>
    <p><small>{passwordError}</small></p>
     <input  className="border px-2 cursor-pointer mt-5 hover:bg-amber-300" type="submit" value="login" />
    </form>
    {/* <p><small>{error}</small></p> */}
    {/* <p><small className="text-red-600">{error}</small></p> */}
    
    <div>
      <table className='border  mt-5'>
  <thead>
    <tr className='w-full'>
      <th className='w-[60%]'>Email</th>
      <th className='w-[40%]'>Password</th>
    </tr>
  </thead>

  <tbody >
    {loginData.map((data, index) => (
      <tr key={index}>
        <td>{data.email}</td>
        <td>{data.password}</td>
      </tr>
    ))}
  </tbody>
</table>
    </div>
    </>
        
     );
 };

export default Form6;