import React,{Component} from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom/cjs/react-router-dom.min'
import Card from './CardProducto.jsx'
import "./style/Style.css"
import paginaEstatica from './paginaEstatica'



class Categorias extends Component{
    render(){
    return(
        <div>
            <Router>
        <div className="Categoria">
            <h1 className="titulosCategorias">Estanterías y Bibliotecas</h1>
            <Link to='/desayunadorEstiloMarcopolo' component={paginaEstatica}>
            <Card 
            imagen= {"/imagenes/sambiaTv.jpg"}
            nombreProducto="Sambia TV"
            descripcionProducto={<>Estantería rectangular para tv <br/>con estructura símil hierro desarmable.</>}
            />  
            </Link>
            <Link to='/desayunadorEstiloMarcopolo'>
            <Card 
            imagen= {"/imagenes/sambiaTVconPuertas.png"}
            nombreProducto="Sambia TV con Puertas"
            descripcionProducto={<>Estantería rectangular para tv <br/>con estructura símil hierro <br/>desarmable con puertas de apertura<br/> vertical sin tiradores.</>}/>
            </Link>
            
            <Card 
            link= "/desayunadorEstiloMarcopolo"
            imagen= {"/imagenes/sambiaNaturalConPuertas.jpg"}
            nombreProducto="Sambia Natural con Puertas"
            descripcionProducto={<>Estantería rectangular con<br/> puertas de apertura vertical.</>}/>
            <Card 
            link= "/desayunadorEstiloMarcopolo"
            imagen= {"/imagenes/sambia-chico-con-puertas.png"}
            nombreProducto="Sambia chico con Puertas"
            descripcionProducto={<>Estantería rectangular con<br/> puerta de apertura vertical.</>}/>
            <Card 
            link= "/desayunadorEstiloMarcopolo"
            imagen= {"/imagenes/sambiaColor.jpg"}
            nombreProducto="Sambia color con Puertas"
            descripcionProducto={<>Estantería rectangular con <br/> puertas de apertura vertical.</>}/>
            <Card 
            link= "/desayunadorEstiloMarcopolo"
            imagen= {"/imagenes/estanteriaEstiloBuñuelo.jpg"}
            nombreProducto="Estanteria estilo buñuelo"
            descripcionProducto={<>Estantería rectangular de <br/> módulos individuales </>}/>
            <Card 
            link= "/desayunadorEstiloMarcopolo"
            imagen= {"/imagenes/marsupial.jpg"}
            nombreProducto="Biblioteca / Estantería estilo marsupial"
            descripcionProducto={<>Estantería rectangular</>}/>
            <Card 
            link= "/desayunadorEstiloMarcopolo"
            imagen= {"/imagenes/marsupial.jpg"}
            nombreProducto="Biblioteca / Estantería estilo marsupial"
            descripcionProducto={<>Biblioteca rectangular</>}/>
            <Card 
            link= "/desayunadorEstiloMarcopolo"
            imagen= {"/imagenes/encastre.jpg"}
            nombreProducto="Estantería de encastre"
            descripcionProducto={<>Biblioteca rectangular de<br/> geometría a elección.</>}/>
        </div>
        <div className="Categoria">
            <h1 className="titulosCategorias">Dormitorio</h1>
            <Card 
            link= "/desayunadorEstiloMarcopolo"
            imagen= {"/imagenes"}
            nombreProducto="Mesa de luz estilo Calafate "
            descripcionProducto="Mesa de luz de un solo cajón"/>
            <Card 
            link= "/desayunadorEstiloMarcopolo"
            imagen= {"/imagenes"}
            nombreProducto="Mesa de luz estilo Calafate "
            descripcionProducto="Mesa de luz de un solo cajón"/>
            <Card 
            link= "/desayunadorEstiloMarcopolo"
            imagen= {"/imagenes"}
            nombreProducto="Mesa de luz estilo Calafate "
            descripcionProducto="Mesa de luz de un solo cajón"/>
        </div>
        <div className="Categoria">
            <h1 className="titulosCategorias">Mesas de Trabajo</h1>
            <Card 
            link= "/desayunadorEstiloMarcopolo"
            imagen= {"/imagenes"}
            nombreProducto="Banco de trabajo Estilo Fábrica "
            descripcionProducto="Mesa de trabajo con estante."/>
            <Card 
            link= "/desayunadorEstiloMarcopolo"
            imagen= {"/imagenes"}
            nombreProducto="Banco de trabajo Estilo Fábrica "
            descripcionProducto="Mesa de trabajo con estante."/>
            <Card 
            link= "/desayunadorEstiloMarcopolo"
            imagen= {"/imagenes"}
            nombreProducto="Banco de trabajo Estilo Fábrica "
            descripcionProducto="Mesa de trabajo con estante."/>
        </div>
        <div className="Categoria">
            <h1 className="titulosCategorias">Mesas Ratonas</h1>
            <Card 
            link= "/desayunadorEstiloMarcopolo"
            imagen= {"/imagenes"}
            nombreProducto="Mesa Ratona"
            descripcionProducto="Mesa ratona rectangular."/>
            <Card 
            link= "/desayunadorEstiloMarcopolo"
            imagen= {"/imagenes"}
            nombreProducto="Mesa Ratona"
            descripcionProducto="Mesa ratona rectangular."/>
            <Card 
            link= "/desayunadorEstiloMarcopolo"
            imagen= {"/imagenes"}
            nombreProducto="Mesa Ratona"
            descripcionProducto="Mesa ratona rectangular."/>
            <Card 
            link= "/desayunadorEstiloMarcopolo"
            imagen= {"/imagenes"}
            nombreProducto="Mesa Ratona"
            descripcionProducto="Mesa ratona rectangular."/>
        </div>
        <div className="Categoria">
            <h1 className="titulosCategorias">Escritorios</h1>
            <Card 
            link= "/desayunadorEstiloMarcopolo"
            imagen= {"/imagenes"}
            nombreProducto="Escritorio estilo Beirut "
            descripcionProducto="Escritorio simple rectangular"/>
            <Card 
            link= "/desayunadorEstiloMarcopolo"
            imagen= {"/imagenes"}
            nombreProducto="Escritorio estilo Beirut "
            descripcionProducto="Escritorio simple rectangular"/>
            <Card 
            link= "/desayunadorEstiloMarcopolo"
            imagen= {"/imagenes"}
            nombreProducto="Escritorio estilo Beirut "
            descripcionProducto="Escritorio simple rectangular"/>
        </div>
        <div className="Categoria">
            <h1 className="titulosCategorias">Maceteros</h1>
            <Card 
            link= "/desayunadorEstiloMarcopolo"
            imagen= {"/imagenes"}
            nombreProducto="Macetero estilo columbia "
            descripcionProducto="macetero natural colgante."/>
            <Card 
            link= "/desayunadorEstiloMarcopolo"
            imagen= {"/imagenes"}
            nombreProducto="Macetero estilo columbia "
            descripcionProducto="macetero natural colgante."/>
            <Card 
            link= "/desayunadorEstiloMarcopolo"
            imagen= {"/imagenes"}
            nombreProducto="Macetero estilo columbia "
            descripcionProducto="macetero natural colgante."/>
        </div>
        <div className="Categoria">
            <h1 className="titulosCategorias">Mesas</h1>
            <Card 
            link= "/desayunadorEstiloMarcopolo"
            imagen= {"/imagenes"}
            nombreProducto="Miracles"
            descripcionProducto={<>mesa rectangular con Patas de madera <br/>maciza símil hierro, tapa de 30 mm de espesor.</>}/>
            <Card 
            link= "/desayunadorEstiloMarcopolo"
            imagen= {"/imagenes"}
            nombreProducto="Miracles"
            descripcionProducto={<>mesa rectangular con Patas de madera <br/>maciza símil hierro, tapa de 30 mm de espesor.</>}/>
            <Card 
            link= "/desayunadorEstiloMarcopolo"
            imagen= {"/imagenes"}
            nombreProducto="Miracles"
            descripcionProducto={<>mesa rectangular con Patas de madera <br/>maciza símil hierro, tapa de 30 mm de espesor.</>}/>
            <Card 
            link= "/desayunadorEstiloMarcopolo"
            imagen= {"/imagenes"}
            nombreProducto="Miracles"
            descripcionProducto={<>mesa rectangular con Patas de madera <br/>maciza símil hierro, tapa de 30 mm de espesor.</>}/>
        </div>
        <div className="Categoria">
            <h1 className="titulosCategorias">Racks</h1>
            <Card 
            link= "/desayunadorEstiloMarcopolo"
            imagen= {"/imagenes"}
            nombreProducto="Castaña"
            descripcionProducto={<>Rack rectangular con Patas de <br/>madera maciza símil hierro, <br/>Con cajones sin tiradores. </>}/>
            <Card 
            link= "/desayunadorEstiloMarcopolo"
            imagen= {"/imagenes"}
            nombreProducto="Castaña"
            descripcionProducto={<>Rack rectangular con Patas de <br/>madera maciza símil hierro, <br/>Con cajones sin tiradores. </>}/>
            <Card 
            link= "/desayunadorEstiloMarcopolo"
            imagen= {"/imagenes"}
            nombreProducto="Castaña"
            descripcionProducto={<>Rack rectangular con Patas de <br/>madera maciza símil hierro, <br/>Con cajones sin tiradores. </>}/>
            <Card 
            link= "/desayunadorEstiloMarcopolo"
            imagen= {"/imagenes"}
            nombreProducto="Castaña"
            descripcionProducto={<>Rack rectangular con Patas de <br/>madera maciza símil hierro, <br/>Con cajones sin tiradores. </>}/>
        </div>
        <div className="Categoria">
            <h1 className="titulosCategorias">Recibidores</h1>
            <Card 
            link= "/desayunadorEstiloMarcopolo"
            imagen= {"/imagenes"}
            nombreProducto="Recibidor estilo índigo"
            descripcionProducto="Recibidor rustico de apariencia industrial."/>
            <Card 
            link= "/desayunadorEstiloMarcopolo"
            imagen= {"/imagenes"}
            nombreProducto="Recibidor estilo índigo"
            descripcionProducto="Recibidor rustico de apariencia industrial."/>
            <Card 
            link= "/desayunadorEstiloMarcopolo"
            imagen= {"/imagenes"}
            nombreProducto="Recibidor estilo índigo"
            descripcionProducto="Recibidor rustico de apariencia industrial."/>
        </div>
        <div className="Categoria">
            <h1 className="titulosCategorias">Varios</h1>
            <Card 
            link= "/desayunadorEstiloMarcopolo"
            imagen= {"/imagenes"}
            nombreProducto="Desayunador estilo marcopolo "
            descripcionProducto="Mesa de arrime o desayunador "/>
            <Card 
            link= "/desayunadorEstiloMarcopolo"
            imagen= {"/imagenes"}
            nombreProducto="Desayunador estilo marcopolo "
            descripcionProducto="Mesa de arrime o desayunador "/>
        </div>
        </Router>
    </div>
    )
}
}
export default Categorias