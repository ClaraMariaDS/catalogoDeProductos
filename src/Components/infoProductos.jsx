import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import mesaRatona from "../pestañasProductos/mesaRatona"
import paginaEstatica from './paginaEstatica'

class infoProductos extends Component{
    render(){
    return(
        <div>
            <Router>  
                <Switch>
                    <Route exact path="/desayunadorEstiloMarcopolo">
                        <paginaEstatica/>
                    </Route>
                    <Route exact path="/mesaRatona">
                    <mesaRatona/>
                    </Route>
                </Switch>
            </Router>
        </div>
        )
    }
}
export default infoProductos