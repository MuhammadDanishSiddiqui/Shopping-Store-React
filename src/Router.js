import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route,
  } from "react-router-dom";
  import About from "./components/About"
  import Products from "./components/Products"
  import Product from "./components/Product"
  import Contact from "./components/Contact"
  import Nav from "./components/Nav"
  import Cart from "./components/Cart"


const Router = () => {
    return (
        <BrowserRouter>
        <Nav/>
            <Switch>
                <Route exact path="/" component={About}/>
                <Route exact path="/products" component={Products}/>
                <Route path="/products/:id" component={Product}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/cart" component={Cart}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Router
