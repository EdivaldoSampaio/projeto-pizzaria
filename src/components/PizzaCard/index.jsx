import React from "react";
import './styles.scss';

export function PizzaCard({ PizzaName, ingredients, price, image }) {
    return (
        <div className="card">
        <img src={image}
        alt=""
        />

            <div className="labels">
                <div>
                <span>{PizzaName}</span>
                    <p>{ingredients}</p><br>
                    </br>
                    <h3>R$ {price}</h3>
                </div>
            </div>
         </div>

    );

}