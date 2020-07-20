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
    end_fetch_orders_details,
    start_fetch_orders_details,
    is_fetching_orders_details,
    removeUserSession,
    setUserSession,

} from '../Utils/Common';
import $ from "jquery";
import { NavLink } from "react-router-dom";
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
            orders: [],
            is_fav_loaded: false,
        };
        this.buycart = this.buycart.bind(this);
        this.onMouseclickBtn = this.onMouseclickBtn.bind(this);

    }
    onMouseclickBtn(currebtdivorder) {
        // Getting ref to JQuery object from our parent app.
        //alert("hi" + campaignCategoryObj.category_name_en);

        $("#" + currebtdivorder).toggleClass("in");
    }
    buycart() {
    }

    componentDidUpdate() {
        //window.location.href)


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
                if (!is_fetching_orders_details()) {

                    start_fetch_orders_details();
                    $(".loadscr-container").show();
                    axios.get(apifunctions.api_server_url + '/get_order_details',
                        this.config,
                        this.bodyParameters

                    ).then(response => {
                        // console.log(response);
                        this.setState({ orders: response.data.orders, isOrdertLoaded: true })

                        // this.setState({ user: response.data.user })
                        end_fetch_orders_details();
                        $(".loadscr-container").hide();
                    }).catch(error => {

                        end_fetch_orders_details();
                        $(".loadscr-container").hide();
                    });
                }
            }
            else {
                this.props.history.push('/');
            }

        }


    }
    componentDidMount() {

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
                if (!is_fetching_orders_details()) {

                    start_fetch_orders_details();
                    $(".loadscr-container").show();
                    axios.get(apifunctions.api_server_url + '/get_order_details',
                        this.config,
                        this.bodyParameters

                    ).then(response => {
                        // console.log(response);
                        this.setState({ orders: response.data.orders, isOrdertLoaded: true })
                        // this.setState({ user: response.data.user })
                        $(".loadscr-container").hide();
                        end_fetch_orders_details();
                    }).catch(error => {

                        $(".loadscr-container").hide();
                        end_fetch_orders_details();

                    });
                }
            }
            else {
                this.props.history.push('/');
            }

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
                                'طلباتي',
                                ' My Orders'
                            )}
                        </font></font></li>
                    </ol>
                </div>


                <input id="showrec" value="True" type="hidden" />










                {/*  PS Product List */}
                <div id="p-list-async">


                    <div id="productSummaryViewContainer" className="productSummaryViewContainer"></div>



                    <div className="row clearfix productnotfound"></div>
                    {this.state.orders &&

                        this.state.orders.map(
                            (order, index2) =>
                                <div className="tabdetails-container">





                                    <div onClick={(event) => this.onMouseclickBtn(`aboutprodtab${index2}`)} className="index-match tab-to-accord panel-group" id="product_tabs-accordion">
                                        <div className="panel panel-default panel-faq">
                                            <a className="panel-heading" id="ela-urun-sekme-accr-aboutprodtab" data-toggle="collapse" data-parent="#product_tabs-accordion" href="#aboutprodtab" aria-expanded="true">
                                                <h2 className="h4 panel-title"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>
                                                    {index2 + 1} :     {trans("رقم الطلب ", "   Order Number ")} : o{order.id}_u{order.user_id}
                                                </font></font><span className="css-arrow down pull-right"></span></h2>
                                            </a>
                                            <div id={`aboutprodtab${index2}`} className="panel-collapse animated-collapse collapse  " aria-expanded="true" >
                                                <div className="panel-body js-tabcollapse-panel-body">
                                                    < div className="row no-margin">
                                                        <div className="col-sm-12">
                                                            <div className="col-xs-12 col-sm-6">
                                                                <h1 id="productListVisibleName">
                                                                    <font style={{ verticalAlign: 'inherit' }}>
                                                                        {this.state.orders.length > 0 ? (<font style={{ verticalAlign: 'inherit' }}>
                                                                            {trans("طلبك سوف يصل خلال يومين ", " Your Order will recieved in 2 days ")} <br />
                                                                            {trans("رقم الطلب ", "   Order Number ")} : o{order.id}_u{order.user_id}
                                                                        </font>) : <font style={{ verticalAlign: 'inherit' }}>{trans(" لم تقم باي طلب  ", " No Order  ... ")} </font>}
                                                                    </font></h1>
                                                                <span className="m-product-count visible-xs visible-xxs">
                                                                    <font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}> </font></font></span>
                                                            </div>
                                                            <div className="row clearfix productlist-row">






                                                                <div className="col-xxs-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 column">
                                                                    <div className="content_area">


                                                                        <div className="row clearfix hidden">
                                                                            <div className="hidden-xxs hidden-xs col-sm-12">
                                                                                <div className="product-filter-tags ps-filter-tags">

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

                                                                                {order.carts &&

                                                                                    order.carts.map(
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
                                                        </div>


                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                        )}






                </div>







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


