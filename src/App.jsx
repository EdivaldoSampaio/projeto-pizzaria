import React from "react";

import { Navbar } from "./components/NavBar";

import './styles/global.scss';
import './styles/pizzas.scss';

import { Router } from './routes';
//import { PizzaCard } from "./components/PizzaCard";

export function App() {
    return (
        <div className="app">
            <Navbar />
            <Router />
   
        </div>
    
        
    );
      
}