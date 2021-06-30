import React from 'react'
import './style/Presentacion.css'
import banner from "../Images/presupuestos sin cargo.png"

function Presentacion (){
    return(
        <div className="Presentacion">
           {/* <h3>Muebles de diseño a medida</h3>
            <h3>Todos los medios de pago</h3>
            <h3>Presupuesto sin cargo</h3>
            <h3>Envíos a todo el país</h3>
           <h2>Vos lo pensas, nosotros lo hacemos</h2>*/}
           <img className="banner" src={banner} alt="banner"  />
        </div>
    )
}
export default Presentacion