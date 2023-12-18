import React,{lazy,Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AboutUs from './components/aboutUs';
//import ContactUs from './components/contactUs';
import Error from './components/Error';
import Restaurants from './components/restaurants';
import Menu from './components/menu';

const ContactUs = lazy(()=>import('./components/contactUs'))
const  appRoute =  createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Restaurants/> 
      },
      {
        path:'about',
        element:<AboutUs/>
      },
      {
        path:'contact',
        element:<Suspense fallback="I am lazy loading"><ContactUs/></Suspense>
      },
      {
        path:'restaurant/:resId',
        element:<Menu/>
      }
    ],
    errorElement:<Error/>
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
/*root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/


root.render(<RouterProvider router={appRoute}></RouterProvider>)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
