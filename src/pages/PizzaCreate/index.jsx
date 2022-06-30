import React from 'react';

import { useNavigate } from 'react-router-dom';
import './styles.scss';

import { Input } from "../../components/Form/Input";
import { ButtonFormRegister } from "../../components/Form/ButtonForm/index.jsx";


export function PizzaCreate () {
  const navigate = useNavigate();

  function handleNavigate(){
    navigate('create');
  }
     
    return (

<section className="pizzas">
<h1>Cadastrar Pizza</h1>


<form>
    <div className="grid-form">

 
    <Input label="Nome da pizza" placeholder="Digite o nome da pizza" />
    <Input label="Descrição" placeholder="Digite os ingredientes da pizza" />
    <Input label="Imagem" placeholder="Digite o URL da imagem" />
    <Input label="Preço" placeholder="Digite o valor da pizza" />

    </div>

    <ButtonFormRegister/>

   </form>


</section>

)


    
}

