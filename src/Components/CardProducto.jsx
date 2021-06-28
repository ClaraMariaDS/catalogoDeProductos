import React from 'react'
import './style/CardProducto.css'

function Card (props){
    return(
        <div className="CardProducto">
            <img src={props.imagen} alt="Foto SambiaTVconPuertas" className="imagenProducto"/>
            <p>{props.nombreProducto}</p>
            <p>{props.descripcionProducto}</p>
        </div>
    )
}
export default Card