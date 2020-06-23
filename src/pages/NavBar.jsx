import React from "react";
import apifunctions from "../api/apifunctions";
import Login from "../components/account/Login";
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { findDOMNode } from "react-dom";
import {
  getUser,
  getToken,
  getLang,
  transToEnglish,
  get_currency,
  transToArabic,
  start_search,
  show_in_Saudi_riyal,
  show_in_dollar,
  show_in_Kuwaiti_dinar,
  getStart_search,
  is_fetching_fav,
  is_fetching_orders,
  is_fetching_cart,
  start_fetch_cart,
  start_fetch_orders,
  start_fetch_fav,
  end_fetch_cart,
  end_fetch_orders,
  end_fetch_fav,
  trans,
  removeUserSession,
  end_fetch_profile,
} from "../Utils/Common";
import $ from "jquery";
import axios from "axios";
export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      context: props.context,
      isFavloaded: false,
      isCartLoaded: false,
    };
    this.onMouseOverBtn = this.onMouseOverBtn.bind(this);
    this.onMouseLeaveBtn = this.onMouseLeaveBtn.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.text_search = this.text_search.bind(this);
    end_fetch_orders();
    end_fetch_fav();
    end_fetch_profile();
    end_fetch_cart();
  }

  handleLogout() {
    removeUserSession();
    this.props.history.push("/login");
  }

  onMouseOverBtn(campaignCategoryObj) {
    // Getting ref to JQuery object from our parent app.
    //alert("hi" + campaignCategoryObj.category_name_en);
    this.props.categories.map((current) =>
      $("#li_nav_" + current.id).removeClass("open")
    );
    $("#li_nav_" + campaignCategoryObj.id).toggleClass("open");
  }
  onMouseLeaveBtn(campaignCategoryObj) {
    // Getting ref to JQuery object from our parent app.
    //alert("hi" + campaignCategoryObj.category_name_en);

    $("#li_nav_" + campaignCategoryObj.id).removeClass("open");
  }
  onMouseClick() {
    $("#mobilemenuholder").toggleClass("active");
    $("body").removeClass("offcvs-open");
    $(".off-cvs-fade").remove();
  }

  componentDidUpdate() {
    //window.location.href)

    if (getToken()) {
      this.config = {
        headers: {
          Authorization: "Bearer " + getToken(),
          "Content-Type": "application/json",
        },
      };
      this.bodyParameters = {
        key: "value",
      };

      //if (this.state.is_fav_loaded == false)
      if (!this.state.isFavloaded) {
        $(".loadscr-container").show();
        //alert("navbar.js");
        if (!is_fetching_fav()) {
          start_fetch_fav();
          axios
            .get(
              apifunctions.api_server_url + "/get_favorits",
              this.config,
              this.bodyParameters
            )
            .then((response) => {
              console.table(response);
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
              end_fetch_fav();
            })
            .catch((error) => {
              $(".loadscr-container").hide();
              //  removeUserSession();
              end_fetch_fav();
            });
        }
      }

      if (!this.state.isOrderLoaded) {
        $(".loadscr-container").show();
        if (!is_fetching_orders()) {
          start_fetch_orders();
          axios
            .get(
              apifunctions.api_server_url + "/get_orders",
              this.config,
              this.bodyParameters
            )
            .then((response) => {
              console.table(response);

              $("#myorder_count").attr(
                "style",
                "background-color: red;border-radius: 50%;padding: 5px;color: rgb(255, 255, 255);"
              );

              $("#myorder_count").html(response.data.orders.length);
              this.setState({
                isOrderLoaded: true,
              });

              $(".loadscr-container").hide();
              //setUserSession(response.data.token, response.data.user);
              end_fetch_orders();
            })
            .catch((error) => {
              //  removeUserSession();
              $(".loadscr-container").hide();
              end_fetch_orders();
            });
        }
      }

      if (!this.state.isCartLoaded) {
        $(".loadscr-container").show();
        if (!is_fetching_cart()) {
          start_fetch_cart();
          axios
            .get(
              apifunctions.api_server_url + "/get_cart",
              this.config,
              this.bodyParameters
            )
            .then((response) => {
              console.table(response);
              $("#cart_count").attr(
                "style",
                "background-color: red;border-radius: 50%;padding: 5px;color: rgb(255, 255, 255);"
              );

              $("#cart_count").html(response.data.carts.length);
              this.setState({
                isCartLoaded: true,
              });
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
      }
    }
  }
  text_search() {
    $("#login_dialog").show();
    // search_on_product
    start_search();
    let text_search = document.getElementById("search_on_product").value;
    this.props.history.push("/search/" + text_search);
  }
  renderCategoriesNav = () => {
    let acategory = this.props.categories.map((campaignCategoryObj) => (
      <li
        id={`li_nav_${campaignCategoryObj.id}`}
        className="dropdown yamm-fw "
        onMouseEnter={(event) => this.onMouseOverBtn(campaignCategoryObj)}
      >
        <NavLink
          key={campaignCategoryObj.id}
          to={`/products/${campaignCategoryObj.id}`}
          id={`/products/${campaignCategoryObj.id}`}
          data-hover="dropdown"
          className="dropdown-toggle js-mn-itm"
        >
          <font style={{ verticalAlign: "inherit" }}>
            <font style={{ verticalAlign: "inherit" }}>
              {trans(
                campaignCategoryObj.category_name_ar,
                campaignCategoryObj.category_name_en
              )}
            </font>
          </font>
        </NavLink>
        <ul
          className="dropdown-menu"
          onMouseLeave={(event) => this.onMouseLeaveBtn(campaignCategoryObj)}
        >
          <li>
            <div className="yamm-content">
              <div className="row half-margin">
                {campaignCategoryObj &&
                  campaignCategoryObj.sons &&
                  campaignCategoryObj.sons.map((sonObject, index) => (
                    <div
                      className="col-xs-12 col-sm-2 col-md-2 list-unstyled"
                      data-group="1"
                    >
                      <ul
                        key={index}
                        className="menublock new list-unstyled"
                        data-group="1"
                      >
                        <li
                          className="section_title"
                          style={{ display: "list-item" }}
                        >
                          <NavLink
                            key={sonObject.id}
                            to={`/products/${sonObject.id}`}
                            id={`/products/${sonObject.id}`}
                          >
                            <strong>
                              <font
                                style={{
                                  verticalAlign: "inherit",
                                }}
                              >
                                <font
                                  style={{
                                    verticalAlign: "inherit",
                                  }}
                                >
                                  <NavLink
                                    key={sonObject.id}
                                    to={`/products/${sonObject.id}`}
                                    id={`/products/${sonObject.id}`}
                                  >
                                    {trans(
                                      sonObject.category_name_ar,
                                      sonObject.category_name_en
                                    )}
                                  </NavLink>
                                </font>
                              </font>
                            </strong>
                          </NavLink>
                        </li>
                        {sonObject &&
                          sonObject.sons &&
                          sonObject.sons.map((sonO_sonbject, index) => (
                            <li style={{ display: "list-item" }}>
                              <a
                                id="ela-sezon-menu-p-2-0-kadin-mont"
                                title="Monte"
                                href="http://malls-online.com/kadin-mont"
                              >
                                <span
                                  style={{ color: "black", fontWeight: "bold" }}
                                >
                                  <font
                                    style={{
                                      verticalAlign: "inherit",
                                    }}
                                  >
                                    <font
                                      style={{
                                        verticalAlign: "inherit",
                                      }}
                                    >
                                      <NavLink
                                        key={sonO_sonbject.id}
                                        to={`/products/${sonO_sonbject.id}`}
                                        id={`/products/${sonO_sonbject.id}`}
                                      >
                                        {trans(
                                          sonO_sonbject.category_name_ar,
                                          sonO_sonbject.category_name_en
                                        )}
                                      </NavLink>
                                      <ul
                                        key={index}
                                        className="menublock new list-unstyled"
                                        data-group="1"
                                      >
                                        {sonO_sonbject &&
                                          sonO_sonbject.sons &&
                                          sonO_sonbject.sons.map(
                                            (sonO_sonO_sonbject, index2) => (
                                              <li
                                                style={{ display: "list-item" }}
                                              >
                                                <a
                                                  id="ela-sezon-menu-p-2-0-kadin-mont"
                                                  title="Monte"
                                                  href="http://malls-online.com/kadin-mont"
                                                >
                                                  <span
                                                    style={{ color: "gray" }}
                                                  >
                                                    <font
                                                      style={{
                                                        verticalAlign:
                                                          "inherit",
                                                      }}
                                                    >
                                                      <font
                                                        style={{
                                                          verticalAlign:
                                                            "inherit",
                                                        }}
                                                      >
                                                        <NavLink
                                                          style={{
                                                            color: "gray",
                                                          }}
                                                          key={
                                                            sonO_sonO_sonbject.id
                                                          }
                                                          to={`/products/${sonO_sonO_sonbject.id}`}
                                                          id={`/products/${sonO_sonO_sonbject.id}`}
                                                        >
                                                          {trans(
                                                            sonO_sonO_sonbject.category_name_ar,
                                                            sonO_sonO_sonbject.category_name_en
                                                          )}
                                                        </NavLink>
                                                      </font>
                                                    </font>
                                                  </span>
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
                                                </a>
                                              </li>
                                            )
                                          )}
                                      </ul>
                                    </font>
                                  </font>
                                </span>
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
                              </a>
                            </li>
                          ))}
                      </ul>
                    </div>
                  ))}{" "}
              </div>
            </div>
          </li>
        </ul>
        l
      </li>
    ));
    return acategory;
  };
  render() {
    return (
      <div>
        {" "}
        <header>
          <div className="container">
            <div className="row mrhpheader clearfix">
              <div className="col-xxs-7 col-xs-3 col-sm-3 col-md-3 column">
                <div className="row no-margin">
                  <div className="visible-767 col-xxs-2 col-xs-2">
                    <button
                      type="button"
                      id="toggleMenu"
                      onClick={(event) => this.onMouseClick()}
                      className="navbar-toggle hamburger-toggle"
                      aria-label="Open Menu"
                    >
                      <span></span>
                      <span></span>
                      <span></span>
                    </button>
                  </div>
                  <div className="col-xxs-10 col-xs-10 col-sm-10">
                    <Link
                      aria-label="malls-online"
                      className="inline-block-item"
                      to="/"
                    >
                      {!getLang() || getLang() == "ar" ? (
                        <img
                          src="/static/logar.png"
                          width="140px"
                          height="80px"
                          dataSrc="/static/logar.png"
                          alt="blue"
                          className="  lazyloaded"
                        />
                      ) : (
                        <img
                          src="/static/logoen.png"
                          width="140px"
                          height="80px"
                          dataSrc="/static/logoen.png"
                          alt="blue"
                          className="  lazyloaded"
                        />
                      )}
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-xxs-5 col-xs-8 col-sm-4 col-sm-push-5 col-md-3 col-md-push-6 column ">
                <div className="logged_out">
                  <ul className="account_menu pull-right">
                    {getToken() ? (
                      <li style={{ marginLeft: "7px" }}>
                        <NavLink
                          to="/myorder"
                          id="ela-sezon-menu-p-"
                          href="http://malls-online.com/myorder"
                          data-hover=""
                          className="no_submenu js-mn-itm"
                        >
                          <font style={{ verticalAlign: "inherit" }}>
                            <font style={{ verticalAlign: "inherit" }}>
                              <i
                                style={{ fontSize: "20px" }}
                                className="fa fa-truck"
                                title={trans("طلباتي", "my orders")}
                              ></i>
                              <span id="myorder_count">
                                <div className="mloader">
                                  <div className="bnc bnc1"></div>
                                  <div className="bnc bnc2"></div>
                                  <div className="bnc bnc3"></div>
                                </div>
                              </span>
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
                      </li>
                    ) : (
                      <span></span>
                    )}
                    {getToken() ? (
                      <li style={{ marginLeft: "7px" }}>
                        <NavLink
                          to="/cart"
                          id="ela-sezon-menu-p-"
                          href="http://malls-online.com/"
                          data-hover=""
                          className="no_submenu js-mn-itm"
                        >
                          <font style={{ verticalAlign: "inherit" }}>
                            <font style={{ verticalAlign: "inherit" }}>
                              <i
                                style={{ fontSize: "20px" }}
                                className="fa fa-shopping-cart"
                                title={trans("سلتي", "my cart")}
                              ></i>
                              <span id="cart_count">
                                <div className="mloader">
                                  <div className="bnc bnc1"></div>
                                  <div className="bnc bnc2"></div>
                                  <div className="bnc bnc3"></div>
                                </div>
                              </span>
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
                      </li>
                    ) : (
                      <span></span>
                    )}

                    {getToken() ? (
                      <li style={{ marginLeft: "7px" }}>
                        <NavLink
                          to="/fav"
                          id="ela-sezon-menu-p-"
                          href="http://malls-online.com/"
                          data-hover=""
                          className="no_submenu js-mn-itm"
                        >
                          <font style={{ verticalAlign: "inherit" }}>
                            <font style={{ verticalAlign: "inherit" }}>
                              <i
                                style={{ fontSize: "20px" }}
                                className="fa fa-heart"
                                title={trans("مفضلتي", "my favorite")}
                              ></i>
                              <span id="fav_count">
                                <div className="mloader">
                                  <div className="bnc bnc1"></div>
                                  <div className="bnc bnc2"></div>
                                  <div className="bnc bnc3"></div>
                                </div>
                              </span>
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
                      </li>
                    ) : (
                      <span></span>
                    )}
                    {getToken() ? (
                      <li style={{ marginLeft: "7px" }}>
                        <NavLink
                          to="/profile"
                          id="ela-sezon-menu-p-"
                          href="http://malls-online.com/"
                          data-hover=""
                          className="no_submenu js-mn-itm"
                        >
                          <font style={{ verticalAlign: "inherit" }}>
                            <font style={{ verticalAlign: "inherit" }}>
                              <i
                                style={{ fontSize: "20px" }}
                                className="fa fa-user"
                                title={trans("معلومات الحساب", "Profile")}
                              ></i>
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
                      </li>
                    ) : (
                      <span></span>
                    )}

                    {getToken() ? (
                      <li style={{ marginLeft: "7px" }}>
                        <input
                          className="no_submenu js-mn-itm"
                          type="button"
                          onClick={this.handleLogout}
                          value={trans("تسجيل خروج", "Logout")}
                        />
                      </li>
                    ) : (
                      <span></span>
                    )}
                    {!getToken() ? (
                      <li style={{ marginLeft: "7px" }}>
                        <NavLink
                          to="/login"
                          id="ela-sezon-menu-p-"
                          href="http://malls-online.com/"
                          data-hover=""
                          className="no_submenu js-mn-itm"
                        >
                          <font style={{ verticalAlign: "inherit" }}>
                            <font style={{ verticalAlign: "inherit" }}>
                              <i
                                style={{ fontSize: "20px" }}
                                className="fa fa-sign-in"
                                title={trans("تسجيل الدخول", "login")}
                              ></i>
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
                      </li>
                    ) : (
                      <span></span>
                    )}
                    {!getToken() ? (
                      <li style={{ marginLeft: "7px" }}>
                        <NavLink
                          to="/signup"
                          id="ela-sezon-menu-p-"
                          href="http://malls-online.com/"
                          data-hover=""
                          className="no_submenu js-mn-itm"
                        >
                          <font style={{ verticalAlign: "inherit" }}>
                            <font style={{ verticalAlign: "inherit" }}>
                              <i
                                style={{ fontSize: "20px" }}
                                className="fa fa-user-plus"
                                title={trans("تسجيل جديد", "Signup")}
                              ></i>
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
                      </li>
                    ) : (
                      <span></span>
                    )}
                  </ul>
                </div>
              </div>
              <div className="col-xxs-12 col-xs-12 col-sm-5 col-sm-pull-4 col-md-6 col-md-pull-3 search-column">
                <div className="row no-margin text-center">
                  <div className="row no-margin text-center">
                    {trans(" أختر عملة الموقع", " select currency site")}
                  </div>
                  <ul className="site-switcher">
                    <li>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          {get_currency() == "dinar" ? (
                            <label
                              className="size-item 2xl"
                              title={trans("دينار كويتي", "Kuwaiti Dinar")}
                              aria-label="2XL Size"
                            >
                              <span
                                className="size-slt-box"
                                level="2"
                                value="44643"
                                name="2XL"
                                style={{ cursor: "default" }}
                              >
                                <font style={{ verticalAlign: "inherit" }}>
                                  <font style={{ verticalAlign: "inherit" }}>
                                    {trans("دينار كويتي", "Kuwaiti Dinar")}
                                  </font>
                                </font>
                              </span>
                            </label>
                          ) : (
                            <a
                              id="ela-header-sekme-sezon"
                              className="switchtabs sw_selected "
                              href="/"
                            >
                              <button
                                className="no_submenu js-mn-itm"
                                type="button"
                                onClick={() => show_in_Kuwaiti_dinar()}
                                value="Logout"
                                style={{ width: "100%" }}
                              >
                                <font style={{ verticalAlign: "inherit" }}>
                                  <font style={{ verticalAlign: "inherit" }}>
                                    {trans("دينار كويتي", "Kuwaiti Dinar")}
                                  </font>
                                </font>
                              </button>
                            </a>
                          )}
                        </font>
                      </font>
                    </li>
                    <li>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          {get_currency() == "riyal" ? (
                            <label
                              className="size-item 2xl"
                              title={trans("ريال سعودي", "Saudi Riyal")}
                              aria-label="2XL Size"
                            >
                              <span
                                className="size-slt-box"
                                level="2"
                                value="44643"
                                name="2XL"
                                style={{ cursor: "default" }}
                              >
                                <font style={{ verticalAlign: "inherit" }}>
                                  <font style={{ verticalAlign: "inherit" }}>
                                    {trans("ريال سعودي", "Saudi Riyal")}
                                  </font>
                                </font>
                              </span>
                            </label>
                          ) : (
                            <a
                              id="ela-header-sekme-sezon"
                              className="switchtabs sw_selected "
                              href="/"
                            >
                              <button
                                className="no_submenu js-mn-itm"
                                type="button"
                                onClick={() => show_in_Saudi_riyal()}
                                value="Logout"
                                style={{ width: "100%" }}
                              >
                                <font style={{ verticalAlign: "inherit" }}>
                                  <font style={{ verticalAlign: "inherit" }}>
                                    {trans("ريال سعودي", "Saudi Riyal")}
                                  </font>
                                </font>
                              </button>
                            </a>
                          )}
                        </font>
                      </font>
                    </li>
                    <li>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          {!get_currency() || get_currency() == "dollar" ? (
                            <label
                              className="size-item 2xl"
                              title={trans("دولار اميركي", "Dollars")}
                              aria-label="2XL Size"
                            >
                              <span
                                className="size-slt-box"
                                level="2"
                                value="44643"
                                name="2XL"
                                style={{ cursor: "default" }}
                              >
                                <font style={{ verticalAlign: "inherit" }}>
                                  <font style={{ verticalAlign: "inherit" }}>
                                    {trans("دولار اميركي", "Dollars")}
                                  </font>
                                </font>
                              </span>
                            </label>
                          ) : (
                            <a
                              id="ela-header-sekme-sezon"
                              className="switchtabs sw_selected "
                              href="/"
                            >
                              <button
                                className="no_submenu js-mn-itm"
                                type="button"
                                onClick={() => show_in_dollar()}
                                value="Logout"
                                style={{ width: "100%" }}
                              >
                                <font style={{ verticalAlign: "inherit" }}>
                                  <font style={{ verticalAlign: "inherit" }}>
                                    {trans("دولار اميركي", "Dollars")}
                                  </font>
                                </font>
                              </button>
                            </a>
                          )}
                        </font>
                      </font>
                    </li>
                    <li>
                      <a
                        id="ela-header-sekme-indirim-kulubu"
                        className="switchtabs "
                        href="/"
                      >
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            {!getLang() || getLang() == "ar" ? (
                              <button
                                className="no_submenu js-mn-itm"
                                type="button"
                                onClick={() => transToArabic()}
                                value="Logout"
                                style={{ width: "100%" }}
                              >
                                <font style={{ verticalAlign: "inherit" }}>
                                  <font style={{ verticalAlign: "inherit" }}>
                                    English
                                  </font>
                                </font>
                              </button>
                            ) : (
                              <button
                                style={{ width: "100%" }}
                                className="no_submenu js-mn-itm"
                                type="button"
                                onClick={() => transToEnglish()}
                                value="Logout"
                              >
                                <font style={{ verticalAlign: "inherit" }}>
                                  عربي
                                </font>
                              </button>
                            )}
                          </font>
                        </font>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="searchbar pull-left">
                  <span className="search-btn">
                    <button
                      id="search"
                      className="btn btn-search"
                      onClick={(event) => this.text_search()}
                      type="button"
                    >
                      {trans("بحث", "search")}
                    </button>
                  </span>
                  <span className="search-icon">
                    <span ariaHidden="true" className="icontype  ui-search-sm">
                      <svg
                        className="fill-gray"
                        height="16"
                        role="img"
                        title="Search"
                        viewBox="0 0 16 16"
                        width="16"
                      >
                        <use xlinkHref="/Content/sprites/morhipo-icons.svg?v=25#ui-search-sm"></use>
                      </svg>
                    </span>
                  </span>
                  <input
                    type="search"
                    style={{ textAlign: "center" }}
                    name="search_on_product"
                    id="search_on_product"
                    className="search-input primeWidgetsSearchAutoCompleteWidget"
                    placeholder={trans("بحث عن منتج ", "product search")}
                    autocomplete="off"
                    autocapitalize="none"
                  />
                  <div id="pw-search-autocomplete">
                    <div className="live-search-results text-left z-top">
                      <div className="autocomplete-suggestions"></div>
                    </div>
                  </div>
                  <input
                    id="typeahead"
                    data-isprivatesearch="false"
                    type="search"
                    title={trans("بحث", "search")}
                    className="search-input ui-autocomplete-input ui-autocomplete-loading"
                    placeholder="Marka, kategori ve ürün ara"
                    value="Kadin"
                    autocomplete="off"
                    style={{ display: "none" }}
                  />
                  <span
                    role="status"
                    aria-live="polite"
                    className="ui-helper-hidden-accessible"
                  ></span>
                </div>
                <div className="ui-ac">
                  <ul
                    className="ui-autocomplete ui-menu ui-widget ui-widget-content ui-corner-all"
                    id="ui-id-1"
                    tabindex="0"
                    style={{ zIndex: "1", display: "none" }}
                  ></ul>
                </div>
              </div>
              <input
                type="hidden"
                name="main_page"
                value="advanced_search_result"
              />
              <input type="hidden" name="search_in_description" value="1" />
              <div className="col-xxs-12 col-xs-12 col-sm-5 col-sm-pull-4 col-md-6 col-md-pull-3 search-column">
                {/*
                <div className="searchbar pull-left">
                  <span className="search-btn">
                    <button
                      id="search"
                      className="btn btn-search"
                      type="button"
                    >
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>Search</font>
                      </font>
                    </button>
                  </span>
                  <span className="search-icon">
                    <span aria-hidden="true" className="icontype ui-search-sm">
                      <svg
                        className="fill-gray"
                        height="16"
                        role="img"
                        title="Search"
                        viewBox="0 0 16 16"
                        width="16"
                      ></svg>
                    </span>
                  </span>
                  <input
                    id="typeahead"
                    data-isprivatesearch="false"
                    type="search"
                    title="Search"
                    className="search-input ui-autocomplete-input"
                    placeholder="Search by brand, category and product"
                    defaultValue=""
                    autoComplete="off"
                  />
                  <span
                    role="status"
                    aria-live="polite"
                    className="ui-helper-hidden-accessible"
                  ></span>
                </div>
             */}
                <div className="ui-ac">
                  <ul
                    className="ui-autocomplete ui-menu ui-widget ui-widget-content ui-corner-all"
                    id="ui-id-1"
                    tabIndex="0"
                    style={{ zIndex: 1, display: "none" }}
                  ></ul>
                </div>
              </div>
            </div>
          </div>
          <a
            href="http://malls-online.com/#home-body-id"
            className="btn btn-link sr-only sr-only-focusable"
          >
            <font style={{ verticalAlign: "inherit" }}>
              <font style={{ verticalAlign: "inherit" }}>Skip Menu</font>
            </font>
          </a>
          <div className="mrhp-menu">
            <div className="container">
              {/*  Dropdown Start  */}

              <div className="mbl-offcanvas  " id="mobilemenuholder">
                <div className="row">
                  <div className="col-md-12 column">
                    <div className="navbar yamm js-setnavigation season">
                      <ul
                        onClick={(event) => this.onMouseClick()}
                        id="main-navigation"
                        className="nav navbar-nav menu-loaded"
                        style={{ display: "block" }}
                      >
                        <li className="">
                          <NavLink
                            to="/"
                            id="ela-sezon-menu-p-"
                            href="http://malls-online.com/"
                            data-hover=""
                            className="no_submenu js-mn-itm"
                          >
                            <font style={{ verticalAlign: "inherit" }}>
                              <font style={{ verticalAlign: "inherit" }}>
                                {trans("الكل", "All")}
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
                        </li>
                        {this.renderCategoriesNav()}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="offcvs-close js-mn-cls"
                id="closemenue"
                style={{ background: "#e8f0fe" }}
                onClick={(event) => this.onMouseClick()}
              >
                <span aria-hidden="true" className="icontype ui-close-lg">
                  <i
                    style={{ fontSize: "20px" }}
                    className="fa fa-times fa-4"
                    style={{ fontSize: "43px" }}
                  ></i>{" "}
                </span>
              </div>

              {/*  Dropdown End */}
            </div>
          </div>

          <div className="row informatics"></div>
        </header>
      </div>
    );
  }
}
