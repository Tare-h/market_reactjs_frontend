
import _ from 'lodash';
import React from 'react'
import axios from 'axios';
import apifunctions from "../api/apifunctions";
import $ from "jquery";
import Login from '../components/account/Login';
import { useState, useEffect, useRef } from 'react';
import { useFormik } from "formik";
import { Formik, FormikProps, Form, Field, ErrorMessage } from 'formik';

import * as Yup from 'yup';


import {
    getUser,
    getToken,
    getLang,
    transToEnglish,
    transToArabic,
    trans,
    currency_trans, currency_transing, calc_discount,
    removeUserSession,
    setUserSession,
} from '../Utils/Common';
export default function Product(props) {
    const [context, setcontext] = useState(props.context);
    const [product_id, setproduct_id] = useState("");
    const [product, setproduct] = useState({});
    const [products, setProducts] = useState([]);

    const updateCurrentProduct = (e) => {
        {
            $(".loadscr-container").show();
            let product_id_in_url = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
            axios.post(apifunctions.api_server_url + '/update_product/' + product_id_in_url
                ,
                {
                    name: document.getElementById('name_ar').value
                    , name_en: document.getElementById('name_en').value
                    , newprice: document.getElementById('newprice').value
                    , showed_price: document.getElementById('showed_price').value
                    , material_ar: document.getElementById('material_ar').value
                    , material_en: document.getElementById('material_en').value
                    , note_ar: document.getElementById('note_ar').value
                    , note_en: document.getElementById('note_en').value

                }

                ,
                {
                    headers: {
                        Authorization: 'Bearer ' + getToken(),
                        'Content-Type': 'application/json'

                    }
                }

            ).then(response => {
                //  setUserSession(getToken(), response.data);
                // console.log(response);

                $(".loadscr-container").hide();
                let data = response.data;

                let newproduct = { ...product, data };
                setproduct(newproduct);


                //window.location.reload(false);

                // this.props.history.push('/product/' + product_id_in_url);
                // this.props.history.push('/profile');
            }).catch(error => {
                //// console.log(error);
                $(".loadscr-container").hide();


            });
        }

    }
    const deleteCurrentProductwithallStocks = (e) => {
        if (window.confirm('حذف نهائي')) {
            $(".loadscr-container").show();
            let product_id_in_url = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
            axios.post(apifunctions.api_server_url + '/delete_product_with_all_stocks/' + product_id_in_url
                ,
                {}
                ,
                {
                    headers: {
                        Authorization: 'Bearer ' + getToken(),
                        'Content-Type': 'application/json'

                    }
                }

            ).then(response => {
                //  setUserSession(getToken(), response.data);
                // console.log(response);
                $(".loadscr-container").hide();
                setproduct({});

                //win   dow.location.reload(false);

                // this.props.history.push('/product/' + product_id_in_url);
                // this.props.history.push('/profile');
            }).catch(error => {
                //// console.log(error);
                $(".loadscr-container").hide();
                if (error.response.status === 401) {


                }

            });
        }

    }
    const removeCurrentProducttoFavorit = (e) => {
        $(".loadscr-container").show();
        let product_id_in_url = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
        axios.post(apifunctions.api_server_url + '/delete_product_from_favorid/' + product_id_in_url

            ,
            {}
            ,
            {
                headers: {
                    Authorization: 'Bearer ' + getToken(),
                    'Content-Type': 'application/json'

                }
            }

        ).then(response => {
            //  setUserSession(getToken(), response.data);

            $(".loadscr-container").hide();
            $("#fav_count").html(response.data.favorite_count);


            product.is_favorit = false;
            let newproduct = { ...product, is_favorit: false };
            setproduct(newproduct);


        }).catch(error => {
            //// console.log(error);
            $(".loadscr-container").hide();
            if (error.response.status === 401) {

                if (error.response.data.error == "emial already exist") {

                }
            }

        });
    }
    const addCurrentProducttoFavorit = (e) => {

        let product_id_in_url = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
        $(".loadscr-container").show();
        axios.post(apifunctions.api_server_url + '/add_product_to_favorid/' + product_id_in_url

            ,
            {}
            ,
            {
                headers: {
                    Authorization: 'Bearer ' + getToken(),
                    'Content-Type': 'application/json'

                }
            }

        ).then(response => {
            //  setUserSession(getToken(), response.data);
            // console.log(response);
            $(".loadscr-container").hide();
            $("#fav_count").html(response.data.favorite_count);

            product.is_favorit = true;

            product.is_favorit = true;
            let newproduct = { ...product, is_favorit: true };
            setproduct(newproduct);
            //  window.location.reload(false);

            //  this.props.history.push('/product/' + product_id_in_url);
            $(".loadscr-container").hide();
        }).catch(error => {
            //// console.log(error);
            $(".loadscr-container").hide();
            if (error.response.status === 401) {

                if (error.response.data.error == "emial already exist") {

                }
            }
            $(".loadscr-container").hide();
        });
    }
    const addCurrentStockProducttocart = (e, one_product_in_stock_id) => {
        // alert(one_product_in_stock_id);
        $(".loadscr-container").show();

        axios.post(apifunctions.api_server_url + '/add_stack_product_to_cart/' + one_product_in_stock_id

            ,
            {}
            ,
            {
                headers: {
                    Authorization: 'Bearer ' + getToken(),
                    'Content-Type': 'application/json'

                }
            }

        ).then(response => {
            //  setUserSession(getToken(), response.data);
            // console.log(response);

            $(".loadscr-container").hide();
            $("#cart_count").html(response.data.cart_count);
            let url = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
            $(".loadscr-container").show();
            axios.get(apifunctions.api_server_url + '/api/full_product_details/' + url,
                config,
                bodyParameters
            ).then(response => {

                let data = response.data;

                let newproduct = { ...product, data };
                setproduct(response.data);

                //setUserSession(response.data.token, response.data.user);
                //setAuthLoading(false);
                $(".loadscr-container").hide();
            }).catch(error => {
                $(".loadscr-container").hide();
                //  removeUserSession();
                // setAuthLoading(false);
            });
            $(".loadscr-container").hide();
            // this.props.history.push('/profile');
        }).catch(error => {
            //// console.log(error);
            $(".loadscr-container").hide();
            if (error && error.response && error.response.status && error.response.status === 401) {

                if (error.response.data.error == "emial already exist") {

                }
            }

        });
    }
    const showLoginDialog = (e) => {
        $("#login_dialog").show();
        // 
    }
    const closeLoginDialog = (e) => {

        $("#login_dialog").hide();
        // 
    }
    const onClickBtn = (e, dictoshow, currentDiv) => {
        // Getting ref to JQuery object from our parent app.
        if (currentDiv != dictoshow) {
            $("#" + dictoshow).show();
            $("#" + currentDiv).hide();

        }

    }
    const imageZoom = (e, current_src, targetimg_id, previwimg_id) => {
        $('#' + previwimg_id).show();
        //    alert(previwimg_id);
        // Getting ref to JQuery object from our parent app.
        //  var myImg = document.querySelector("#" + targetimg_id);
        //   var realWidth = myImg.naturalWidth;
        //    var realHeight = myImg.naturalHeight;
        $('#' + previwimg_id).width(300);
        $('#' + previwimg_id).height(400);

        // e && e.preventDefault();
        // window.zoomme(e);
        //  window.imageZoom('bigimag1570', 'myresult1570');
        // window. m.attach({thumb: '#thumb'});
        // alert(targetimg_id);
        window.m.attach({
            thumb: '#' + targetimg_id,
            large: current_src,
            mode: 'outside',
            zoom: 2,
            zoomable: true
        });
    }
    const imageonMouseOut = (e, current_src, targetimg_id, previwimg_id) => {
        $('#' + previwimg_id).hide();
    }
    const imageonMouseOutDiventEntred = (e, current_src, targetimg_id, previwimg_id) => {
        $('#' + previwimg_id).hide();
    }
    const imageonMouseOutDiventOuted = (e, current_src, targetimg_id, previwimg_id) => {
        //   $('#' + previwimg_id).show();
    }

    const onClickSmallImgBtn = (e, current_src, targetimg_id) => {
        // Getting ref to JQuery object from our parent app.
        // console.log('targetimg_id =  ' + targetimg_id + ' ,current_src = ' + current_src);

        $('#' + targetimg_id).attr('src', current_src);


    }
    useEffect(() => {
        //window.location.href)
        let url = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);

        if (product_id != url) {

            setproduct_id(url);

            setProducts([]);


            const config = {
                headers: {
                    Authorization: 'Bearer ' + getToken(),
                    'Content-Type': 'application/json'

                }
            };
            const bodyParameters = {
                key: "value"
            };
            $(".loadscr-container").show();
            axios.get(apifunctions.api_server_url + '/api/full_product_details/' + url,
                config,
                bodyParameters
            ).then(response => {


                setproduct(response.data);;
                formikRef.current.setFieldValue(
                    "name_ar",
                    response.data.name_ar
                );
                formikRef.current.setFieldValue(
                    "name_en",
                    response.data.name_en
                );
                formikRef.current.setFieldValue(
                    "newprice",
                    response.data.newprice
                );
                formikRef.current.setFieldValue(
                    "showed_price",
                    response.data.showed_price
                );

                formikRef.current.setFieldValue(
                    "material_en",
                    response.data.material_en
                );
                formikRef.current.setFieldValue(
                    "material_ar",
                    response.data.material_ar
                );
                formikRef.current.setFieldValue(
                    "note_ar",
                    response.data.note_ar
                );
                formikRef.current.setFieldValue(
                    "note_en",
                    response.data.note_en
                );
                $(".loadscr-container").hide();
                //setUserSession(response.data.token, response.data.user);
                //setAuthLoading(false);
            }).catch(error => {
                $(".loadscr-container").hide();
                //  removeUserSession();
                // setAuthLoading(false);
            });   // */
        }
    })
    const config = {
        headers: {
            Authorization: 'Bearer ' + getToken(),
            'Content-Type': 'application/json'

        }
    };
    const bodyParameters = {
        key: "value"
    };
    const componentDidMount = (e) => {
        let url = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);

        if (product_id != url) {
            setproduct_id(url);

            setProducts([]);




            $(".loadscr-container").show();
            axios.get(apifunctions.api_server_url + '/api/full_product_details/' + url
                ,
                config,
                bodyParameters).then(response => {
                    // console.log(response);
                    $(".loadscr-container").hide();
                    setproduct(response.data);
                    //setUserSession(response.data.token, response.data.user);
                    //setAuthLoading(false);
                }).catch(error => {
                    $(".loadscr-container").hide();
                    //  removeUserSession();
                    // setAuthLoading(false);
                });
        }

    }

    const formikRef = useRef();


    return (
        <span>
            <Formik
                innerRef={formikRef}
                // Sets up our default values
                initialValues={{

                    name_ar: product.name_ar
                    , name_en: product.name_en
                    , newprice: product.newprice
                    , showed_price: product.showed_price
                    , material_ar: product.material_ar
                    , material_en: product.material_en
                    , note_ar: product.note_ar
                    , note_en: product.note_en
                }}
                innerRef={formikRef}
                // Validates our data
                validate={
                    values => {
                        const errors = {};

                        if (!values.name_ar) errors.name_ar = "Required";

                        if (
                            //  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
                            values.name_ar.length < 4
                        ) {
                            errors.name_ar = " name_ar must be more than 4 character";
                        }

                        //  if (values.password.length < 8) {
                        //    errors.password = "Passwords must be at least 8 characters";
                        //  }

                        //if (values.email === values.password) {
                        //   errors.password =
                        //       "Your password shouldn't be the same as your email";
                        // }

                        return errors;
                    }}

                // Handles our submission
                onSubmit={(values, { setSubmitting }) => {
                    // This is where you could wire up axios or superagent
                    console.log("Submitted Values:", values);
                    let url = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
                    $(".loadscr-container").show();
                    axios.post(apifunctions.api_server_url + '/api/update_product/' + url,
                        values,
                        config

                    ).then(response => {

                        let data = response.data;

                        let newproduct = { ...product, data };
                        setproduct(response.data);

                        //setUserSession(response.data.token, response.data.user);
                        //setAuthLoading(false);
                        $(".loadscr-container").hide();
                    }).catch(error => {
                        $(".loadscr-container").hide();
                        //  removeUserSession();
                        // setAuthLoading(false);
                    });
                    $(".loadscr-container").hide();
                    // Simulates the delay of a real request
                    setTimeout(() => setSubmitting(false), 3 * 1000);
                }}
            >
                {props => (
                    <Form>





                        <main className="container push-top" id="home-body-id">


                            <div className="row clearfix" itemscope="" itemtype="https://schema.org/Product">


                            </div>

                            {getToken() && getUser().name == 'employee' ? (
                                <div id="deleteproduct" >
                                    {



                                        <button type="button"
                                            style={{ backgroundColor: 'red' }}
                                            onClick={(event) => deleteCurrentProductwithallStocks(event)}
                                            className="btn btn-block addfav-link">
                                            <span ariaHidden="true"
                                                onClick={(event) => deleteCurrentProductwithallStocks(event)}
                                                className="icontype  ui-favourite">
                                                <svg className="stroke-purple" height="16" role="img" title="Favorites" viewBox="0 0 16 16" width="16"><use xlinkHref="/Content/sprites/morhipo-icons.svg?v=25#ui-favourite"></use></svg></span><font style={{ verticalAlign: 'inherit' }}>
                                                <font style={{ verticalAlign: 'inherit' }}>
                                                    {trans('حذف كامل المنتج', '  delete all  product ')}
                                                </font></font></button>



                                    }
                                </div>
                            ) : <div></div>}

                            {
                                product &&
                                product.photo_by_color &&
                                product.photo_by_color.map(
                                    (photo_by_color, indexbig) => (
                                        indexbig == '0' ?
                                            (
                                                <div className="row clearfix" id={`${'photo_by_color' + photo_by_color.id}`}    >
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
                                                                                        {getToken() && getUser().name == 'employee' ? (
                                                                                            <>    <input type="text"
                                                                                                name={`${'input_colored_prducts_img_path_' + index222}`}
                                                                                                id={`${'input_colored_prducts_img_path_' + index222}`}
                                                                                            />
                                                                                                <img
                                                                                                    name={`${'img_' + index222}`}
                                                                                                    id={`${'img_' + index222}`} style={{ height: '300px' }} />
                                                                                                <iframe
                                                                                                    src={`${apifunctions.api_server_url
                                                                                                        + '/image-upload?target_img=img_' + index222
                                                                                                        + '&target_input=input_colored_prducts_img_path_' + index222
                                                                                                        + '&target_img_api=apifunctions.api_server_url'
                                                                                                        }`}
                                                                                                    width="270px" height="70px"></iframe>
                                                                                            </>
                                                                                        ) : (<></>)}
                                                                                        <img
                                                                                            id={index222}
                                                                                            src={`${apifunctions.api_server_url + '/' + photo.product_photo_path}`}
                                                                                            onClick={(event) => onClickSmallImgBtn(event,
                                                                                                `${apifunctions.api_server_url + '/' + photo.product_photo_path}`
                                                                                                ,
                                                                                                'bigimag' + photo_by_color.id + indexbig)}
                                                                                            alt={trans(
                                                                                                product.name_ar,
                                                                                                product.name_en
                                                                                            )} title={trans(
                                                                                                product.name_ar,
                                                                                                product.name_en
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
                                                                                            <li className="is-ready"  >
                                                                                                <span
                                                                                                    className="js-smartphoto" data-id="0" dataGroup="1" dataIndex="0">
                                                                                                    <div class="img-zoom-container">
                                                                                                        <div>
                                                                                                            <img


                                                                                                                id={`${'bigimag' + photo_by_color.id + indexbig}`}
                                                                                                                alt={trans(
                                                                                                                    product.name_ar,
                                                                                                                    product.name_en
                                                                                                                )}

                                                                                                                title={trans(
                                                                                                                    product.name_ar,
                                                                                                                    product.name_en
                                                                                                                )}
                                                                                                                src={`${apifunctions.api_server_url + '/' + photo_by_color.product_photo_path}`}
                                                                                                                data-large-img-url={`${apifunctions.api_server_url + '/' + photo_by_color.product_photo_path}`}
                                                                                                                data-large-img-wrapper={`${'preview' + photo_by_color.id + indexbig}`} />


                                                                                                        </div>


                                                                                                    </div>
                                                                                                </span>


                                                                                            </li>
                                                                                        ) :
                                                                                        <li>
                                                                                            <a href={`${apifunctions.api_server_url + '/' + photo_by_color.product_photo_path}`} className="js-smartphoto hidden" data-id="1" data-group="1" data-index="1">
                                                                                                <img itemprop="image" className="lazy"


                                                                                                    data-src={`${apifunctions.api_server_url + '/' + photo_by_color.product_photo_path}`} alt={trans(
                                                                                                        product.name_ar,
                                                                                                        product.name_en
                                                                                                    )} title={trans(
                                                                                                        product.name_ar,
                                                                                                        product.name_en
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


                                                    <div className="col-600-12 col-xs-7 col-sm-6 col-md-7 col-lg-6"

                                                    >
                                                        <div className="product-detail-container">
                                                            <div className="prod-detail-header">
                                                                <input type="hidden" id="selectedQuantity" name="selectedQuantity" value="0" />
                                                                <div className="row no-margin">
                                                                    <div className="col-xs-12 col-sm-12 col-md-12">
                                                                        <h1><font style={{ verticalAlign: 'inherit' }}>
                                                                            {getToken() && getUser().name == 'employee' ? (
                                                                                <div>
                                                                                    name_ar
                                                                                    <div>
                                                                                        <input
                                                                                            name="name_ar"
                                                                                            type="text"
                                                                                            placeholder="Enter your account email"
                                                                                            value={props.values.name_ar}
                                                                                            onChange={props.handleChange}
                                                                                            onBlur={props.handleBlur}
                                                                                            style={{
                                                                                                borderColor:
                                                                                                    props.errors.name_ar && props.touched.name_ar && "red"
                                                                                            }}
                                                                                        />
                                                                                        {props.errors.name_ar && props.touched.name_ar && (
                                                                                            <div style={{ color: "red" }}>{props.errors.name_ar}</div>
                                                                                        )}
                                                                                    </div>
                                                                                    <br />
                                                                                    name_en
                                                                                    <div>
                                                                                        <input
                                                                                            name="name_en"
                                                                                            type="text"
                                                                                            placeholder="Enter  name_en"
                                                                                            value={props.values.name_en}
                                                                                            onChange={props.handleChange}
                                                                                            onBlur={props.handleBlur}
                                                                                            style={{
                                                                                                borderColor:
                                                                                                    props.errors.name_en && props.touched.name_en && "red"
                                                                                            }}
                                                                                        />
                                                                                        {props.errors.name_en && props.touched.name_en && (
                                                                                            <div style={{ color: "red" }}>{props.errors.name_en}</div>
                                                                                        )}
                                                                                    </div><br />
                                                                                </div>
                                                                            ) : (

                                                                                    < font style={{ verticalAlign: 'inherit' }}>
                                                                                        {
                                                                                            trans(
                                                                                                product.name_ar,
                                                                                                product.name_en


                                                                                            )}
                                                                                    </font>
                                                                                )
                                                                            }


                                                                        </font><span className="prod-subtitle text-muted">
                                                                                <font style={{ verticalAlign: 'inherit' }}>

                                                                                </font></span>
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
                                                                            {getToken() && getUser().name == 'employee' ? (
                                                                                <div className="price-row">
                                                                                    <span className="final-price push-right text-danger"><strong><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>
                                                                                        newprice in Dinar

                                                                                    <div>
                                                                                            <input
                                                                                                name="newprice"
                                                                                                type="float"
                                                                                                placeholder="Enter  newprice"
                                                                                                value={props.values.newprice}
                                                                                                onChange={props.handleChange}
                                                                                                onBlur={props.handleBlur}
                                                                                                style={{
                                                                                                    borderColor:
                                                                                                        props.errors.newprice && props.touched.newprice && "red"
                                                                                                }}
                                                                                            />
                                                                                            {props.errors.newprice && props.touched.newprice && (
                                                                                                <div style={{ color: "red" }}>{props.errors.newprice}</div>
                                                                                            )}
                                                                                        </div>
                                                                                        <br />
                                                                                        {currency_transing(product.newprice, product.currency_and_taxex.one_dinar_in_dollar, product.currency_and_taxex.one_dollars_in_SAR, product.currency_and_taxex.one_dollars_in_AED, product.currency_and_taxex.one_dollars_in_BHD, product.currency_and_taxex.one_dollars_in_OMR, product.currency_and_taxex.one_dollars_in_QAR)}
                                                                                        <br />   {trans('حسم', 'discount')}
                                                                                        {calc_discount(product.newprice, product.showed_price)} %  <br />

                                                                                    </font></font></strong></span>
                                                                                    <span className="actual-price text-muted bigger push-right"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>
                                                                                        old price in Dinar
                                                                                        <div>
                                                                                            <input
                                                                                                name="showed_price"
                                                                                                type="float"
                                                                                                placeholder="Enter  showed_price"
                                                                                                value={props.values.showed_price}
                                                                                                onChange={props.handleChange}
                                                                                                onBlur={props.handleBlur}
                                                                                                style={{
                                                                                                    borderColor:
                                                                                                        props.errors.showed_price && props.touched.showed_price && "red"
                                                                                                }}
                                                                                            />
                                                                                            {props.errors.showed_price && props.touched.showed_price && (
                                                                                                <div style={{ color: "red" }}>{props.errors.showed_price}</div>
                                                                                            )}
                                                                                        </div>

                                                                                        <br />
                                                                                        {currency_transing(product.showed_price, product.currency_and_taxex.one_dinar_in_dollar, product.currency_and_taxex.one_dollars_in_SAR, product.currency_and_taxex.one_dollars_in_AED, product.currency_and_taxex.one_dollars_in_BHD, product.currency_and_taxex.one_dollars_in_OMR, product.currency_and_taxex.one_dollars_in_QAR)}

                                                                                    </font></font></span>
                                                                                    <span className="discount-percent hidden"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>57% </font></font><span className="smaller"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Discount</font></font></span></span>


                                                                                </div>
                                                                            ) :
                                                                                <div className="price-row">
                                                                                    <span className="final-price push-right text-danger"><strong><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>

                                                                                        {currency_transing(product.newprice, product.currency_and_taxex.one_dinar_in_dollar, product.currency_and_taxex.one_dollars_in_SAR, product.currency_and_taxex.one_dollars_in_AED, product.currency_and_taxex.one_dollars_in_BHD, product.currency_and_taxex.one_dollars_in_OMR, product.currency_and_taxex.one_dollars_in_QAR)}
                                                                                        <br />   {trans('حسم', 'discount')}    {calc_discount(product.newprice, product.showed_price)} %  <br />

                                                                                    </font></font></strong></span>
                                                                                    <span className="actual-price text-muted bigger push-right"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>

                                                                                        {currency_transing(product.showed_price, product.currency_and_taxex.one_dinar_in_dollar, product.currency_and_taxex.one_dollars_in_SAR, product.currency_and_taxex.one_dollars_in_AED, product.currency_and_taxex.one_dollars_in_BHD, product.currency_and_taxex.one_dollars_in_OMR, product.currency_and_taxex.one_dollars_in_QAR)}

                                                                                    </font></font></span>
                                                                                    <span className="discount-percent hidden"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>57% </font></font><span className="smaller"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Discount</font></font></span></span>


                                                                                </div>
                                                                            }
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


                                                                                            {trans(
                                                                                                'اللون',
                                                                                                ' Color '
                                                                                            )}
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
                                                                                                    product &&
                                                                                                    product.photo_by_color &&
                                                                                                    product.photo_by_color.map(
                                                                                                        (photo_by_colo1r, indexbig) => (
                                                                                                            <img
                                                                                                                onClick={(event) => onClickBtn(event, 'photo_by_color' + photo_by_colo1r.id, 'photo_by_color' + photo_by_color.id)}

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
                                                                                        <font style={{ verticalAlign: 'inherit' }}>
                                                                                            {trans(
                                                                                                'المقاس',
                                                                                                'size'
                                                                                            )} :
                                                                  </font>
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
                                                                                                        (one_product_in_stock, indexbig) => (

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
                                                                                                                                                                <label for="amount" className="col-xxs-12 col-xs-12 col-sm-2 control-label">
                                                                                                                                                                    {trans(
                                                                                                                                                                        'عدد القطع',
                                                                                                                                                                        'PIECE'
                                                                                                                                                                    )}
                                                                                                                                                                </label>
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
                                                                                                                                                        onClick={(event) => addCurrentStockProducttocart(event, one_product_in_stock.id)}
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
                                                                                                                                                    onClick={(event) => showLoginDialog(event)}
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
                                                                                        {getUser().name != 'employee' ? (<span>
                                                                                            {getToken() ? (
                                                                                                <div id="favorite" >
                                                                                                    {
                                                                                                        product.is_favorit ? (


                                                                                                            <button type="button"
                                                                                                                onClick={(event) => removeCurrentProducttoFavorit(event)}
                                                                                                                className="btn btn-block addfav-link">
                                                                                                                <span ariaHidden="true"
                                                                                                                    onClick={(event) => removeCurrentProducttoFavorit(event)}
                                                                                                                    className="icontype  ui-favourite">
                                                                                                                    <svg className="stroke-purple" height="16" role="img" title="Favorites" viewBox="0 0 16 16" width="16"><use xlinkHref="/Content/sprites/morhipo-icons.svg?v=25#ui-favourite"></use></svg></span><font style={{ verticalAlign: 'inherit' }}>
                                                                                                                    <font style={{ verticalAlign: 'inherit' }}>
                                                                                                                        {trans('ازالة من المفضلة', 'remove from  Favorites')}
                                                                                                                    </font></font></button>
                                                                                                        ) :
                                                                                                            <button type="button"
                                                                                                                onClick={(event) => addCurrentProducttoFavorit(event)}
                                                                                                                className="btn btn-block addfav-link">
                                                                                                                <span ariaHidden="true"
                                                                                                                    onClick={(event) => addCurrentProducttoFavorit(event)}
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
                                                                                                        product.is_favorit ? (
                                                                                                            <button type="button"
                                                                                                                onClick={(event) => removeCurrentProducttoFavorit(event)}
                                                                                                                className="btn btn-block addfav-link">
                                                                                                                <span ariaHidden="true"
                                                                                                                    onClick={(event) => removeCurrentProducttoFavorit(event)}
                                                                                                                    className="icontype  ui-favourite">
                                                                                                                    <svg className="stroke-purple" height="16" role="img" title="Favorites" viewBox="0 0 16 16" width="16"><use xlinkHref="/Content/sprites/morhipo-icons.svg?v=25#ui-favourite"></use></svg></span><font style={{ verticalAlign: 'inherit' }}>
                                                                                                                    <font style={{ verticalAlign: 'inherit' }}>
                                                                                                                        {trans('ازالة من السلة', '  remove from  Favorites')}
                                                                                                                    </font></font></button>

                                                                                                        ) :


                                                                                                            <button type="button"
                                                                                                                onClick={(event) => showLoginDialog(event)}
                                                                                                                className="btn btn-block addfav-link">
                                                                                                                <span ariaHidden="true"
                                                                                                                    onClick={(event) => showLoginDialog(event)}
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
                                                                                            }
                                                                                        </span>) : (
                                                                                                <span></span>
                                                                                            )
                                                                                        }
                                                                                        {getToken() && getUser().name == 'employee' ? (
                                                                                            <div id="updateproduct" >
                                                                                                {



                                                                                                    <div>
                                                                                                        {/*  <input
                                                                                                            type="reset"
                                                                                                            value="Reset"
                                                                                                            onClick={props.handleReset}
                                                                                                            disabled={!props.dirty || props.isSubmitting}
                                                                                                        />
                                                                                                        */}

                                                                                                        <button type="submit"
                                                                                                            disabled={props.isSubmitting}
                                                                                                            style={{ backgroundColor: 'green' }}
                                                                                                            className="btn btn-block addfav-link">
                                                                                                            <span ariaHidden="true"

                                                                                                                className="icontype  ui-favourite">
                                                                                                                <svg className="stroke-purple" height="16" role="img" title="Favorites" viewBox="0 0 16 16" width="16"><use xlinkHref="/Content/sprites/morhipo-icons.svg?v=25#ui-favourite"></use></svg></span><font style={{ verticalAlign: 'inherit' }}>
                                                                                                                <font style={{ verticalAlign: 'inherit' }}>
                                                                                                                    {trans(' تعديل معلومات المنتج', '  update product info')}
                                                                                                                </font></font></button>

                                                                                                    </div>

                                                                                                }
                                                                                            </div>
                                                                                        ) : <div></div>}


                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>


                                                    </div>



                                                </div >
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
                                                                                        onClick={(event) => onClickSmallImgBtn(event,
                                                                                            `${apifunctions.api_server_url + '/' + photo.product_photo_path}`
                                                                                            ,
                                                                                            'bigimag' + photo_by_color.id + indexbig)}
                                                                                        alt={trans(
                                                                                            product.name_ar,
                                                                                            product.name_en
                                                                                        )} title={trans(
                                                                                            product.name_ar,
                                                                                            product.name_en
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
                                                                            (photo, index2) => (
                                                                                index2 == '0' ?
                                                                                    (
                                                                                        <li className="is-ready">
                                                                                            <span
                                                                                                className="js-smartphoto" data-id="0" data-group="1" data-index="0">
                                                                                                <div class="img-zoom-container">
                                                                                                    <div>
                                                                                                        <img


                                                                                                            id={`${'bigimag' + photo_by_color.id + indexbig}`}
                                                                                                            alt={trans(
                                                                                                                product.name_ar,
                                                                                                                product.name_en
                                                                                                            )}

                                                                                                            title={trans(
                                                                                                                product.name_ar,
                                                                                                                product.name_en
                                                                                                            )}
                                                                                                            src={`${apifunctions.api_server_url + '/' + photo_by_color.product_photo_path}`}
                                                                                                            data-large-img-url={`${apifunctions.api_server_url + '/' + photo_by_color.product_photo_path}`}
                                                                                                            data-large-img-wrapper={`${'preview' + photo_by_color.id + indexbig}`} />

                                                                                                        <div className="magnifier-preview" id={`${'preview' + photo_by_color.id + indexbig}`}
                                                                                                            style={{

                                                                                                                'position': 'relative', 'z-index': '44444',
                                                                                                                'top': '-600px'
                                                                                                                , 'left': '500px'
                                                                                                            }}> </div>
                                                                                                    </div>


                                                                                                </div>

                                                                                            </span>
                                                                                        </li>
                                                                                    ) :
                                                                                    <li>
                                                                                        <a href={`${apifunctions.api_server_url + '/' + photo_by_color.product_photo_path}`}
                                                                                            className="js-smartphoto hidden" data-id="1" data-group="1" data-index="1">
                                                                                            <img itemprop="image" className="lazy"
                                                                                                data-src={`${apifunctions.api_server_url + '/' + photo_by_color.product_photo_path}`} alt={product.name_ar} title={product.name_ar} />
                                                                                        </a>
                                                                                    </li>
                                                                            )
                                                                        )}



                                                                </ul>

                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div className="col-600-12 col-xs-7 col-sm-6 col-md-7 col-lg-6"
                                                >
                                                    <div className="product-detail-container">
                                                        <div className="prod-detail-header">
                                                            <input type="hidden" id="selectedQuantity" name="selectedQuantity" value="0" />
                                                            <div className="row no-margin">
                                                                <div className="col-xs-12 col-sm-12 col-md-12">
                                                                    <h1><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>
                                                                        {product.name_ar}
                                                                    </font></font><span className="prod-subtitle text-muted"><font style={{ verticalAlign: 'inherit' }}>


                                                                    </font></span>
                                                                    </h1>
                                                                    <a href="/" title="Share Now" className="btn-share visible-xxs">
                                                                        <span ariaHidden="true" className="icontype  ui-share"><svg className="fill-white" height="22" role="img" title="Warning" viewBox="0 0 22 22" width="22"><use xlinkHref="/Content/sprites/morhipo-icons.svg?v=25#ui-share"></use></svg></span>
                                                                    </a>
                                                                </div>

                                                            </div>
                                                            <div id="product-price">

                                                                <div className="row no-margin">
                                                                    <div className="col-xs-12">
                                                                        <div className="price-row">
                                                                            <span className="final-price push-right text-danger"><strong><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>

                                                                                {currency_transing(product.newprice, product.currency_and_taxex.one_dinar_in_dollar, product.currency_and_taxex.one_dollars_in_SAR, product.currency_and_taxex.one_dollars_in_AED, product.currency_and_taxex.one_dollars_in_BHD, product.currency_and_taxex.one_dollars_in_OMR, product.currency_and_taxex.one_dollars_in_QAR)}
                                                                                <br />   {trans('حسم', 'discount')}    {calc_discount(product.newprice, product.showed_price)} %  <br />

                                                                            </font></font></strong></span>
                                                                            <span className="actual-price text-muted bigger push-right"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>

                                                                                {currency_transing(product.showed_price, product.currency_and_taxex.one_dinar_in_dollar, product.currency_and_taxex.one_dollars_in_SAR, product.currency_and_taxex.one_dollars_in_AED, product.currency_and_taxex.one_dollars_in_BHD, product.currency_and_taxex.one_dollars_in_OMR, product.currency_and_taxex.one_dollars_in_QAR)}

                                                                            </font></font></span>
                                                                            <span className="discount-percent hidden"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>57% </font></font><span className="smaller"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Discount</font></font></span></span>

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
                                                                                                product &&
                                                                                                product.photo_by_color &&
                                                                                                product.photo_by_color.map(
                                                                                                    (photo_by_colo1r, index2) => (
                                                                                                        <img
                                                                                                            src={`${apifunctions.api_server_url + '/' + photo_by_colo1r.product_photo_path}`}

                                                                                                            onClick={(event) => onClickBtn(event, 'photo_by_color' + photo_by_colo1r.id, 'photo_by_color' + photo_by_color.id)}
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
                                                                                    <font style={{ verticalAlign: 'inherit' }}>
                                                                                        {trans(
                                                                                            'المقاس',
                                                                                            'size'
                                                                                        )} :
                                                            </font>
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
                                                                                                                                                            <label for="amount" className="col-xxs-12 col-xs-12 col-sm-2 control-label">
                                                                                                                                                                {trans(
                                                                                                                                                                    'عدد القطع',
                                                                                                                                                                    'PIECE'
                                                                                                                                                                )}
                                                                                                                                                            </label>
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
                                                                                                                                                    onClick={(event) => addCurrentStockProducttocart(event, one_product_in_stock.id)}
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
                                                                                                                                                onClick={(event) => showLoginDialog(event)}
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
                                                                                    {getToken() && getUser().name != 'employee' ? (
                                                                                        <div id="favorite" >
                                                                                            <button type="button"
                                                                                                onClick={(event) => addCurrentProducttoFavorit(event)}
                                                                                                className="btn btn-block addfav-link">
                                                                                                <span ariaHidden="true"
                                                                                                    onClick={(event) => addCurrentProducttoFavorit(event)}
                                                                                                    className="icontype  ui-favourite">
                                                                                                    <svg className="stroke-purple" height="16" role="img" title="Favorites" viewBox="0 0 16 16" width="16"><use xlinkHref="/Content/sprites/morhipo-icons.svg?v=25#ui-favourite"></use></svg></span><font style={{ verticalAlign: 'inherit' }}>
                                                                                                    <font style={{ verticalAlign: 'inherit' }}>
                                                                                                        Favorites
                                                                             </font></font></button>
                                                                                        </div>
                                                                                    ) : <div id="favorite">
                                                                                            <button
                                                                                                onClick={(event) => showLoginDialog(event)}
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

                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>



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
                                                <a className="panel-heading" id="ela-urun-sekme-accr-aboutprodtab" data-toggle="collapse"
                                                    data-parent="#product_tabs-accordion"
                                                    href="#aboutprodtab"
                                                    aria-expanded="true">
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
                                                                <table>
                                                                    <tr>
                                                                        <td>
                                                                            <span className="productdetail-title"><font style={{ verticalAlign: 'inherit' }}>

                                                                                <font style={{ verticalAlign: 'inherit' }}>
                                                                                    {trans(
                                                                                        '   اسم المنتج ',
                                                                                        'Product Name '
                                                                                    )}
                                                                                </font></font></span>
                                                                        </td>
                                                                        <td>
                                                                            :
                                            </td>
                                                                        <td>
                                                                            <font style={{ verticalAlign: 'inherit' }}>
                                                                                <font style={{ verticalAlign: 'inherit' }}>
                                                                                    {trans(
                                                                                        product.name_ar,
                                                                                        product.name_en
                                                                                    )}

                                                                                </font></font>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                                <p className="pd-block"></p><p className="pd-block"><b>
                                                                    <table>
                                                                        <tr>
                                                                            <td>
                                                                                <span className="productdetail-title"><font style={{ verticalAlign: 'inherit' }}>
                                                                                    <font style={{ verticalAlign: 'inherit' }}>
                                                                                        {trans(
                                                                                            'المواد المصنعة',
                                                                                            'Material:  '
                                                                                        )}
                                                                                    </font></font></span>
                                                                            </td>
                                                                            <td>
                                                                                :
                                                </td>
                                                                            <td>
                                                                                <font style={{ verticalAlign: 'inherit' }}>
                                                                                    {getToken() && getUser().name == 'employee' ? (
                                                                                        <div>
                                                                                            material_ar
                                                                                            <div>
                                                                                                <input
                                                                                                    name="material_ar"
                                                                                                    type="text"
                                                                                                    placeholder="Enter  material_ar"
                                                                                                    value={props.values.material_ar}
                                                                                                    onChange={props.handleChange}
                                                                                                    onBlur={props.handleBlur}
                                                                                                    style={{
                                                                                                        borderColor:
                                                                                                            props.errors.material_ar && props.touched.material_ar && "red"
                                                                                                    }}
                                                                                                />
                                                                                                {props.errors.material_ar && props.touched.material_ar && (
                                                                                                    <div style={{ color: "red" }}>{props.errors.material_ar}</div>
                                                                                                )}
                                                                                            </div>


                                                                                            <br />

                                                                                            material_en
                                                                                            <div>
                                                                                                <input
                                                                                                    name="material_en"
                                                                                                    type="text"
                                                                                                    placeholder="Enter  material_en"
                                                                                                    value={props.values.material_en}
                                                                                                    onChange={props.handleChange}
                                                                                                    onBlur={props.handleBlur}
                                                                                                    style={{
                                                                                                        borderColor:
                                                                                                            props.errors.material_en && props.touched.material_en && "red"
                                                                                                    }}
                                                                                                />
                                                                                                {props.errors.material_en && props.touched.material_en && (
                                                                                                    <div style={{ color: "red" }}>{props.errors.material_en}</div>
                                                                                                )}
                                                                                            </div>


                                                                                            <br />
                                                                                        </div>
                                                                                    ) : (

                                                                                            <font style={{ verticalAlign: 'inherit' }}>

                                                                                                {trans(
                                                                                                    product.material_ar,
                                                                                                    product.material_en
                                                                                                )}

                                                                                            </font>
                                                                                        )
                                                                                    }


                                                                                </font>
                                                                            </td>
                                                                        </tr>
                                                                    </table>

                                                                </b><span>
                                                                        <table>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className="productdetail-title"><font style={{ verticalAlign: 'inherit' }}>

                                                                                        <font style={{ verticalAlign: 'inherit' }}>
                                                                                            {trans(
                                                                                                ' تفاصيل المنتج',
                                                                                                'Product Detail'
                                                                                            )}
                                                                                        </font></font></span>
                                                                                </td>
                                                                                <td>
                                                                                    :
                                            </td>
                                                                                <td>
                                                                                    <font style={{ verticalAlign: 'inherit' }}>
                                                                                        <font style={{ verticalAlign: 'inherit' }}>
                                                                                            {getToken() && getUser().name == 'employee' ? (
                                                                                                <div>

                                                                                                    note_ar
                                                                                                    <div>
                                                                                                        <input
                                                                                                            name="note_ar"
                                                                                                            type="text"
                                                                                                            placeholder="Enter  note_ar"
                                                                                                            value={props.values.note_ar}
                                                                                                            onChange={props.handleChange}
                                                                                                            onBlur={props.handleBlur}
                                                                                                            style={{
                                                                                                                borderColor:
                                                                                                                    props.errors.note_ar && props.touched.note_ar && "red"
                                                                                                            }}
                                                                                                        />
                                                                                                        {props.errors.note_ar && props.touched.note_ar && (
                                                                                                            <div style={{ color: "red" }}>{props.errors.note_ar}</div>
                                                                                                        )}
                                                                                                    </div>
                                                                                                    <br />
                                                                                     note_ar
                                                                                                    <div>
                                                                                                        <input
                                                                                                            name="note_en"
                                                                                                            type="text"
                                                                                                            placeholder="Enter  note_en"
                                                                                                            value={props.values.note_en}
                                                                                                            onChange={props.handleChange}
                                                                                                            onBlur={props.handleBlur}
                                                                                                            style={{
                                                                                                                borderColor:
                                                                                                                    props.errors.note_en && props.touched.note_en && "red"
                                                                                                            }}
                                                                                                        />
                                                                                                        {props.errors.note_en && props.touched.note_en && (
                                                                                                            <div style={{ color: "red" }}>{props.errors.note_en}</div>
                                                                                                        )}
                                                                                                    </div>

                                                                                                    <br />
                                                                                                </div>
                                                                                            ) : (

                                                                                                    <font style={{ verticalAlign: 'inherit' }}>

                                                                                                        {trans(
                                                                                                            product.note_ar,
                                                                                                            product.note_en
                                                                                                        )}

                                                                                                    </font>
                                                                                                )
                                                                                            }



                                                                                        </font></font>
                                                                                </td>
                                                                            </tr>
                                                                        </table>

                                                                    </span></p>


                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="panel panel-default panel-faq">

                                                <div id="deliverytab" className="panel-collapse animated-collapse collapse">
                                                    <div className="panel-body js-tabcollapse-panel-body">
                                                        <div className="row no-margin">
                                                            <div className="col-sm-12">
                                                                <strong><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Delivery</font></font></strong>
                                                                <p><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>
                                                                </font></font><br />
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


                                </div>

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


                    </Form>
                )}
            </Formik>    </span>);







}
