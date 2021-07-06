import React from 'react'
import ModeloProducto from '../Components/ModeloProducto.js'
import { BrowserRouter, Switch, Route  } from "react-router-dom";


function desayunadorEstiloMarcopolo (){
    return(
        <div>
                <ModeloProducto
                tituloProducto="Desayunador estilo marcopolo"
                imagenProducto= {'/imagenes/desayunador.jpg'}
                madera="Eucaliptus "
                terminacion="Lustre mate o brillante. "
                caracteristicas="Mesa de arrime o desayunador "
                variantes="Estructura negra,  blanca o natural."
                tiempo=" 2 días"
                modelo="único"
                largo="0,4 m"
                profundidad="0,4 m"
                alto="0,65 m"
                valor="$7500"/>
        </div>
    )
}
export default desayunadorEstiloMarcopolo