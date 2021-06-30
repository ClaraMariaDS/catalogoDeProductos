import React from 'react'


function ModeloProducto (props){
    return(
        <div>
            <h1>{props.tituloProducto}</h1>
            <img src={props.imagenProducto} alt="Imagen de producto" />
            <ul>
                <li><p>Madera:</p>{props.madera}</li>
                <li><p>Terminación:</p>{props.terminacion}</li>
                <li><p>Características:</p>{props.caracteristicas}</li>
                <li><p>Variantes:</p>{props.variantes}</li>
                <li><p>Tiempo de Realización:</p>{props.tiempo}</li>
            </ul>
            <table>
                <tr>
                    <th rowspan='1'>Modelo </th>
                    <th colspan='3'>Medidas</th>
                    <th rowspan='1'>Valor</th>
                </tr>
                <tr>
                    <th>Largo</th>
                    <th>Profundidad</th>
                    <th>Alto</th>
                </tr>
                <tr>
                    <th>{props.modelo}</th>
                    <th>{props.largo}</th>
                    <th>{props.profundidad}</th>
                    <th>{props.alto}</th>
                    <th>{props.valor}</th>                   
                </tr>
            </table>
        </div>
    )
}
export default ModeloProducto