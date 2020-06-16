import _ from 'lodash';
import React from 'react'
import axios from 'axios';
import apifunctions from "../api/apifunctions";
import $ from "jquery";
import Login from '../components/account/Login';

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
export default class Product extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            context: props.context,
            product_id: "",
            product: {},
        };
        this.onClickBtn = this.onClickBtn.bind(this);
        this.showLoginDialog = this.showLoginDialog.bind(this);
        this.closeLoginDialog = this.closeLoginDialog.bind(this);
        this.onClickSmallImgBtn = this.onClickSmallImgBtn.bind(this);
        this.addCurrentProducttoFavorit = this.addCurrentProducttoFavorit.bind(this);
        this.removeCurrentProducttoFavorit = this.removeCurrentProducttoFavorit.bind(this);

    }
    removeCurrentProducttoFavorit() {
        $(".loadscr-container").show();
        let product_id_in_url = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
        axios.post(apifunctions.api_server_url + '/delete_product_from_favorid/' + product_id_in_url

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
            //  setUserSession(getToken(), response.data);
            console.log(response);
            $(".loadscr-container").hide();
            $("#fav_count").html(response.data.favorite_count);
            let newproduct = this.state.product;
            newproduct.is_favorit = false;
            this.setState({

                product: newproduct
            });
            //window.location.reload(false);

            // this.props.history.push('/product/' + product_id_in_url);
            // this.props.history.push('/profile');
        }).catch(error => {
            //console.table(error);
            $(".loadscr-container").hide();
            if (error.response.status === 401) {

                if (error.response.data.error == "emial already exist") {

                }
            }

        });
    }
    addCurrentProducttoFavorit() {
        $(".loadscr-container").show();
        let product_id_in_url = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
        axios.post(apifunctions.api_server_url + '/add_product_to_favorid/' + product_id_in_url

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
            //  setUserSession(getToken(), response.data);
            console.log(response);
            $(".loadscr-container").hide();
            $("#fav_count").html(response.data.favorite_count);
            let newproduct = this.state.product;
            newproduct.is_favorit = true;
            this.setState({

                product: newproduct
            });
            //  window.location.reload(false);

            //  this.props.history.push('/product/' + product_id_in_url);
            // this.props.history.push('/profile');
        }).catch(error => {
            //console.table(error);
            $(".loadscr-container").hide();
            if (error.response.status === 401) {

                if (error.response.data.error == "emial already exist") {

                }
            }

        });
    }
    addCurrentStockProducttocart(one_product_in_stock_id) {
        // alert(one_product_in_stock_id);
        $(".loadscr-container").show();

        axios.post(apifunctions.api_server_url + '/add_stack_product_to_cart/' + one_product_in_stock_id

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
            //  setUserSession(getToken(), response.data);
            console.log(response);

            $(".loadscr-container").hide();
            $("#cart_count").html(response.data.cart_count);
            let url = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
            axios.get(apifunctions.api_server_url + '/api/full_product_details/' + url,
                this.config,
                this.bodyParameters
            ).then(response => {
                console.table(response.data.length);

                this.setState({ product: response.data })
                //setUserSession(response.data.token, response.data.user);
                //setAuthLoading(false);
            }).catch(error => {

                //  removeUserSession();
                // setAuthLoading(false);
            });

            // this.props.history.push('/profile');
        }).catch(error => {
            //console.table(error);
            $(".loadscr-container").hide();
            if (error.response.status === 401) {

                if (error.response.data.error == "emial already exist") {

                }
            }

        });
    }
    showLoginDialog() {
        $("#login_dialog").show();
        // 
    }
    closeLoginDialog() {

        $("#login_dialog").hide();
        // 
    }
    onClickBtn(dictoshow, currentDiv) {
        // Getting ref to JQuery object from our parent app.
        if (currentDiv != dictoshow) {
            $("#" + dictoshow).show();
            $("#" + currentDiv).hide();

        }

    }
    onClickSmallImgBtn(current_src, targetimg_id) {
        // Getting ref to JQuery object from our parent app.


        $('#' + targetimg_id).attr('src', current_src);


    }
    componentDidUpdate() {
        //window.location.href)
        let url = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);

        if (this.state.product_id != url) {
            this.setState({
                product_id: url,
                Products: [],
            });
            this.config = {
                headers: {
                    Authorization: 'Bearer ' + getToken(),
                    'Content-Type': 'application/json'

                }
            };
            this.bodyParameters = {
                key: "value"
            };
            axios.get(apifunctions.api_server_url + '/api/full_product_details/' + url,
                this.config,
                this.bodyParameters
            ).then(response => {
                console.table(response.data.length);

                this.setState({ product: response.data })
                //setUserSession(response.data.token, response.data.user);
                //setAuthLoading(false);
            }).catch(error => {

                //  removeUserSession();
                // setAuthLoading(false);
            });   // */
        }
    }
    componentDidMount() {
        let url = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);

        if (this.state.product_id != url) {
            this.setState({
                product_id: url,
                Products: [],
            });
            this.config = {
                headers: {
                    Authorization: 'Bearer ' + getToken(),
                    'Content-Type': 'application/json'

                }
            };
            this.bodyParameters = {
                key: "value"
            };
            axios.get(apifunctions.api_server_url + '/api/full_product_details/' + url
                ,
                this.config,
                this.bodyParameters).then(response => {
                    console.table(response);

                    this.setState({ product: response.data })
                    //setUserSession(response.data.token, response.data.user);
                    //setAuthLoading(false);
                }).catch(error => {

                    //  removeUserSession();
                    // setAuthLoading(false);
                });
        }

    }
    render() {
        return (

            <main className="container push-top" id="home-body-id">


                <div className="row clearfix" itemscope="" itemtype="https://schema.org/Product">
                    {/* <div className="col-xs-12 col-sm-8">
                        <ol className="breadcrumb">
                            <li><a id="ela-ps-bc-oik" href="/kampanya/alisveris"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Special Discount Club</font></font></a></li>
                            <li><a id="ela-ps-bc-kam-u-s-polo-assn-" href="/kampanya/liste/91150/u-s-polo-assn-"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>

                              {trans(
                                      this.state.product.name_ar,
                                      this.state.product.name_en
                                    )}    
                            </font></font></a></li>
                            <li className="active"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>T-shirt</font></font></li>
                        </ol>
         </div> */}

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
                                <font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Member login</font></font></h4>
                        </div>

                        <Login {...this.props} >
                            {this.props}
                        </Login>
                    </div>

                </div>


                {
                    this.state.product &&
                    this.state.product.photo_by_color &&
                    this.state.product.photo_by_color.map(
                        (photo_by_color, index2) => (
                            index2 == '0' ?
                                (
                                    <div className="row clearfix" id={`${'photo_by_color' + photo_by_color.id}`}   >
                                        <div className="col-600-12 col-xs-5 col-sm-6 col-md-5 col-lg-6">

                                            <div id="product-detail-image-con">

                                                <div className="prod-carousel-con hidden-xs">
                                                    <div id="carousel">
                                                        <ul className="slides">
                                                            {/*  video thumbnail  */}
                                                            {photo_by_color.photos &&

                                                                photo_by_color.photos.map(
                                                                    (photo, index222) => (
                                                                        <li>

                                                                            <img
                                                                                id={index222}
                                                                                src={`${apifunctions.api_server_url + '/' + photo.product_photo_path}`}
                                                                                onClick={(event) => this.onClickSmallImgBtn(
                                                                                    `${apifunctions.api_server_url + '/' + photo.product_photo_path}`
                                                                                    ,
                                                                                    'bigimag' + photo_by_color.id + index2)}
                                                                                alt={trans(
                                                                                    this.state.product.name_ar,
                                                                                    this.state.product.name_en
                                                                                )} title={trans(
                                                                                    this.state.product.name_ar,
                                                                                    this.state.product.name_en
                                                                                )} />

                                                                        </li>
                                                                    )
                                                                )}
                                                        </ul>
                                                        <div className="slidecon move-up disabled">
                                                            <span ariaHidden="true" className="icontype  ui-arrow_up"><svg className="fill-purple" height="7" role="img" title="Up" viewBox="0 0 12 7" width="12"><use xlinkHref="/Content/sprites/morhipo-icons.svg?v=25#ui-arrow_up"></use></svg></span>
                                                        </div>
                                                        <div className="slidecon move-down disabled">
                                                            <span ariaHidden="true" className="icontype  ui-arrow_down"><svg className="fill-purple" height="7" role="img" title="Down" viewBox="0 0 12 7" width="12"><use xlinkHref="/Content/sprites/morhipo-icons.svg?v=25#ui-arrow_down"></use></svg></span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="prod-main-img-con">
                                                    <div className="prime-img easyzoom--adjacent">

                                                        <ul className="slides">
                                                            {photo_by_color.photos &&
                                                                photo_by_color.photos.map(
                                                                    (photo, index22) => (
                                                                        index22 == '0' ?
                                                                            (
                                                                                <li className="is-ready">
                                                                                    <span
                                                                                        className="js-smartphoto" data-id="0" data-group="1" data-index="0">
                                                                                        <img itemprop="image" className="lazy" id={`${'bigimag' + photo_by_color.id + index2}`}
                                                                                            alt={trans(
                                                                                                this.state.product.name_ar,
                                                                                                this.state.product.name_en
                                                                                            )}

                                                                                            title={trans(
                                                                                                this.state.product.name_ar,
                                                                                                this.state.product.name_en
                                                                                            )}
                                                                                            src={`${apifunctions.api_server_url + '/' + photo_by_color.product_photo_path}`} />
                                                                                    </span>
                                                                                </li>
                                                                            ) :
                                                                            <li>
                                                                                <a href={`${apifunctions.api_server_url + '/' + photo_by_color.product_photo_path}`} className="js-smartphoto hidden" data-id="1" data-group="1" data-index="1">
                                                                                    <img itemprop="image" className="lazy"
                                                                                        data-src={`${apifunctions.api_server_url + '/' + photo_by_color.product_photo_path}`} alt={trans(
                                                                                            this.state.product.name_ar,
                                                                                            this.state.product.name_en
                                                                                        )} title={trans(
                                                                                            this.state.product.name_ar,
                                                                                            this.state.product.name_en
                                                                                        )} />
                                                                                </a>
                                                                            </li>
                                                                    )
                                                                )}



                                                        </ul>

                                                    </div>
                                                </div>

                                            </div>
                                        </div>


                                        <div className="col-600-12 col-xs-7 col-sm-6 col-md-7 col-lg-6">
                                            <div className="product-detail-container">
                                                <div className="prod-detail-header">
                                                    <input type="hidden" id="selectedQuantity" name="selectedQuantity" value="0" />
                                                    <div className="row no-margin">
                                                        <div className="col-xs-12 col-sm-12 col-md-7">
                                                            <h1><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>
                                                                {trans(
                                                                    this.state.product.name_ar,
                                                                    this.state.product.name_en
                                                                )}
                                                            </font></font><span className="prod-subtitle text-muted"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>T-shirt</font></font></span>
                                                            </h1>
                                                            <a href="/" title="Share Now" className="btn-share visible-xxs">
                                                                <span ariaHidden="true" className="icontype  ui-share"><svg className="fill-white" height="22" role="img" title="Warning" viewBox="0 0 22 22" width="22"><use xlinkHref="/Content/sprites/morhipo-icons.svg?v=25#ui-share"></use></svg></span>
                                                            </a>
                                                        </div>
                                                        {/* <div className="visible-md visible-lg col-md-5">
                                                            <div className="ps-timer">
                                                                <span ariaHidden="true" className="icontype  ui-timer"><svg height="17" role="img" title="Counter" viewBox="0 0 15 17" width="15"><use xlinkHref="/Content/sprites/morhipo-icons.svg?v=25#ui-timer"></use></svg></span>
                                                                <p><span className="time-left" id="timerID" data-tick="326151"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>3 Days 18:34:57</font></font></span></p>
                                                            </div>
                                                        </div> */}
                                                    </div>
                                                    <div id="product-price">

                                                        <div className="row no-margin">
                                                            <div className="col-xs-12">
                                                                <div className="price-row">
                                                                    <span className="final-price push-right text-danger"><strong><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>
                                                                        $ {this.state.product.showed_price}
                                                                    </font></font></strong></span>
                                                                    <span className="actual-price text-muted bigger push-right"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>
                                                                        {this.state.product.showed_price + 1}  $
                                                    </font></font></span>
                                                                    <span className="discount-percent hidden"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>57% </font></font><span className="smaller"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Discount</font></font></span></span>

                                                                    {/*<div className="cardinfo ellipses">
                                                    <span className="badge-text"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Free cargo</font></font></span>
                                                </div>*/}
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="modal fade" id="taksit-modal" tabindex="-1" role="dialog" aria-labelledby="taksit-modal" ariaHidden="true">
                                                            <div className="modal-dialog">
                                                                <div className="modal-content">
                                                                </div>
                                                            </div>
                                                        </div></div>
                                                </div>
                                                <div className="prod-detail-body">
                                                    <div className="row no-margin">
                                                        <div className="col-xs-12">
                                                            <div className="form-horizontal prodselectform" id="productselectForm">
                                                                <div className="form-group" id="grpColor">
                                                                    <label for="level1" className="col-xxs-12 col-xs-12 control-label">
                                                                        <font style={{ verticalAlign: 'inherit' }}>
                                                                            <font style={{ verticalAlign: 'inherit' }}>
                                                                                Color:
                                            </font></font>
                                                                        <span className="pd-color js-singleClr"><font style={{ verticalAlign: 'inherit' }}>
                                                                            <font style={{ verticalAlign: 'inherit' }}>
                                                                                {trans(
                                                                                    photo_by_color.category.category_name_ar,
                                                                                    photo_by_color.category.category_name_en
                                                                                )}          </font></font></span>
                                                                    </label>
                                                                    <div className="col-xs-12">
                                                                        <div id="colorDiv">
                                                                            <div className="color-section" level="1" role="radiogroup" aria-labelledby="color-selection">
                                                                                <label className="color-item" title="Navy blue" aria-label="Navy blue">
                                                                                    <input type="radio" name="color-select" level="1" value="31958" data-merchcolor="Lacivert" />
                                                                                    {
                                                                                        this.state.product &&
                                                                                        this.state.product.photo_by_color &&
                                                                                        this.state.product.photo_by_color.map(
                                                                                            (photo_by_colo1r, index2) => (
                                                                                                <img
                                                                                                    onClick={(event) => this.onClickBtn('photo_by_color' + photo_by_colo1r.id, 'photo_by_color' + photo_by_color.id)}

                                                                                                    src={`${apifunctions.api_server_url + '/' + photo_by_colo1r.product_photo_path}`} alt="Navy blue" className="color-img" />

                                                                                            )
                                                                                        )
                                                                                    }
                                                                                </label>

                                                                            </div></div>
                                                                    </div>
                                                                </div>
                                                                <div className="form-group pd-size-wrap" id="grpSize">
                                                                    <label for="level2" id="size" className="col-xs-12 control-label">
                                                                        <span className="label-txt"><font style={{ verticalAlign: 'inherit' }}>
                                                                            <font style={{ verticalAlign: 'inherit' }}>Body size:</font>
                                                                        </font>

                                                                        </span>

                                                                        <a rel="nofollow" className="text-black sizetable-link" href="/" style={{ display: 'none' }}>
                                                                            Ölçü Tablosu
                                            </a><div className="usizy-external" data-user="" data-guidelink="/" data-product="4276310" data-price-vat="59.95" data-sizesystem="INT" data-language="tr" data-text="Bedenimi Bul" data-width="200" data-style={{ color: '#6e6c6c', fontSize: '12px', textAlign: 'right' }} style={{ textIndent: '0px', margin: '0px', padding: '0px', float: 'none', lineHeight: 'normal', display: 'inlineBlock', width: '200px', background: 'transparent' }}> </div>
                                                                    </label>
                                                                    <div className="col-xs-12">
                                                                        <div id="sizeDiv">
                                                                            <div className="size-section" id="level2" level="2" data-msg-required="Beden seçimi yapınız"
                                                                                data-rule-required="true" role="radiogroup" aria-labelledby="size">
                                                                                <div className="product-detail-container">
                                                                                    {
                                                                                        photo_by_color.all_product_in_stock &&
                                                                                        photo_by_color.all_product_in_stock.map(
                                                                                            (one_product_in_stock, index2) => (

                                                                                                <span> {
                                                                                                    one_product_in_stock.features &&
                                                                                                    one_product_in_stock.features.map(
                                                                                                        (feature, index3) => (


                                                                                                            feature.category ?
                                                                                                                (

                                                                                                                    (one_product_in_stock.number_in_stock - one_product_in_stock.number_in_cart) > 0 ?
                                                                                                                        (
                                                                                                                            <div className="row">
                                                                                                                                <div className="col-xs-12  col-sm-12 col-md-2">
                                                                                                                                    <label className="size-item 2xl" title={trans(
                                                                                                                                        feature.category.category_name_ar,
                                                                                                                                        feature.category.category_name_en
                                                                                                                                    )} aria-label="2XL Size">
                                                                                                                                        <input type="radio" name="size-select" level="2" value="44643" stocksize="2XL" available="1" />
                                                                                                                                        <span className="size-slt-box" level="2" value="44643" name="2XL">
                                                                                                                                            <font style={{ verticalAlign: 'inherit' }}>
                                                                                                                                                <font style={{ verticalAlign: 'inherit' }}>
                                                                                                                                                    {trans(
                                                                                                                                                        feature.category.category_name_ar,
                                                                                                                                                        feature.category.category_name_en
                                                                                                                                                    )}
                                                                                                                                                </font>
                                                                                                                                            </font>
                                                                                                                                        </span>
                                                                                                                                    </label>
                                                                                                                                </div>
                                                                                                                                <div className="col-xs-12   col-sm-12   col-md-1 ">
                                                                                                                                    <div className=" form-group" ariaHidden="true">
                                                                                                                                        <label for="amount" className="col-xxs-12 col-xs-12 col-sm-2 control-label">
                                                                                                                                            <font style={{ verticalAlign: 'inherit' }}>
                                                                                                                                                <font style={{ verticalAlign: 'inherit' }}>
                                                                                                                                                    <label for="amount" className="col-xxs-12 col-xs-12 col-sm-2 control-label">    PIECE  </label>
                                                                                                                                                </font>
                                                                                                                                            </font>
                                                                                                                                        </label></div> </div>
                                                                                                                                <div className="col-xs-12   col-sm-12  col-md-4">

                                                                                                                                    {

                                                                                                                                        <select className="form-control" name="amount">
                                                                                                                                            {_.range(0, (one_product_in_stock.number_in_stock - one_product_in_stock.number_in_cart)).map(value => <option key={value + 1} value={value + 1}>{value + 1}</option>)}
                                                                                                                                        </select>

                                                                                                                                    }

                                                                                                                                </div>


                                                                                                                                <div className="col-xs-12   col-sm-12   col-md-4">
                                                                                                                                    {getToken() ? (
                                                                                                                                        <button type="button"
                                                                                                                                            onClick={(event) => this.addCurrentStockProducttocart(one_product_in_stock.id)}
                                                                                                                                            className="btn btn-primary btn-lg btn-fullwidth">
                                                                                                                                            <span className="btn-text ladda-label"><font style={{ verticalAlign: 'inherit' }}>
                                                                                                                                                <font style={{ verticalAlign: 'inherit' }}>
                                                                                                                                                    {trans(
                                                                                                                                                        'أضف للسلة',
                                                                                                                                                        '  Add to Basket'
                                                                                                                                                    )} </font></font></span><div className="mloader">
                                                                                                                                                <div className="bnc bnc1"></div>
                                                                                                                                                <div className="bnc bnc2"></div>
                                                                                                                                                <div className="bnc bnc3"></div></div>
                                                                                                                                        </button>
                                                                                                                                    ) : <button
                                                                                                                                        onClick={(event) => this.showLoginDialog()}
                                                                                                                                        type="button" className="btn btn-primary btn-lg btn-fullwidth">
                                                                                                                                            <span className="btn-text ladda-label"><font style={{ verticalAlign: 'inherit' }}>
                                                                                                                                                <font style={{ verticalAlign: 'inherit' }}>
                                                                                                                                                    {trans(
                                                                                                                                                        'أضف للسلة',
                                                                                                                                                        '  Add to Basket'
                                                                                                                                                    )} </font></font></span><div className="mloader">
                                                                                                                                                <div className="bnc bnc1"></div>
                                                                                                                                                <div className="bnc bnc2"></div>
                                                                                                                                                <div className="bnc bnc3"></div></div>
                                                                                                                                        </button>}
                                                                                                                                </div></div>
                                                                                                                        ) :
                                                                                                                        <label className="size-item 3xl" title="3XL" aria-label="3XL Size">
                                                                                                                            <input type="radio" name="size-select" level="2" value="35382" stocksize="3XL" className="outofstock" available="0" disabled="disabled" />
                                                                                                                            <span className="size-slt-box" level="2" value="35382" name={trans(
                                                                                                                                feature.category.category_name_ar,
                                                                                                                                feature.category.category_name_en
                                                                                                                            )} role="button" tabindex="0" data-toggle="popover" data-original-title="" title="">
                                                                                                                                <font style={{ verticalAlign: 'inherit' }}>
                                                                                                                                    <font style={{ verticalAlign: 'inherit' }}>{trans(
                                                                                                                                        feature.category.category_name_ar,
                                                                                                                                        feature.category.category_name_en
                                                                                                                                    )}  </font>
                                                                                                                                </font>
                                                                                                                            </span>
                                                                                                                        </label>

                                                                                                                ) : <span></span>

                                                                                                        )
                                                                                                    )
                                                                                                }
                                                                                                </span>



                                                                                            ))
                                                                                    }
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="modal sizetable-wrapper fade" id="sizetable-modal" tabindex="-1" role="dialog" aria-labelledby="sizetable-modal" ariaHidden="true">
                                                                        <div className="modal-dialog">
                                                                            <div className="modal-content">
                                                                                <div className="modal-body">
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div id="product-detail-addtobasket-con">    <input type="hidden" id="rk" value="91150" />
                                                                    <input type="hidden" id="rt" value="1" />
                                                                    <input name="maxAdet" type="hidden" id="maxCount" value="10" ariaHidden="true" />
                                                                    <input type="hidden" id="campaignIDHolder" value="91150" ariaHidden="true" />

                                                                    <div className="form-group">
                                                                        <div className="col-xs-12   col-sm-12   col-md-12 pd-buttons">

                                                                            <div className="js-outofstock hidden-init">
                                                                                <button type="button" className="btn btn-fullwidth btn-lg btn-default js-btn-nostock" disabled="disabled"></button>
                                                                            </div>
                                                                            <a href="/sepet" className="btn btn-default btn-lg btn-fullwidth btn-gtb">
                                                                                <font style={{ verticalAlign: 'inherit' }}>
                                                                                    <font style={{ verticalAlign: 'inherit' }}>Buy</font></font></a>
                                                                            {getToken() ? (
                                                                                <div id="favorite" >
                                                                                    {
                                                                                        this.state.product.is_favorit ? (


                                                                                            <button type="button"
                                                                                                onClick={(event) => this.removeCurrentProducttoFavorit()}
                                                                                                className="btn btn-block addfav-link">
                                                                                                <span ariaHidden="true"
                                                                                                    onClick={(event) => this.removeCurrentProducttoFavorit()}
                                                                                                    className="icontype  ui-favourite">
                                                                                                    <svg className="stroke-purple" height="16" role="img" title="Favorites" viewBox="0 0 16 16" width="16"><use xlinkHref="/Content/sprites/morhipo-icons.svg?v=25#ui-favourite"></use></svg></span><font style={{ verticalAlign: 'inherit' }}>
                                                                                                    <font style={{ verticalAlign: 'inherit' }}>
                                                                                                        {trans('ازالة من السلة', '  remove from  Favorites')}
                                                                                                    </font></font></button>
                                                                                        ) :
                                                                                            <button type="button"
                                                                                                onClick={(event) => this.addCurrentProducttoFavorit()}
                                                                                                className="btn btn-block addfav-link">
                                                                                                <span ariaHidden="true"
                                                                                                    onClick={(event) => this.addCurrentProducttoFavorit()}
                                                                                                    className="icontype  ui-favourite">
                                                                                                    <svg className="stroke-purple" height="16" role="img" title="Favorites" viewBox="0 0 16 16" width="16"><use xlinkHref="/Content/sprites/morhipo-icons.svg?v=25#ui-favourite"></use></svg></span><font style={{ verticalAlign: 'inherit' }}>
                                                                                                    <font style={{ verticalAlign: 'inherit' }}>
                                                                                                        {trans(
                                                                                                            'أضف للمفضلة',
                                                                                                            ' Add to Favorites'
                                                                                                        )}
                                                                                                    </font></font></button>

                                                                                    }
                                                                                </div>
                                                                            ) : <div id="favorite">
                                                                                    {
                                                                                        this.state.product.is_favorit ? (
                                                                                            <button type="button"
                                                                                                onClick={(event) => this.removeCurrentProducttoFavorit()}
                                                                                                className="btn btn-block addfav-link">
                                                                                                <span ariaHidden="true"
                                                                                                    onClick={(event) => this.removeCurrentProducttoFavorit()}
                                                                                                    className="icontype  ui-favourite">
                                                                                                    <svg className="stroke-purple" height="16" role="img" title="Favorites" viewBox="0 0 16 16" width="16"><use xlinkHref="/Content/sprites/morhipo-icons.svg?v=25#ui-favourite"></use></svg></span><font style={{ verticalAlign: 'inherit' }}>
                                                                                                    <font style={{ verticalAlign: 'inherit' }}>
                                                                                                        {trans('ازالة من السلة', '  remove from  Favorites')}
                                                                                                    </font></font></button>

                                                                                        ) :


                                                                                            <button type="button"
                                                                                                onClick={(event) => this.addCurrentProducttoFavorit()}
                                                                                                className="btn btn-block addfav-link">
                                                                                                <span ariaHidden="true"
                                                                                                    onClick={(event) => this.addCurrentProducttoFavorit()}
                                                                                                    className="icontype  ui-favourite">
                                                                                                    <svg className="stroke-purple" height="16" role="img" title="Favorites" viewBox="0 0 16 16" width="16"><use xlinkHref="/Content/sprites/morhipo-icons.svg?v=25#ui-favourite"></use></svg></span><font style={{ verticalAlign: 'inherit' }}>
                                                                                                    <font style={{ verticalAlign: 'inherit' }}>
                                                                                                        Add to Favorites
                                                                                   </font></font></button>
                                                                                    }
                                                                                </div>}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/*  
                                                             <div className="hidden-buydetails" id="product-deliveryinfo" style={{ display: 'block' }}>
                                                                <div className="row">
                                                                    <div className="col-xs-12 col-xs-offset-0 col-sm-10 col-sm-offset-0 col-md-8">
                                                                        <div className="delivery-date text-center"><strong>
                                                                            <font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Estimated Delivery Date&nbsp;</font></font></strong>
                                                                            <font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}> May 18 - June 06</font></font>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                                        </div> 
                                                               */}
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                            {/* 
                                                <div className="loyalty-promoter">
                                                    <div className="loyalty-promoter-inner">
                                                        <span   className="icontype  ui-m-logo-new">
                                                            <svg className="fill-purple push-right" height="24" role="img" title="Morpass" viewBox="0 0 24 24" width="24">
                                                                <use xlinkHref="/Content/sprites/morhipo-icons.svg?v=25#ui-m-logo-new"></use>
                                                                </svg>
                                                        </span>



                                                        <span className="morpass-notify" data-tier="none">
                                                            <span><strong><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>With Morpass</font></font></strong><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}> , 150 TL and Over </font><strong><font style={{ verticalAlign: 'inherit' }}>Cargo</font></strong><font style={{ verticalAlign: 'inherit' }}> is Free! </font></font><a href="/morpass" className="importantlink"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Become a Morpass!</font></font></a></span>
                                                        </span>

                                                    </div>  
                                                </div>
                                            */}

                                        </div>



                                    </div>
                                ) :

                                <div className="row clearfix" style={{ display: "none" }} id={`${'photo_by_color' + photo_by_color.id}`}  >

                                    <div className="col-700-12 col-xs-5 col-sm-6 col-md-5 col-lg-6">

                                        <div id="product-detail-image-con">

                                            <div className="prod-carousel-con hidden-xs">
                                                <div id="carousel">
                                                    <ul className="slides">
                                                        {/*  video thumbnail  */}
                                                        {photo_by_color.photos &&

                                                            photo_by_color.photos.map(
                                                                (photo, index2222) => (
                                                                    <li>

                                                                        <img
                                                                            id={index2222}
                                                                            src={`${apifunctions.api_server_url + '/' + photo.product_photo_path}`}
                                                                            onClick={(event) => this.onClickSmallImgBtn(
                                                                                `${apifunctions.api_server_url + '/' + photo.product_photo_path}`
                                                                                ,
                                                                                'bigimag' + photo_by_color.id + index2)}
                                                                            alt={trans(
                                                                                this.state.product.name_ar,
                                                                                this.state.product.name_en
                                                                            )} title={trans(
                                                                                this.state.product.name_ar,
                                                                                this.state.product.name_en
                                                                            )} />

                                                                    </li>
                                                                )
                                                            )}
                                                    </ul>
                                                    <div className="slidecon move-up disabled">
                                                        <span ariaHidden="true" className="icontype  ui-arrow_up"><svg className="fill-purple" height="7" role="img" title="Up" viewBox="0 0 12 7" width="12"><use xlinkHref="/Content/sprites/morhipo-icons.svg?v=25#ui-arrow_up"></use></svg></span>
                                                    </div>
                                                    <div className="slidecon move-down disabled">
                                                        <span ariaHidden="true" className="icontype  ui-arrow_down"><svg className="fill-purple" height="7" role="img" title="Down" viewBox="0 0 12 7" width="12"><use xlinkHref="/Content/sprites/morhipo-icons.svg?v=25#ui-arrow_down"></use></svg></span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="prod-main-img-con">
                                                <div className="prime-img easyzoom--adjacent">

                                                    <ul className="slides">
                                                        {photo_by_color.photos &&
                                                            photo_by_color.photos.map(
                                                                (photo, index3) => (
                                                                    index3 == '0' ?
                                                                        (
                                                                            <li className="is-ready">
                                                                                <span
                                                                                    className="js-smartphoto" data-id="0" data-group="1" data-index="0">
                                                                                    <img itemprop="image" className="lazy" id={`${'bigimag' + photo_by_color.id + index2}`}
                                                                                        alt={this.state.product.name_ar}
                                                                                        title={this.state.product.name_ar}
                                                                                        src={`${apifunctions.api_server_url + '/' + photo_by_color.product_photo_path}`} />
                                                                                </span>
                                                                            </li>
                                                                        ) :
                                                                        <li>
                                                                            <a href={`${apifunctions.api_server_url + '/' + photo_by_color.product_photo_path}`}
                                                                                className="js-smartphoto hidden" data-id="1" data-group="1" data-index="1">
                                                                                <img itemprop="image" className="lazy"
                                                                                    data-src={`${apifunctions.api_server_url + '/' + photo_by_color.product_photo_path}`} alt={this.state.product.name_ar} title={this.state.product.name_ar} />
                                                                            </a>
                                                                        </li>
                                                                )
                                                            )}



                                                    </ul>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-600-12 col-xs-7 col-sm-6 col-md-7 col-lg-6">
                                        <div className="product-detail-container">
                                            <div className="prod-detail-header">
                                                <input type="hidden" id="selectedQuantity" name="selectedQuantity" value="0" />
                                                <div className="row no-margin">
                                                    <div className="col-xs-12 col-sm-12 col-md-7">
                                                        <h1><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>
                                                            {this.state.product.name_ar}
                                                        </font></font><span className="prod-subtitle text-muted"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>T-shirt</font></font></span>
                                                        </h1>
                                                        <a href="/" title="Share Now" className="btn-share visible-xxs">
                                                            <span ariaHidden="true" className="icontype  ui-share"><svg className="fill-white" height="22" role="img" title="Warning" viewBox="0 0 22 22" width="22"><use xlinkHref="/Content/sprites/morhipo-icons.svg?v=25#ui-share"></use></svg></span>
                                                        </a>
                                                    </div>
                                                    {/* <div className="visible-md visible-lg col-md-5">
                <div className="ps-timer">
                    <span ariaHidden="true" className="icontype  ui-timer"><svg height="17" role="img" title="Counter" viewBox="0 0 15 17" width="15"><use xlinkHref="/Content/sprites/morhipo-icons.svg?v=25#ui-timer"></use></svg></span>
                    <p><span className="time-left" id="timerID" data-tick="326151"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>3 Days 18:34:57</font></font></span></p>
                </div>
            </div> */}
                                                </div>
                                                <div id="product-price">

                                                    <div className="row no-margin">
                                                        <div className="col-xs-12">
                                                            <div className="price-row">
                                                                <span className="final-price push-right text-danger"><strong><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>
                                                                    $ {this.state.product.showed_price}
                                                                </font></font></strong></span>
                                                                <span className="actual-price text-muted bigger push-right"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>
                                                                    {this.state.product.showed_price + 1}  $
        </font></font></span>
                                                                <span className="discount-percent hidden"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>57% </font></font><span className="smaller"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Discount</font></font></span></span>

                                                                {/*<div className="cardinfo ellipses">
        <span className="badge-text"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Free cargo</font></font></span>
    </div>*/}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="modal fade" id="taksit-modal" tabindex="-1" role="dialog" aria-labelledby="taksit-modal" ariaHidden="true">
                                                        <div className="modal-dialog">
                                                            <div className="modal-content">

                                                            </div>
                                                        </div>
                                                    </div></div>
                                            </div>
                                            <div className="prod-detail-body">
                                                <div className="row no-margin">
                                                    <div className="col-xs-12">
                                                        <div className="form-horizontal prodselectform" id="productselectForm">
                                                            <div className="form-group" id="grpColor">
                                                                <label for="level1" className="col-xxs-12 col-xs-12 control-label">
                                                                    <font style={{ verticalAlign: 'inherit' }}>
                                                                        <font style={{ verticalAlign: 'inherit' }}>
                                                                            Color:
</font></font>
                                                                    <span className="pd-color js-singleClr"><font style={{ verticalAlign: 'inherit' }}>
                                                                        <font style={{ verticalAlign: 'inherit' }}>
                                                                            {photo_by_color.category.category_name_ar}      </font></font></span>
                                                                </label>
                                                                <div className="col-xs-12">
                                                                    <div id="colorDiv">
                                                                        <div className="color-section" level="1" role="radiogroup" aria-labelledby="color-selection">
                                                                            <label className="color-item" title="Navy blue" aria-label="Navy blue">
                                                                                <input type="radio" name="color-select" level="1" value="31958" data-merchcolor="Lacivert" />
                                                                                {
                                                                                    this.state.product &&
                                                                                    this.state.product.photo_by_color &&
                                                                                    this.state.product.photo_by_color.map(
                                                                                        (photo_by_colo1r, index2) => (
                                                                                            <img
                                                                                                src={`${apifunctions.api_server_url + '/' + photo_by_colo1r.product_photo_path}`}

                                                                                                onClick={(event) => this.onClickBtn('photo_by_color' + photo_by_colo1r.id, 'photo_by_color' + photo_by_color.id)}
                                                                                                alt="Navy blue" className="color-img" />

                                                                                        )
                                                                                    )
                                                                                }
                                                                            </label></div></div>
                                                                </div>
                                                            </div>
                                                            <div className="form-group pd-size-wrap" id="grpSize">
                                                                <label for="level2" id="size" className="col-xs-12 control-label">
                                                                    <span className="label-txt"><font style={{ verticalAlign: 'inherit' }}>
                                                                        <font style={{ verticalAlign: 'inherit' }}>Body size:</font>
                                                                    </font>

                                                                    </span>

                                                                    <a rel="nofollow" className="text-black sizetable-link" href="/" style={{ display: 'none' }}>
                                                                        Ölçü Tablosu
</a><div className="usizy-external" data-user="" data-guidelink="/" data-product="4276310" data-price-vat="59.95" data-sizesystem="INT" data-language="tr" data-text="Bedenimi Bul" data-width="200" data-style={{ color: '#6e6c6c', fontSize: '12px', textAlign: 'right' }} style={{ textIndent: '0px', margin: '0px', padding: '0px', float: 'none', lineHeight: 'normal', display: 'inlineBlock', width: '200px', background: 'transparent' }}> </div>
                                                                </label>
                                                                <div className="col-xs-12">
                                                                    <div id="sizeDiv">
                                                                        <div className="size-section" id="level2" level="2" data-msg-required="Beden seçimi yapınız"
                                                                            data-rule-required="true" role="radiogroup" aria-labelledby="size">
                                                                            <div className="product-detail-container">
                                                                                {
                                                                                    photo_by_color.all_product_in_stock &&
                                                                                    photo_by_color.all_product_in_stock.map(
                                                                                        (one_product_in_stock, index2) => (

                                                                                            <span> {
                                                                                                one_product_in_stock.features &&
                                                                                                one_product_in_stock.features.map(
                                                                                                    (feature, index3) => (


                                                                                                        feature.category ?
                                                                                                            (

                                                                                                                (one_product_in_stock.number_in_stock - one_product_in_stock.number_in_cart) > 0 ?
                                                                                                                    (
                                                                                                                        <div className="row">
                                                                                                                            <div className="col-xs-12  col-sm-12 col-md-2">
                                                                                                                                <label className="size-item 2xl" title={feature.category.category_name_ar} aria-label="2XL Size">
                                                                                                                                    <input type="radio" name="size-select" level="2" value="44643" stocksize="2XL" available="1" />
                                                                                                                                    <span className="size-slt-box" level="2" value="44643" name="2XL">
                                                                                                                                        <font style={{ verticalAlign: 'inherit' }}>
                                                                                                                                            <font style={{ verticalAlign: 'inherit' }}>{feature.category.category_name_ar}  </font>
                                                                                                                                        </font>
                                                                                                                                    </span>
                                                                                                                                </label>
                                                                                                                            </div>
                                                                                                                            <div className="col-xs-12   col-sm-12   col-md-1 ">
                                                                                                                                <div className=" form-group" ariaHidden="true">
                                                                                                                                    <label for="amount" className="col-xxs-12 col-xs-12 col-sm-2 control-label">
                                                                                                                                        <font style={{ verticalAlign: 'inherit' }}>
                                                                                                                                            <font style={{ verticalAlign: 'inherit' }}>
                                                                                                                                                <label for="amount" className="col-xxs-12 col-xs-12 col-sm-2 control-label">    PIECE  </label>
                                                                                                                                            </font>
                                                                                                                                        </font>
                                                                                                                                    </label></div> </div>
                                                                                                                            <div className="col-xs-12   col-sm-12  col-md-4">

                                                                                                                                {

                                                                                                                                    <select className="form-control" name="amount">
                                                                                                                                        {_.range(0, (one_product_in_stock.number_in_stock - one_product_in_stock.number_in_cart)).map(value => <option key={value + 1} value={value + 1}>{value + 1}</option>)}
                                                                                                                                    </select>

                                                                                                                                }

                                                                                                                            </div>


                                                                                                                            <div className="col-xs-12   col-sm-12   col-md-4">
                                                                                                                                {getToken() ? (
                                                                                                                                    <button type="button"
                                                                                                                                        onClick={(event) => this.addCurrentStockProducttocart(one_product_in_stock.id)}
                                                                                                                                        className="btn btn-primary btn-lg btn-fullwidth">
                                                                                                                                        <span className="btn-text ladda-label"><font style={{ verticalAlign: 'inherit' }}>
                                                                                                                                            <font style={{ verticalAlign: 'inherit' }}>
                                                                                                                                                {trans(
                                                                                                                                                    'اضف للسلة', ' Add to Basket'

                                                                                                                                                )}   </font></font></span><div className="mloader">
                                                                                                                                            <div className="bnc bnc1"></div>
                                                                                                                                            <div className="bnc bnc2"></div>
                                                                                                                                            <div className="bnc bnc3"></div></div>
                                                                                                                                    </button>
                                                                                                                                ) : <button
                                                                                                                                    onClick={(event) => this.showLoginDialog()}
                                                                                                                                    type="button" className="btn btn-primary btn-lg btn-fullwidth">
                                                                                                                                        <span className="btn-text ladda-label"><font style={{ verticalAlign: 'inherit' }}>
                                                                                                                                            <font style={{ verticalAlign: 'inherit' }}>
                                                                                                                                                Add to Basket</font></font></span><div className="mloader">
                                                                                                                                            <div className="bnc bnc1"></div>
                                                                                                                                            <div className="bnc bnc2"></div>
                                                                                                                                            <div className="bnc bnc3"></div></div>
                                                                                                                                    </button>}
                                                                                                                            </div></div>
                                                                                                                    ) :
                                                                                                                    <label className="size-item 3xl" title="3XL" aria-label="3XL Size">
                                                                                                                        <input type="radio" name="size-select" level="2" value="35382" stocksize="3XL" className="outofstock" available="0" disabled="disabled" />
                                                                                                                        <span className="size-slt-box" level="2" value="35382" name="{feature.category.category_name_ar}" role="button" tabindex="0" data-toggle="popover" data-original-title="" title="">
                                                                                                                            <font style={{ verticalAlign: 'inherit' }}>
                                                                                                                                <font style={{ verticalAlign: 'inherit' }}>{feature.category.category_name_ar}</font>
                                                                                                                            </font>
                                                                                                                        </span>
                                                                                                                    </label>

                                                                                                            ) : <span></span>

                                                                                                    )
                                                                                                )
                                                                                            }
                                                                                            </span>



                                                                                        ))
                                                                                }
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="modal sizetable-wrapper fade" id="sizetable-modal" tabindex="-1" role="dialog" aria-labelledby="sizetable-modal" ariaHidden="true">
                                                                    <div className="modal-dialog">
                                                                        <div className="modal-content">
                                                                            <div className="modal-body">
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div id="product-detail-addtobasket-con">    <input type="hidden" id="rk" value="91150" />
                                                                <input type="hidden" id="rt" value="1" />
                                                                <input name="maxAdet" type="hidden" id="maxCount" value="10" ariaHidden="true" />
                                                                <input type="hidden" id="campaignIDHolder" value="91150" ariaHidden="true" />

                                                                <div className="form-group">
                                                                    <div className="col-xs-12   col-sm-12   col-md-12 pd-buttons">

                                                                        <div className="js-outofstock hidden-init">
                                                                            <button type="button" className="btn btn-fullwidth btn-lg btn-default js-btn-nostock" disabled="disabled"></button>
                                                                        </div>
                                                                        <a href="/sepet" className="btn btn-default btn-lg btn-fullwidth btn-gtb">
                                                                            <font style={{ verticalAlign: 'inherit' }}>
                                                                                <font style={{ verticalAlign: 'inherit' }}>Buy</font></font></a>
                                                                        {getToken() ? (
                                                                            <div id="favorite" >
                                                                                <button type="button"
                                                                                    onClick={(event) => this.addCurrentProducttoFavorit()}
                                                                                    className="btn btn-block addfav-link">
                                                                                    <span ariaHidden="true"
                                                                                        onClick={(event) => this.addCurrentProducttoFavorit()}
                                                                                        className="icontype  ui-favourite">
                                                                                        <svg className="stroke-purple" height="16" role="img" title="Favorites" viewBox="0 0 16 16" width="16"><use xlinkHref="/Content/sprites/morhipo-icons.svg?v=25#ui-favourite"></use></svg></span><font style={{ verticalAlign: 'inherit' }}>
                                                                                        <font style={{ verticalAlign: 'inherit' }}>
                                                                                            Favorites
                                                                                             </font></font></button>
                                                                            </div>
                                                                        ) : <div id="favorite">
                                                                                <button
                                                                                    onClick={(event) => this.showLoginDialog()}
                                                                                    type="button" className="btn btn-block addfav-link">
                                                                                    <span ariaHidden="true" className="icontype  ui-favourite">
                                                                                        <svg className="stroke-purple" height="16" role="img" title="Favorites" viewBox="0 0 16 16" width="16"><use xlinkHref="/Content/sprites/morhipo-icons.svg?v=25#ui-favourite"></use></svg></span><font style={{ verticalAlign: 'inherit' }}>
                                                                                        <font style={{ verticalAlign: 'inherit' }}>
                                                                                            Favorites
                </font></font></button>
                                                                            </div>}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/*  
                 <div className="hidden-buydetails" id="product-deliveryinfo" style={{ display: 'block' }}>
                    <div className="row">
                        <div className="col-xs-12 col-xs-offset-0 col-sm-10 col-sm-offset-0 col-md-8">
                            <div className="delivery-date text-center"><strong>
                                <font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Estimated Delivery Date&nbsp;</font></font></strong>
                                <font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}> May 18 - June 06</font></font>
                            </div>
                        </div>
                    </div>
                                            </div> 
                   */}
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                        {/* 
    <div className="loyalty-promoter">
        <div className="loyalty-promoter-inner">
            <span   className="icontype  ui-m-logo-new">
                <svg className="fill-purple push-right" height="24" role="img" title="Morpass" viewBox="0 0 24 24" width="24">
                    <use xlinkHref="/Content/sprites/morhipo-icons.svg?v=25#ui-m-logo-new"></use>
                    </svg>
            </span>



            <span className="morpass-notify" data-tier="none">
                <span><strong><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>With Morpass</font></font></strong><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}> , 150 TL and Over </font><strong><font style={{ verticalAlign: 'inherit' }}>Cargo</font></strong><font style={{ verticalAlign: 'inherit' }}> is Free! </font></font><a href="/morpass" className="importantlink"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Become a Morpass!</font></font></a></span>
            </span>

        </div>  
    </div>
*/}

                                    </div>



                                </div >

                        )
                    )
                }
                <div className="row test-act">
                    <div className="col-xs-12 col-sm-12 col-md-6">
                        <div className="tabdetails-container">





                            <div className="index-match tab-to-accord panel-group" id="product_tabs-accordion">
                                <div className="panel panel-default panel-faq">
                                    <a className="panel-heading" id="ela-urun-sekme-accr-aboutprodtab" data-toggle="collapse" data-parent="#product_tabs-accordion" href="#aboutprodtab" aria-expanded="true">
                                        <h2 className="h4 panel-title"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>
                                            {trans(
                                                'معلومات المنتجات',
                                                'About product'
                                            )}
                                        </font></font><span className="css-arrow down pull-right"></span></h2>
                                    </a>
                                    <div id="aboutprodtab" className="panel-collapse animated-collapse collapse in" aria-expanded="true" >
                                        <div className="panel-body js-tabcollapse-panel-body">
                                            < div className="row no-margin">
                                                <div className="col-sm-12">


                                                    <p>
                                                        <strong><a rel="nofollow" className="js-size-trigger" href="/"><font style={{ verticalAlign: 'inherit' }}>
                                                            <font style={{ verticalAlign: 'inherit' }}>


                                                                {trans(
                                                                    'التفاصيل',
                                                                    'Detailed  '
                                                                )}
                                                            </font></font></a></strong>
                                                    </p>

                                                    <p className="pd-block"><span className="productdetail-title"><font style={{ verticalAlign: 'inherit' }}>
                                                        <font style={{ verticalAlign: 'inherit' }}>
                                                            {trans(
                                                                'اسم المنتج',
                                                                'Product Name:'
                                                            )}
                                                        </font></font></span><font style={{ verticalAlign: 'inherit' }}>
                                                            <font style={{ verticalAlign: 'inherit' }}>
                                                                {trans(
                                                                    this.state.product.name_ar,
                                                                    this.state.product.name_en
                                                                )}

                                                            </font></font></p><p className="pd-block"><b>
                                                                <font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>
                                                                    {trans(
                                                                        'المواد المصنعة',
                                                                        'Material:  '
                                                                    )}
                                                                </font></font></b><span>
                                                            <font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>
                                                                {trans(
                                                                    'قطن     ',
                                                                    '100% Cotton'
                                                                )}
                                                            </font></font></span></p>
                                                    <p className="pd-block"><b><font style={{ verticalAlign: 'inherit' }}>
                                                        <font style={{ verticalAlign: 'inherit' }}>
                                                            {trans(
                                                                'معلومات',
                                                                ' Fit / Mold Information:   '
                                                            )}

                                                        </font></font></b><span>
                                                            <font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>
                                                                {trans(
                                                                    '  ',
                                                                    '  '
                                                                )}
                                                            </font></font></span></p>
                                                    <p><span className="productdetail-title"><font style={{ verticalAlign: 'inherit' }}>
                                                        <font style={{ verticalAlign: 'inherit' }}>
                                                            {trans(
                                                                ' تفاصيل المنتج',
                                                                'Product Detail'
                                                            )}  :  {trans(
                                                                this.state.product.note_ar,
                                                                this.state.product.note_en
                                                            )} </font></font></span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="panel panel-default panel-faq">
                                    {/*<a className="panel-heading" id="ela-urun-sekme-accr-deliverytab" data-toggle="collapse" data-parent="#product_tabs-accordion" href="#deliverytab">
                                        <h2 className="h4 panel-title"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Delivery and Returns </font></font>
                                            <span className="css-arrow down pull-right"></span></h2>
            </a> */}
                                    <div id="deliverytab" className="panel-collapse animated-collapse collapse">
                                        <div className="panel-body js-tabcollapse-panel-body">
                                            <div className="row no-margin">
                                                <div className="col-sm-12">
                                                    <strong><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Delivery</font></font></strong>
                                                    <p><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>
                                                        • Your orders are delivered to you by the shipping company on the estimated delivery date specified. </font></font><br />
                                                    </p>
                                                    <strong><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Return</font></font></strong>
                                                    <p><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>
                                                        • You can return any product you purchased </font><strong><font style={{ verticalAlign: 'inherit' }}>free of charge within 15 days of the day</font></strong><font style={{ verticalAlign: 'inherit' }}> your order is received, provided that it complies with the terms of </font></font><strong><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>return.</font></font></strong>
                                                    </p>
                                                    <p>
                                                        <a href="/sss"><strong><font style={{ verticalAlign: 'inherit' }}></font></strong></a><font style={{ verticalAlign: 'inherit' }}>
                                                            <font style={{ verticalAlign: 'inherit' }}>You can find details about delivery and return in our</font><a href="/sss"><strong>
                                                                <font style={{ verticalAlign: 'inherit' }}> Frequently Asked Questions</font></strong></a><font style={{ verticalAlign: 'inherit' }}> section.
                                    </font></font></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>





                        </div>
                        {/*                
        <a href="/kampanya/liste/91150/u-s-polo-assn-" title=" {this.state.product.name_ar}  See All Products of Your Campaign" className="allproducts-link"><strong className="listname-link">
                            <font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}> {this.state.product.name_ar}</font></font></strong><span className="pull-right text-muted">
                                <font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Go to the campaign </font></font><span className="css-arrow right push-left"></span></span></a>

 
                        <div className="row half-margin">

                            <div className="col-xxs-12 col-xs-6">
                                <div className="badge-item">
                                    <a data-toggle="popover" data-container="body" data-placement="bottom" type="button" data-html="true" href="/" id="kapi-info" className="add-popover" data-original-title="" title="">
                                        <span className="badge-icon">
                                            <span ariaHidden="true" className="icontype  ui-kapida-odeme"><svg className="fill-purple" height="24" role="img" title="Pay at the door" viewBox="0 0 24 24" width="24"><use xlinkHref="/Content/sprites/morhipo-icons.svg?v=25#ui-kapida-odeme"></use></svg></span>
                                        </span>
                                        <span className="badge-exp"><strong className="text-primary">Kapıda Ödeme</strong> ile Nakit veya Kartla Ödeme İmkanı</span>
                                    </a>
                                    <div id="popover-kapi-info" className="hide"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>
                                        You can make your payment when you receive your order by using Credit Card or Cash payment options at the door.</font></font><br />
                                        <a id="ela-urun-detay-kapida-odeme-detay" href="/sss?k=19"><font style={{ verticalAlign: 'inherit' }}>
                                            <font style={{ verticalAlign: 'inherit' }}>Details ...</font></font></a>
                                    </div>

                                </div>
                            </div>
                        </div>
  */}

                    </div>
                    {/* <div className="hidden-xs hidden-sm col-md-6">
                        <div className="abt-vis-wrap">
                            <img src="https://img-morhipo.mncdn.com/mnresize/1200/1645/productimages/i/8681896236289/[img][5][3].jpg?1332"
                                className="img-responsive about-img ls-is-cached lazyloaded" alt="T-shirts" /></div></div> */}
                </div><div className="no-stock-popover hide">
                    <div className="no-stock-popover-inside">
                        <span><font style={{ verticalAlign: 'inherit' }}>
                            <font style={{ verticalAlign: 'inherit' }}>The product you are looking for </font></font><strong><span className="no-stock-size"></span>
                                <font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>his body is</font></font></strong><font style={{ verticalAlign: 'inherit' }}>
                                <font style={{ verticalAlign: 'inherit' }}> exhausted.</font></font></span>
                    </div>
                </div>

                <div className="row clearfix">
                    <div className="col-xs-12" id="similarProducts">
                    </div>
                </div>




                <div id="alertPopup" style={{ display: 'none' }}>
                </div>
            </main >
        );
    }
}

