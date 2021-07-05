import React from 'react'


export default class ModeloProducto extends React.Component {
    render () {
    return(
        <div>
            <h1>{this.props.match.tituloProducto}</h1>
            <img src={this.props.imagenProducto} alt="Imagen de producto" />
            <ul>
                <li><p>Madera:</p>{this.props.madera}</li>
                <li><p>Terminación:</p>{this.props.terminacion}</li>
                <li><p>Características:</p>{this.props.caracteristicas}</li>
                <li><p>Variantes:</p>{this.props.variantes}</li>
                <li><p>Tiempo de Realización:</p>{this.props.tiempo}</li>
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
                    <th>{this.props.modelo}</th>
                    <th>{this.props.largo}</th>
                    <th>{this.props.profundidad}</th>
                    <th>{this.props.alto}</th>
                    <th>{this.props.valor}</th>                   
                </tr>
            </table>
        </div>
        )
    }
}
