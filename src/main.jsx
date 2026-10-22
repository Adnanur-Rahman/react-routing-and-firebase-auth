import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router'
import Home from './Home.jsx'
import Post from './Post.jsx'
import ProductDetails from './ProductDetails.jsx'
import Form from './Form.jsx'
import Form2 from './Form2.jsx'
import Form3 from './Form3.jsx'
import FormLayout from './FormLayout.jsx'
import Form4 from './Form4.jsx'
import Form5 from './Form5.jsx'
import Form6 from './Form6.jsx'
import SignInWith from './SignInWith.jsx'

const router=createBrowserRouter([
  {
    path:"/",
    Component: App,
        HydrateFallback: () => {
      return <h1>Loading initial data...</h1>;
    },
    children:[
      {
       index: true,
       loader:()=>fetch('https://dummyjson.com/products'),
        Component: Home
      },
      {
        path:"/post",
        loader:()=>fetch('https://dummyjson.com/products'),
        Component:Post
      },
      {
        path:"/post/:PostId",
        loader:({params})=>fetch(`https://dummyjson.com/products/${params.PostId}`),
        Component:ProductDetails

      },
      {
        path:"/form",
        Component: FormLayout,
        children:[
          {
            index: true,
            Component: Form,
          },
          {
           path:"form2",
            Component: Form2,
          },
       
          {
           path:"form3",
            Component :Form3
          },
          {
           path:"form4",
            Component :Form4
          },
          {
           path:"form5",
            Component :Form5
          },
          {
           path:"form6",
            Component :Form6
          },
      
        ]
      },
      {
path:"/signInWith",
Component: SignInWith
      },
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
