import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom' 
import Routes from './Route'

const App = () =>{
  return (
    <BrowserRouter>
        <Routes/>
    </BrowserRouter>
  )
}


ReactDOM.render(<App />, document.getElementById("root"));
