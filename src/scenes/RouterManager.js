import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "../containers/Home";
import BusquedaPeliculaContainer from "../containers/BusquedaPeliculaContainer";
import Navbar from "../components/Navbar";

export default function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/pelicula">
            <BusquedaPeliculaContainer/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}