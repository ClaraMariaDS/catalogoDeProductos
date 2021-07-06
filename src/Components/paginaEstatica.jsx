import React, {Component} from 'react'
import './style/pages.css'

export default class paginaEstatica extends Component{
    render(){
    return(
        <div className='main' >
            <h1>Desayunador estilo marcopolo</h1>
            <div className='mainDiv'>
            <img className='imageBig' src='/imagenes/desayunador.jpg' alt="Imagen de producto" />
            <ul>
                <li><p>Madera:</p>Eucaliptus</li>
                <li><p>Terminación:</p>Lustre mate o brillante.</li>
                <li><p>Características:</p>Mesa de arrime o desayunador</li>
                <li><p>Variantes:</p>Estructura negra,  blanca o natural.</li>
                <li><p>Tiempo de Realización:</p> 2 días</li>
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
                    <th>único</th>
                    <th>0,4 m</th>
                    <th>0,4 m</th>
                    <th>0,65 m</th>
                    <th>$7500</th>                   
                </tr>
            </table>
            </div>
        </div>
    )
}
}

