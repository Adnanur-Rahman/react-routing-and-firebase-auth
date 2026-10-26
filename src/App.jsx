
import { use } from 'react';
import './App.css'
import { Link, NavLink, Outlet, useNavigation } from 'react-router'
import { AuthContext } from './AuthContext';

function App() {
    const navigation=useNavigation();

  const isLoading=Boolean(navigation.location);  
  const {user}=use(AuthContext);
  return (
    <>
  <div className='flex flex-col min-h-screen'> 
    <div>Hello routing</div>
   <button className='border border-amber-600 hover:bg-amber-200 cursor-pointer'><a href="#footer">GOTO Footer</a></button>
<header>
  <NavLink  to="/">Home</NavLink>
  {/* <NavLink className="mr-5" to="/">{({isPending})=>(<span>Home {isPending && <h1>Local Loadding . . . . . .</h1>   }</span>)}</NavLink> */}
  <NavLink  to="/post">post</NavLink>
  <NavLink to="/form">Form</NavLink>
  <NavLink to="/signInWith">signUpWith</NavLink>
  <NavLink to="/dashboard">Dashboard</NavLink>
 {
  user && <>
   <NavLink to="/order">order</NavLink>
  <NavLink to="/profile">profile</NavLink>
  </>
 }
  {/* <NavLink to="/form/form2">Form2</NavLink>
  <NavLink to="/form/form3">Form3</NavLink> */}
</header>
{
   isLoading && <h1>Loadding data. . . . . .</h1>
}
  <div className='flex-1'>
     <Outlet></Outlet>
  </div>

   <footer id="footer" className='border border-e-amber-800'>this is footer</footer></div>
    </>
  )
}

export default App
