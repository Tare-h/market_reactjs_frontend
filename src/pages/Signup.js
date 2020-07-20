import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import axios from 'axios';
import { setUserSession } from '../Utils/Common';
import apifunctions from "../api/apifunctions"
import qs from 'qs'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NiceInputPassword from 'react-nice-input-password';
import $ from "jquery";
import 'react-nice-input-password/dist/react-nice-input-password.css';
import {
    getUser,
    getToken,
    getLang,
    transToEnglish,
    transToArabic,
    trans, is_fetching_fav,
    is_fetching_orders,
    is_fetching_cart,
    start_fetch_cart,
    start_fetch_orders,
    start_fetch_fav,
    end_fetch_cart,
    end_fetch_orders,
    end_fetch_fav,
    removeUserSession,
} from "../Utils/Common";
function Signup(props) {
    $("#login_dialog").hide();
    $(".loadscr-container").hide();

    let formIsValid = true;
    const username = useFormInput('');
    const [error_username, setError_username] = useState(null);
    const password = useFormInput('');
    const c_password = useFormInput('');
    const [error_password, setError_password] = useState(null);
    const surname = useFormInput('');
    const [error_surname, setError_surname] = useState(null);
    const email = useFormInput('');
    const [error_email, setError_email] = useState(null);
    const mobile_phone = useFormInput('');
    const [error_mobile_phone, setError_mobile_phone] = useState(null);
    const gender = useFormInput('');
    let gender_type = "";
    const [error_gender, setError_gender] = useState(null);
    const [birthDate, setBirthDate] = useState(new Date());
    const [error_birthDate, setError_birthDate] = useState(null);

    let password_is_shown = false;

    const [error, setError] = useState(null);

    const [loading, setLoading] = useState(false);
    const showHidePassword = () => {
        if (!password_is_shown) {
            password_is_shown = true;
            $("#activation_password").attr("type", "text");
            //$("#password").attr("type", "password");
        }
        else {
            password_is_shown = false;
            //$("#activation_password").attr("type", "text");
            $("#activation_password").attr("type", "password");
        }
    }
    // handle button click of login form
    const handleLogin = () => {
        formIsValid = true;


        if (password.value.length < 6) {
            formIsValid = false;
            setError_password(trans('كلمة السر يجب ان تكون مؤلفة من 6 أحرف على الأقل ', 'Password must be at least 6 characters long'));
        } else if (!/\d/.test(password.value)) {
            formIsValid = false;
            setError_password(trans('كلمة السر يجب ان تحوي ارقام', 'Password must contain a digit'));
        } else if (!/[!@#$%^&*]/.test(password.value)) {
            formIsValid = false;


            setError_password(trans('   !@#$%^&* كلمة السر يجب ان تحوي أحرف خاصة مثل   ', 'Password must contain special character: !@#$%^&*'));
        }
        else {
            setError_password('');
        }




        if (mobile_phone.value.length < 6) {
            formIsValid = false;

            setError_mobile_phone(trans('الرجاء ادخال رقم موبايل صحيح', "*Please enter valid mobile no."));

        } else {
            setError_mobile_phone("  ");
        }

        if (!gender.value) {
            formIsValid = false;

            setError_gender(trans("الرجاء تحديد الجنس", "please choose gender "));

        } else {
            setError_gender("  ");
            if (gender.value == 1) {
                gender_type = "male";
            }
            else {
                gender_type = "woman";
            }
        }

        if (!username.value || username.value < 3) {

            setError_username(trans("خطا في اسم المستخدم", "user name error."));
        }
        else {
            setError_username("");
        }
        if (!surname.value || surname.value < 3) {

            setError_surname(trans("خطا في  النسبة  ", "erro surname error."));
        }
        else {
            setError_surname("");
        }


        if (typeof email !== "undefined") {
            //regular expression for email validation
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(email.value)) {

                setError_email(
                    trans("الرجاء ادخال ايميل صحيح", " Please enter valid email no   ")



                );
                formIsValid = false;
            }
            else {
                setError_email("");
            }
        }
        console.log(" username : " + username.value + " , surname : " + surname.value + " , password : " + password.value + " , email : " + email.value
            + " , gender_type : " + gender_type
            + " , mobile_phone : " + mobile_phone.value + ", c_password : " + c_password + " , birthDate " + ("0" + birthDate.getDate()).slice(-2) + "-" + ("0" + (birthDate.getMonth() + 1)).slice(-2) + "-" + birthDate.getFullYear());
        if (!formIsValid) setError(

            trans("خطأ في كلمة السر وتسجيل الدخول", "wrong User name or password . Please try again later ")
        );
        else {
            setError(" ");





            setError(null);
            setLoading(true);
            $(".loadscr-container").show();
            axios.post(apifunctions.api_server_url + '/' + 'register_user'

                ,
                {
                    name: username.value
                    , password: password.value
                    , c_password: password.value
                    , surname: surname.value
                    , email: email.value
                    , gender: gender_type
                    , mobile_phone: mobile_phone.value
                    , birthDate: birthDate.getDate() + "-" + (birthDate.getMonth() + 1) + "-" + birthDate.getFullYear()
                    , user: JSON.parse(localStorage.getItem("user"))
                }
                ,

                {
                    headers: {
                        Authorization: 'Bearer ' + getToken(),
                        'Content-Type': 'application/json'

                    }
                }

            ).then(response => {
                $(".loadscr-container").hide();
                setLoading(false);

                setUserSession(response.data.token, response.data.user);
                let config = {
                    headers: {
                        Authorization: "Bearer " + getToken(),
                        "Content-Type": "application/json",
                    },
                };
                let bodyParameters = {
                    key: "value",
                };

                if (!is_fetching_fav()) {
                    start_fetch_fav();
                    $(".loadscr-container").show();
                    axios
                        .get(
                            apifunctions.api_server_url + "/get_favorits",
                            config,
                            bodyParameters
                        )
                        .then((response) => {
                            // console.log(response);
                            $("#fav_count").attr(
                                "style",
                                "background-color: red;border-radius: 50%;padding: 5px;color: rgb(255, 255, 255);"
                            );

                            $("#fav_count").html(response.data.favorite_ads.length);

                            $(".loadscr-container").hide();
                            end_fetch_fav();
                        })
                        .catch((error) => {
                            $(".loadscr-container").hide();
                            //  removeUserSession();
                            end_fetch_fav();
                        });
                }
                if (!is_fetching_orders()) {
                    start_fetch_orders();
                    //  alert('login start_fetch_orders');
                    $(".loadscr-container").show();
                    axios
                        .get(
                            apifunctions.api_server_url + "/get_orders",
                            config,
                            bodyParameters
                        )
                        .then((response) => {
                            end_fetch_orders();
                            // console.log(response);

                            $("#myorder_count").attr(
                                "style",
                                "background-color: red;border-radius: 50%;padding: 5px;color: rgb(255, 255, 255);"
                            );

                            $("#myorder_count").html(response.data.orders.length);


                            $(".loadscr-container").hide();
                            //setUserSession(response.data.token, response.data.user);
                            end_fetch_orders();
                        })
                        .catch((error) => {
                            //  removeUserSession();
                            $(".loadscr-container").hide();
                            end_fetch_orders();
                        });

                } if (!is_fetching_cart()) {
                    start_fetch_cart();
                    $(".loadscr-container").show();
                    axios
                        .get(
                            apifunctions.api_server_url + "/get_cart",
                            config,
                            bodyParameters
                        )
                        .then((response) => {
                            // console.log(response);
                            $("#cart_count").attr(
                                "style",
                                "background-color: red;border-radius: 50%;padding: 5px;color: rgb(255, 255, 255);"
                            );

                            $("#cart_count").html(response.data.carts.length);

                            //setUserSession(response.data.token, response.data.user);
                            $(".loadscr-container").hide();
                            end_fetch_cart();
                        })
                        .catch((error) => {
                            //  removeUserSession();
                            $(".loadscr-container").hide();
                            end_fetch_cart();
                        });
                }
                props.history.push('/profile');

            }).catch(error => {
                $(".loadscr-container").hide();
                //// console.log(error);
                setLoading(false);
                if (error.response.status === 401) {
                    setError(error.response.data.error);
                    if (error.response.data.error == "emial already exist") {
                        setError_email(trans("الايميل موجود مسبقاً  ", "emial already exist"));

                    }
                }
                else setError(

                    trans("خطأ في كلمة السر وتسجيل الدخول", "wrong User name or password . Please try again later ")
                );
            });
        }
    }
    return (




        <body className="morhipo_landing">
            <div className="container">





                <div className="row">
                    <div className="col-xs-12">
                        <div className="signup-page">
                            <div className="row half-margin">
                                <div className="col-xxs-12 col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <div className="col-md-12 col-xs-12 col-sm-12 col-xs-12 col-lg-12 ">
                                        <div className="row half-margin">
                                            <div className="col-xxs-12 col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                <div className="landing-header">



                                                    <font style={{ verticalAlign: "inherit" }}>
                                                        <font style={{ verticalAlign: "inherit", fontSize: '23px' }}>

                                                            {trans(" انشاء حساب", "Signup ")} </font></font>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row half-margin">
                                <div className="col-xs-12">
                                    <div className="membertabs tab-content">
                                        <div className="tab-pane active" id="membership">
                                            <div className="row">
                                                <div className="col-xs-12">



                                                    <div className="form-group landing-block" >
                                                        <div className="col-xxs-12 col-xs-6 special-fix">


                                                            {error_username && <><small style={{ color: 'red' }}>{error_username}</small><br /></>}
                                                            <label htmlFor="FirstName"><font style={{ verticalAlign: "inherit" }}>
                                                                <font style={{ verticalAlign: "inherit" }}>

                                                                    {trans("الأسم*", "Name*")}
                                                                </font></font></label>
                                                            <input type="text"   {...username} maxLength="40" text="Ad" className="form-control"
                                                                placeholder={trans("الأسم*", "Name*")} ariaRequired="true" />
                                                        </div>
                                                        <div className="col-xxs-12 col-xs-6">

                                                            {error_surname && <><small style={{ color: 'red' }}>{error_surname}</small><br /></>}

                                                            <label htmlFor="LastName">
                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                    <font style={{ verticalAlign: "inherit" }}>
                                                                        {trans("النسبة*", "Surname*")}
                                                                    </font></font></label>
                                                            <input type="text" {...surname} name="LastName"
                                                                id="LastName" maxLength="40" text="Soyad"
                                                                className="form-control"
                                                                placeholder={trans("النسبة*", "Surname*")} ariaRequired="true" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group landing-block">
                                                        <div className="col-xs-12">

                                                            {error_email && <><small style={{ color: 'red' }}>{error_email}</small><br /></>}

                                                            <label htmlFor="EMail"><font style={{ verticalAlign: "inherit" }}><font style={{ verticalAlign: "inherit" }}>
                                                                {trans("الايميل", "Email*")}  </font></font></label>
                                                            <input type="email"
                                                                {...email} maxLength="150" text="E-Posta"
                                                                className="form-control" placeholder={trans("أدخل ايميلك", "E-Mail Address *")}
                                                                autoComplete="off" ariaRequired="true" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group landing-block">
                                                        <div className="col-xs-12">
                                                            {error_password && <><small style={{ color: 'red' }}>{error_password}</small><br /></>}
                                                            <label htmlFor="Password"><font style={{ verticalAlign: "inherit" }}><font style={{ verticalAlign: "inherit" }}>
                                                                {trans("كلمة سر", "Password*")}
                                                            </font></font></label>
                                                            <div className="has-input-revealer">
                                                                <div className="hideShowPassword-wrapper" style={{ position: "relative", display: "block", verticalAlign: "baseline", margin: "0px" }}>

                                                                    <div className="hideShowPassword-wrapper"
                                                                        style={{ position: 'relative', display: 'block', verticalAlign: 'baseline', margin: "0px" }}>

                                                                        <input {...password} placeholder={trans(" كلمة السر", "Password*")} type="password" id="activation_password"
                                                                            name="Password" maxLength="20" autoComplete="off"
                                                                            className="form-control xss-validate js-pass-reg hideShowPassword-field" placeholder="Your password"
                                                                            aria-required="true" style={{ margin: '0px', paddingRight: '66px' }} />
                                                                        <button type="button" role="button" ariaLabel="Show Password" title="Show Password"
                                                                            tabindex="0" className="btn btn-link btn-revealer smaller hideShowPassword-toggle-show"
                                                                            aria-pressed="false"
                                                                            onClick={showHidePassword}
                                                                            id="activation_showpassword"
                                                                            style={{ position: 'absolute', right: '0px', bottom: '0px' }}><font style={{ verticalAlign: "inherit" }}>
                                                                                <font style={{ verticalAlign: "inherit" }}>{trans("اظهار", "Show*")} </font></font>
                                                                        </button>

                                                                    </div>


                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="pass-valid">
                                                            <ul>
                                                                <li>
                                                                    <span className="p-valid c-valid this-valid"></span><font style={{ verticalAlign: "inherit" }}>
                                                                        <font style={{ verticalAlign: "inherit" }}>
                                                                            {trans("على الأقل 6 أحرف, وعلى الأكثر 20 حرف", "Minimum 6, maximum 20 characters*")}
                                                                        </font></font></li>
                                                                <li>
                                                                    <span className="p-valid l-valid this-valid"></span><font style={{ verticalAlign: "inherit" }}>
                                                                        <font style={{ verticalAlign: "inherit" }}>Must contain at least 1 letter  </font></font></li>
                                                            </ul>
                                                        </div>

                                                    </div>

                                                    <div className="form-group landing-block">
                                                        <div className="col-xs-12 col-sm-6">
                                                            {error_gender && <><small style={{ color: 'red' }}>{error_gender}</small><br /></>}
                                                            <label htmlFor="GenderID" className="label-grouped">
                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                    <font style={{ verticalAlign: "inherit" }}>Gender*</font></font></label>
                                                            <label className="colform radio-inline">
                                                                <input type="radio" name="gender" {...gender} value="0" className="radio-form-control" />
                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                    <font style={{ verticalAlign: "inherit" }}  >
                                                                        {trans("أنثى", "Woman*")}
                                                                    </font>
                                                                </font>
                                                            </label>
                                                            <label className="colform radio-inline">
                                                                <input name="gender" type="radio" {...gender} value="1" className="radio-form-control" />
                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                    <font style={{ verticalAlign: "inherit" }}>

                                                                        {trans("ذكر", "Male*")}
                                                                    </font>
                                                                </font>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="form-group landing-block">
                                                        <div className="col-xs-12">
                                                            {error_birthDate && <><small style={{ color: 'red' }}>{error_birthDate}</small><br /></>}


                                                            <label htmlFor="MobilePhone">
                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                    <font style={{ verticalAlign: "inherit" }}>
                                                                        {trans(" يوم ميلادك ", "Birth Date*")}

                                                                    </font></font>
                                                            </label>



                                                            <DatePicker className="form-control" selected={birthDate}

                                                                onChange={date => setBirthDate(date)} />
                                                        </div>
                                                    </div>

                                                    <div className="form-group landing-block">
                                                        <div className="col-xs-12">
                                                            {error_mobile_phone && <><small style={{ color: 'red' }}>{error_mobile_phone}</small><br /></>}


                                                            <label htmlFor="MobilePhone">
                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                    <font style={{ verticalAlign: "inherit" }}>  {trans("     رقم الهاتف * ", "Mobile phone*")}
                                                                    </font></font>
                                                            </label>
                                                            <input type="tel" {...mobile_phone} placeholder={trans("   رقم الهاتف * ", "Mobile phone*")}
                                                                className="form-control" ariaRequired="true" maxLength="15" />
                                                        </div>
                                                    </div>

                                                    <div className="form-group landing-block">
                                                        <div className="col-xs-12 col-sm-12">
                                                            {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />

                                                            <button className="btn btn-primary btn-lg btn-fullwidth" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading}>
                                                                <span className="btn-text">
                                                                    <font style={{ verticalAlign: "inherit" }}><font style={{ verticalAlign: "inherit" }}>
                                                                        {trans(" أنشيء حساب ", " create account")}
                                                                    </font></font></span><div className="mloader"><div className="bnc bnc1"></div><div className="bnc bnc2"></div><div className="bnc bnc3"></div></div></button>
                                                        </div>
                                                    </div>



                                                    <div className="form-group landing-block">
                                                        <div className="col-xs-12">
                                                            <p className="text-center std-font"><font style={{ verticalAlign: "inherit" }}><font style={{ verticalAlign: "inherit" }}>
                                                                <NavLink
                                                                    to="/login"
                                                                    id="ela-sezon-menu-p-"
                                                                    href="http://malls-online.com/"
                                                                    data-hover=""
                                                                    className="no_submenu js-mn-itm"
                                                                >
                                                                    <font style={{ verticalAlign: "inherit" }}>
                                                                        <font style={{ verticalAlign: "inherit" }}>
                                                                            {trans("تسجيل الدخول", "login")}
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
                                                            </font></font>  </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                        <div className="tab-pane" id="login">




                                            <div className="row">
                                                <div className="col-xs-12">

                                                    <div className="form-group landing-block">
                                                        <div className="col-xs-12">
                                                            <label htmlFor="Username"><font style={{ verticalAlign: "inherit" }}><font style={{ verticalAlign: "inherit" }}>


                                                                {trans("الأيميل", "Email*")}
                                                            </font></font></label>
                                                            <input type="text" name="Username" id="Username" maxLength="150"
                                                                className="form-control" ariaRequired="true" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group landing-block">
                                                        <div className="col-xs-12">
                                                            <label htmlFor="Password"><font style={{ verticalAlign: "inherit" }}><font style={{ verticalAlign: "inherit" }}>Password*</font></font></label>
                                                            <div className="has-input-revealer">
                                                                <div className="hideShowPassword-wrapper"
                                                                    style={{ position: "relative", display: "block", verticalAlign: "baseline", margin: "0px" }}>

                                                                    <input type="password" name="Password" id="Password" maxLength="20"
                                                                        autoComplete="off" text="Şifre" className="form-control js-landing-login hideShowPassword-field"
                                                                        ariaRequired="true" style={{ margin: "0px", paddingRight: "0px" }} />
                                                                    <button type="button" role="button" ariaLabel="Show Password"
                                                                        title="Show Password" tabindex="0"
                                                                        className="btn btn-link btn-revealer smaller hideShowPassword-toggle-show"
                                                                        style={{ position: "absolute", right: "0px" }}>Göster</button></div>
                                                                <button type="button" role="button" ariaLabel="Show Password"
                                                                    title="Show Password" tabindex="0"
                                                                    className="btn btn- link btn-revealer smaller hideShowPassword-toggle-show"
                                                                    style={{ position: "absolute", right: "0px" }}><font style={{ verticalAlign: "inherit" }}><font style={{ verticalAlign: "inherit" }}>Show</font></font></button></div>

                                                        </div>
                                                    </div>



                                                    <div className="form-group landing-block">
                                                        <div className="col-xs-12">
                                                            <button type="submit" id="send-data-2" className="btn btn-primary btn-fullwidth btn-lg">
                                                                <span className="btn-text">
                                                                    <font style={{ verticalAlign: "inherit" }}>
                                                                        <font style={{ verticalAlign: "inherit" }}>
                                                                            {trans(" تسجيل دخول", "Login")}
                                                                        </font></font></span>
                                                                <div className="mloader" aria-hidden="true">
                                                                    <div className="bnc bnc1"></div>
                                                                    <div className="bnc bnc2"></div>
                                                                    <div className="bnc bnc3"></div></div></button>
                                                        </div>
                                                    </div>

                                                    <div className="form-group landing-block">
                                                        <div className="col-xs-12">



                                                            <div id="socialLoginList" className="form-group">
                                                                <div>
                                                                    <button type="submit" className="btn btn-facebook btn-fullwidth btn-lg"
                                                                        id="Facebook" name="provider" value="Facebook" title="Facebook ile Giriş"><font style={{ verticalAlign: "inherit" }}>
                                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                                Login with Facebook</font></font></button>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <p className="text-center std-font">Üye değilim
                                                    <a id="tab-change" href="http://malls-online.com/uyelik#membership"
                                                            datatoggle="tab"><strong>Şimdi Üye Ol</strong></a></p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>
                </div>










                <div className="xdsoft_datetimepicker xdsoft_noselect xdsoft_">
                    <div className="xdsoft_datepicker active">
                        <div className="xdsoft_monthpicker">

                            <button type="button" className="xdsoft_prev" style={{ visibility: "visible" }}>
                            </button><button type="button" className="xdsoft_today_button"
                                style={{ visibility: "hidden" }}>
                            </button>
                            <div className="xdsoft_label xdsoft_month custom- select">
                                <span>Ocak</span>
                                <div className="xdsoft_select xdsoft_monthselect xdsoft_scroller_box">
                                    <div style={{ marginTop: "0px" }}>
                                        div className="xdsoft_option xdsoft_current" data-value="0">Ocak</div>
                                    <div className="xdsoft_option " data-value="1">Şubat</div><div className="xdsoft_option " data-value="2">Mart</div>
                                    <div className="xdsoft_option " data-value="3">Nisan</div><div className="xdsoft_option " data-value="4">Mayıs</div>
                                    <div className="xdsoft_option " data-value="5">Haziran</div><div className="xdsoft_option " data-value="6">Temmuz</div>
                                    <div className="xdsoft_option " data-value="7">Ağustos</div><div className="xdsoft_option " data-value="8">Eylül</div>
                                    <div className="xdsoft_option " data-value="9">Ekim</div><div className="xdsoft_option " data-value="10">Kasım</div>
                                    <div className="xdsoft_option " data-value="11">Aralık</div></div><div className="xdsoft_scrollbar">
                                    <div className="xdsoft_scroller" style={{ display: "block", height: "10px", marginTop: "0px" }}></div></div></div></div><i></i></div>
                    <div className="xdsoft_label xdsoft_year custom-select"><span>1990</span>
                        <div className="xdsoft_select xdsoft_yearselect xdsoft_scroller_box">
                            <div style={{
                                marginTop: "0px"
                            }}>
                                <div className="xdsoft_option " dataValue="1950">1950</div>
                                <div className="xdsoft_option " data-value="1951">1951</div>
                                <div className="xdsoft_option " data-value="1952">1952</div><div className="xdsoft_option " data-value="1953">1953</div>
                                <div className="xdsoft_option " data-value="1954">1954</div><div className="xdsoft_option " data-value="1955">1955</div>
                                <div className="xdsoft_option " data-value="1956">1956</div><div className="xdsoft_option " data-value="1957">1957</div>
                                <div className="xdsoft_option " data-value="1958">1958</div><div className="xdsoft_option " data-value="1959">1959</div>
                                <div className="xdsoft_option " data-value="1960">1960</div><div className="xdsoft_option " data-value="1961">1961</div>
                                <div className="xdsoft_option " data-value="1962">1962</div><div className="xdsoft_option " data-value="1963">1963</div>
                                <div className="xdsoft_option " data-value="1964">1964</div><div className="xdsoft_option " data-value="1965">1965</div>
                                <div className="xdsoft_option " data-value="1966">1966</div><div className="xdsoft_option " data-value="1967">1967</div>
                                <div className="xdsoft_option " data-value="1968">1968</div><div className="xdsoft_option " data-value="1969">1969</div>
                                <div className="xdsoft_option " data-value="1970">1970</div><div className="xdsoft_option " data-value="1971">1971</div>
                                <div className="xdsoft_option " data-value="1972">1972</div><div className="xdsoft_option " data-value="1973">1973</div>
                                <div className="xdsoft_option " data-value="1974">1974</div><div className="xdsoft_option " data-value="1975">1975</div>
                                <div className="xdsoft_option " data-value="1976">1976</div><div className="xdsoft_option " data-value="1977">1977</div>
                                <div className="xdsoft_option " data-value="1978">1978</div><div className="xdsoft_option " data-value="1979">1979</div>
                                <div className="xdsoft_option " data-value="1980">1980</div><div className="xdsoft_option " data-value="1981">1981</div>
                                <div className="xdsoft_option " data-value="1982">1982</div><div className="xdsoft_option " data-value="1983">1983</div>
                                <div className="xdsoft_option " data-value="1984">1984</div><div className="xdsoft_option " data-value="1985">1985</div>
                                <div className="xdsoft_option " data-value="1986">1986</div><div className="xdsoft_option " data-value="1987">1987</div>
                                <div className="xdsoft_option " data-value="1988">1988</div><div className="xdsoft_option " data-value="1989">1989</div>
                                <div className="xdsoft_option " data-value="1989">1991</div>
                                <div className="xdsoft_option " data-value="1991">1991</div>
                                <div className="xdsoft_option " data-value="1992">1992</div>
                                <div className="xdsoft_option " data-value="1993">1993</div>
                                <div className="xdsoft_option " data-value="1994">1994</div><div className="xdsoft_option " data-value="1995">1995</div>
                                <div className="xdsoft_option " data-value="1996">1996</div><div className="xdsoft_option " data-value="1997">1997</div><div className="xdsoft_option " data-value="1998">1998</div>
                                <div className="xdsoft_option " data-value="1999">1999</div><div className="xdsoft_option " data-value="2000">2000</div><div className="xdsoft_option " data-value="2001">2001</div>
                                <div className="xdsoft_option " data-value="2002">2002</div><div className="xdsoft_option " data-value="2003">2003</div><div className="xdsoft_option " data-value="2004">2004</div>
                                <div className="xdsoft_option " data-value="2005">2005</div><div className="xdsoft_option " data-value="2006">2006</div><div className="xdsoft_option " data-value="2007">2007</div>
                            </div>
                            <div className="xdsoft_scrollbar">
                                <div className="xdsoft_scroller" style={{ display: "block", height: "10px", marginTop: " 0px" }}>




                                    <button type="button" className="xdsoft_next" style={{ visibility: "visible" }}>

                                    </button>
                                </div >
                                <div className="xdsoft_calendar">
                                    <table>
                                        < thead > <tr><th>Paz</th><th>Pts</th><th>Sal</th><th>Çar</th><th>Per</th><th>Cum</th><th>Cts</th></tr></ thead><tbody><tr><td dataDate="31" dataMonth="11" dataYear="1989"
                                            className="xdsoft_date xdsoft_day_of_week0 xdsoft_date xdsoft_other_month xdsoft_weekend" title=""><div>31</div></td><td dataDate="1" dataMonth="0" dataYear="1990" className="xdsoft_date xdsoft_day_of_week1 xdsoft_date" title=""><div>1</div></td><td dataDate="2" dataMonth="0" dataYear="1990" className="xdsoft_date xdsoft_day_of_week2 xdsoft_date" title=""><div>2</div></td><td dataDate="3" dataMonth="0" dataYear="1990" className="xdsoft_date xdsoft_day_of_week3 xdsoft_date" title=""><div>3</div></td><td dataDate="4" dataMonth="0" dataYear="1990" className="xdsoft_date xdsoft_day_of_week4 xdsoft_date" title=""><div>4</div></td><td dataDate="5" dataMonth="0" dataYear="1990" className="xdsoft_date xdsoft_day_of_week5 xdsoft_date" title=""><div>5</div></td><td dataDate="6" dataMonth="0" dataYear="1990" className="xdsoft_date xdsoft_day_of_week6 xdsoft_date xdsoft_current xdsoft_weekend" title=""><div>6</div></td></tr><tr><td dataDate="7" dataMonth="0" dataYear="1990" className="xdsoft_date xdsoft_day_of_week0 xdsoft_date xdsoft_weekend" title=""><div>7</div></td><td dataDate="8" dataMonth="0" dataYear="1990" className="xdsoft_date xdsoft_day_of_week1 xdsoft_date" title=""><div>8</div></td><td dataDate="9" dataMonth="0" dataYear="1990" className="xdsoft_date xdsoft_day_of_week2 xdsoft_date" title=""><div>9</div></td><td dataDate="10" dataMonth="0" dataYear="1990" className="xdsoft_date xdsoft_day_of_week3 xdsoft_date" title=""><div>10</div></td><td dataDate="11" dataMonth="0" dataYear="1990" className="xdsoft_date xdsoft_day_of_week4 xdsoft_date" title=""><div>11</div></td><td dataDate="12" dataMonth="0" dataYear="1990" className="xdsoft_date xdsoft_day_of_week5 xdsoft_date" title=""><div>12</div></td><td dataDate="13" dataMonth="0" dataYear="1990" className="xdsoft_date xdsoft_day_of_week6 xdsoft_date xdsoft_weekend" title=""><div>13</div></td></tr><tr><td dataDate="14" dataMonth="0" dataYear="1990" className="xdsoft_date xdsoft_day_of_week0 xdsoft_date xdsoft_weekend" title=""><div>14</div></td><td dataDate="15" dataMonth="0" dataYear="1990" className="xdsoft_date xdsoft_day_of_week1 xdsoft_date" title=""><div>15</div></td><td dataDate="16" dataMonth="0" dataYear="1990" className="xdsoft_date xdsoft_day_of_week2 xdsoft_date" title=""><div>16</div></td><td dataDate="17" dataMonth="0" dataYear="1990" className="xdsoft_date xdsoft_day_of_week3 xdsoft_date" title=""><div>17</div></td><td dataDate="18" dataMonth="0" dataYear="1990" className="xdsoft_date xdsoft_day_of_week4 xdsoft_date" title=""><div>18</div></td><td dataDate="19" dataMonth="0" dataYear="1990" className="xdsoft_date xdsoft_day_of_week5 xdsoft_date" title=""><div>19</div></td><td dataDate="20" dataMonth="0" dataYear="1990" className="xdsoft_date xdsoft_day_of_week6 xdsoft_date xdsoft_weekend" title=""><div>20</div></td></tr><tr><td dataDate="21" dataMonth="0" dataYear="1990" className="xdsoft_date xdsoft_day_of_week0 xdsoft_date xdsoft_weekend" title=""><div>21</div></td><td dataDate="22" dataMonth="0" dataYear="1990" className="xdsoft_date xdsoft_day_of_week1 xdsoft_date" title=""><div>22</div></td><td dataDate="23" dataMonth="0" dataYear="1990" className="xdsoft_date xdsoft_day_of_week2 xdsoft_date" title=""><div>23</div></td><td dataDate="24" dataMonth="0" dataYear="1990" className="xdsoft_date xdsoft_day_of_week3 xdsoft_date" title=""><div>24</div></td><td dataDate="25" dataMonth="0" dataYear="1990" className="xdsoft_date xdsoft_day_of_week4 xdsoft_date" title=""><div>25</div></td><td dataDate="26" dataMonth="0" dataYear="1990" className="xdsoft_date xdsoft_day_of_week5 xdsoft_date" title=""><div>26</div></td><td dataDate="27" dataMonth="0" dataYear="1990" className="xdsoft_date xdsoft_day_of_week6 xdsoft_date xdsoft_weekend" title=""><div>27</div></td></tr><tr><td dataDate="28" dataMonth="0" dataYear="1990" className="xdsoft_date xdsoft_day_of_week0 xdsoft_date xdsoft_weekend" title=""><div>28</div></td><td dataDate="29" dataMonth="0" dataYear="1990" className="xdsoft_date xdsoft_day_of_week1 xdsoft_date" title=""><div>29</div></td><td dataDate="30" dataMonth="0" dataYear="1990" className="xdsoft_date xdsoft_day_of_week2 xdsoft_date" title=""><div>30</div></td><td dataDate="31" dataMonth="0" dataYear="1990" className="xdsoft_date xdsoft_day_of_week3 xdsoft_date" title=""><div>31</div></td>
                                                <td data- date="1" dataMonth="1" dataYear="1990" className="xdsoft_date xdsoft_day_of_week4 xdsoft_date xdsoft_other_month" title="" > <div>1</div></td >
                                                <td dataDate="2" dataMonth="1" dataYear="1990" className="xdsoft_date xdsoft_day_of_week5 xdsoft_date xdsoft_other_month" title=""><div>2</div></td>
                                                <td dataDate="3" dataMonth="1" dataYear="1990" className="xdsoft_date xdsoft_day_of_week6 xdsoft_date xdsoft_other_month xdsoft_weekend" title="">
                                                    <div>3</div></td></tr ></tbody ></table >
                                </div > <button type="button" className="xdsoft_save_selected blue-gradient-button" style={{ display: "none" }}>Save Selected</button></div >
                            <div className="xdsoft_timepicker">
                                < button type="button" className="xdsoft_prev"></button><div className="xdsoft_time_box xdsoft_scroller_box">
                                    <div className="xdsoft_time_variant" style={{ marginTop: "0px" }}>div className="xdsoft_time xdsoft_current" data-hour="0" data-minute="0">00:00</div>
                                    <div className="xdsoft_time " data-hour="1" data-minute="0">01:00</div><div className="xdsoft_time " data-hour="2" data-minute="0">02:00</div>
                                    <div className="xdsoft_time " data-hour="3" data-minute="0">03:00</div><div className="xdsoft_time " data-hour="4" data-minute="0">04:00</div>
                                    <div className="xdsoft_time " data-hour="5" data-minute="0">05:00</div><div className="xdsoft_time " data-hour="6" data-minute="0">06:00</div>
                                    <div className="xdsoft_time " data-hour="7" data-minute="0">07:00</div><div className="xdsoft_time " data-hour="8" data-minute="0">08:00</div>
                                    <div className="xdsoft_time " data-hour="9" data-minute="0">09:00</div><div className="xdsoft_time " data-hour="10" data-minute="0">10:00</div>
                                    <div className="xdsoft_time " data-hour="11" data-minute="0">11:00</div><div className="xdsoft_time " data-hour="12" data-minute="0">12:00</div>
                                    <div className="xdsoft_time " data-hour="13" data-minute="0">13:00</div><div className="xdsoft_time " data-hour="14" data-minute="0">14:00</div>
                                    <div className="xdsoft_time " data-hour="15" data-minute="0">15:00</div><div className="xdsoft_time " data-hour="16" data-minute="0">16:00</div>
                                    <div className="xdsoft_time " data-hour="17" data-minute="0">17:00</div><div className="xdsoft_time " data-hour="18" data-minute="0">18:00</div>
                                    <div className="xdsoft_time " data-hour="19" data-minute="0">19:00</div><div className="xdsoft_time " data-hour="20" data-minute="0">20:00</div>
                                    <div className="xdsoft_time " data-hour="21" data-minute="0">21:00</div><div className="xdsoft_time " data-hour="22" data-minute="0">22:00</div>
                                    <div className="xdsoft_time " data-hour="23" data-minute="0">23:00</div></div><div className="xdsoft_scrollbar"><div className="xdsoft_scroller"
                                        style={{ display: "block", height: "10px", marginTop: "0px" }} ></div>
                                </div ></div >
                            <button type="button" className="xdsoft_next"></button></div >
                    </div >


                    <div id="goog-gt-tt" className="skiptranslate" dir="ltr"><div style={{ padding: "8px" }}>
                        <div>
                            <div className="logo"><img src="./ Morhipo Membership and Login_files/ translate_24dp.png" width="20" height="20" alt="Google Translate" />
                            </div></div ></div >
                        <div className="top"
                            style={{ padding: "8px", float: "left", width: "100%" }}><h1 className="title gray">Original text</h1></div><div className="middle" style={{ padding: "8px" }}>
                            <div className="original - text"></div></div>
                        <div className="bottom" style={{ padding: "8px " }}>
                            <div className="activity - links"><span className="activity - link">Contribute a better translation</span><span className="activity - link"></span></div>
                            <div className="started - activity - container"><hr style={{ color: "#CCC", "backgroundColor": "#CCC", height: "1px", border: "none" }}></hr> <div className="activity - root"></div></div></ div><div className="status - message" style={{
                                display: "none"
                            }}></div></div>

                    <div className="goog - te - spinner - pos">< div className="goog - te - spinner - animation"><svg xmlns="http://www.w3.org/2000/svg" className="goog-te-spinner" width="96px" height="96px" viewBox="0 0 66 66"><circle className="goog-te-spinner-path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle></svg></div></div><div id="fb-root" className=" fb_reset fb_reset"><div style={{
                        position: "absolute", top: "-10000px", width: "0px", height: "0px"
                    }}> <div></div></div >
                        <div style={{ position: "absolute", top: "-10000px", width: "0px", height: "0px" }} ><div></div></ div ></div > <div data-id="KAWCGQ3169ESE"><div className="smartphoto" aria-hidden="true" role="dialog">
                            <div className="smartphoto-body">
                                < div className="smartphoto-inner">
                                    <div className="smartphoto-header">
                                        <span className="smartphoto-count">1/</span>
                                        <span className="smartphoto-caption" aria-live="polite" tabindex="-1"></span>
                                        <button className="smartphoto-dismiss" dataActionClick="hidePhoto()"><span className="smartphoto-sr-only">close the image dialog</span></button>
                                    </div>
                                    <div className="smartphoto-content" dataActionClick="hidePhoto()">
                                    </div>
                                    <ul className="smartphoto - list">
                                    </ul>
                                    <ul className="smartphoto-arrows">
                                        <li className="smartphoto-arrow-left" aria-hidden="true"><a href="#" dataActionClick="gotoSlide()" role="button"><span className="smartphoto-sr-only">go to the previous image</span></a></li>
                                        <li className="smartphoto-arrow-right" aria-hidden="true"><a href="#" dataActionClick="gotoSlide()" role="button"><span className="smartphoto-sr-only">go to the next image</span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xdsoft_datetimepicker xdsoft_noselect xdsoft_"><div className="xdsoft_datepicker active"><div className="xdsoft_monthpicker"><button type="button" className="xdsoft_prev"
                        style={{ visibility: "visible" }}></button><button type="button" className="xdsoft_today_button" style={{ visibility: "hidden" }}></button><div className="xdsoft_label xdsoft_month custom- select">
                            <span>Ocak</span>

                            <div className="xdsoft_select xdsoft_monthselect xdsoft_scroller_box">
                                <div style={{ marginTop: "0px" }}><div className="xdsoft_option xdsoft_current" data-value="0">Ocak</div>

                                    <div className="xdsoft_option " data-value="1">Şubat</div><div className="xdsoft_option " data-value="2">Mart</div>
                                    <div className="xdsoft_option " data-value="3">Nisan</div><div className="xdsoft_option " data-value="4">Mayıs</div>
                                    <div className="xdsoft_option " data-value="5">Haziran</div><div className="xdsoft_option " data-value="6">Temmuz</div>
                                    <div className="xdsoft_option " data-value="7">Ağustos</div><div className="xdsoft_option " data-value="8">Eylül</div><div className="xdsoft_option " data-value="9">Ekim</div><div className="xdsoft_option " data-value="10">Kasım</div><div className="xdsoft_option " data-value="11">Aralık</div></div><div className="xdsoft_scrollbar"><div className="xdsoft_scroller" style={{ display: "block", height: "10px", marginTop: "0px" }} ></div></div></div><i></i></div><div className="xdsoft_label xdsoft_year custom-select"><span>1990</span><div className="xdsoft_select xdsoft_yearselect xdsoft_scroller_box"><div style={{ marginTop: "0px" }} ><div className="xdsoft_option " data-value="1950">1950</div><div className="xdsoft_option " data-value="1951">1951</div><div className="xdsoft_option " data-value="1952">1952</div><div className="xdsoft_option " data-value="1953">1953</div><div className="xdsoft_option " data-value="1954">1954</div><div className="xdsoft_option " data-value="1955">1955</div><div className="xdsoft_option " data-value="1956">1956</div><div className="xdsoft_option " data-value="1957">1957</div><div className="xdsoft_option " data-value="1958">1958</div><div className="xdsoft_option " data-value="1959">1959</div><div className="xdsoft_option " data-value="1960">1960</div><div className="xdsoft_option " data-value="1961">1961</div><div className="xdsoft_option " data-value="1962">1962</div><div className="xdsoft_option " data-value="1963">1963</div><div className="xdsoft_option " data-value="1964">1964</div><div className="xdsoft_option " data-value="1965">1965</div><div className="xdsoft_option " data-value="1966">1966</div><div className="xdsoft_option " data-value="1967">1967</div><div className="xdsoft_option " data-value="1968">1968</div><div className="xdsoft_option " data-value="1969">1969</div><div className="xdsoft_option " data-value="1970">1970</div><div className="xdsoft_option " data-value="1971">1971</div><div className="xdsoft_option " data-value="1972">1972</div><div className="xdsoft_option " data-value="1973">1973</div><div className="xdsoft_option " data-value="1974">1974</div><div className="xdsoft_option " data-value="1975">1975</div><div className="xdsoft_option " data-value="1976">1976</div><div className="xdsoft_option " data-value="1977">1977</div><div className="xdsoft_option " data-value="1978">1978</div><div className="xdsoft_option " data-value="1979">1979</div><div className="xdsoft_option " data-value="1980">1980</div><div className="xdsoft_option " data-value="1981">1981</div><div className="xdsoft_option " data-value="1982">1982</div><div className="xdsoft_option " data-value="1983">1983</div><div className="xdsoft_option " data-value="1984">1984</div><div className="xdsoft_option " data-value="1985">1985</div><div className="xdsoft_option " data-value="1986">1986</div><div className="xdsoft_option " data-value="1987">1987</div><div className="xdsoft_option " data-value="1988">1988</div><div className="xdsoft_option " data-value="1989">1989</div><div className="xdsoft_option xdsoft_current" data-value="1990">1990</div><div className="xdsoft_option " data-value="1991">1991</div><div className="xdsoft_option " data-value="1992">1992</div><div className="xdsoft_option " data-value="1993">1993</div><div className="xdsoft_option " data-value="1994">1994</div><div className="xdsoft_option " data-value="1995">1995</div><div className="xdsoft_option " data-value="1996">1996</div><div className="xdsoft_option " data-value="1997">1997</div><div className="xdsoft_option " data-value="1998">1998</div><div className="xdsoft_option " data-value="1999">1999</div><div className="xdsoft_option " data-value="2000">2000</div><div className="xdsoft_option " data-value="2001">2001</div><div className="xdsoft_option " data-value="2002">2002</div><div className="xdsoft_option " data-value="2003">2003</div><div className="xdsoft_option " data-value="2004">2004</div><div className="xdsoft_option " data-value="2005">2005</div><div className="xdsoft_option " data-value="2006">2006</div><div className="xdsoft_option " data-value="2007">2007</div></div><div className="xdsoft_scrollbar"><div className="xdsoft_scroller" style={{ display: "block", height: "10px", marginTop: "0px" }} ></div></div></div><i></i></div > <button type="button" className="xdsoft_next" style={{
                                        visibility: "visible"
                                    }}></button></div><div className="xdsoft_calendar">
                            <table><thead><tr><th>Paz</th><th>Pts</th><th>Sal</th><th>Çar</th><th>Per</th><th>Cum</th><th>Cts</th></tr></thead><tbody><tr><td dataDate="31" dataMonth="11" dataYear="1989" className="xdsoft_date xdsoft_day_of_week0 xdsoft_date xdsoft_other_month xdsoft_weekend" title=""><div>31</div></td><td dataDate="1" dataMonth="0" dataYear="1990" className="xdsoft_date xdsoft_day_of_week1 xdsoft_date" title=""><div>1</div></td><td dataDate="2" dataMonth="0" dataYear="1990" className="xdsoft_date xdsoft_day_of_week2 xdsoft_date" title=""><div>2</div></td><td dataDate="3" dataMonth="0" dataYear="1990" className="xdsoft_date xdsoft_day_of_week3 xdsoft_date" title=""><div>3</div></td><td dataDate="4" dataMonth="0" dataYear="1990" className="xdsoft_date xdsoft_day_of_week4 xdsoft_date" title=""><div>4</div></td><td dataDate="5" dataMonth="0" dataYear="1990" className="xdsoft_date xdsoft_day_of_week5 xdsoft_date" title=""><div>5</div></td><td dataDate="6" dataMonth="0" dataYear="1990" className="xdsoft_date xdsoft_day_of_week6 xdsoft_date xdsoft_current xdsoft_weekend" title=""><div>6</div></td></tr><tr><td dataDate="7" dataMonth="0" dataYear="1990" className="xdsoft_date xdsoft_day_of_week0 xdsoft_date xdsoft_weekend" title=""><div>7</div></td><td dataDate="8" dataMonth="0" dataYear="1990" className="xdsoft_date xdsoft_day_of_week1 xdsoft_date" title=""><div>8</div></td><td dataDate="9" dataMonth="0" dataYear="1990" className="xdsoft_date xdsoft_day_of_week2 xdsoft_date" title=""><div>9</div></td><td dataDate="10" dataMonth="0" dataYear="1990" className="xdsoft_date xdsoft_day_of_week3 xdsoft_date" title=""><div>10</div></td><td dataDate="11" dataMonth="0" dataYear="1990" className="xdsoft_date xdsoft_day_of_week4 xdsoft_date" title=""><div>11</div></td><td dataDate="12" dataMonth="0" dataYear="1990" className="xdsoft_date xdsoft_day_of_week5 xdsoft_date" title=""><div>12</div></td><td dataDate="13" dataMonth="0" dataYear="1990" className="xdsoft_date xdsoft_day_of_week6 xdsoft_date xdsoft_weekend" title=""><div>13</div></td></tr><tr><td dataDate="14" dataMonth="0" dataYear="1990" className="xdsoft_date xdsoft_day_of_week0 xdsoft_date xdsoft_weekend" title=""><div>14</div></td><td dataDate="15" dataMonth="0" dataYear="1990" className="xdsoft_date xdsoft_day_of_week1 xdsoft_date" title=""><div>15</div></td><td dataDate="16" dataMonth="0" dataYear="1990" className="xdsoft_date xdsoft_day_of_week2 xdsoft_date" title=""><div>16</div></td><td dataDate="17" dataMonth="0" dataYear="1990" className="xdsoft_date xdsoft_day_of_week3 xdsoft_date" title=""><div>17</div></td><td dataDate="18" dataMonth="0" dataYear="1990" className="xdsoft_date xdsoft_day_of_week4 xdsoft_date" title=""><div>18</div></td><td dataDate="19" dataMonth="0" dataYear="1990" className="xdsoft_date xdsoft_day_of_week5 xdsoft_date" title=""><div>19</div></td><td dataDate="20" dataMonth="0" dataYear="1990" className="xdsoft_date xdsoft_day_of_week6 xdsoft_date xdsoft_weekend" title=""><div>20</div></td></tr><tr><td dataDate="21" dataMonth="0" dataYear="1990" className="xdsoft_date xdsoft_day_of_week0 xdsoft_date xdsoft_weekend" title=""><div>21</div></td><td dataDate="22" dataMonth="0" dataYear="1990" className="xdsoft_date xdsoft_day_of_week1 xdsoft_date" title=""><div>22</div></td><td dataDate="23" dataMonth="0" dataYear="1990" className="xdsoft_date xdsoft_day_of_week2 xdsoft_date" title=""><div>23</div></td><td dataDate="24" dataMonth="0" dataYear="1990" className="xdsoft_date xdsoft_day_of_week3 xdsoft_date" title=""><div>24</div></td><td dataDate="25" dataMonth="0" dataYear="1990" className="xdsoft_date xdsoft_day_of_week4 xdsoft_date" title=""><div>25</div></td><td dataDate="26" dataMonth="0" dataYear="1990" className="xdsoft_date xdsoft_day_of_week5 xdsoft_date" title=""><div>26</div></td><td dataDate="27" dataMonth="0" dataYear="1990" className="xdsoft_date xdsoft_day_of_week6 xdsoft_date xdsoft_weekend" title=""><div>27</div></td></tr><tr><td dataDate="28" dataMonth="0" dataYear="1990" className="xdsoft_date xdsoft_day_of_week0 xdsoft_date xdsoft_weekend" title=""><div>28</div></td><td dataDate="29" dataMonth="0" dataYear="1990" className="xdsoft_date xdsoft_day_of_week1 xdsoft_date" title=""><div>29</div></td><td dataDate="30" dataMonth="0" dataYear="1990" className="xdsoft_date xdsoft_day_of_week2 xdsoft_date" title="">
                                < div > 30</div></ td><td dataDate="31" dataMonth="0" dataYear="1990" className="xdsoft_date xdsoft_day_of_week3 xdsoft_date" title="">
                                    <div>31</div></td><td dataDate="1" dataMonth="1" dataYear="1990" className="xdsoft_date xdsoft_day_of_week4 xdsoft_date xdsoft_other_month" title="">
                                    <div>1</div></td><td dataDate="2" dataMonth="1" dataYear="1990" className="xdsoft_date xdsoft_day_of_week5 xdsoft_date xdsoft_other_month" title="">
                                    <div>2</div></td><td dataDate="3" dataMonth="1" dataYear="1990" className="xdsoft_date xdsoft_day_of_week6 xdsoft_date xdsoft_other_month xdsoft_weekend" title="">
                                    <div>3</div></td></tr ></tbody ></ table ></div >
                        <button type="button" className="xdsoft_save_selected blue-gradient-button"
                            style={{ display: "none" }}>Save Selected</button></div>
                        <div className="xdsoft_timepicker">< button type="button" className="xdsoft_prev">
                        </button><div className="xdsoft_time_box xdsoft_scroller_box">
                                <div className="xdsoft_time_variant"
                                    style={{ marginTop: "0px" }}>
                                    <div className="xdsoft_time xdsoft_current" data-hour="0" data-minute="0">00:00</div><div className="xdsoft_time " data-hour="1" data-minute="0">01:00</div>
                                    <div className="xdsoft_time " data-hour="2" data-minute="0">02:00</div><div className="xdsoft_time " data-hour="3" data-minute="0">03:00</div>
                                    <div className="xdsoft_time " data-hour="4" data-minute="0">04:00</div><div className="xdsoft_time " data-hour="5" data-minute="0">05:00</div>
                                    <div className="xdsoft_time " data-hour="6" data-minute="0">06:00</div><div className="xdsoft_time " data-hour="7" data-minute="0">07:00</div>
                                    <div className="xdsoft_time " data-hour="8" data-minute="0">08:00</div><div className="xdsoft_time " data-hour="9" data-minute="0">09:00</div>
                                    <div className="xdsoft_time " data-hour="10" data-minute="0">10:00</div><div className="xdsoft_time " data-hour="11" data-minute="0">11:00</div>
                                    <div className="xdsoft_time " data-hour="12" data-minute="0">12:00</div><div className="xdsoft_time " data-hour="13" data-minute="0">13:00</div>
                                    <div className="xdsoft_time " data-hour="14" data-minute="0">14:00</div><div className="xdsoft_time " data-hour="15" data-minute="0">15:00</div>
                                    <div className="xdsoft_time " data-hour="16" data-minute="0">16:00</div><div className="xdsoft_time " data-hour="17" data-minute="0">17:00</div>
                                    <div className="xdsoft_time " data-hour="18" data-minute="0">18:00</div><div className="xdsoft_time " data-hour="19" data-minute="0">19:00</div>
                                    <div className="xdsoft_time " data-hour="20" data-minute="0">20:00</div><div className="xdsoft_time " data-hour="21" data-minute="0">21:00</div>
                                    <div className="xdsoft_time " data-hour="22" data-minute="0">22:00</div><div className="xdsoft_time " data-hour="23" data-minute="0">23:00</div>
                                </div > <div className="xdsoft_scrollbar"><div className="xdsoft_scroller"
                                    style={{ display: "block", height: "10px", marginTop: "0px" }}>
                                </div></div ></div >
                            <button type="button" className="xdsoft_next"></button></div ></div >

                </div >
            </div >
        </body >
    );
}
const useFormInput = initialValue => {
    const [value, setValue] = useState(initialValue);

    const handleChange = e => {
        setValue(e.target.value);
    }
    return {
        value,
        onChange: handleChange
    }
}
export default Signup
