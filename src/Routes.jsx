import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import NotFound from "./pages/NotFound/NotFound";
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Plans from './pages/Plans/Plans';
import FinancialCalculator from './components/FinancialCalculator/FinancialCalculator';

const Routes = () => {

    const router = createBrowserRouter([
    {
      path: "/",
      element: <App />, // Parent layout (was App in your code)
      children: [
        { 
            index: true, 
            element: <Home /> 
        },
        { 
            path: "about", 
            element: <About /> 
        },
        { 
            path: "contact", 
            element: <Contact /> 
        },
        { 
            path: "services", 
            element: <Services /> 
        },
        { 
            path: "plans", 
            element: <Plans /> 
        },
        { 
            path: "calculater", 
            element: <FinancialCalculator /> 
        },
        { 
            path: "*", 
            element: <NotFound /> 
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Routes