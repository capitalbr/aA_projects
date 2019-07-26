import React from "react";
import { Route, Switch } from "react-router-dom";
import ProductIndex from "./products/ProductIndex";
import Login from "./Login";
import Register from "./Register";
import AuthRoute from "../util/route_util";
import Nav from "./Nav"
import ProductDetail from "./products/ProductDetail";
import CreateProduct from "./products/CreateProduct";


const App = () => {
  return (
    <div>
      <h1>Online Store</h1>
      <Route path="/" component={Nav} />
      <Switch>
        <AuthRoute exact path="/login" component={Login} routeType="auth" />
        <AuthRoute exact path="/register" component={Register} routeType="auth" />
        <AuthRoute exact path="/products/new" component={CreateProduct} routeType="protected" />
        <Route exact path="/products/:id" component={ProductDetail}/>
        <Route exact path="/" component={ProductIndex} />
      </Switch>

    </div>
  );
};

export default App;