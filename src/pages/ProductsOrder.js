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
    end_fetch_orders,
    start_fetch_orders,
    is_fetching_orders,
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
                    if (!is_fetching_orders()) {

                        start_fetch_orders();
                        $(".loadscr-container").show();
                        axios.get(apifunctions.api_server_url + '/get_order_details',
                            this.config,
                            this.bodyParameters

                        ).then(response => {
                            console.table(response);
                            this.setState({ carts: response.data.carts, isOrdertLoaded: true })

                            // this.setState({ user: response.data.user })
                            end_fetch_orders();
                            $(".loadscr-container").hide();
                        }).catch(error => {

                            end_fetch_orders();
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
                    if (!is_fetching_orders()) {

                        start_fetch_orders();
                        $(".loadscr-container").show();
                        axios.get(apifunctions.api_server_url + '/get_order_details',
                            this.config,
                            this.bodyParameters

                        ).then(response => {
                            console.table(response);
                            this.setState({ carts: response.data.carts, isOrdertLoaded: true })
                            // this.setState({ user: response.data.user })
                            $(".loadscr-container").hide();
                            end_fetch_orders();
                        }).catch(error => {

                            $(".loadscr-container").hide();
                            end_fetch_orders();

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
                    <div className="row clearfix ps-timer-row">
                        <div className="col-xs-12 col-sm-6">
                            <h1 id="productListVisibleName">
                                <font style={{ verticalAlign: 'inherit' }}>
                                    {this.state.carts.length > 0 ? (<font style={{ verticalAlign: 'inherit' }}>
                                        {trans("طلبك سوف يصل خلال يومين ", " Your Order will recieved in 2 days ")}
                                    </font>) : <font style={{ verticalAlign: 'inherit' }}>{trans(" لم تقم باي طلب  ", " No Order  ... ")} </font>}
                                </font></h1>
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







                                    </div>

                                    <div className="col-xxs-12 col-xs-12 col-sm-12 col-md-4">
                                        <div className="right-filter">
















                                        </div>
                                    </div>
                                </div>

                                <hr />

                            </div>
                        </div>




                        <div className="col-xxs-12 col-xs-12 col-sm-12 col-md-12 visible-xs">
                            <div className="single-filter">

                            </div>
                        </div>


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


