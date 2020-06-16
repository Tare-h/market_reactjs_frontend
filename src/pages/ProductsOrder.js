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
    transToArabic,
    trans,
    removeUserSession,
    setUserSession,
} from '../Utils/Common';
export default class ProductsOrder extends React.Component {
    state = {
        product_id: "",
        isOrdertLoaded: false,
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


    }
    buycart() {
    }

    componentDidUpdate() {
        //window.location.href)

        if (!this.state.isOrdertLoaded)
            if (window.location.pathname == '/myorder') {

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

                    axios.get(apifunctions.api_server_url + '/get_order_details',
                        this.config,
                        this.bodyParameters

                    ).then(response => {
                        console.table(response);
                        this.setState({ carts: response.data.carts, isOrdertLoaded: true })

                        // this.setState({ user: response.data.user })
                        //setUserSession(response.data.token, response.data.user);
                        //setAuthLoading(false);
                    }).catch(error => {

                        //  removeUserSession();
                        // setAuthLoading(false);
                    });
                }
                else {
                    this.props.history.push('/');
                }

            }


    }
    componentDidMount() {
        if (!this.state.isOrdertLoaded)
            if (window.location.pathname == '/myorder') {

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

                    axios.get(apifunctions.api_server_url + '/get_order_details',
                        this.config,
                        this.bodyParameters

                    ).then(response => {
                        console.table(response);
                        this.setState({ carts: response.data.carts, isOrdertLoaded: true })
                        // this.setState({ user: response.data.user })
                        //setUserSession(response.data.token, response.data.user);
                        //setAuthLoading(false);
                    }).catch(error => {

                        //  removeUserSession();
                        // setAuthLoading(false);
                    });
                }
                else {
                    this.props.history.push('/');
                }

            }


    }

    render() {
        return (
            <main className="container push-top" id="home-body-id">





                <input id="showrec" value="True" type="hidden" />










                {/*  PS Product List */}
                <div id="p-list-async">


                    <div id="productSummaryViewContainer" className="productSummaryViewContainer"></div>



                    <div className="row clearfix productnotfound"></div>
                    <div className="row clearfix ps-timer-row">
                        <div className="col-xs-12 col-sm-6">
                            <h1 id="productListVisibleName"><font style={{ verticalAlign: 'inherit' }}>
                                <font style={{ verticalAlign: 'inherit' }}>
                                    {trans("طلبك سوف يصل خلال يومين ", " Your Order will recieved in 2 days ")}
                                </font></font></h1>
                            <span className="m-product-count visible-xs visible-xxs">
                                <font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}> </font></font></span>
                        </div>
                        <div className="col-xs-12 col-sm-6">



                        </div>
                        {/* <div className="visible-xs visible-sm col-xs-6 col-sm-12">
                            <button type="button" className="filter-toggle submenutg m-filter-toggle" data-toggle="collapse" data-target=".filter">
                                <span className="icon-text"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>
                                    filter
                    </font></font><span id="filter-cnt" className="filter-cnt"></span>
                                </span>
                                <span aria-hidden="true" className="icontype  ui-filter">
                                    <svg className="fill-gray" height="20" role="img" title="Filter" viewBox="0 0 20 20" width="20"><use xlinkHref="/Content/sprites/morhipo-icons.svg?v=25#ui-filter"></use></svg></span>
                            </button>
                        </div>  */}
                    </div>

                    <div className="row clearfix productlist-row">
                        <div className="col-xxs-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 column">
                            <div className="filter filter-collapse collapse" aria-expanded="false">
                                <div className="visible-xs visible-sm fl-btn-holder">
                                    <ul>
                                        <li>
                                            <button className="btn btn-lg btn-primary fl-control" data-toggle="collapse" data-target=".filter"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>filter</font></font></button>
                                        </li>
                                    </ul>
                                    <hr />
                                    <ul>
                                        <li>
                                            <a id="ela-sezon-filtre-secim-kaldir-ust"
                                                href="/" className="uncheckall uncheck-master hidden">
                                                <font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Deselect All</font></font></a>
                                        </li>
                                    </ul>
                                    <hr />
                                </div>

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
                                {/* <ul className="visible-xs visible-sm fl-btn-holder fl-bottom">
                                    <li>
                                        <button onclick="applySelectedFilter()" className="btn btn-lg btn-primary fl-control" data-toggle="collapse" data-target=".filter"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>filter</font></font></button>
                                    </li>
                                     </ul>*/}
                            </div>
                        </div>




                        <div className="col-xxs-12 col-xs-12 col-sm-12 col-md-12 visible-xs">
                            <div className="single-filter">

                                {/*  <ul itemtype="1064" filtertype="0">

                                    <li>
                                        <div className="tag-filter ">
                                            <label name="33282" data-modelid="1064" data-id="33282"  >
                                                <input className="hidden" name="33282" data-cat="1064" type="checkbox" />
                                                <span  >
                                                    <font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>
                                                        Accessory   </font></font><span>
                                                        <font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>16</font></font></span>
                                                    <font style={{ verticalAlign: 'inherit' }}>
                                                        <font style={{ verticalAlign: 'inherit' }}>
                                                        </font></font>
                                                </span>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="tag-filter ">
                                            <label name="32820" data-modelid="1064" data-id="32820"  >
                                                <input className="hidden" name="32820" data-cat="1064" type="checkbox" />
                                                <span className=""><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>
                                                    Scarf ( </font></font><span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>8</font></font></span>
                                                    <font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}> )
                            </font></font></span>
                                            </label>
                                        </div>
                                    </li>

                                </ul>
                            */}</div>
                        </div>


                        <div className="col-xxs-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 column">
                            <div className="content_area">


                                <div className="row clearfix hidden">
                                    <div className="hidden-xxs hidden-xs col-sm-12">
                                        <div className="product-filter-tags ps-filter-tags">
                                            {/*  <ul id="filter-tags-list" className="list-unstyled no-margin">
                                                <li className="inline-block-item push-right">
                                                    <strong><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Filters</font></font></strong>
                                                </li>
                                                <li className="filter-tag-clear-all"><span className="filter-tags-clear"><strong><a href="/kampanya/liste/91150/u-s-polo-assn-" id="tags-clear-all" className="text-muted uncheck-master-tag"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Clear All</font></font></a></strong></span></li>
                        </ul> */}
                                        </div>
                                    </div>
                                </div>


                                <div className="row notificationRow" style={{
                                    display: 'none'
                                }}>
                                    <div className="col-xs-12">
                                        < div className="text-center pad-10 push-bottom-5 push-top-5 white-bg">
                                            <span aria-hidden="true" className="icontype  ui-giftcard-sm"><svg className="fill-green" height="12" role="img" title="Gift Certificates" viewBox="0 0 12 12" width="12"><use xlinkHref="/Content/sprites/morhipo-icons.svg?v=25#ui-giftcard-sm"></use></svg></span>
                                            <strong><span className="chequeuNotification bigger push-top text-success"></span></strong>
                                        </div>
                                    </div>
                                </div>


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


