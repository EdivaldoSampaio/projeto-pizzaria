import { Routes, Route } from 'react-router-dom';

import { PizzaDisplay} from '../pages/PizzaDisplay';

import { PizzaCreate } from '../pages/PizzaCreate';

import { PizzaUpdate } from '../pages/PizzaUpdate';

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<PizzaDisplay />}/>
            <Route path="/create" element={<PizzaCreate />}/>
            <Route path="/update" element={<PizzaUpdate />}/>
        </Routes>
    );
}