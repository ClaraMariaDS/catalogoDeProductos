import React from 'react'
import Card from './CardProducto.js'
import "./style/Style.css"
//import { BrowserRouter as Router } from "react-router-dom";

function Categorias (props){
    return(
        <div>
        <div className="Categoria">
            <h1 className="titulosCategorias">Estanterías y Bibliotecas</h1>
            <Card 
            imagen= {"/imagenes/sambiaTv.jpg"}
            nombreProducto="Sambia TV"
            descripcionProducto={<>Estantería rectangular para tv <br/>con estructura símil hierro desarmable.</>}/>
            <Card 
            imagen= {"/imagenes/sambiaTVconPuertas.png"}
            nombreProducto="Sambia TV con Puertas"
            descripcionProducto={<>Estantería rectangular para tv <br/>con estructura símil hierro <br/>desarmable con puertas de apertura<br/> vertical sin tiradores.</>}/>
            <Card 
            imagen= {"/imagenes/sambiaNaturalConPuertas.jpg"}
            nombreProducto="Sambia Natural con Puertas"
            descripcionProducto={<>Estantería rectangular con<br/> puertas de apertura vertical.</>}/>
            <Card 
            imagen= {"/imagenes/sambia-chico-con-puertas.png"}
            nombreProducto="Sambia chico con Puertas"
            descripcionProducto={<>Estantería rectangular con<br/> puerta de apertura vertical.</>}/>
            <Card 
            imagen= {"/imagenes/sambiaColor.jpg"}
            nombreProducto="Sambia color con Puertas"
            descripcionProducto={<>Estantería rectangular con <br/> puertas de apertura vertical.</>}/>
            <Card 
            imagen= {"/imagenes/estanteriaEstiloBuñuelo.jpg"}
            nombreProducto="Estanteria estilo buñuelo"
            descripcionProducto={<>Estantería rectangular de <br/> módulos individuales </>}/>
            <Card 
            imagen= {"/imagenes/marsupial.jpg"}
            nombreProducto="Biblioteca / Estantería estilo marsupial"
            descripcionProducto={<>Estantería rectangular</>}/>
            <Card 
            imagen= {"/imagenes/marsupial.jpg"}
            nombreProducto="Biblioteca / Estantería estilo marsupial"
            descripcionProducto={<>Biblioteca rectangular</>}/>
            <Card 
            imagen= {"/imagenes/encastre.jpg"}
            nombreProducto="Estantería de encastre"
            descripcionProducto={<>Biblioteca rectangular de<br/> geometría a elección.</>}/>
        </div>
        <div className="Categoria">
            <h1 className="titulosCategorias">Dormitorio</h1>
            <Card 
            imagen= {"/imagenes"}
            nombreProducto="Mesa de luz estilo Calafate "
            descripcionProducto="Mesa de luz de un solo cajón"/>
            <Card 
            imagen= {"/imagenes"}
            nombreProducto="Mesa de luz estilo Calafate "
            descripcionProducto="Mesa de luz de un solo cajón"/>
            <Card 
            imagen= {"/imagenes"}
            nombreProducto="Mesa de luz estilo Calafate "
            descripcionProducto="Mesa de luz de un solo cajón"/>
        </div>
        <div className="Categoria">
            <h1 className="titulosCategorias">Mesas de Trabajo</h1>
            <Card 
            imagen= {"/imagenes"}
            nombreProducto="Banco de trabajo Estilo Fábrica "
            descripcionProducto="Mesa de trabajo con estante."/>
            <Card 
            imagen= {"/imagenes"}
            nombreProducto="Banco de trabajo Estilo Fábrica "
            descripcionProducto="Mesa de trabajo con estante."/>
            <Card 
            imagen= {"/imagenes"}
            nombreProducto="Banco de trabajo Estilo Fábrica "
            descripcionProducto="Mesa de trabajo con estante."/>
        </div>
        <div className="Categoria">
            <h1 className="titulosCategorias">Mesas Ratonas</h1>
            <Card 
            imagen= {"/imagenes"}
            nombreProducto="Mesa Ratona"
            descripcionProducto="Mesa ratona rectangular."/>
            <Card 
            imagen= {"/imagenes"}
            nombreProducto="Mesa Ratona"
            descripcionProducto="Mesa ratona rectangular."/>
            <Card 
            imagen= {"/imagenes"}
            nombreProducto="Mesa Ratona"
            descripcionProducto="Mesa ratona rectangular."/>
            <Card 
            imagen= {"/imagenes"}
            nombreProducto="Mesa Ratona"
            descripcionProducto="Mesa ratona rectangular."/>
        </div>
        <div className="Categoria">
            <h1 className="titulosCategorias">Escritorios</h1>
            <Card 
            imagen= {"/imagenes"}
            nombreProducto="Escritorio estilo Beirut "
            descripcionProducto="Escritorio simple rectangular"/>
            <Card 
            imagen= {"/imagenes"}
            nombreProducto="Escritorio estilo Beirut "
            descripcionProducto="Escritorio simple rectangular"/>
            <Card 
            imagen= {"/imagenes"}
            nombreProducto="Escritorio estilo Beirut "
            descripcionProducto="Escritorio simple rectangular"/>
        </div>
        <div className="Categoria">
            <h1 className="titulosCategorias">Maceteros</h1>
            <Card 
            imagen= {"/imagenes"}
            nombreProducto="Macetero estilo columbia "
            descripcionProducto="macetero natural colgante."/>
            <Card 
            imagen= {"/imagenes"}
            nombreProducto="Macetero estilo columbia "
            descripcionProducto="macetero natural colgante."/>
            <Card 
            imagen= {"/imagenes"}
            nombreProducto="Macetero estilo columbia "
            descripcionProducto="macetero natural colgante."/>
        </div>
        <div className="Categoria">
            <h1 className="titulosCategorias">Mesas</h1>
            <Card 
            imagen= {"/imagenes"}
            nombreProducto="Miracles"
            descripcionProducto={<>mesa rectangular con Patas de madera <br/>maciza símil hierro, tapa de 30 mm de espesor.</>}/>
            <Card 
            imagen= {"/imagenes"}
            nombreProducto="Miracles"
            descripcionProducto={<>mesa rectangular con Patas de madera <br/>maciza símil hierro, tapa de 30 mm de espesor.</>}/>
            <Card 
            imagen= {"/imagenes"}
            nombreProducto="Miracles"
            descripcionProducto={<>mesa rectangular con Patas de madera <br/>maciza símil hierro, tapa de 30 mm de espesor.</>}/>
            <Card 
            imagen= {"/imagenes"}
            nombreProducto="Miracles"
            descripcionProducto={<>mesa rectangular con Patas de madera <br/>maciza símil hierro, tapa de 30 mm de espesor.</>}/>
        </div>
        <div className="Categoria">
            <h1 className="titulosCategorias">Racks</h1>
            <Card 
            imagen= {"/imagenes"}
            nombreProducto="Castaña"
            descripcionProducto={<>Rack rectangular con Patas de <br/>madera maciza símil hierro, <br/>Con cajones sin tiradores. </>}/>
            <Card 
            imagen= {"/imagenes"}
            nombreProducto="Castaña"
            descripcionProducto={<>Rack rectangular con Patas de <br/>madera maciza símil hierro, <br/>Con cajones sin tiradores. </>}/>
            <Card 
            imagen= {"/imagenes"}
            nombreProducto="Castaña"
            descripcionProducto={<>Rack rectangular con Patas de <br/>madera maciza símil hierro, <br/>Con cajones sin tiradores. </>}/>
            <Card 
            imagen= {"/imagenes"}
            nombreProducto="Castaña"
            descripcionProducto={<>Rack rectangular con Patas de <br/>madera maciza símil hierro, <br/>Con cajones sin tiradores. </>}/>
        </div>
        <div className="Categoria">
            <h1 className="titulosCategorias">Recibidores</h1>
            <Card 
            imagen= {"/imagenes"}
            nombreProducto="Recibidor estilo índigo"
            descripcionProducto="Recibidor rustico de apariencia industrial."/>
            <Card 
            imagen= {"/imagenes"}
            nombreProducto="Recibidor estilo índigo"
            descripcionProducto="Recibidor rustico de apariencia industrial."/>
            <Card 
            imagen= {"/imagenes"}
            nombreProducto="Recibidor estilo índigo"
            descripcionProducto="Recibidor rustico de apariencia industrial."/>
        </div>
        <div className="Categoria">
            <h1 className="titulosCategorias">Varios</h1>
            <Card 
            imagen= {"/imagenes"}
            nombreProducto="Desayunador estilo marcopolo "
            descripcionProducto="Mesa de arrime o desayunador "/>
            <Card 
            imagen= {"/imagenes"}
            nombreProducto="Desayunador estilo marcopolo "
            descripcionProducto="Mesa de arrime o desayunador "/>
        </div>
    </div>
    )
}
export default Categorias