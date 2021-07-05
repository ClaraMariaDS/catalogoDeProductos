import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min'
import desayunador from './pestañasProductos/desayunadorEstiloMarcopolo'
import paginaEstatica from '../src/Components/paginaEstatica.js'

export default class Layout extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Switch>
                            <Route exact path="/desayunador" component={desayunador}></Route>
                            <Route exact path="/paginaEstatica" component={paginaEstatica}></Route>
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>

        )


    }

}