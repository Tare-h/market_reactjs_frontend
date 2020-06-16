import React, { Component, Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import CampaignCategory from "./pages/CampaignCategory";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Product from "./pages/Product";
import "./App.css";
import Signup from "./pages/Signup"
import Profile from "./pages/Profile"
import PublicPage from "./pages/PublicPage"
import PrivateRoute from './Utils/PrivateRoute';
import PublicRoute from './Utils/PublicRoute';
import NotFound from "./pages/NotFound";
import NavBar from "./pages/NavBar";
import Products from "./pages/Products";
import LanguageSelector from './components/LanguageSelector'
import { NavLink } from "react-router-dom";
import apifunctions from "./api/apifunctions"
import axios from 'axios';
import $ from 'jquery';
import Login from './components/account/Login';
import Privatepages from "./pages/Privatepages";




function App() {


  return (
    <BrowserRouter>

      <Switch>




        <PrivateRoute path="/profile" component={Privatepages} />
        <PrivateRoute path="/fav" component={Privatepages} />
        <PrivateRoute path="/cart" component={Privatepages} />
        <Route path="/Product" extact component={PublicPage} />
        <Route path="/Products" extact component={PublicPage} />
        <Route path="/signup" extact component={PublicPage} />
        <Route path="/" extact component={PublicPage} />

      </Switch>
    </BrowserRouter>

  );

}

export default App;
