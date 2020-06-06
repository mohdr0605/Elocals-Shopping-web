import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";


import Products from "./product/product";
import Seller from "./seller/seller";
import history from './history';
import Home from './home/index'

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/" component={Seller} />
                    <Route path="/" component={Products} />
                </Switch>
            </Router>
        )
    }
}