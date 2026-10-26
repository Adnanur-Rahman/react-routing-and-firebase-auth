
import {
  // createUserWithEmailAndPassword,
  // GithubAuthProvider,
  // GoogleAuthProvider,
  sendEmailVerification,
  sendPasswordResetEmail,
  // signInWithEmailAndPassword,
  // signInWithPopup,
  // signOut,
} from "firebase/auth";

import React, { use, useRef, useState } from "react";
import { auth } from "./Firebase.config";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "./AuthContext";
import { useLocation, useNavigate } from "react-router";

// const googleProvider = new GoogleAuthProvider();
// const githubProvider = new GithubAuthProvider();

const SignInWith = () => {
  const {  user, createUser, signInUser, signOutUser, signInwithGoogle, signInwithGithub}=use(AuthContext);

  const location=useLocation();
  const navigate=useNavigate();
  // console.log(users, createUser, signInUser);

  
    // const [user, setUser]=useState(null);
    const [error, setError]=useState('');
    const [showPassword, setShowPassword]=useState(false);
const [signIn, setSignIn]=useState(false)
    const emailRef=useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
const email=e.target.email.value;
const password=e.target.password.value;
    // console.log(email, password);
    const lowercaseRegex = /[a-z]/;
const uppercaseRegex = /[A-Z]/;
const specialRegex = /[^A-Za-z0-9]/;
setError('');
// if(!lowercaseRegex.test(password)){
//   setError('Password must contain an lowercase letter.')
//   return;
// }
// if(!uppercaseRegex.test(password)){
//   setError('Password must contain an uppercase letter.')
//   return;
// }
// if(!specialRegex.test(password)){
//   setError('Password must contain an special letter.')
//   return;
// }
if(signIn)
{
  signInUser(email, password)
.then(result=>{
  // setUser(result.user);
  e.target.reset();
  console.log(result.user);
  navigate(location.state || "/");
}).catch(error=>{console.log(error);
})
//  signInWithEmailAndPassword(auth, email, password)
// .then(result=>{
//   setUser(result.user);
//   e.target.reset();
//   console.log(result.user);
// }).catch(error=>{console.log(error);
// })
}else{
  if(!lowercaseRegex.test(password)){
  setError('Password must contain an lowercase letter.')
  return;
}
if(!uppercaseRegex.test(password)){
  setError('Password must contain an uppercase letter.')
  return;
}
if(!specialRegex.test(password)){
  setError('Password must contain an special letter.')
  return;
}
   createUser(email, password)
    .then(result=>{
      // setUser(result.user);
      console.log(result.user);
      
      e.target.reset();
        navigate(location.state || "/");
      //email verification
      sendEmailVerification(result.user)
      .then(()=>{alert("check your email for verification")})
    }
    ).catch(error=>{console.log(error.message);
      setError(error.message);
    }
    )
    //   createUserWithEmailAndPassword(auth, email, password)
    // .then(result=>{setUser(result.user);
    //   console.log(result.user);
      
    //   e.target.reset();
    //   //email verification
    //   sendEmailVerification(result.user)
    //   .then(()=>{alert("check your email for verification")})
    // }
    // ).catch(error=>{console.log(error.message);
    //   setError(error.message);
    // }
    // )
}
   

  };

  const handleGoogle = () => {
   signInwithGoogle()
      .then((result) => {
        console.log(result.user);
         navigate(location.state || "/");
        //  setUser(result.user);
      })
      .catch((error) => {
        console.log(error.code, error.message);
      });
    // signInWithPopup(auth, googleProvider)
    //   .then((result) => {
    //     console.log(result.user);
    //      setUser(result.user);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  const handleGithub = () => {
    signInwithGithub()
      .then((result) => {
        console.log(result.user);
          navigate(location.state || "/");
        // setUser(result.user)
      })
      .catch((error) => {
        console.log(error);
      });
    // signInWithPopup(auth, githubProvider)
    //   .then((result) => {
    //     console.log(result.user);
    //     setUser(result.user)
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };
  const handleSignOut=()=>{
signOutUser()
.then(()=>{
  
}).catch(error=>{console.log(error);}
)
}
const handleEye=(e)=>{
e.preventDefault();
setShowPassword(!showPassword);
}
const handleForgotPassword=()=>{
const email=emailRef.current.value;
sendPasswordResetEmail(auth, email)
.then(()=>{alert("check your email for reset password")})
.catch(error=>{console.log(error);
})
}
// for sign in-->forgot password, this things
// signInWithEmailAndPassword(auth, email, password)
// .then(result=>{
//   setUser(result.user);
//   console.log(result.user);
// }).catch(error=>{console.log(error);
// })


  return (
    <div>
<button onClick={()=>{setSignIn(false)}} className={`${!signIn && "bg-yellow-400" } border mr-5`}>      
       Sign Up
      </button>
<button onClick={()=>{setSignIn(true)}} className={`${signIn && "bg-yellow-400" } border`}>  
       Sign In</button>

      <form onSubmit={handleSubmit}>
        <div className="my-2">
          <label className="inline-block w-24">
            Email
          </label>

          <input
            className="border"
            type="email"
            ref={emailRef}
            name="email"
          />
        </div>
        
<div className="">
  <label className="inline-block w-24">
    Password
  </label>

  <div className="relative inline-block">
    <input
      className="border"
      type={showPassword ? "text" : "password"}
      name="password"
    />

    <button
      type="button"
      onClick={handleEye}
      className="absolute right-0 top-0 h-full flex items-center justify-center px-2 "
    >
      {showPassword ? <FaEyeSlash /> : <FaEye />}
    </button>
  </div>
</div>

        <input
          className="border px-2 cursor-pointer mt-5 mr-5 hover:bg-amber-300"
          type="submit"
          value={signIn? "Sign In":"Submit"}
        />
       {
        signIn && <button onClick={handleForgotPassword} className="underline text-blue-600">Forgot Password</button>
       }
         <p className="text-red-500">{error}</p>
        
      </form>

     {
        user ? <button className="border mt-5" onClick={handleSignOut}>Sign Out</button> : <div className="mt-5"><button
        className="border mr-5"
        onClick={handleGoogle}
      >
        Sign in with Google
      </button>

      <button
        className="border mr-5"
        onClick={handleGithub}
      >
        Sign in with GitHub
      </button></div> 
     }
      
<div>
     {
        user && <div className="flex flex-col items-center justify-center mt-5">    <img
  className=''
        src={user.photoURL}
  alt="Google Profile"
  className="w-24 h-24 rounded-full object-cover"
 
/> <h2>Name: {user.displayName}</h2>
      <h3>Email: {user.email}</h3>
      
</div>
     }
</div>
    </div>
  );
};

export default SignInWith;