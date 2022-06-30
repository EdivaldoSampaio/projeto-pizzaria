
import { useNavigate } from 'react-router-dom';
import './styles.scss';

export function Button(onClick, handleNavigate) {
    return (

        <div className="button-navbar">
            <button onClick={handleNavigate}>Ver pizza</button> 
            <button onclick={handleNavigate}>Cadastrar Pizza</button> 
         </div> 

    )


} 
