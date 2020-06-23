import React from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios';
import apifunctions from "../api/apifunctions";
import ProductItemQuarterWidth from "../components/productitem/ProductItemQuarterWidth";
import { getToken } from '../Utils/Common';
import {
    getUser,
    start_search,
    getStart_search,
    stop_search,
    getLang,
    transToEnglish,
    transToArabic,
    trans,
    removeUserSession,
    setUserSession,
} from '../Utils/Common';
import $ from "jquery";
export default class Products extends React.Component {
    state = {
        product_id: ""
    }
    constructor(props) {
        super(props);
        this.state = {
            context: props.context,
            product_id: "",
            Products: [],
            category: {},
            is_fav_loaded: false,

        };

    }

    componentDidUpdate() {
        //window.location.href)
        if (window.location.href.indexOf("search") > -1) {

            //    alert("/" + getStart_search() + "/");
            if (getStart_search() == true) {
                //       alert("after" + getStart_search());
                this.config = {
                    headers: {

                        'Content-Type': 'application/json'

                    }
                };
                this.bodyParameters = {
                    value: "value"
                };
                $(".loadscr-container").show();
                axios.get(apifunctions.api_server_url + '/api/products_search/' + window.location.href.substring(window.location.href.lastIndexOf('/') + 1),
                    this.config,
                    this.bodyParameters

                ).then(response => {
                    console.table(response);
                    this.setState({ Products: response.data, category: {} })
                    stop_search();
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
        else {

            if (this.state.product_id != window.location.href.substring(window.location.href.lastIndexOf('/') + 1)) {
                this.setState({
                    product_id: window.location.href.substring(window.location.href.lastIndexOf('/') + 1),
                    Products: [],
                });
                $(".loadscr-container").show();
                axios.get(apifunctions.api_server_url + '/api/products/' + + window.location.href.substring(window.location.href.lastIndexOf('/') + 1)).then(response => {
                    console.table(response.data.length);
                    stop_search();
                    this.setState({ Products: response.data, category: {} })
                    $(".loadscr-container").hide();
                    //setUserSession(response.data.token, response.data.user);
                    //setAuthLoading(false);
                }).catch(error => {
                    $(".loadscr-container").hide();
                    //  removeUserSession();
                    // setAuthLoading(false);
                });   // */

                axios.get(apifunctions.api_server_url + '/api/category/' + + window.location.href.substring(window.location.href.lastIndexOf('/') + 1))
                    .then(
                        response => {
                            console.table(response);
                            this.setState({ category: response.data.json, isCartLoaded: false })

                            // this.setState({ user: response.data.user })
                            //setUserSession(response.data.token, response.data.user);
                            //setAuthLoading(false);
                        }
                    ).catch(error => {

                        //  removeUserSession();
                        // setAuthLoading(false);
                    });
            }
        }

    }
    componentDidMount() {
        if (window.location.pathname == '/fav' && false) {
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
                alert('products.js');
                $(".loadscr-container").show();
                axios.get(apifunctions.api_server_url + '/get_favorits',
                    this.config,
                    this.bodyParameters

                ).then(response => {


                    $("#fav_count").attr(
                        "style",
                        "background-color: red;border-radius: 50%;padding: 5px;color: rgb(255, 255, 255);"
                    );

                    $("#fav_count").html(response.data.favorite_ads.length);
                    this.setState({
                        Products: response.data.favorite_ads,
                        isFavloaded: true,
                    });
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
                this.props.history.push('/');
            }
        }
        else if (window.location.pathname == '/cart') {

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

                axios.get(apifunctions.api_server_url + '/get_cart',
                    this.config,
                    this.bodyParameters

                ).then(response => {
                    console.table(response);
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
        else
            if (window.location.href.indexOf("search") > -1) {
                //alert("/" + getStart_search() + "/");
                if (getStart_search() == true) {
                    $(".loadscr-container").show();

                    //    alert("after" + getStart_search());
                    this.config = {
                        headers: {

                            'Content-Type': 'application/json'

                        }
                    };
                    this.bodyParameters = {
                        value: "value"
                    };
                    $(".loadscr-container").show();
                    axios.get(apifunctions.api_server_url + '/api/products_search/' + window.location.href.substring(window.location.href.lastIndexOf('/') + 1),
                        this.config,
                        this.bodyParameters

                    ).then(response => {
                        $(".loadscr-container").hide();
                        console.table(response);
                        this.setState({ Products: response.data })
                        stop_search();

                        //setUserSession(response.data.token, response.data.user);
                        //setAuthLoading(false);
                    }).catch(error => {
                        $(".loadscr-container").hide();
                        //  removeUserSession();
                        // setAuthLoading(false);
                    });
                }

            }
            else {
                if (this.state.product_id != window.location.href.substring(window.location.href.lastIndexOf('/') + 1)) {
                    this.setState({
                        product_id: window.location.href.substring(window.location.href.lastIndexOf('/') + 1),
                        Products: [],
                    });
                    $(".loadscr-container").show();
                    axios.get(apifunctions.api_server_url + '/api/products/' + window.location.href.substring(window.location.href.lastIndexOf('/') + 1)).then(response => {
                        console.table(response);
                        $(".loadscr-container").hide();
                        this.setState({ Products: response.data })
                        //setUserSession(response.data.token, response.data.user);
                        //setAuthLoading(false);
                    }).catch(error => {
                        $(".loadscr-container").hide();
                        //  removeUserSession();
                        // setAuthLoading(false);
                    });
                    axios.get(apifunctions.api_server_url + '/api/category/' + + window.location.href.substring(window.location.href.lastIndexOf('/') + 1))
                        .then(
                            response => {
                                console.table(response);
                                this.setState({ category: response.data.json, isCartLoaded: false })

                                // this.setState({ user: response.data.user })
                                //setUserSession(response.data.token, response.data.user);
                                //setAuthLoading(false);
                            }
                        ).catch(error => {

                            //  removeUserSession();
                            // setAuthLoading(false);
                        });
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
                            <h1 id="productListVisibleName"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>

                                {this.state.category && this.state.category.category_name_ar ? (
                                    trans(this.state.category.category_name_ar, this.state.category.category_name_en)) : <span></span>}



                            </font></font></h1>
                            <span className="m-product-count visible-xs visible-xxs"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}> </font></font></span>
                        </div>
                        <div className="col-xs-12 col-sm-6">



                        </div>
                        {/*<div className="visible-xs visible-sm col-xs-6 col-sm-12">
                            <button type="button" className="filter-toggle submenutg m-filter-toggle" data-toggle="collapse" data-target=".filter">
                                <span className="icon-text"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>
                                    filter
                    </font></font><span id="filter-cnt" className="filter-cnt"></span>
                                </span>
                                <span aria-hidden="true" className="icontype  ui-filter">
                                    <svg className="fill-gray" height="20" role="img" title="Filter" viewBox="0 0 20 20" width="20"><use xlinkHref="/Content/sprites/morhipo-icons.svg?v=25#ui-filter"></use></svg></span>
                            </button>
                        </div>*/}
                    </div>

                    <div className="row clearfix productlist-row">
                        <div className="col-xxs-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 column">
                            <div className="filter filter-collapse collapse" aria-expanded="false">
                                {/*    <div className="visible-xs visible-sm fl-btn-holder">
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
*/}
                                {/* <div className="row no-margin">
                                    <div className="col-xxs-12 col-xs-12 col-sm-12 col-md-8">







                                    </div>

                                    <div className="col-xxs-12 col-xs-12 col-sm-12 col-md-4">
                                        <div className="right-filter">
















                                        </div>
                                    </div>
                                </div>
                            */}
                                <hr />
                                <ul className="visible-xs visible-sm fl-btn-holder fl-bottom">
                                    <li>
                                        <button onclick="applySelectedFilter()" className="btn btn-lg btn-primary fl-control" data-toggle="collapse" data-target=".filter"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>filter</font></font></button>
                                    </li>
                                </ul>
                            </div>
                        </div>




                        {/*                     <div className="col-xxs-12 col-xs-12 col-sm-12 col-md-12 visible-xs">
                            <div className="single-filter">

                                <ul itemtype="1064" filtertype="0">

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
                            </div>
                        </div>

*/}
                        <div className="col-xxs-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 column">
                            <div className="content_area">


                                <div className="row clearfix hidden">
                                    <div className="hidden-xxs hidden-xs col-sm-12">
                                        <div className="product-filter-tags ps-filter-tags">
                                            <ul id="filter-tags-list" className="list-unstyled no-margin">
                                                <li className="inline-block-item push-right">
                                                    <strong><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Filters</font></font></strong>
                                                </li>
                                                <li className="filter-tag-clear-all"><span className="filter-tags-clear"><strong><a href="/kampanya/liste/91150/u-s-polo-assn-" id="tags-clear-all" className="text-muted uncheck-master-tag"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Clear All</font></font></a></strong></span></li>
                                            </ul>
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

                                        {this.state.Products &&
                                            this.state.Products &&
                                            this.state.Products.map(
                                                (product, index2) => (
                                                    <ProductItemQuarterWidth product={product} />
                                                )
                                            )}



                                    </ol>
                                </div>

                                <div className="row camp-banner">
                                    <div className="col-xs-12">

                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-xxs-12 col-xs-12 col-sm-12 column">
                                        <div className="view-note text-center">

                                            {/*                                         <p><span className="total"><font style={{ verticalAlign: 'inherit' }}></font></span><font style={{ verticalAlign: 'inherit' }}></font><span className="current-view-count"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>60</font></font></span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}> of </font><span className="total"><font style={{ verticalAlign: 'inherit' }}> </font></span><font style={{ verticalAlign: 'inherit' }}> products </font><font style={{ verticalAlign: 'inherit' }}>are shown.</font></font>
                                            </p>
*/}
                                        </div>
                                    </div>
                                </div>

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


