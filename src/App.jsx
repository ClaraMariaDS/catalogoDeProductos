import React, {Component} from 'react';
import Nav from './Components/Nav.jsx'
import Presentacion from './Components/Presentacion.jsx'
import Categorias from './Components/CategoriaProductos'

class App extends Component  {

render(){
    return (
        <div>
            <Nav/>
            <Presentacion/>
            <Categorias/>
        </div>
    )
}
}
export default App;