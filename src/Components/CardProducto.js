import React from 'react'
import './style/CardProducto.css'
import "./style/Style.css"
//import {Link } from "react-router-dom";


function Card (props){
    return(
        <div className="CardProducto">
            {/*<Link to="/Productos">*/}
            <div className="fondoFoto">
                <img src={props.imagen} alt="Foto SambiaTVconPuertas" className="imagenProducto"/>
            </div>
            <p className="nombreMueble">{props.nombreProducto}</p>
            <p className="descrip">{props.descripcionProducto}</p>
            {/*</Link>*/}
        </div>
    )
}
export default Card