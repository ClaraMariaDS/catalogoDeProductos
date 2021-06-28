import React from 'react';
import Nav from './Components/Nav.jsx'
import Presentacion from './Components/Presentacion.jsx'
import Categorias from './Components/CategoriaProductos'
export function App () {
    return (
        <div>
            <Nav/>
            <Presentacion/>
            <Categorias/>
        </div>
    )
}
export default App;