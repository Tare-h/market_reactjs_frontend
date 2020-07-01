import Products from "../pages/Products";
import ProductsFav from "../pages/ProductsFav";

import ProductsCarts from "../pages/ProductsCarts";
import ProductsOrder from "../pages/ProductsOrder";
import { NavLink } from "react-router-dom";
import qs from 'qs';
import Login from "../components/account/Login";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Component, Suspense, useState, useEffect } from "react";
import axios from 'axios';
import apifunctions from "../api/apifunctions";



import Activationaccount from "../pages/Activationaccount";
import ChangePassword from "../pages/ChangePassword";


import Footer from "../components/Footer";
import {
    getUser,
    getToken,
    getLang,
    transToEnglish,
    transToArabic,
    trans,
    removeUserSession,
    setUserSession,
} from '../Utils/Common';

import React from 'react';
import Profile from "../pages/Profile"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import $ from "jquery";
import ResetPassword from "./ResetPassword";



class Privatepages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            context: props.context,
            isFavloaded: false,
            isCartLoaded: false,
            isOrderLoaded: false,

        };
        this.handleLogout = this.handleLogout.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleRadioChange = this.handleRadioChange.bind(this);
        this.submitUserAfterUpdate = this.submitUserAfterUpdate.bind(this);

    }

    componentDidUpdate() {
        //window.location.href)

        if (getToken()) {
            this.config = {
                headers: {
                    Authorization: "Bearer " + getToken(),
                    "Content-Type": "application/json",
                },
            };
            this.bodyParameters = {
                key: "value",
            };

            //if (this.state.is_fav_loaded == false)
            if (!this.state.isFavloaded && false) {
                $(".loadscr-container").show();
                alert('privatepages.js');
                axios
                    .get(
                        apifunctions.api_server_url + "/get_favorits",
                        this.config,
                        this.bodyParameters
                    )
                    .then((response) => {
                        console.table(response);
                        $("#fav_count").attr('style', 'background-color: red;border-radius: 50%;padding: 5px;color: rgb(255, 255, 255);');

                        $("#fav_count").html(response.data.favorite_ads.length);
                        this.setState({

                            isFavloaded: true,
                        });
                        //setUserSession(response.data.token, response.data.user);
                        $(".loadscr-container").hide();
                    })
                    .catch((error) => {
                        //  removeUserSession();
                        $(".loadscr-container").hide();
                    });
            }


            if (!this.state.isOrderLoaded && false) {
                $(".loadscr-container").show();
                axios.get(
                    apifunctions.api_server_url + "/get_orders",
                    this.config,
                    this.bodyParameters
                )
                    .then((response) => {
                        console.table(response);

                        $("#myorder_count").attr('style', 'background-color: red;border-radius: 50%;padding: 5px;color: rgb(255, 255, 255);');

                        $("#myorder_count").html(response.data.orders.length);
                        this.setState({

                            isOrderLoaded: true,
                        });
                        //setUserSession(response.data.token, response.data.user);
                        $(".loadscr-container").hide();
                    })
                    .catch((error) => {
                        //  removeUserSession();
                        $(".loadscr-container").hide();
                    });
            }


            if (!this.state.isCartLoaded && false) {
                $(".loadscr-container").show();
                axios.get(
                    apifunctions.api_server_url + "/get_cart",
                    this.config,
                    this.bodyParameters
                )
                    .then((response) => {
                        console.table(response);

                        $("#cart_count").attr('style', 'background-color: red;border-radius: 50%;padding: 5px;color: rgb(255, 255, 255);');

                        $("#cart_count").html(response.data.carts.length);
                        this.setState({

                            isCartLoaded: true,
                        });
                        $(".loadscr-container").hide();
                        //setUserSession(response.data.token, response.data.user);
                        //setAuthLoading(false);
                    })
                    .catch((error) => {
                        //  removeUserSession();
                        $(".loadscr-container").hide();
                    });
            }

        }
    }
    getSurename() {

        if (!this.user)
            return 'null';
        return this.user.surname;
    }
    state = {
        persons: [],
        user: {
            "id": -1,
            "name": "",
            "email": "",
            "email_verified_at": null,
            "verified": "",
            "verification_token": null,
            "created_at": "2020-06-05 18:26:51",
            "updated_at": "2020-06-05 18:26:51",
            "avatar": null,
            "mobile_phone": "",
            "surname": ' ',
            "birthdate": "",
            "gender": "",
            "address": ''
        },
        token: '',
        config: '',
        bodyParameters: ''
    };


    /* 
     This is where the magic happens 
    */
    handleRadioChange(e) {
        const temp_user = this.state.user;
        temp_user[e.currentTarget.name] = e.currentTarget.value;
        this.setState({
            user: temp_user
        });
    }

    handleInputChange(e) {
        const temp_user = this.state.user;
        temp_user[e.target.name] = e.target.value;
        this.setState({
            user: temp_user
        });
    }
    handleDateChange(date) {

        const temp_user = this.state.user;

        temp_user.birthdate = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();

        this.setState({
            user: temp_user
        });
    }
    submitUserAfterUpdate(e) {
        $(".loadscr-container").show();
        axios.post(apifunctions.api_server_url + '/' + 'editUserProfile'

            ,
            this.state.user
            ,
            {
                headers: {
                    Authorization: 'Bearer ' + getToken(),
                    'Content-Type': 'application/json'

                }
            }

        ).then(response => {
            setUserSession(getToken(), response.data);
            $(".loadscr-container").hide();

            // this.props.history.push('/profile');
        }).catch(error => {
            $(".loadscr-container").hide();

            if (error.response.status === 401) {

                if (error.response.data.error == "emial already exist") {

                }
            }

        });
    }
    componentDidMount() {

        this.setState({ token: getToken() });
        this.config = {
            headers: {
                Authorization: 'Bearer ' + getToken(),
                'Content-Type': 'application/json'

            }
        };
        this.bodyParameters = {
            key: "value"
        };
        $(".loadscr-container").show();
        axios.get(apifunctions.api_server_url + '/user_profile',
            this.config,
            this.bodyParameters

        ).then(response => {
            $(".loadscr-container").hide();
            this.setState({ user: response.data.user });

            //setUserSession(response.data.token, response.data.user);
            //setAuthLoading(false);
        }).catch(error => {

            $(".loadscr-container").hide();
            // setAuthLoading(false);
        });
    }

    handleLogout() {
        removeUserSession();
        this.props.history.push('/login');
    }






    render() {



        return (
            <body className="mrhp_web Malls Online_body ">

                <div className="loadscr-container" style={{ display: "none" }}>
                    <div className="loader-container">
                        <div id="pageloader"><div className="mloader">
                            <div className="bnc bnc1"></div>
                            <div className="bnc bnc2"></div>
                            <div className="bnc bnc3"></div>
                        </div></div>
                    </div>
                </div>

                <div className="modal fade in " id="login_dialog" tabindex="-1" role="dialog" aria-labelledby="share-modal" ariaHidden="true">
                    <div className="login-modal" style={{ backgroundColor: "white" }}>
                        <div className="modal-header">
                            <button type="button" className="close"
                                onClick={(event) => this.closeLoginDialog()} dataDismiss="modal" ariaHidden="true">
                                <font style={{ verticalAlign: 'inherit' }}>
                                    <font style={{ verticalAlign: 'inherit' }} >×</font>
                                </font></button>
                            <h4 className="modal-title" id="myModalLabel">
                                <font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>
                                    {trans(
                                        'تسجيل دخول',
                                        'Member login'
                                    )}

                                </font></font></h4>
                        </div>

                        <Login {...this.props} >
                            {this.props}
                        </Login>
                    </div>

                </div>
                <header>
                    <div className="container">

                        <div className="row mrhpheader clearfix">
                            <div className="col-xxs-7 col-xs-7 col-sm-3 col-md-3 column">
                                <div className="row no-margin">
                                    <div className="visible-767 col-xxs-2 col-xs-2">


                                    </div>
                                    <div className="col-xxs-9 col-xs-10 col-sm-10">
                                        <NavLink
                                            to="/"
                                            id="ela-sezon-menu-p-"
                                            href="http://malls-online.com/"
                                            data-hover=""
                                            className="no_submenu js-mn-itm"
                                        >
                                            {!getLang() || getLang() == "ar" ? (
                                                <img
                                                    src="/static/logar.png"
                                                    width="140px"
                                                    height="80px"
                                                    dataSrc="/static/logonew.jpg"
                                                    alt="blue"
                                                    className="  lazyloaded"
                                                />
                                            ) : (
                                                    <img
                                                        src="/static/logonew.jpg"
                                                        width="140px"
                                                        height="80px"
                                                        dataSrc="/static/logonew.jpg"
                                                        alt="blue"
                                                        className="  lazyloaded"
                                                    />
                                                )}
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-xxs-12 col-xs-12 col-sm-12   col-md-6  col-lg-6 " >
                                <div className="row"   >
                                    <div className="col-xxs-2 col-xs-2 col-sm-4 col-sm-push-2 col-md-2 col-md-push-4 column">
                                        <NavLink
                                            to="/myorder"
                                            id="myorder"
                                            href="http://malls-online.com/"
                                            data-hover=""
                                            className="no_submenu js-mn-itm"
                                        >
                                            <font style={{ verticalAlign: "inherit" }}>
                                                <font style={{ verticalAlign: "inherit" }}>
                                                    <i
                                                        style={{ fontSize: "20px" }}
                                                        className="fa fa-truck"
                                                        title={trans("طلباتي", "my orders")}
                                                    ></i>
                                                    <span id="myorder_count">
                                                        <div className="mloader">
                                                            <div className="bnc bnc1"></div>
                                                            <div className="bnc bnc2"></div>
                                                            <div className="bnc bnc3"></div>
                                                        </div>
                                                    </span>
                                                </font>
                                            </font>
                                            <span
                                                ariaHidden="true"
                                                className="icontype pull-right visible-xxs visible-xs ui-arrow_right_thin-lg"
                                            >
                                                <svg
                                                    height="15"
                                                    role="img"
                                                    title="Go"
                                                    viewBox="0 0 8 15"
                                                    width="8"
                                                >3</svg>
                                            </span>
                                        </NavLink>
                                    </div>
                                    <div className="col-xxs-2 col-xs-2 col-sm-4 col-sm-push-2 col-md-2 col-md-push-4 column">
                                        <NavLink
                                            to="/cart"
                                            id="cart"
                                            href="http://malls-online.com/"
                                            data-hover=""
                                            className="no_submenu js-mn-itm"
                                        >
                                            <font style={{ verticalAlign: "inherit" }}>
                                                <font style={{ verticalAlign: "inherit" }}>
                                                    <i
                                                        style={{ fontSize: "20px" }}
                                                        className="fa fa-shopping-cart"
                                                        title={trans("سلتي", "my cart")}
                                                    ></i>
                                                    <span id="cart_count">
                                                        <div className="mloader">
                                                            <div className="bnc bnc1"></div>
                                                            <div className="bnc bnc2"></div>
                                                            <div className="bnc bnc3"></div>
                                                        </div>
                                                    </span>
                                                </font>
                                            </font>
                                            <span
                                                ariaHidden="true"
                                                className="icontype pull-right visible-xxs visible-xs ui-arrow_right_thin-lg"
                                            >
                                                <svg
                                                    height="15"
                                                    role="img"
                                                    title="Go"
                                                    viewBox="0 0 8 15"
                                                    width="8"
                                                >3</svg>
                                            </span>
                                        </NavLink>
                                    </div>
                                    <div className="col-xxs-2 col-xs-2 col-sm-4 col-sm-push-2 col-md-2 col-md-push-4 column">
                                        <NavLink
                                            to="/fav"
                                            id="ela-sezon-menu-p-"
                                            href="http://malls-online.com/"
                                            data-hover=""
                                            className="no_submenu js-mn-itm"
                                        >
                                            <font style={{ verticalAlign: "inherit" }}>
                                                <font style={{ verticalAlign: "inherit" }}>
                                                    <i
                                                        style={{ fontSize: "20px" }}
                                                        className="fa fa-heart"
                                                        title={trans("مفضلتي", "my favorite")}
                                                    ></i>
                                                    <span id="fav_count">
                                                        <div className="mloader">
                                                            <div className="bnc bnc1"></div>
                                                            <div className="bnc bnc2"></div>
                                                            <div className="bnc bnc3"></div>
                                                        </div>
                                                    </span>
                                                </font>
                                            </font>
                                            <span
                                                ariaHidden="true"
                                                className="icontype pull-right visible-xxs visible-xs ui-arrow_right_thin-lg"
                                            >
                                                <svg
                                                    height="15"
                                                    role="img"
                                                    title="Go"
                                                    viewBox="0 0 8 15"
                                                    width="8"
                                                ></svg>
                                            </span>
                                        </NavLink>
                                    </div>
                                    <div className="col-xxs-2 col-xs-2 col-sm-4 col-sm-push-2 col-md-2 col-md-push-4 column">
                                        <NavLink
                                            to="/profile"
                                            id="ela-sezon-menu-p-"
                                            href="http://malls-online.com/"
                                            data-hover=""
                                            className="no_submenu js-mn-itm"
                                        >
                                            <font style={{ verticalAlign: "inherit" }}>
                                                <font style={{ verticalAlign: "inherit" }}>
                                                    <i
                                                        style={{ fontSize: "20px" }}
                                                        className="fa fa-user"
                                                        title={trans("معلومات الحساب", "Profile")}
                                                    ></i>
                                                </font>
                                            </font>
                                            <span
                                                ariaHidden="true"
                                                className="icontype pull-right visible-xxs visible-xs ui-arrow_right_thin-lg"
                                            >
                                                <svg
                                                    height="15"
                                                    role="img"
                                                    title="Go"
                                                    viewBox="0 0 8 15"
                                                    width="8"
                                                ></svg>
                                            </span>
                                        </NavLink>
                                    </div>
                                    <div className="col-xxs-2 col-xs-2 col-sm-4 col-sm-push-2 col-md-2 col-md-push-4 column">
                                        <input type="button" onClick={this.handleLogout} value={trans(
                                            'تسجيل خروج',
                                            ' Logout'
                                        )} />
                                    </div>
                                    {!getLang() || getLang() == "ar" ? (
                                        <div className="col-xxs-2 col-xs-2 col-sm-4 col-sm-push-2 col-md-2 col-md-push-4 column">
                                            <button
                                                className="no_submenu js-mn-itm"
                                                type="button"
                                                onClick={() => transToArabic()}
                                                value="Logout"
                                            >
                                                <font style={{ verticalAlign: "inherit" }}>
                                                    <font style={{ verticalAlign: "inherit" }}>EN</font>
                                                </font>
                                            </button>
                                        </div>
                                    ) : (
                                            <div className="col-xxs-2 col-xs-2 col-sm-4 col-sm-push-2 col-md-2 col-md-push-4 column">
                                                <button
                                                    className="no_submenu js-mn-itm"
                                                    type="button"
                                                    onClick={() => transToEnglish()}
                                                    value="Logout"
                                                >
                                                    <font style={{ verticalAlign: "inherit" }}>عربي</font>
                                                </button>
                                            </div>
                                        )}
                                </div>

                            </div>

                            <div className="col-xxs-12 col-xs-12 col-sm-5 col-sm-pull-4 col-md-6 col-md-pull-3 search-column">

                                <div className="ui-ac"><ul className="ui-autocomplete ui-menu ui-widget ui-widget-content ui-corner-all" id="ui-id-1" tabindex="0" style={{ zIndex: 1, display: "none" }}></ul><ul className="ui-autocomplete ui-menu ui-widget ui-widget-content ui-corner-all" id="ui-id-1" tabindex="0" style={{ zIndex: 1, display: "none" }}></ul></div>
                            </div>
                        </div>
                    </div>
                </header>
                <Switch>
                    <Route path="/myorder" component={ProductsOrder} />
                    <Route path="/cart" component={ProductsCarts} />

                    <Route path="/activationaccount" component={Activationaccount} />
                    <Route path="/resetpassword" component={ResetPassword} />
                    <Route path="/changpassword" component={ChangePassword} />

                    <Route path="/fav" component={ProductsFav} />
                    <Route path="/profile" component={Profile} />
                </Switch>
                <Footer />
            </body >

        );
    }
}
export default Privatepages;




