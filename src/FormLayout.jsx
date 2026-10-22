import React from 'react';
import { NavLink, Outlet } from 'react-router';

const FormLayout = () => {
    return (
        <div>
              <nav>
             <NavLink end to="/form">Form-1</NavLink>
  {/* <NavLink className="mr-5" to="/">{({isPending})=>(<span>Home {isPending && <h1>Local Loadding . . . . . .</h1>   }</span>)}</NavLink> */}
  <NavLink  to="/form/form2">Form-2</NavLink>
  <NavLink to="/form/form3">Form-3</NavLink>
  <NavLink to="/form/form4">Form-4</NavLink>
  <NavLink to="/form/form5">Form-5</NavLink>
  <NavLink to="/form/form6">Form-6</NavLink>
        </nav>
        <Outlet></Outlet>
        </div>
    );
};

export default FormLayout;