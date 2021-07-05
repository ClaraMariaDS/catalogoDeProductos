import React from 'react'
import './style/CardProducto.css'
import "./style/Style.css"
import {Link } from "react-router-dom";
import { BrowserRouter, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';


function Card (props){
    return(
        <div className="CardProducto">
            <BrowserRouter>
                <Link to={props.link}>
                <div className="fondoFoto">
                    <img src={props.imagen} alt="Foto SambiaTVconPuertas" className="imagenProducto"/>
                </div>
                <p className="nombreMueble">{props.nombreProducto}</p>
                <p className="descrip">{props.descripcionProducto}</p>
                </Link>
            </BrowserRouter>
        </div>
    )
}
export default Card