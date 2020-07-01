
import { NavLink } from "react-router-dom";
import $ from "jquery";
import React from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios';
import apifunctions from "../api/apifunctions";
import ProductItemQuarterWidth from "../components/productitem/ProductItemQuarterWidth";

import ProductItem4Cart from "../components/productitem/ProductItem4Cart";

import {
    getUser,
    getToken,
    getLang,
    transToEnglish,
    save_url_befor_register_or_login,
    get_url_befor_register_or_login,
    transToArabic,
    trans,
    removeUserSession,
    start_fetch_cart_details,
    is_fetching_cart_details,
    end_fetch_cart_details,

    setUserSession,
} from '../Utils/Common';
export default class ProductsCarts extends React.Component {
    state = {
        product_id: "",
        isCartLoaded: false,
        is_still_fetching_cart_details: false
    }
    constructor(props) {
        super(props);
        this.state = {
            context: props.context,
            product_id: "",
            carts: [],
            is_fav_loaded: false,
        };
        this.buycart = this.buycart.bind(this);
        this.delete_item = this.delete_item.bind(this);


    }
    buycart() {
        $(".loadscr-container").show();
        axios.post(apifunctions.api_server_url + '/' + 'add_all_item_in_cart_to_order'

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
            $(".loadscr-container").hide();
            console.log(response);
            this.setState({ isCartLoaded: false })
            // this.props.history.push('/profile');
        }).catch(error => {
            //console.table(error);

            if (error.response.status === 401) {

                if (error.response.data.error == "emial already exist") {

                }
            }

        });
    }
    login_or_register_befor_buycart() {
        save_url_befor_register_or_login(window.location.pathname);
        $("#login_dialog").show();


    }
    delete_item(cart_id) {
        //alert(cart_id);
        if (getToken()) {
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
            axios.get(apifunctions.api_server_url + '/detet_stack_product_from_cart/' + cart_id,
                this.config,
                this.bodyParameters

            ).then(response => {
                console.table(response);
                this.setState({ carts: response.data.carts, isCartLoaded: false })
                $(".loadscr-container").hide();
                // this.setState({ user: response.data.user })
                //setUserSession(response.data.token, response.data.user);
                //setAuthLoading(false);
            }).catch(error => {
                $(".loadscr-container").hide();
                //  removeUserSession();
                // setAuthLoading(false);
            });
        }
        else {
            this.props.history.push('/');
        }

    }
    componentDidUpdate() {
        //window.location.href)

        if (!this.state.isCartLoaded)


            if (getToken()) {
                this.config = {
                    headers: {
                        Authorization: 'Bearer ' + getToken(),
                        'Content-Type': 'application/json'

                    }
                };
                this.bodyParameters = {
                    key: "value"
                };

                if (!is_fetching_cart_details()) {
                    $(".loadscr-container").show();
                    start_fetch_cart_details();
                    axios.get(apifunctions.api_server_url + '/get_cart_details',
                        this.config,
                        this.bodyParameters

                    ).then(response => {
                        console.table(response);
                        this.setState({ carts: response.data.carts, isCartLoaded: true, is_still_fetching_cart_details: false })

                        $(".loadscr-container").hide();
                        //setUserSession(response.data.token, response.data.user);
                        end_fetch_cart_details();
                    }).catch(error => {
                        $(".loadscr-container").hide();
                        //  removeUserSession();
                        end_fetch_cart_details();
                    });
                }

            }
            else {
                this.props.history.push('/');
            }




    }
    componentDidMount() {
        if (!this.state.isCartLoaded)


            if (getToken()) {
                this.config = {
                    headers: {
                        Authorization: 'Bearer ' + getToken(),
                        'Content-Type': 'application/json'

                    }
                };
                this.bodyParameters = {
                    key: "value"
                };
                if (!is_fetching_cart_details()) {
                    $(".loadscr-container").show();
                    start_fetch_cart_details();
                    axios.get(apifunctions.api_server_url + '/get_cart_details',
                        this.config,
                        this.bodyParameters

                    ).then(response => {
                        console.table(response);
                        this.setState({ carts: response.data.carts, isCartLoaded: true, is_still_fetching_cart_details: false })
                        $(".loadscr-container").hide();
                        //setUserSession(response.data.token, response.data.user);
                        end_fetch_cart_details();
                    }).catch(error => {
                        $(".loadscr-container").hide();
                        //  removeUserSession();
                        end_fetch_cart_details();
                    });
                }

            }
            else {
                this.props.history.push('/');
            }




    }

    render() {
        return (
            <main className="container push-top" id="home-body-id">


                <div className="col-xs-12 col-sm-6">
                    <ol className="breadcrumb">
                        <li> <font style={{ verticalAlign: "inherit" }}><font style={{ verticalAlign: "inherit" }}>

                            <NavLink
                                to="/"

                                href="http://malls-online.com/"
                                data-hover=""
                                className="no_submenu js-mn-itm"
                            >
                                {trans(
                                    'الصفحة الرئيسية ',
                                    '   Home page'
                                )}
                            </NavLink>
                        </font></font> </li>

                        <li className="active"><font style={{ verticalAlign: "inherit" }}><font style={{ verticalAlign: "inherit" }}>

                            {trans(
                                'السلة',
                                ' My Cart'
                            )}
                        </font></font></li>
                    </ol>
                </div>

                <input id="showrec" value="True" type="hidden" />










                {/*  PS Product List */}
                <div id="p-list-async">


                    <div id="productSummaryViewContainer" className="productSummaryViewContainer"></div>

                    {this.state.carts.length > 0 &&
                        localStorage.getItem("user") &&
                        JSON.parse(localStorage.getItem("user")).name != "guest" ? (

                            <div className="row clearfix">
                                <div className="col-xs-12">
                                    <button type="button"
                                        onClick={(event) => this.buycart()}
                                        className="btn btn-primary btn-lg btn-fullwidth">
                                        <span className="btn-text ladda-label"><font style={{ verticalAlign: 'inherit' }}>
                                            <font style={{ verticalAlign: 'inherit' }}>
                                                {trans("اتمام الطلب", " complete order")}      </font></font></span><div className="mloader">
                                            <div className="bnc bnc1"></div>
                                            <div className="bnc bnc2"></div>
                                            <div className="bnc bnc3"></div></div>
                                    </button>
                                </div>
                            </div>
                        ) : (

                            <div>
                                {this.state.carts.length > 0 &&
                                    localStorage.getItem("user") &&
                                    JSON.parse(localStorage.getItem("user")).name == "guest" ?
                                    (
                                        <div className="row clearfix">
                                            <div className="col-xs-12">
                                                <button type="button"
                                                    onClick={(event) => this.login_or_register_befor_buycart()}
                                                    className="btn btn-primary btn-lg btn-fullwidth">
                                                    <span className="btn-text ladda-label"><font style={{ verticalAlign: 'inherit' }}>
                                                        <font style={{ verticalAlign: 'inherit' }}>
                                                            {trans("اتمام الطلب", " complete order")}      </font></font></span><div className="mloader">
                                                        <div className="bnc bnc1"></div>
                                                        <div className="bnc bnc2"></div>
                                                        <div className="bnc bnc3"></div></div>
                                                </button>
                                            </div>
                                        </div>
                                    ) :
                                    (<div></div>)
                                }
                            </div>
                        )}

                    <div className="row clearfix productnotfound"></div>
                    <div className="row clearfix ps-timer-row">
                        <div className="col-xs-12 col-sm-6">
                            {this.state.carts.length > 0 ? (

                                <h1 id="productListVisibleName"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>
                                    {trans("سلتك هي ", " Your Cart is")}
                                </font></font></h1>
                            ) : (
                                    is_fetching_cart_details() ?
                                        (

                                            <h1 id="productListVisibleName"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>
                                                {trans("سلتك فارغة ", " Your Cart is")}
                                            </font></font></h1>
                                        )
                                        :
                                        (<h1 id="productListVisibleName"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>
                                            {trans("الرحاء الانتظار قليلا ", " please waite...")}
                                        </font></font></h1>
                                        )




                                )}

                        </div>

                    </div>

                    <div className="row clearfix productlist-row">
                        <div className="col-xxs-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 column">
                            <div className="filter filter-collapse collapse" aria-expanded="false">


                                <div className="row no-margin">
                                    <div className="col-xxs-12 col-xs-12 col-sm-12 col-md-8">




                                        {/*
                                        
                                        <div id="product-filter" className="product-filter">




                                            <ul className="dropdown" ftype="1057">
                                                <li className="field_title" ftype="1057">
                                                    <a id="Cinsiyet" href="#" data-toggle="dropdown" aria-label="Gender" aria-expanded="false"><strong><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Gender</font></font></strong></a>
                                                    <span className="css-arrow pull-right down"></span>
                                                </li>

                                                <li className="field_slide_container dropdown-menu" role="menu" aria-labelledby="Cinsiyet" style={{ zIndex: 6, display: 'none' }}>
                                                    <p className="selected-count text-muted">
                                                        <span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>0 selected</font></font></span>
                                                        <a href="Javascript:void(0)," title="" className="btn-link btn-select-all s-all block-right"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Select all</font></font></a>
                                                    </p>
                                                    <input type="text" className="form-control js-instant-src push-bottom-10 hidden" placeholder="Search Gender" aria-label="Search By Gender" />
                                                    <div className="field_section">
                                                        <ul className="inner-select-div" itemtype="1057" filtertype="0">
                                                            <li>
                                                                <div className="checkbox-wrapper ms-item ">
                                                                    <label className="custom-control custom-checkbox" name="31885">
                                                                        <input className="custom-control-input" name="31885" data-cat="1057" type="checkbox" />
                                                                        <span className="custom-control-label ">
                                                                            <font style={{ verticalAlign: 'inherit' }}>
                                                                                <font style={{ verticalAlign: 'inherit' }}>
                                                                                    Women
                                                                                                     </font></font><span><font style={{ verticalAlign: 'inherit' }}>
                                                                                <font style={{ verticalAlign: 'inherit' }}>126</font></font>
                                                                            </span><font style={{ verticalAlign: 'inherit' }}>
                                                                                <font style={{ verticalAlign: 'inherit' }}>
                                                                                </font></font></span>
                                                                    </label>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="checkbox-wrapper ms-item ">
                                                                    <label className="custom-control custom-checkbox" name="32418">
                                                                        <input className="custom-control-input" name="32418" data-cat="1057" type="checkbox" />
                                                                        <span className="custom-control-label "><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Male ( </font></font><span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>138</font></font></span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}> )</font></font></span>
                                                                    </label>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                        <div className="js-no-rslt"></div>
                                                    </div>
                                                    <button className="btn btn-default btn-block btn-apply-filter visible-md visible-lg" disabled="">
                                                        <span><font style={{ verticalAlign: 'inherit' }}>
                                                            <font style={{ verticalAlign: 'inherit' }}>filter</font></font></span>
                                                    </button>
                                                </li>
                                            </ul>







                                            <ul className="dropdown" ftype="1064">
                                                <li className="field_title" ftype="1064">
                                                    <a id="Kategori" href="#" data-toggle="dropdown" aria-label="Category" aria-expanded="false"><strong><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Category</font></font></strong></a>
                                                    <span className="css-arrow pull-right down"></span>
                                                </li>

                                                <li className="field_slide_container dropdown-menu" role="menu" aria-labelledby="Kategori" style={{ zIndex: 3, display: 'none' }}>
                                                    <p className="selected-count text-muted">
                                                        <span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>0 selected</font></font></span>
                                                        <a href="Javascript:void(0)," title="" className="btn-link btn-select-all s-all block-right"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Select all</font></font></a>
                                                    </p>
                                                    <input type="text" className="form-control js-instant-src push-bottom-10 hidden" placeholder="Search Category" aria-label="Search in Category" />
                                                    <div className="field_section">
                                                        <div className="slimScrollDiv" style={{ position: 'relative', overflow: 'hidden', width: '100 %', height: '100 %' }}><ul className="inner-select-div" itemtype="1064" filtertype="0" style={{ overflow: 'hidden', width: '100 %', height: '100 %' }}>
                                                            <li>
                                                                <div className="checkbox-wrapper ms-item ">
                                                                    <label className="custom-control custom-checkbox" name="33282">
                                                                        <input className="custom-control-input" name="33282" data-cat="1064" type="checkbox" />
                                                                        <span className="custom-control-label "><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Accessory ( </font></font><span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>16</font></font></span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}> )</font></font></span>
                                                                    </label>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="checkbox-wrapper ms-item ">
                                                                    <label className="custom-control custom-checkbox" name="32820">
                                                                        <input className="custom-control-input" name="32820" data-cat="1064" type="checkbox" />
                                                                        <span className="custom-control-label "><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Scarf ( </font></font><span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>8</font></font></span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}> )</font></font></span>
                                                                    </label>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="checkbox-wrapper ms-item ">
                                                                    <label className="custom-control custom-checkbox" name="32703">
                                                                        <input className="custom-control-input" name="32703" data-cat="1064" type="checkbox" />
                                                                        <span className="custom-control-label "><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Shoes ( </font></font><span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>8</font></font></span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}> )</font></font></span>
                                                                    </label>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="checkbox-wrapper ms-item ">
                                                                    <label className="custom-control custom-checkbox" name="32843">
                                                                        <input className="custom-control-input" name="32843" data-cat="1064" type="checkbox" />
                                                                        <span className="custom-control-label "><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Beret ( </font></font><span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>4</font></font></span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}> )</font></font></span>
                                                                    </label>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="checkbox-wrapper ms-item ">
                                                                    <label className="custom-control custom-checkbox" name="32835">
                                                                        <input className="custom-control-input" name="32835" data-cat="1064" type="checkbox" />
                                                                        <span className="custom-control-label "><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Wallet ( </font></font><span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>8</font></font></span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}> )</font></font></span>
                                                                    </label>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="checkbox-wrapper ms-item ">
                                                                    <label className="custom-control custom-checkbox" name="32823">
                                                                        <input className="custom-control-input" name="32823" data-cat="1064" type="checkbox" />
                                                                        <span className="custom-control-label "><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Gloves ( </font></font><span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>2</font></font></span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}> )</font></font></span>
                                                                    </label>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="checkbox-wrapper ms-item ">
                                                                    <label className="custom-control custom-checkbox" name="31944">
                                                                        <input className="custom-control-input" name="31944" data-cat="1064" type="checkbox" />
                                                                        <span className="custom-control-label "><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Shirt ( </font></font><span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>22</font></font></span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}> )</font></font></span>
                                                                    </label>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="checkbox-wrapper ms-item ">
                                                                    <label className="custom-control custom-checkbox" name="32018">
                                                                        <input className="custom-control-input" name="32018" data-cat="1064" type="checkbox" />
                                                                        <span className="custom-control-label "><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Sweater ( </font></font><span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>25</font></font></span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}> )</font></font></span>
                                                                    </label>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="checkbox-wrapper ms-item ">
                                                                    <label className="custom-control custom-checkbox" name="32002">
                                                                        <input className="custom-control-input" name="32002" data-cat="1064" type="checkbox" />
                                                                        <span className="custom-control-label "><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Sweatshirt ( </font></font><span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>27</font></font></span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}> )</font></font></span>
                                                                    </label>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="checkbox-wrapper ms-item ">
                                                                    <label className="custom-control custom-checkbox" name="32839">
                                                                        <input className="custom-control-input" name="32839" data-cat="1064" type="checkbox" />
                                                                        <span className="custom-control-label "><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Hat ( </font></font><span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>10</font></font></span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}> )</font></font></span>
                                                                    </label>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="checkbox-wrapper ms-item ">
                                                                    <label className="custom-control custom-checkbox" name="31891">
                                                                        <input className="custom-control-input" name="31891" data-cat="1064" type="checkbox" />
                                                                        <span className="custom-control-label "><font style={{ verticalAlign: 'inherit' }}>
                                                                            <font style={{ verticalAlign: 'inherit' }}>T-shirt ( </font></font><span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>134</font></font></span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}> )</font></font></span>
                                                                    </label>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                            <div className="slimScrollBar"
                                                                style={{ background: 'rgb(0, 0, 0)', width: '8px', position: 'absolute', top: '0px', opacity: '0.2', display: 'block', borderRadius: '4px', zIndex: 99, right: '1px' }}>
                                                            </div><div className="slimScrollRail" style={{ width: '8px', height: '100 %', position: 'absolute', top: '0px', display: 'block', borderRadius: '4px', background: 'rgb(51, 51, 51)', opacity: 0.1, zIndex: 90, right: '1px' }}></div></div>
                                                        <div className="js-no-rslt"></div>
                                                    </div>
                                                    <button className="btn btn-default btn-block btn-apply-filter visible-md visible-lg" disabled="">
                                                        <span><font style={{ verticalAlign: 'inherit' }}>
                                                            <font style={{ verticalAlign: 'inherit' }}>filter</font></font></span>
                                                    </button>
                                                </li>
                                            </ul>







                                            <ul className="dropdown" ftype="1060">
                                                <li className="field_title" ftype="1060">
                                                    <a id="Renkler" href="#" data-toggle="dropdown" aria-label="Colors" aria-expanded="false"><strong><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Colors</font></font></strong></a>
                                                    <span className="css-arrow pull-right down"></span>
                                                </li>

                                                <li className="field_slide_container dropdown-menu" role="menu" aria-labelledby="Renkler" style={{ zIndex: 3, display: 'none' }}>
                                                    <p className="selected-count text-muted">
                                                        <span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>0 selected</font></font></span>
                                                        <a href="Javascript:void(0)," title="" className="btn-link btn-select-all s-all block-right"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Select all</font></font></a>
                                                    </p>
                                                    <input type="text" className="form-control js-instant-src push-bottom-10" placeholder="Search Colors" aria-label="Search in Colors" />
                                                    <div className="field_section">
                                                        <div className="slimScrollDiv" style={{ position: 'relative', overflow: 'hidden', width: '100 %', height: '100 %' }}><ul className="inner-select-div" itemtype="1060" filtertype="0" style={{ overflow: 'hidden', width: '100 %', height: '100 %' }}>
                                                            <li>
                                                                <div className="checkbox-wrapper ms-item ">
                                                                    <label className="custom-control custom-checkbox" name="31934">
                                                                        <input className="custom-control-input" name="31934" data-cat="1060" type="checkbox" />
                                                                        <span className="custom-control-label cfill-antrasit"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Anthracite ( </font></font><span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>5</font></font></span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}> )</font></font></span>
                                                                    </label>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="checkbox-wrapper ms-item ">
                                                                    <label className="custom-control custom-checkbox" name="31914">
                                                                        <input className="custom-control-input" name="31914" data-cat="1060" type="checkbox" />
                                                                        <span className="custom-control-label cfill-bej"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Beige ( </font></font><span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>7</font></font></span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}> )</font></font></span>
                                                                    </label>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="checkbox-wrapper ms-item ">
                                                                    <label className="custom-control custom-checkbox" name="31954">
                                                                        <input className="custom-control-input" name="31954" data-cat="1060" type="checkbox" />
                                                                        <span className="custom-control-label cfill-beyaz"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>White ( </font></font><span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>33</font></font></span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}> )</font></font></span>
                                                                    </label>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="checkbox-wrapper ms-item ">
                                                                    <label className="custom-control custom-checkbox" name="31977">
                                                                        <input className="custom-control-input" name="31977" data-cat="1060" type="checkbox" />
                                                                        <span className="custom-control-label cfill-bordo"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Burgundy ( </font></font><span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>5</font></font></span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}> )</font></font></span>
                                                                    </label>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="checkbox-wrapper ms-item ">
                                                                    <label className="custom-control custom-checkbox" name="31925">
                                                                        <input className="custom-control-input" name="31925" data-cat="1060" type="checkbox" />
                                                                        <span className="custom-control-label cfill-ekru"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Ecru ( </font></font><span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>3</font></font></span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}> )</font></font></span>
                                                                    </label>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="checkbox-wrapper ms-item ">
                                                                    <label className="custom-control custom-checkbox" name="31921">
                                                                        <input className="custom-control-input" name="31921" data-cat="1060" type="checkbox" />
                                                                        <span className="custom-control-label cfill-fusya"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Fuchsia ( </font></font><span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>2</font></font></span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}> )</font></font></span>
                                                                    </label>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="checkbox-wrapper ms-item ">
                                                                    <label className="custom-control custom-checkbox" name="31938">
                                                                        <input className="custom-control-input" name="31938" data-cat="1060" type="checkbox" />
                                                                        <span className="custom-control-label cfill-gri"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Gray ( </font></font><span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>16</font></font></span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}> )</font></font></span>
                                                                    </label>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="checkbox-wrapper ms-item ">
                                                                    <label className="custom-control custom-checkbox" name="31993">
                                                                        <input className="custom-control-input" name="31993" data-cat="1060" type="checkbox" />
                                                                        <span className="custom-control-label cfill-haki"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Khaki ( </font></font><span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>5</font></font></span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}> )</font></font></span>
                                                                    </label>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="checkbox-wrapper ms-item ">
                                                                    <label className="custom-control custom-checkbox" name="31918">
                                                                        <input className="custom-control-input" name="31918" data-cat="1060" type="checkbox" />
                                                                        <span className="custom-control-label cfill-indigo"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Indigo ( </font></font><span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>4</font></font></span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}> )</font></font></span>
                                                                    </label>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="checkbox-wrapper ms-item ">
                                                                    <label className="custom-control custom-checkbox" name="31932">
                                                                        <input className="custom-control-input" name="31932" data-cat="1060" type="checkbox" />
                                                                        <span className="custom-control-label cfill-kahve"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Coffee ( </font></font><span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>3</font></font></span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}> )</font></font></span>
                                                                    </label>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="checkbox-wrapper ms-item ">
                                                                    <label className="custom-control custom-checkbox" name="31907">
                                                                        <input className="custom-control-input" name="31907" data-cat="1060" type="checkbox" />
                                                                        <span className="custom-control-label cfill-kirmizi"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Red ( </font></font><span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>31</font></font></span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}> )</font></font></span>
                                                                    </label>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="checkbox-wrapper ms-item ">
                                                                    <label className="custom-control custom-checkbox" name="32054">
                                                                        <input className="custom-control-input" name="32054" data-cat="1060" type="checkbox" />
                                                                        <span className="custom-control-label cfill-krem"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Cream ( </font></font><span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>1</font></font></span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}> )</font></font></span>
                                                                    </label>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="checkbox-wrapper ms-item ">
                                                                    <label className="custom-control custom-checkbox" name="31957">
                                                                        <input className="custom-control-input" name="31957" data-cat="1060" type="checkbox" />
                                                                        <span className="custom-control-label cfill-lacivert"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Navy Blue ( </font></font><span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>52</font></font></span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}> )</font></font></span>
                                                                    </label>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="checkbox-wrapper ms-item ">
                                                                    <label className="custom-control custom-checkbox" name="31973">
                                                                        <input className="custom-control-input" name="31973" data-cat="1060" type="checkbox" />
                                                                        <span className="custom-control-label cfill-mavi"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Blue ( </font></font><span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>23</font></font></span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}> )</font></font></span>
                                                                    </label>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="checkbox-wrapper ms-item ">
                                                                    <label className="custom-control custom-checkbox" name="31896">
                                                                        <input className="custom-control-input" name="31896" data-cat="1060" type="checkbox" />
                                                                        <span className="custom-control-label cfill-mor"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Purple ( </font></font><span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>1</font></font></span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}> )</font></font></span>
                                                                    </label>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="checkbox-wrapper ms-item ">
                                                                    <label className="custom-control custom-checkbox" name="31923">
                                                                        <input className="custom-control-input" name="31923" data-cat="1060" type="checkbox" />
                                                                        <span className="custom-control-label cfill-oranj"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Orange ( </font></font><span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>2</font></font></span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}> )</font></font></span>
                                                                    </label>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="checkbox-wrapper ms-item ">
                                                                    <label className="custom-control custom-checkbox" name="31946">
                                                                        <input className="custom-control-input" name="31946" data-cat="1060" type="checkbox" />
                                                                        <span className="custom-control-label cfill-pembe"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Pink ( </font></font><span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>19</font></font></span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}> )</font></font></span>
                                                                    </label>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="checkbox-wrapper ms-item ">
                                                                    <label className="custom-control custom-checkbox" name="31963">
                                                                        <input className="custom-control-input" name="31963" data-cat="1060" type="checkbox" />
                                                                        <span className="custom-control-label cfill-petrol"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Petrol ( </font></font><span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>3</font></font></span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}> )</font></font></span>
                                                                    </label>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="checkbox-wrapper ms-item ">
                                                                    <label className="custom-control custom-checkbox" name="32145">
                                                                        <input className="custom-control-input" name="32145" data-cat="1060" type="checkbox" />
                                                                        <span className="custom-control-label cfill-pudra"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Powder ( </font></font><span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>1</font></font></span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}> )</font></font></span>
                                                                    </label>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="checkbox-wrapper ms-item ">
                                                                    <label className="custom-control custom-checkbox" name="31979">
                                                                        <input className="custom-control-input" name="31979" data-cat="1060" type="checkbox" />
                                                                        <span className="custom-control-label cfill-saks"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Saks ( </font></font><span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>1</font></font></span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}> )</font></font></span>
                                                                    </label>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="checkbox-wrapper ms-item ">
                                                                    <label className="custom-control custom-checkbox" name="31959">
                                                                        <input className="custom-control-input" name="31959" data-cat="1060" type="checkbox" />
                                                                        <span className="custom-control-label cfill-sari"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Yellow ( </font></font><span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>4</font></font></span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}> )</font></font></span>
                                                                    </label>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="checkbox-wrapper ms-item ">
                                                                    <label className="custom-control custom-checkbox" name="31888">
                                                                        <input className="custom-control-input" name="31888" data-cat="1060" type="checkbox" />
                                                                        <span className="custom-control-label cfill-siyah"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Black ( </font></font><span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>11</font></font></span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}> )</font></font></span>
                                                                    </label>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="checkbox-wrapper ms-item ">
                                                                    <label className="custom-control custom-checkbox" name="32667">
                                                                        <input className="custom-control-input" name="32667" data-cat="1060" type="checkbox" />
                                                                        <span className="custom-control-label cfill-taba"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Tan ( </font></font><span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>2</font></font></span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}> )</font></font></span>
                                                                    </label>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="checkbox-wrapper ms-item ">
                                                                    <label className="custom-control custom-checkbox" name="31911">
                                                                        <input className="custom-control-input" name="31911" data-cat="1060" type="checkbox" />
                                                                        <span className="custom-control-label cfill-yesil"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Green ( </font></font><span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>30</font></font></span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}> )</font></font></span>
                                                                    </label>
                                                                </div>
                                                            </li>
                                                        </ul><div className="slimScrollBar" style={{ background: 'rgb(0, 0, 0)', width: '8px', position: 'absolute', top: '0px', opacity: '0.2', display: 'block', borderRadius: '4px', zIndex: 99, right: '1px' }}></div><div className="slimScrollRail" style={{ width: '8px', height: '100 %', position: 'absolute', top: '0px', display: 'block', borderRadius: '4px', background: 'rgb(51, 51, 51)', opacity: 0.1, zIndex: 90, right: '1px' }}></div></div>
                                                        <div className="js-no-rslt"></div>
                                                    </div>
                                                    <button className="btn btn-default btn-block btn-apply-filter visible-md visible-lg" disabled="">
                                                        <span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>filter</font></font></span>
                                                    </button>
                                                </li>
                                            </ul>







                                            <ul className="dropdown" ftype="1056">
                                                <li className="field_title" ftype="1056">
                                                    <a id="Beden" href="#" data-toggle="dropdown" aria-label="Body size" aria-expanded="false"><strong><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Body size</font></font></strong></a>
                                                    <span className="css-arrow pull-right down"></span>
                                                </li>

                                                <li className="field_slide_container dropdown-menu" role="menu" aria-labelledby="Beden" style={{ zIndex: 3, display: 'none' }}>
                                                    <p className="selected-count text-muted">
                                                        <span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>0 selected</font></font></span>
                                                        <a href="Javascript:void(0)," title="" className="btn-link btn-select-all s-all block-right"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Select all</font></font></a>
                                                    </p>
                                                    <input type="text" className="form-control js-instant-src push-bottom-10" placeholder="Search Size" aria-label="Search Inside Body" />
                                                    <div className="field_section">
                                                        <div className="slimScrollDiv" style={{ position: 'relative', overflow: 'hidden', width: '100 %', height: '100 %' }}><ul className="inner-select-div" itemtype="1056" filtertype="0" style={{ overflow: 'hidden', width: '100 %', height: '100 %' }}>
                                                            <li>
                                                                <div className="checkbox-wrapper ms-item ">
                                                                    <label className="custom-control custom-checkbox" name="32101">
                                                                        <input className="custom-control-input" name="32101" data-cat="1056" type="checkbox" />
                                                                        <span className="custom-control-label "><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Standard ( </font></font><span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>48</font></font></span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}> )</font></font></span>
                                                                    </label>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="checkbox-wrapper ms-item ">
                                                                    <label className="custom-control custom-checkbox" name="32284">
                                                                        <input className="custom-control-input" name="32284" data-cat="1056" type="checkbox" />
                                                                        <span className="custom-control-label "><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>XXS ( </font></font><span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>2</font></font></span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}> )</font></font></span>
                                                                    </label>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="checkbox-wrapper ms-item ">
                                                                    <label className="custom-control custom-checkbox" name="31895">
                                                                        <input className="custom-control-input" name="31895" data-cat="1056" type="checkbox" />
                                                                        <span className="custom-control-label "><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>XS ( </font></font><span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>129</font></font></span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}> )</font></font></span>
                                                                    </label>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="checkbox-wrapper ms-item ">
                                                                    <label className="custom-control custom-checkbox" name="31884">
                                                                        <input className="custom-control-input" name="31884" data-cat="1056" type="checkbox" />
                                                                        <span className="custom-control-label "><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>S ( </font></font><span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>142</font></font></span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}> )</font></font></span>
                                                                    </label>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="checkbox-wrapper ms-item ">
                                                                    <label className="custom-control custom-checkbox" name="31894">
                                                                        <input className="custom-control-input" name="31894" data-cat="1056" type="checkbox" />
                                                                        <span className="custom-control-label "><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>M ( </font></font><span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>87</font></font></span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}> )</font></font></span>
                                                                    </label>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="checkbox-wrapper ms-item ">
                                                                    <label className="custom-control custom-checkbox" name="31893">
                                                                        <input className="custom-control-input" name="31893" data-cat="1056" type="checkbox" />
                                                                        <span className="custom-control-label "><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>L ( </font></font><span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>64</font></font></span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}> )</font></font></span>
                                                                    </label>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="checkbox-wrapper ms-item ">
                                                                    <label className="custom-control custom-checkbox" name="31945">
                                                                        <input className="custom-control-input" name="31945" data-cat="1056" type="checkbox" />
                                                                        <span className="custom-control-label "><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>XL ( </font></font><span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>56</font></font></span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}> )</font></font></span>
                                                                    </label>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="checkbox-wrapper ms-item ">
                                                                    <label className="custom-control custom-checkbox" name="31915">
                                                                        <input className="custom-control-input" name="31915" data-cat="1056" type="checkbox" />
                                                                        <span className="custom-control-label "><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>34 ( </font></font><span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>19</font></font></span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}> )</font></font></span>
                                                                    </label>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="checkbox-wrapper ms-item ">
                                                                    <label className="custom-control custom-checkbox" name="31912">
                                                                        <input className="custom-control-input" name="31912" data-cat="1056" type="checkbox" />
                                                                        <span className="custom-control-label "><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>36 ( </font></font><span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>15</font></font></span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}> )</font></font></span>
                                                                    </label>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="checkbox-wrapper ms-item ">
                                                                    <label className="custom-control custom-checkbox" name="32680">
                                                                        <input className="custom-control-input" name="32680" data-cat="1056" type="checkbox" />
                                                                        <span className="custom-control-label "><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>37 ( </font></font><span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>3</font></font></span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}> )</font></font></span>
                                                                    </label>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="checkbox-wrapper ms-item ">
                                                                    <label className="custom-control custom-checkbox" name="31910">
                                                                        <input className="custom-control-input" name="31910" data-cat="1056" type="checkbox" />
                                                                        <span className="custom-control-label "><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>38 ( </font></font><span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>8</font></font></span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}> )</font></font></span>
                                                                    </label>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="checkbox-wrapper ms-item ">
                                                                    <label className="custom-control custom-checkbox" name="32681">
                                                                        <input className="custom-control-input" name="32681" data-cat="1056" type="checkbox" />
                                                                        <span className="custom-control-label "><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>39 ( </font></font><span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>3</font></font></span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}> )</font></font></span>
                                                                    </label>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="checkbox-wrapper ms-item ">
                                                                    <label className="custom-control custom-checkbox" name="31898">
                                                                        <input className="custom-control-input" name="31898" data-cat="1056" type="checkbox" />
                                                                        <span className="custom-control-label "><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>40 ( </font></font><span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>9</font></font></span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}> )</font></font></span>
                                                                    </label>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="checkbox-wrapper ms-item ">
                                                                    <label className="custom-control custom-checkbox" name="32705">
                                                                        <input className="custom-control-input" name="32705" data-cat="1056" type="checkbox" />
                                                                        <span className="custom-control-label "><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>41 ( </font></font><span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>5</font></font></span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}> )</font></font></span>
                                                                    </label>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="checkbox-wrapper ms-item ">
                                                                    <label className="custom-control custom-checkbox" name="31899">
                                                                        <input className="custom-control-input" name="31899" data-cat="1056" type="checkbox" />
                                                                        <span className="custom-control-label "><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>42 ( </font></font><span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>5</font></font></span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}> )</font></font></span>
                                                                    </label>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="checkbox-wrapper ms-item ">
                                                                    <label className="custom-control custom-checkbox" name="32790">
                                                                        <input className="custom-control-input" name="32790" data-cat="1056" type="checkbox" />
                                                                        <span className="custom-control-label "><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>43 ( </font></font><span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>5</font></font></span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}> )</font></font></span>
                                                                    </label>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="checkbox-wrapper ms-item ">
                                                                    <label className="custom-control custom-checkbox" name="31905">
                                                                        <input className="custom-control-input" name="31905" data-cat="1056" type="checkbox" />
                                                                        <span className="custom-control-label "><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>44 ( </font></font><span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>5</font></font></span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}> )</font></font></span>
                                                                    </label>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="checkbox-wrapper ms-item ">
                                                                    <label className="custom-control custom-checkbox" name="32857">
                                                                        <input className="custom-control-input" name="32857" data-cat="1056" type="checkbox" />
                                                                        <span className="custom-control-label "><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>45 ( </font></font><span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>5</font></font></span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}> )</font></font></span>
                                                                    </label>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="checkbox-wrapper ms-item ">
                                                                    <label className="custom-control custom-checkbox" name="35382">
                                                                        <input className="custom-control-input" name="35382" data-cat="1056" type="checkbox" />
                                                                        <span className="custom-control-label "><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>3XL ( </font></font><span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>4</font></font></span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}> )</font></font></span>
                                                                    </label>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="checkbox-wrapper ms-item ">
                                                                    <label className="custom-control custom-checkbox" name="44643">
                                                                        <input className="custom-control-input" name="44643" data-cat="1056" type="checkbox" />
                                                                        <span className="custom-control-label "><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>2XL ( </font></font><span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>53</font></font></span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}> )</font></font></span>
                                                                    </label>
                                                                </div>
                                                            </li>
                                                        </ul><div className="slimScrollBar" style={{ background: 'rgb(0, 0, 0)', width: '8px', position: 'absolute', top: '0px', opacity: '0.2', display: 'block', borderRadius: '4px', zIndex: 99, right: '1px' }}></div><div className="slimScrollRail" style={{ width: '8px', height: '100 %', position: 'absolute', top: '0px', display: 'block', borderRadius: '4px', background: 'rgb(51, 51, 51)', opacity: 0.1, zIndex: 90, right: '1px' }}></div></div>
                                                        <div className="js-no-rslt"></div>
                                                    </div>
                                                    <button className="btn btn-default btn-block btn-apply-filter visible-md visible-lg" disabled="">
                                                        <span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>filter</font></font></span>
                                                    </button>
                                                </li>
                                            </ul>



                                        </div> */}


                                    </div>

                                    <div className="col-xxs-12 col-xs-12 col-sm-12 col-md-4">
                                        <div className="right-filter">
















                                        </div>
                                    </div>
                                </div>

                                <hr />

                            </div>
                        </div>






                        <div className="col-xxs-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 column">
                            <div className="content_area">








                                <div id="products" className="row">
                                    <ol className="ProductList" id="initialLoad">

                                        {this.state.carts &&
                                            this.state.carts &&
                                            this.state.carts.map(
                                                (cart, index2) =>
                                                    (
                                                        <li
                                                            className="col-controlled col-xxs-6 col-xs-6 col-sm-3 col-md-3 col-lg-3 column"

                                                        >


                                                            <div  >

                                                                <ProductItem4Cart cart={cart} />
                                                            </div>
                                                            <div  >
                                                                {cart &&
                                                                    cart.stockProductCategories &&
                                                                    cart.stockProductCategories.map
                                                                        (
                                                                            (stockProductCategory, index2) =>
                                                                                (

                                                                                    <div className="  card text-center">
                                                                                        <div className="mh_product_items text-center">

                                                                                            <div className="brand text-center"><font style={{ verticalAlign: 'inherit' }}>
                                                                                                <font style={{ verticalAlign: 'inherit' }}>{stockProductCategory.category}</font></font></div>





                                                                                        </div>
                                                                                    </div>

                                                                                )
                                                                        )
                                                                }

                                                            </div>
                                                            <div  >
                                                                <button type="button"
                                                                    onClick={(event) => this.delete_item(cart.id)}
                                                                    className="btn btn-primary btn-lg btn-fullwidth">
                                                                    <span className="btn-text ladda-label"><font style={{ verticalAlign: 'inherit' }}>
                                                                        <font style={{ verticalAlign: 'inherit' }}>
                                                                            delete this item</font></font></span><div className="mloader">
                                                                        <div className="bnc bnc1"></div>
                                                                        <div className="bnc bnc2"></div>
                                                                        <div className="bnc bnc3"></div></div>
                                                                </button>
                                                            </div>


                                                        </li>
                                                    )
                                            )}



                                    </ol>
                                </div>

                                <div className="row camp-banner">
                                    <div className="col-xs-12">

                                    </div>
                                </div>

                                {/*<div className="row">
                                    <div className="col-xxs-12 col-xs-12 col-sm-12 column">
                                        <div className="view-note text-center">
                                            <p><span className="total"><font style={{ verticalAlign: 'inherit' }}></font></span><font style={{ verticalAlign: 'inherit' }}></font><span className="current-view-count"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>60</font></font></span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}> of </font><span className="total"><font style={{ verticalAlign: 'inherit' }}>264</font></span><font style={{ verticalAlign: 'inherit' }}> products </font><font style={{ verticalAlign: 'inherit' }}>are shown.</font></font></p>
                                        </div>
                                    </div>
                                                    </div> */}

                                <div className="row">
                                    <div className="col-xxs-12 col-xs-12 col-sm-12 column">
                                        <div className="load-more text-center">
                                            <a href="Javascript:void(0)," className="btn btn-lg btn-secondary btn-load-next hidden">
                                                <span className="btn-text"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Show more</font></font></span>
                                                <div className="mloader">
                                                    <div className="bnc bnc1"></div>
                                                    <div className="bnc bnc2"></div>
                                                    <div className="bnc bnc3"></div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>



                </div>{/*  p-list-async - end */}

                <div className="modal fade" id="sizetable-modal" tabindex="-1" role="dialog" aria-labelledby="sizetable-modal" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-body">
                            </div>
                        </div>
                    </div>
                </div>










                <div id="alertPopup" style={{ display: 'none' }}>
                </div>
            </main >
        );
    }

}


