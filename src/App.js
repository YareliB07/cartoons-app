import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from "react-router-dom";

import AddCartoon from "./components/add-cartoon.component";
import CartoonList from './components/cartoons-list.component';
import Login from './components/Login';


class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/" className="navbar-brand">
            Cartoons
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/"} className="nav-link">
                📃
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                ➕
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3 bg-dark mx-auto">
          <h2>Cartoons App</h2>
          <Routes>
          <Route path="/" element={<Login/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/" element={<CartoonList />} />
            <Route path="add" element={<AddCartoon />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;