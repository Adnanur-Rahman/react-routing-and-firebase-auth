import React from 'react';

const Form2 = () => {
     const handleAction= (formData)=>{

console.log(formData.get("email"));
console.log(formData.get("password"));

    }
    return (
      <>
         <h1 className='font-bold ml-6'>Simple form with Action</h1>
   <form action={handleAction}>
<div className='my-2'>
        <label className="inline-block w-24">Email
       
    </label>
     <input className='border' type="email" name="email" />
</div>
<div>
        <label className="inline-block w-24">Password </label>
             <input className='border ' type="password" name="password" />

</div>
   
    <input  className="border px-2 cursor-pointer mt-5 hover:bg-amber-300" type="submit" value="login" />
   </form>
   </>
    );
};

export default Form2;