
import { NavLink } from "react-router-dom";
import qs from 'qs';
import Login from "../components/account/Login";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Component, Suspense, useState, useEffect } from "react";
import axios from 'axios';
import apifunctions from "../api/apifunctions";
import $ from "jquery";
import React from 'react';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


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


class Siteinfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            context: props.context,
        };



    }

    state = {
        is_about_us_loaded: false,
        is_contuct_us_loaded: false,
        config: '',
        bodyParameters: ''
    };


    /* 
     This is where the magic happens 
    */

    componentDidUpdate() {

        this.config = {
            headers: {

                'Content-Type': 'application/json'

            }
        };
        this.bodyParameters = {
            key: "value"
        };
        let type_info = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);

        if (!this.state.is_about_us_loaded) {

            if (type_info == 'about_us') {
                // alert(type_info);
                if (!getLang() || getLang() == "ar") {
                    $(".loadscr-container").show();
                    axios.get(apifunctions.api_server_url + '/about_us_ar_data',
                        this.config,
                        this.bodyParameters

                    ).then(response => {
                        // console.log(response);


                        $("#contecnt_text").html(response.data.data);
                        $(".loadscr-container").hide();

                        //setUserSession(response.data.token, response.data.user);
                        //setAuthLoading(false);
                    }).catch(error => {

                        $(".loadscr-container").hide();
                        //  removeUserSession();
                        // setAuthLoading(false);
                    });
                }
                else {
                    $(".loadscr-container").show();
                    axios.get(apifunctions.api_server_url + '/about_us_en_data',
                        this.config,
                        this.bodyParameters

                    ).then(response => {
                        // console.log(response);

                        $("#contecnt_text").html(response.data.data);
                        $(".loadscr-container").hide();
                        //setUserSession(response.data.token, response.data.user);
                        //setAuthLoading(false);
                    }).catch(error => {

                        $(".loadscr-container").hide();
                        //  removeUserSession();
                        // setAuthLoading(false);
                    });
                }
            }

        } if (!this.state.is_contuct_us_loaded) {

            if (type_info == 'contuct_us') {
                // alert(type_info);
                if (!getLang() || getLang() == "ar") {
                    $(".loadscr-container").show();
                    axios.get(apifunctions.api_server_url + '/contuct_us_ar_data',
                        this.config,
                        this.bodyParameters

                    ).then(response => {
                        // console.log(response);


                        $("#contecnt_text").html(response.data.data);
                        $(".loadscr-container").hide();

                        //setUserSession(response.data.token, response.data.user);
                        //setAuthLoading(false);
                    }).catch(error => {

                        $(".loadscr-container").hide();
                        //  removeUserSession();
                        // setAuthLoading(false);
                    });
                }
                else {
                    $(".loadscr-container").show();
                    axios.get(apifunctions.api_server_url + '/contuct_us_en_data',
                        this.config,
                        this.bodyParameters

                    ).then(response => {
                        // console.log(response);

                        $("#contecnt_text").html(response.data.data);
                        $(".loadscr-container").hide();
                        //setUserSession(response.data.token, response.data.user);
                        //setAuthLoading(false);
                    }).catch(error => {

                        $(".loadscr-container").hide();
                        //  removeUserSession();
                        // setAuthLoading(false);
                    });
                }
            }

        }


    }
    componentDidMount() {


        this.config = {
            headers: {

                'Content-Type': 'application/json'

            }
        };
        this.bodyParameters = {
            key: "value"
        };
        let type_info = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);

        if (!this.state.is_about_us_loaded) {

            if (type_info == 'about_us') {
                // alert(type_info);
                if (!getLang() || getLang() == "ar") {
                    $(".loadscr-container").show();
                    axios.get(apifunctions.api_server_url + '/about_us_ar_data',
                        this.config,
                        this.bodyParameters

                    ).then(response => {
                        // console.log(response);


                        $("#contecnt_text").html(response.data.data);
                        $(".loadscr-container").hide();

                        //setUserSession(response.data.token, response.data.user);
                        //setAuthLoading(false);
                    }).catch(error => {

                        $(".loadscr-container").hide();
                        //  removeUserSession();
                        // setAuthLoading(false);
                    });
                }
                else {
                    $(".loadscr-container").show();
                    axios.get(apifunctions.api_server_url + '/about_us_en_data',
                        this.config,
                        this.bodyParameters

                    ).then(response => {
                        // console.log(response);

                        $("#contecnt_text").html(response.data.data);
                        $(".loadscr-container").hide();
                        //setUserSession(response.data.token, response.data.user);
                        //setAuthLoading(false);
                    }).catch(error => {

                        $(".loadscr-container").hide();
                        //  removeUserSession();
                        // setAuthLoading(false);
                    });
                }
            }

        } else if (!this.state.is_contuct_us_loaded) {

            if (type_info == 'contuct_us') {
                // alert(type_info);
                if (!getLang() || getLang() == "ar") {
                    $(".loadscr-container").show();
                    axios.get(apifunctions.api_server_url + '/contuct_us_ar_data',
                        this.config,
                        this.bodyParameters

                    ).then(response => {
                        // console.log(response);


                        $("#contecnt_text").html(response.data.data);
                        $(".loadscr-container").hide();

                        //setUserSession(response.data.token, response.data.user);
                        //setAuthLoading(false);
                    }).catch(error => {

                        $(".loadscr-container").hide();
                        //  removeUserSession();
                        // setAuthLoading(false);
                    });
                }
                else {
                    $(".loadscr-container").show();
                    axios.get(apifunctions.api_server_url + '/contuct_us_en_data',
                        this.config,
                        this.bodyParameters

                    ).then(response => {
                        // console.log(response);

                        $("#contecnt_text").html(response.data.data);
                        $(".loadscr-container").hide();
                        //setUserSession(response.data.token, response.data.user);
                        //setAuthLoading(false);
                    }).catch(error => {

                        $(".loadscr-container").hide();
                        //  removeUserSession();
                        // setAuthLoading(false);
                    });
                }
            }

        }

    }






    render() {



        return (
            <main className="container push-top" id="home_body_id">

                <div className="row clearfix">
                    <div className="col-xs-12 col-sm-6"><h1>Malls onlin info</h1></div>

                </div>


                <div className="row clearfix">
                    <div className="visible-xs visible-sm col-xs-12 col-sm-12 column">
                        <button type="button" className="filter-toggle submenutg" data-toggle="collapse" data-target=".sidebar">
                            <span className="icon-text">Malls onlin info  </span>
                            <span aria-hidden="true" className="icontype pull-right ui-plus-md"><svg height="13" role="img" title="Toggle Closed" viewBox=" 0 0 13 13" width="13"><use xlinkHref="/Content/sprites/morhipo-icons.svg?v=25#ui-plus-md"></use></svg></span>
                        </button>
                    </div>  <div className="col-xxs-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 column">
                        <div className="account_content" id='contecnt_text'>

                        </div>
                    </div>
                </div >


            </main >

        );
    }
}
export default Siteinfo;




