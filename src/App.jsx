import React from 'react';
import Nav from './Components/Nav.js'
import Presentacion from './Components/Presentacion.js'
import Categorias from './Components/CategoriaProductos'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export function App () {
    return (
        <Router>
        <div>
            <Nav/>
            <Presentacion/>
            <Categorias/>
        </div>
        </Router>
    )
}
export default App;