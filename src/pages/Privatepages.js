import Products from "../pages/Products";
import ProductsCarts from "../pages/ProductsCarts";
import ProductsOrder from "../pages/ProductsOrder";
import { NavLink } from "react-router-dom";
import qs from 'qs';
import Login from "../components/account/Login";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Component, Suspense, useState, useEffect } from "react";
import axios from 'axios';
import apifunctions from "../api/apifunctions";
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
            if (!this.state.isFavloaded)
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
                        //setAuthLoading(false);
                    })
                    .catch((error) => {
                        //  removeUserSession();
                        // setAuthLoading(false);
                    });

            if (!this.state.isOrderLoaded)
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
                        //setAuthLoading(false);
                    })
                    .catch((error) => {
                        //  removeUserSession();
                        // setAuthLoading(false);
                    });

            if (!this.state.isCartLoaded)
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
                        //setUserSession(response.data.token, response.data.user);
                        //setAuthLoading(false);
                    })
                    .catch((error) => {
                        //  removeUserSession();
                        // setAuthLoading(false);
                    });
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
        console.log('submitUserAfterUpdate');
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
            console.log(response);

            // this.props.history.push('/profile');
        }).catch(error => {
            //console.table(error);

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

        axios.get(apifunctions.api_server_url + '/user_profile',
            this.config,
            this.bodyParameters

        ).then(response => {
            console.table(response);
            this.setState({ user: response.data.user });

            //setUserSession(response.data.token, response.data.user);
            //setAuthLoading(false);
        }).catch(error => {

            //  removeUserSession();
            // setAuthLoading(false);
        });
    }

    handleLogout() {
        removeUserSession();
        this.props.history.push('/login');
    }






    render() {



        return (
            <body class="mrhp_web Malls Online_body ">

                <header>
                    <div class="container">

                        <div class="row mrhpheader clearfix">
                            <div class="col-xxs-7 col-xs-7 col-sm-3 col-md-3 column">
                                <div class="row no-margin">
                                    <div class="visible-767 col-xxs-2 col-xs-2">


                                    </div>
                                    <div class="col-xxs-9 col-xs-10 col-sm-10">
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
                                                    dataSrc="/static/logar.png"
                                                    alt="blue"
                                                    className="  lazyloaded"
                                                />
                                            ) : (
                                                    <img
                                                        src="/static/logoen.png"
                                                        width="140px"
                                                        height="80px"
                                                        dataSrc="/static/logoen.png"
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
                                <div class="row"   >
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
                                                    {trans("طلباتي", "My order")}   <span
                                                        id="myorder_count"
                                                        style={{
                                                            padding: '5px',
                                                            borderRadius: "50%",
                                                            color: "#fff",

                                                        }}
                                                    >
                                                        <div className="mloader">
                                                            <div className="bnc bnc1"></div>
                                                            <div className="bnc bnc2"></div>
                                                            <div className="bnc bnc3"></div></div>
                                                    </span>
                                                </font>
                                            </font>
                                            <span
                                                aria-hidden="true"
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
                                                    {trans("السلة", "Cart")}    <span
                                                        id="cart_count"
                                                        style={{
                                                            padding: '5px',
                                                            borderRadius: "50%",
                                                            color: "#fff",

                                                        }}
                                                    >
                                                        <div className="mloader">
                                                            <div className="bnc bnc1"></div>
                                                            <div className="bnc bnc2"></div>
                                                            <div className="bnc bnc3"></div></div>
                                                    </span>
                                                </font>
                                            </font>
                                            <span
                                                aria-hidden="true"
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
                                                    {trans("المفضلة", "Favorite")}      <span
                                                        id="fav_count"

                                                    >
                                                        <div className="mloader">
                                                            <div className="bnc bnc1"></div>
                                                            <div className="bnc bnc2"></div>
                                                            <div className="bnc bnc3"></div></div>
                                                    </span>
                                                </font>
                                            </font>
                                            <span
                                                aria-hidden="true"
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
                                            to="/Profile"
                                            id="ela-sezon-menu-p-"
                                            href="http://malls-online.com/"
                                            data-hover=""
                                            className="no_submenu js-mn-itm"
                                        >
                                            <font style={{ verticalAlign: "inherit" }}>
                                                <font style={{ verticalAlign: "inherit" }}>
                                                    {trans("معلومات الحساب", "Profile")}
                                                </font>
                                            </font>
                                            <span
                                                aria-hidden="true"
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

                            <div class="col-xxs-12 col-xs-12 col-sm-5 col-sm-pull-4 col-md-6 col-md-pull-3 search-column">

                                <div class="ui-ac"><ul class="ui-autocomplete ui-menu ui-widget ui-widget-content ui-corner-all" id="ui-id-1" tabindex="0" style={{ zIndex: 1, display: "none" }}></ul><ul class="ui-autocomplete ui-menu ui-widget ui-widget-content ui-corner-all" id="ui-id-1" tabindex="0" style={{ zIndex: 1, display: "none" }}></ul></div>
                            </div>
                        </div>
                    </div>
                </header>
                <Switch>
                    <Route path="/myorder" component={ProductsOrder} />
                    <Route path="/cart" component={ProductsCarts} />
                    <Route path="/fav" component={Products} />
                    <Route path="/profile" component={Profile} />
                </Switch>
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-xxs-6 col-xs-6 col-sm-3 col-md-2">
                                <div className="h4">
                                    <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>
                                            Contact us
                    </font>
                                    </font>
                                </div>                </div>

                            <div className="col-xxs-6 col-xs-6 col-sm-3 col-md-offset-1 col-md-2">
                                <div className="h4">
                                    <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>
                                            I Malls Online.co
                    </font>
                                    </font>
                                </div>           </div>

                            <div className="col-xxs-6 col-xs-6 col-sm-2 col-md-offset-1 col-md-2">
                                <div className="h4">
                                    <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>
                                            Follow us
                    </font>
                                    </font>
                                </div>         </div>

                            <div className="col-xxs-6 col-xs-6 col-sm-2 col-md-2">
                                <div className="h4">
                                    <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>
                                            Mobile
                    </font>
                                    </font>
                                </div>   </div>


                        </div>
                    </div>
                    {/* CONTAINER FOOTER*/}
                </footer>

            </body>

        );
    }
}
export default Privatepages;




