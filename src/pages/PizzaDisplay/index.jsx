import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Navbar } from '../../components/NavBar';
import { Button } from '../../components/Button';
import { PizzaCard } from '../../components/PizzaCard';

import './styles.scss';



export function PizzaDisplay () {
  const navigate = useNavigate();

  function handleNavigate(){
    navigate('create');
  }

return (

  <section className="pizzas">
  <h1>Cardápio</h1>

  <div className="card-container">

      <PizzaCard PizzaName="4 Queijos" ingredients="Provolone, mussarela, parmesão e gorgonzola" price='69.99' 
      image="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/>

     <PizzaCard PizzaName="Manjericão" ingredients="Manjericão fresco, mussarela e tomate." price='69.99'  
      image="https://images.unsplash.com/photo-1581873372796-635b67ca2008?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170"/>

      <PizzaCard PizzaName="Peperoni" ingredients="Peperoni e mussarela." price='65.99' 
      image="https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176"/>

      <PizzaCard PizzaName="À Moda" ingredients="Azeitona, lombinho, pimentão, tomate cereja." price='65.99' 
      image="https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171"/>


  </div>


</section>  


);


}


