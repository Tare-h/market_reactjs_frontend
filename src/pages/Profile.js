
import { NavLink } from "react-router-dom";
import qs from 'qs';
import Login from "../components/account/Login";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Component, Suspense, useState, useEffect } from "react";
import axios from 'axios';
import apifunctions from "../api/apifunctions";

import React from 'react';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


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


class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      context: props.context,
    };
    this.handleLogout = this.handleLogout.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleRadioChange = this.handleRadioChange.bind(this);
    this.submitUserAfterUpdate = this.submitUserAfterUpdate.bind(this);

  }
  getSurename() {

    if (!this.user)
      return 'null';
    return this.user.surname;
  }
  state = {
    persons: [],
    user: {
      "id": -1,
      "name": "",
      "email": "",
      "email_verified_at": null,
      "verified": "",
      "verification_token": null,
      "created_at": "2020-06-05 18:26:51",
      "updated_at": "2020-06-05 18:26:51",
      "avatar": null,
      "mobile_phone": "",
      "surname": ' ',
      "birthdate": "",
      "gender": "",
      "address": ''
    },
    token: '',
    config: '',
    bodyParameters: ''
  };


  /* 
   This is where the magic happens 
  */
  handleRadioChange(e) {
    const temp_user = this.state.user;
    temp_user[e.currentTarget.name] = e.currentTarget.value;
    this.setState({
      user: temp_user
    });
  }

  handleInputChange(e) {
    const temp_user = this.state.user;
    temp_user[e.target.name] = e.target.value;
    this.setState({
      user: temp_user
    });
  }
  handleDateChange(date) {

    const temp_user = this.state.user;

    temp_user.birthdate = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();

    this.setState({
      user: temp_user
    });
  }
  submitUserAfterUpdate(e) {
    console.log('submitUserAfterUpdate');
    axios.post(apifunctions.api_server_url + '/' + 'editUserProfile'

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
      setUserSession(getToken(), response.data);
      console.log(response);

      // this.props.history.push('/profile');
    }).catch(error => {
      //console.table(error);

      if (error.response.status === 401) {

        if (error.response.data.error == "emial already exist") {

        }
      }

    });
  }
  componentDidMount() {

    this.setState({ token: getToken() });
    this.config = {
      headers: {
        Authorization: 'Bearer ' + getToken(),
        'Content-Type': 'application/json'

      }
    };
    this.bodyParameters = {
      key: "value"
    };

    axios.get(apifunctions.api_server_url + '/user_profile',
      this.config,
      this.bodyParameters

    ).then(response => {
      console.table(response);
      this.setState({ user: response.data.user })
      //setUserSession(response.data.token, response.data.user);
      //setAuthLoading(false);
    }).catch(error => {

      //  removeUserSession();
      // setAuthLoading(false);
    });
  }
  handleLogout() {
    removeUserSession();
    this.props.history.push('/login');
  }






  render() {



    return (

      <main class="container push-top" id="home-body-id">




        <div class="row clearfix">
          <div class="col-xs-12 col-sm-6"><h1><font style={{ verticalAlign: "inherit" }}><font style={{ verticalAlign: "inherit" }}>
            {trans(
              'حسابي',
              ' My Account'
            )}</font></font></h1></div>

        </div>


        <div class="row clearfix">
          <div class="visible-xs visible-sm col-xs-12 col-sm-12 column">
            <button type="button" class="filter-toggle submenutg" dataToggle="collapse" dataTarget=".sidebar">
              <span class="icon-text"><font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>
                  {trans(
                    'حسابي',
                    ' My Account'
                  )}
                </font></font></span>
              <span ariaHidden="true" class="icontype pull-right ui-plus-md">
                <svg height="13" role="img" title="Toggle Closed" viewBox="0 0 13 13" width="13">
                  <use xlinkHref="/Content/sprites/morhipo-icons.svg?v=25#ui-plus-md"></use></svg></span>
            </button>
          </div>         <div class="col-xxs-12 col-xs-12 col-sm-12 col-md-12 column">

            <div class="row inside-form pad-fix">
              <div class="col-xxs-12 col-xs-12 col-sm-12 col-md-12">

                <div class="account_content">

                  <div class="row inside-form pad-fix">
                    <div class="col-xxs-12 col-xs-6">

                      <h2><font style={{ verticalAlign: "inherit" }}><font style={{ verticalAlign: "inherit" }}>
                        {trans(
                          'المعلومات الشخصية',
                          ' My Membership Information'
                        )}

                      </font></font></h2>
                      <div id="message-container"></div>



                      <div class="form-group">
                        <div class="row inside-form">
                          <div class="col-xxs-12 col-xs-6 special-fix">
                            <label for="FirstName"><font style={{ verticalAlign: "inherit" }}>
                              <font style={{ verticalAlign: "inherit" }}>
                                {trans(
                                  'الأسم',
                                  ' Your name*'
                                )}
                              </font></font></label>
                            <input type="text" name="name" onChange={this.handleInputChange} value={this.state.user && this.state.user.name} class="form-control" maxlength="50"

                              ariaRequired="true" />
                          </div>

                          <div class="col-xxs-12 col-xs-6">
                            <label for="LastName"><font style={{ verticalAlign: "inherit" }}><font style={{ verticalAlign: "inherit" }}>
                              {trans(
                                'النسبة',
                                '  Your surname*'
                              )}

                            </font></font></label>
                            <input type="text" name="surname" onChange={this.handleInputChange} value={this.state.user && this.state.user.surname} class="form-control" maxlength="50"

                              ariaRequired="true" />
                          </div>
                        </div>
                      </div>
                      <div class="form-group">
                        <div class="row inside-form">

                          <div class="col-xxs-12 col-xs-12">
                            <label for="LastName"><font style={{ verticalAlign: "inherit" }}><font style={{ verticalAlign: "inherit" }}>
                              {trans(
                                'العنوان',
                                ' Your address*'
                              )}
                            </font></font></label>
                            <input type="text" name="address" onChange={this.handleInputChange} value={this.state.user && this.state.user.address} class="form-control" maxlength="50"

                              ariaRequired="true" />
                          </div>
                        </div>
                      </div>

                      <div class="form-group">
                        <label for="Email"><font style={{ verticalAlign: "inherit" }}><font style={{ verticalAlign: "inherit" }}>
                          {trans(
                            'الأيميل',
                            'E-Mail Address'
                          )}
                        </font></font></label>
                        <input type="email" name="email" onChange={this.handleInputChange} value={this.state.user && this.state.user.email} maxlength="256" text="E-Posta" class="form-control"
                          autocomplete="off"

                          ariaRequired="true" />
                      </div>

                      <div class="form-group">
                        <label for="MobilePhone"><font style={{ verticalAlign: "inherit" }}><font style={{ verticalAlign: "inherit" }}>
                          {trans(
                            'رقم الجوال',
                            '  Mobile phone'
                          )}
                        </font></font></label>
                        <input type="tel" name="mobile_phone" onChange={this.handleInputChange} value={this.state.user && this.state.user.mobile_phone} value="(545) 434 34 43"
                          placeholder="(5__) ___ __ __" class="form-control"

                          ariaRequired="true" maxlength="15" />
                      </div>

                      <div class="form-group">
                        <div class="row inside-form">
                          <label for="datetimepicker" class="col-xxs-12 col-xs-12 label-grouped">
                            <font style={{ verticalAlign: "inherit" }}><font style={{ verticalAlign: "inherit" }}>
                              {trans(
                                'تاريخ ميلادك',
                                'Your Date of Birth *'
                              )}
                            </font></font></label>
                          <div class="col-xs-12 colform">
                            <DatePicker className="form-control"
                              value={this.state.user && this.state.user.birthdate}
                              name="birthdate" onChange={this.handleDateChange} onSelect={this.handleDateChange} />


                          </div>
                        </div>
                      </div>

                      <div class="form-group">
                        <label for="GenderID" class="blocklabel label-grouped"><font style={{ verticalAlign: "inherit" }}><font style={{ verticalAlign: "inherit" }}>
                          {trans(
                            'الجنس',
                            'Gender'
                          )}
                        </font></font></label>
                        <label class="error"><span class="field-validation-valid" data-valmsg-for="GenderID" data-valmsg-replace="true"></span></label>
                        <label class="radio-inline colform">
                          <input type="radio" name="gender" onChange={this.handleRadioChange} value="woman" class="radio-form-control" checked={this.state.user && this.state.user.gender === 'woman'}
                            ariaRequired="true" /><font style={{ verticalAlign: "inherit" }}>
                            <font style={{ verticalAlign: "inherit" }}>{trans(
                              'انثى',
                              'Woman'
                            )}
                            </font></font></label>
                        <label class="radio-inline colform">
                          <input type="radio" name="gender" onChange={this.handleRadioChange} value="male" class="radio-form-control" checked={this.state.user && this.state.user.gender === 'male'} />
                          <font style={{ verticalAlign: "inherit" }}><font style={{ verticalAlign: "inherit" }}>{trans(
                            'ذكر',
                            'Male'
                          )}
                          </font></font></label>
                      </div>




                      <input type="hidden" name="SubscribeByMail" id="SubscribeByMail" value="True" ariaHidden="true" />
                      <input type="hidden" name="SubscribeBySMS" id="SubscribeBySMS" value="True" ariaHidden="true" />

                      <div class="row inside-form">
                        <div class="col-xxs-12 col-xs-12">
                          <button class="btn btn-primary" data-style="zoom-in" onClick={(event) => this.submitUserAfterUpdate()}>
                            <span class="btn-text ladda-label"><font style={{ verticalAlign: "inherit" }}>
                              <font style={{ verticalAlign: "inherit" }}>{trans(
                                'تحديث معلوماتي',
                                'Update My Information'
                              )}
                              </font></font></span></button>
                        </div>
                      </div>


                    </div>
                  </div>

                </div>

              </div>
              {/* <div class="col-xxs-12 col-xs-12 col-sm-12 col-md-12 push-top">
                  <div class="account_content">
                    <div class="row inside-form pad-fix">
                      <div class="col-xxs-12 col-xs-6">
                        <h2><font style={{ verticalAlign: "inherit" }}><font style={{ verticalAlign: "inherit" }}>Password Update</font></font></h2>
                        <div id="message-container-passwordreminder"></div>
                        <p id="message-container-light" class="text-muted smaller"><font style={{ verticalAlign: "inherit" }}><font style={{ verticalAlign: "inherit" }}>Your password can be at least </font></font><strong><font style={{ verticalAlign: "inherit" }}><font style={{ verticalAlign: "inherit" }}>6</font></font></strong><font style={{ verticalAlign: "inherit" }}><font style={{ verticalAlign: "inherit" }}> and at most </font></font><strong><font style={{ verticalAlign: "inherit" }}><font style={{ verticalAlign: "inherit" }}>20</font></font></strong><font style={{ verticalAlign: "inherit" }}><font style={{ verticalAlign: "inherit" }}> characters long.</font></font></p>

                        <form action="https://www.morhipo.com/User/ChangePassword" method="post" name="changepasword" id="changepasword" class="bilgiform" novalidate="novalidate" data-error-dir="up" data-focusout="false" data-keyup="false" data-click="false">
                          <div class="form-group">
                            <label for="CurrentPassword"><font style={{ verticalAlign: "inherit" }}><font style={{ verticalAlign: "inherit" }}>Your Old Password *</font></font></label>
                            <input autocomplete="off" class="form-control" id="CurrentPassword" maxlength="20"
                              name="CurrentPassword" type="password"
                              ariaRequired="true" />
                          </div>
                          <div class="form-group">
                            <label for="NewPassword"><font style={{ verticalAlign: "inherit" }}><font style={{ verticalAlign: "inherit" }}>Your New Password *</font></font></label>
                            <input type="password" id="NewPassword" name="NewPassword" maxlength="20" autocomplete="off" class="form-control xss-validate"
                              placeholder="Your password can be at least 6 and at most 20 characters."
                              ariaRequired="true" />
                          </div>
                          <div class="form-group">
                            <label for="ReNewPassword"><font style={{ verticalAlign: "inherit" }}><font style={{ verticalAlign: "inherit" }}>Your New Password (Again) *</font></font></label>
                            <input autocomplete="off" class="form-control" id="ReNewPassword" maxlength="20" name="ReNewPassword" type="password"

                              ariaRequired="true" />
                          </div>
                          <div class="row inside-form">
                            <div class="col-xxs-12 col-xs-12">
                              <button type="submit" id="send-data" class="btn btn-primary"><font style={{ verticalAlign: "inherit" }}><font style={{ verticalAlign: "inherit" }}>Update My Password</font></font>
                              </button>
                            </div>
                          </div>
                        </form>

                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xxs-12 col-xs-12 col-sm-12 col-md-12 push-top">

                  <div class="account_content heightfix">
                    <div class="row inside-form pad-fix">
                      <div class="bl-cancel col-xxs-12 col-xs-6">
                        <h2><font style={{ verticalAlign: "inherit" }}><font style={{ verticalAlign: "inherit" }}>Communication Options</font></font></h2>
                        <div class="notification-container"></div>

                        <form action="#" id="usermailingpermisson"
                          name="usermailingpermisson" method="post" class="eposta-form"
                          novalidate="novalidate">
                          <div class="form-group">
                            <div class="checkbox">
                              <label>
                                <input type="checkbox" id="contact-permission-enabler" checked="" /><font style={{ verticalAlign: "inherit" }}><font style={{ verticalAlign: "inherit" }}>
                                  I consent to the Morhipo privacy policy, the use - processing of my personal data and commercial electronic messages to be sent to me </font></font><a id="ela-iletisim-izinleri-metni" class="tabopener" href="https://www.morhipo.com/User/UserPermissionAgreementControl" dataToggle="modal" dataTarget="#iletisim-modal" data-opentab="0"><strong><font style={{ verticalAlign: "inherit" }}><font style={{ verticalAlign: "inherit" }}>under the terms stated here</font></font></strong></a><font style={{ verticalAlign: "inherit" }}><font style={{ verticalAlign: "inherit" }}> .
                                                </font></font></label>
                              <div class="modal fade" id="iletisim-modal" tabindex="-1" role="dialog" aria-labelledby="iletisim-modal" ariaHidden="true">
                                <div class="modal-dialog">
                                  <div class="modal-content">
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="form-group">
                            <div class="form-indent">
                              <div class="checkbox">
                                <label>
                                  <input checked="checked" dataVal="true" dataValRequired="The SubscribeMailing field is required." id="SubscribeMailing" name="SubscribeMailing" type="checkbox" value="true" />
                                  <input name="SubscribeMailing" type="hidden" value="false" />
                                  <font style={{ verticalAlign: "inherit" }}><font style={{ verticalAlign: "inherit" }}> I want to be informed about the campaigns by e-newsletter.
                                                    </font></font></label>
                              </div>
                              <div class="checkbox">
                                <label>
                                  <input checked="checked" dataVal="true" dataValRequired="The SubscribeBySMS field is required." id="SubscribeBySms"
                                    name="SubscribeBySms" type="checkbox" value="true" />
                                  <input name="SubscribeBySms" type="hidden" value="false" />
                                  <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}> I want to be informed about the campaigns via SMS.
                                                    </font></font></label>
                              </div>
                            </div>
                          </div>
                          <div class="form-indent form-group" style={{ display: "none" }} id="phoneNumberInput">
                            <div class="row inside-form">
                              <div class="col-xxs-12 col-xs-12">
                                <div id="phone-number-content">
                                  <label for="MobilePhoneNumber" class="smaller"><strong><font style={{ verticalAlign: "inherit" }}><font style={{ verticalAlign: "inherit" }}>Your phone number</font></font></strong></label>
                                  <label for="MobilePhoneNumber-error" class="error"><font style={{ verticalAlign: "inherit" }}><font style={{ verticalAlign: "inherit" }}>There is no phone number registered with your membership. </font><font style={{ verticalAlign: "inherit" }}>Please write your phone in the field below.</font></font></label>
                                </div>
                              </div>
                              <div class="col-xxs-9 col-xs-6 col-sm-6">
                                <input type="tel" name="MobilePhoneNumber" id="MobilePhoneNumber" value="(545) 434 34 43"
                                  placeholder="(5__) ___ __ __" class="form-control" />
                              </div>
                            </div>
                          </div>

                          <button type="submit" class="form-buttonindent btn btn-primary push-bottom-10">
                            <font style={{ verticalAlign: "inherit" }}><font style={{ verticalAlign: "inherit" }}>Save</font></font></button>

                        </form>
                      </div>
                    </div>
                  </div>

                </div>
             */} </div>
          </div>

          <div id="modalContactAgreement" class="modal fade" tabindex="-1" role="dialog">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modalQuickLogin"></div>
              </div>
            </div>
          </div>

          <div class="modal fade" id="iletisim-modal" tabindex="-1" role="dialog" aria-labelledby="iletisim-modal" ariaHidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
              </div>
            </div>
          </div>
        </div>






      </main>



    );
  }
}
export default Profile;




