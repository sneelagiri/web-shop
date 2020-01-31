import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import "./App.css";
import ProductList from "./components/ProductList";
import "bootstrap/dist/css/bootstrap.min.css";
import Toolbar from "./components/Toolbar";

export default class App extends React.Component {
  render() {
    return (
      <div className="App wrapper">
        <Toolbar />
        <Switch>
          <Route path="/ProductList" component={ProductList} />
          <Route component={Homepage} />
        </Switch>
      </div>
    );
  }
}
