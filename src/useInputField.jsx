import React, { useState } from 'react';

const useInputField = (validate) => {

    const [field, setField]=useState('');
    const [error, setError]=useState('');
    const handleOnChange=e =>{
        setField(e.target.value);
        const value=e.target.value;
const errorMessage=validate(value)
setError(errorMessage);
    }
    return [field, handleOnChange, error]
 
};

export default useInputField;