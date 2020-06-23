



import $ from "jquery";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import apifunctions from "../api/apifunctions"
import { setUserSession } from '../Utils/Common';
import axios from 'axios';
import {
    getUser,
    getToken,
    getLang,
    transToEnglish,
    transToArabic,
    trans,
    removeUserSession,
} from "../Utils/Common";
import { Redirect } from 'react-router';
function ChangePassword(props) {
    let currentprops = props;
    let formIsValid = true;
    const email = useFormInput('');
    const [error_email, setError_email] = useState(null);
    const password = useFormInput('');
    let password_is_shown = false;
    const [error_password, setError_password] = useState(null);
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
    const handleLogin = () => {
        formIsValid = true;


        if (password.value.length < 6) {
            formIsValid = false;
            console.log('1' + formIsValid);
            setError_password(
                trans('كلمة السر يجب ان تكون مؤلفة من 6 أحرف على الأقل ', 'Password must be at least 6 characters long')
            );
        } else if (!/\d/.test(password.value)) {
            formIsValid = false;
            console.log('2' + formIsValid);
            setError_password(
                trans('كلمة السر يجب ان تحوي ارقام', 'Password must contain a digit')
            );
        } else if (!/[!@#$%^&*]/.test(password.value)) {
            formIsValid = false;
            console.log('3' + formIsValid);
            setError_password(
                trans('   !@#$%^&* كلمة السر يجب ان تحوي أحرف خاصة مثل   ', 'Password must contain special character: !@#$%^&*')
            );
        }
        else {
            setError_password('');
        }







        if (typeof email !== "undefined") {
            //regular expression for email validation
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(email.value)) {
                setError_email(trans("الرجاء ادخال ايميل صحيح", " Please enter valid email no   "));
                console.log('4' + formIsValid);
                formIsValid = false;
            }
            else {
                setError_email("");
            }
        }
        console.log(" , password : " + password.value + " , email : " + email.value);
        if (!formIsValid) {
            setError(

                trans("خطأ في كلمة السر وتسجيل الدخول", "wrong User name or password . Please try again later ")
            );
        }
        else {
            setError(" ");





            setError(null);
            setLoading(true);
            axios.post(apifunctions.api_server_url + '/' + 'login_user'

                ,
                {

                    password: password.value

                    , email: email.value


                }
                ,
                {
                    headers: {
                        Authorization: 'Bearer ' + getToken(),
                        'Content-Type': 'application/json'

                    }
                }

            ).then(response => {
                setLoading(false);
                console.log('in login in response : ');
                console.log(response);

            }).catch(error => {
                //console.table(error);
                setLoading(false);
                try {
                    if (error.response.status === 401) {
                        setError(error.response.data.error);
                        if (error.response.data.error == "emial already exist") {
                            setError_email("emial already exist");
                        }
                        else setError(

                            trans("خطأ في كلمة السر وتسجيل الدخول", "wrong User name or password . or try again later ")
                        );
                    }

                } catch (e) {
                    setError("Something went wrong. Please try again later.");
                    console.log('error in login page' + e);
                }

            });
        }
    }
    return (
        <main class="container push-top" id="home-body-id">






            <div className="login-modal" style={{ backgroundColor: "white" }}>

                <div className="modal-body"  >

                    <div className="row">
                        <div className="col-md-12 col-xs-12 col-sm-12 col-xs-12 col-lg-12 ">
                            <div className="row half-margin">
                                <div className="col-xxs-12 col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <div className="landing-header">



                                        <font style={{ verticalAlign: "inherit" }}>
                                            <font style={{ verticalAlign: "inherit", fontSize: '23px' }}>

                                                {trans("تغيير كلمة السر", "Reset Password")} </font></font>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-xs-1 col-sm-1 col-xs-1 "></div>
                        <div className="col-md-4 col-xs-10  col-sm-10 col-xs-10 ">





                            <div className="col-xs-12 form-group">
                                {error_email && <><small style={{ color: 'red' }}>{error_email}</small><br /></>}
                                <label className="std-font" for="Username"><font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>  {trans("الأيميل", "Email*")}</font></font></label>
                                <input type="text" {...email} placeholder={trans("أدخل عنوان الإيميل", "E-Mail Address")} className="form-control"
                                    ariaRequired="true" />
                            </div>

                            <div className="col-xs-12 form-group">
                                {error_password && <><small style={{ color: 'red' }}>{error_password}</small><br /></>}
                                <label className="std-font" for="Password">
                                    <font style={{ verticalAlign: "inherit" }}><font style={{ verticalAlign: "inherit" }}>
                                        {trans("  كلمة السر الجديدة", "New Password*")}

                                    </font></font></label>

                                <div class="hideShowPassword-wrapper"
                                    style={{ position: 'relative', display: 'block', verticalAlign: 'baseline', margin: "0px" }}>

                                    <input {...password} placeholder={trans("  كلمة السر الجديدة", "New Password*")} type="password" id="activation_password"
                                        name="Password" maxlength="20" autocomplete="off"
                                        class="form-control xss-validate js-pass-reg hideShowPassword-field" placeholder="Your password"
                                        aria-required="true" style={{ margin: '0px', paddingRight: '66px' }} />
                                    <button type="button" role="button" ariaLabel="Show Password" title="Show Password"
                                        tabindex="0" class="btn btn-link btn-revealer smaller hideShowPassword-toggle-show"
                                        aria-pressed="false"
                                        onClick={showHidePassword}
                                        id="activation_showpassword"
                                        style={{ position: 'absolute', right: '0px', bottom: '0px' }}><font style={{ verticalAlign: "inherit" }}>
                                            <font style={{ verticalAlign: "inherit" }}>{trans("اظهار", "Show*")} </font></font>
                                    </button>

                                </div>

                            </div>


                            <div className="col-xs-12 form-group">
                                {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />

                                <button type="submit" className="btn btn-primary btn-lg btn-block btn-w-loader js-quick-login" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading}>
                                    <span className="btn-text"><font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>
                                            {trans("   تغيير كلمة السر", "change password")}

                                        </font></font></span><div className="mloader" ariaHidden="true">
                                        <div className="bnc bnc1"></div><div className="bnc bnc2"></div><div className="bnc bnc3"></div></div></button>
                            </div>

                        </div>
                        <div className="col-md-4 col-xs-1 col-sm-1 col-xs-1 "></div>
                    </div>



                </div>

            </div>



        </main>

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
export default ChangePassword