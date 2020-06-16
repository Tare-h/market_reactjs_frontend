import $ from "jquery";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import apifunctions from "../../api/apifunctions"
import { setUserSession } from '../../Utils/Common';
import axios from 'axios';
import {
  getUser,
  getToken,
  getLang,
  transToEnglish,
  transToArabic,
  trans,
  removeUserSession,
} from "../../Utils/Common";
import { Redirect } from 'react-router';
function Login(props) {
  let currentprops = props;
  let formIsValid = true;
  const email = useFormInput('');
  const [error_email, setError_email] = useState(null);
  const password = useFormInput('');

  const [error_password, setError_password] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

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
        try {
          setUserSession(response.data.token, response.data.user);
          //   props.history.push('/profile');

          if (window.location.pathname != '/login')
            currentprops.history.push(window.location.pathname);
          else
            currentprops.history.push('/');
          try {
            $("#login_dialog").hide();
          }
          catch (e) {

          }

          //  window.location.href('/profile');
          // return <Redirect to='/profile' />
        }

        catch (e) {
          console.log('error in login in response : ' + e);
        }
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
                    {trans(" كلمة السر", "Password*")}

                  </font></font></label>
                <input type="password" {...password} placeholder={trans(" كلمة السر", "Password*")} maxlength="20" autocomplete="off"
                  className="form-control" ariaRequired="true" />
              </div>


              {/*
                <div className="form-group landing-block">
                  <div className="col-xxs-12 col-xs-12">
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" name="RemeberMe" id="RememberMe" value="true" ariaLabel="Remember me" />
                        <span className="smaller" >
                          <font style={{ verticalAlign: "inherit" }}><font style={{ verticalAlign: "inherit" }}> Remember me</font></font></span>
                        <input type="hidden" name="RememberMe" value="false" ariaLabel="hidden" />
                      </label>
                    </div>
                  </div>
                  <div className="col-xxs-12 col-xs-12">
                    <a id="ela-quicklogin-sifremini-unuttum" className="text-right lostpassword" href="/sifremi-unuttum" ariaLabel="I forgot my password">
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>I forgot my password</font></font></a>
                  </div>
                </div>
               */}

              <div className="col-xs-12 form-group">
                {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />

                <button type="submit" className="btn btn-primary btn-lg btn-block btn-w-loader js-quick-login" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading}>
                  <span className="btn-text"><font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>
                      {trans("  تسجيل دخول", "Login")}

                    </font></font></span><div className="mloader" ariaHidden="true">
                    <div className="bnc bnc1"></div><div className="bnc bnc2"></div><div className="bnc bnc3"></div></div></button>
              </div>

            </div>
            <div className="col-md-4 col-xs-1 col-sm-1 col-xs-1 "></div>
          </div>



        </div>
        <div className="modal-footer">
          <p className="text-center std-font"><font style={{ verticalAlign: "inherit" }}><font style={{ verticalAlign: "inherit" }}>

            <NavLink
              to="/signup"
              id="ela-sezon-menu-p-"
              href="http://malls-online.com/"
              data-hover=""
              className="no_submenu js-mn-itm"
            >
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>
                  {trans("تسجيل جديد", "Signup")}
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
          </font></font></p>
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
export default Login