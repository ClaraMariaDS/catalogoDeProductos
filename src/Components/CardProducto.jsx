import React, {Component} from 'react'
import './style/CardProducto.css'
import "./style/Style.css"

import { BrowserRouter, Route, Switch, Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Router } from 'react-router-dom';


export default class Card extends Component{
    render(){
        const {imagen, nombreProducto, descripcionProducto}= this.props
    return(
        <div className="CardProducto">
                <div className="fondoFoto">
                    <img src={imagen} alt="Foto SambiaTVconPuertas" className="imagenProducto"/>
                </div>
                <p className="nombreMueble">{nombreProducto}</p>
                <p className="descrip">{descripcionProducto}</p>
        </div>
    )
}
}