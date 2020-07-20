import React from "react";
import apifunctions from "../api/apifunctions";
import Login from "../components/account/Login";
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { findDOMNode } from "react-dom";
import CartIcon from "../components/CartIcon";
import {
  getUser,
  getToken,
  getLang,
  transToEnglish,
  get_currency,
  transToArabic,
  start_search,
  show_in_Saudi_riyal,
  start_fetch_register_guest,
  end_fetch_register_guest,
  is_fetching_register_guest,
  show_in_dollar,
  show_in_Kuwaiti_dinar,
  show_in_UAE,
  show_in_bh,
  show_in_OM,
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
  end_fetch_cart_details,
  setUserSession,
  trans,
  save_url_befor_register_or_login,
  get_url_befor_register_or_login,
  removeUserSession,
  end_fetch_profile,
  end_fetch_user_register,
} from "../Utils/Common";
import $ from "jquery";
import axios from "axios";
export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      context: props.context,
      user: {},
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
    end_fetch_cart_details();
    end_fetch_register_guest();
  }

  onMouseLangclickBtn(currebtdivorder) {
    // Getting ref to JQuery object from our parent app.
    //// // alert("hi" + campaignCategoryObj.category_name_en);

    $("#" + currebtdivorder).toggleClass("in");
  }
  onMouseCountryclickBtn(currebtdivorder) {
    // Getting ref to JQuery object from our parent app.
    //// // alert("hi" + campaignCategoryObj.category_name_en);

    $("#" + currebtdivorder).toggleClass("in");
  }
  handleLogout() {
    removeUserSession();
    this.props.history.push("/");
  }

  onMouseOverBtn(campaignCategoryObj) {
    // Getting ref to JQuery object from our parent app.
    //// // alert("hi" + campaignCategoryObj.category_name_en);
    this.props.categories.map((current) =>
      $("#li_nav_" + current.id).removeClass("open")
    );
    $("#li_nav_" + campaignCategoryObj.id).toggleClass("open");
  }
  onMouseLeaveBtn(campaignCategoryObj) {
    // Getting ref to JQuery object from our parent app.
    //// // alert("hi" + campaignCategoryObj.category_name_en);

    $("#li_nav_" + campaignCategoryObj.id).removeClass("open");
  }
  onMouseClick() {
    $("#mobilemenuholder").toggleClass("active");
    $("body").removeClass("offcvs-open");
    $(".off-cvs-fade").remove();
  }
  componentDidMount() {
    $("#login_dialog").hide();
    $(".loadscr-container").hide();
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
        //// // alert("navbar.js");
        if (!is_fetching_fav()) {
          // // alert("componentDidMount1");
          start_fetch_fav();
          $(".loadscr-container").show();
          axios
            .get(
              apifunctions.api_server_url + "/get_favorits",
              this.config,
              this.bodyParameters
            )
            .then((response) => {
              // console.log(response);
              $("#fav_count").attr(
                "style",
                "background-color: red;border-radius: 50%;padding: 5px;color: rgb(255, 255, 255);"
              );
              // alert("fav_count5");
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
        if (!is_fetching_orders()) {
          if (
            localStorage.getItem("user") &&
            JSON.parse(localStorage.getItem("user")).name != "guest"
          ) {
            start_fetch_orders();
            $(".loadscr-container").show();
            axios
              .get(
                apifunctions.api_server_url + "/get_orders",
                this.config,
                this.bodyParameters
              )
              .then((response) => {
                // console.log(response);

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
      }

      if (!this.state.isCartLoaded) {
        if (!is_fetching_cart()) {
          start_fetch_cart();
          $(".loadscr-container").show();
          axios
            .get(
              apifunctions.api_server_url + "/get_cart",
              this.config,
              this.bodyParameters
            )
            .then((response) => {
              // console.log(response);
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
    if (!getToken()) {
      if (!is_fetching_register_guest()) {
        start_fetch_register_guest();
        $(".loadscr-container").show();
        axios
          .post(
            apifunctions.api_server_url + "/" + "register_guest",

            {
              name: "guest",
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          )
          .then((response) => {
            $(".loadscr-container").hide();
            this.setState({
              user: response.data.user,
            });
            setUserSession(response.data.token, response.data.user);
            $("#fav_count").attr(
              "style",
              "background-color: red;border-radius: 50%;padding: 5px;color: rgb(255, 255, 255);"
            );

            $("#fav_count").html("0");

            $("#cart_count").attr(
              "style",
              "background-color: red;border-radius: 50%;padding: 5px;color: rgb(255, 255, 255);"
            );

            $("#cart_count").html("0");
            end_fetch_register_guest();
          })
          .catch((error) => {
            $(".loadscr-container").hide();
            end_fetch_register_guest();
          });
      }
    }
  }
  componentDidUpdate() {
    //window.location.href)
    $("#login_dialog").hide();
    $(".loadscr-container").hide();
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
        //// // alert("navbar.js");
        if (!is_fetching_fav()) {
          // // alert("componentDidUpdate");
          start_fetch_fav();
          $(".loadscr-container").show();
          axios
            .get(
              apifunctions.api_server_url + "/get_favorits",
              this.config,
              this.bodyParameters
            )
            .then((response) => {
              // console.log(response);
              $("#fav_count").attr(
                "style",
                "background-color: red;border-radius: 50%;padding: 5px;color: rgb(255, 255, 255);"
              );
              // alert("fav_count2");
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
        if (!is_fetching_orders()) {
          if (
            localStorage.getItem("user") &&
            JSON.parse(localStorage.getItem("user")).name != "guest"
          ) {
            start_fetch_orders();
            $(".loadscr-container").show();
            axios
              .get(
                apifunctions.api_server_url + "/get_orders",
                this.config,
                this.bodyParameters
              )
              .then((response) => {
                // console.log(response);

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
      }

      if (!this.state.isCartLoaded) {
        if (!is_fetching_cart()) {
          start_fetch_cart();
          $(".loadscr-container").show();
          axios
            .get(
              apifunctions.api_server_url + "/get_cart",
              this.config,
              this.bodyParameters
            )
            .then((response) => {
              // console.log(response);
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
    if (!getToken()) {
      if (!is_fetching_register_guest()) {
        start_fetch_register_guest();

        $(".loadscr-container").show();
        axios
          .post(
            apifunctions.api_server_url + "/" + "register_guest",

            {
              name: "guest",
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          )
          .then((response) => {
            $(".loadscr-container").hide();
            this.setState({
              user: response.data.user,
            });
            setUserSession(response.data.token, response.data.user);
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
              {
                //// // alert("navbar.js");
                if (!is_fetching_fav()) {
                  // // alert("componentDidUpdate2");
                  start_fetch_fav();
                  $(".loadscr-container").show();
                  axios
                    .get(
                      apifunctions.api_server_url + "/get_favorits",
                      this.config,
                      this.bodyParameters
                    )
                    .then((response) => {
                      // console.log(response);
                      $("#fav_count").attr(
                        "style",
                        "background-color: red;border-radius: 50%;padding: 5px;color: rgb(255, 255, 255);"
                      );
                      // alert("fav_count1");
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

              {
                if (!is_fetching_cart()) {
                  start_fetch_cart();
                  $(".loadscr-container").show();
                  axios
                    .get(
                      apifunctions.api_server_url + "/get_cart",
                      this.config,
                      this.bodyParameters
                    )
                    .then((response) => {
                      // console.log(response);
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
            end_fetch_register_guest();
          })
          .catch((error) => {
            $(".loadscr-container").hide();
            end_fetch_register_guest();
          });
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
          to={`/allcategories/${campaignCategoryObj.category_name_en}-${campaignCategoryObj.id}`}
          id={`/allcategories/${campaignCategoryObj.show_pages}`}
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
          {getLang() == "en" ? (
            <font style={{ verticalAlign: "inherit" }}>
              <br />
              <font style={{ verticalAlign: "inherit" }}>Malls</font>
            </font>
          ) : (
            <span></span>
          )}
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
              <div className="col-xxs-7 col-xs-3 col-sm-12 col-md-3 column">
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
                          src="/static/logosmal.jpg"
                          width="260px"
                          height="80px"
                          dataSrc="/static/logosmal.jpg"
                          alt="blue"
                          className="  lazyloaded"
                        />
                      ) : (
                        <img
                          src="/static/logosmal.jpg"
                          width="260px"
                          height="80px"
                          dataSrc="/static/logosmal.jpg"
                          alt="blue"
                          className="  lazyloaded"
                        />
                      )}
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-xxs-12 col-xs-12 col-sm-12   col-md-3 col-md-push-6 column  ">
                <div className="logged_out">
                  <ul className="account_menu pull-right">
                    {getToken() &&
                    localStorage.getItem("user") &&
                    JSON.parse(localStorage.getItem("user")).name != "guest" ? (
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
                    {/*
                    <CartIcon />{" "}
                    */}

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

                    {getToken() &&
                    localStorage.getItem("user") &&
                    JSON.parse(localStorage.getItem("user")).name != "guest" ? (
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
                    {getToken() &&
                    localStorage.getItem("user") &&
                    JSON.parse(localStorage.getItem("user")).name != "guest" ? (
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
                    {!getToken() ||
                    (localStorage.getItem("user") &&
                      JSON.parse(localStorage.getItem("user")).name ==
                        "guest") ? (
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
                    {!getToken() ||
                    (localStorage.getItem("user") &&
                      JSON.parse(localStorage.getItem("user")).name ==
                        "guest") ? (
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
              <div className="col-xxs-12 col-xs-12 col-sm-12   col-md-6 col-md-pull-3 search-column ">
                <div className="row no-margin text-center">
                  <div className="col-xs-6 col-sm-6 col-md-6">
                    <div className="tabdetails-container">
                      <div
                        className="index-match tab-to-accord panel-group"
                        onClick={(event) =>
                          this.onMouseCountryclickBtn("countryprodtab")
                        }
                        id="product_tabs-accordion"
                      >
                        <div className="panel panel-default panel-faq">
                          <h2
                            className="h4 panel-title"
                            style={{
                              backgroundColor: "white",
                              cursor: "pointer",
                            }}
                          >
                            <font style={{ verticalAlign: "inherit" }}>
                              <font style={{ verticalAlign: "inherit" }}>
                                {trans(" English", "عربي")}
                              </font>
                            </font>
                            <span className="css-arrow down pull-right"></span>
                          </h2>

                          <div
                            id="countryprodtab"
                            className="panel-collapse animated-collapse collapse "
                            aria-expanded="true"
                          >
                            <div className=" js-tabcollapse-panel-body">
                              <div
                                className="row no-margin"
                                style={{
                                  width: "300px",
                                  position: "fixed",
                                  zIndex: "3333333",
                                  backgroundColor: "white",
                                  borderColor: "black",
                                }}
                              >
                                <div className="col-sm-12">
                                  <p
                                    onClick={() => transToEnglish()}
                                    style={{
                                      backgroundColor: "white",
                                      cursor: "pointer",
                                    }}
                                  >
                                    <strong>
                                      <font
                                        style={{ verticalAlign: "inherit" }}
                                      >
                                        <font
                                          style={{ verticalAlign: "inherit" }}
                                        >
                                          عربي
                                        </font>
                                      </font>
                                    </strong>
                                  </p>
                                  <p
                                    style={{
                                      backgroundColor: "white",
                                      cursor: "pointer",
                                    }}
                                    onClick={() => transToArabic()}
                                  >
                                    <strong>
                                      <font
                                        style={{ verticalAlign: "inherit" }}
                                      >
                                        <font
                                          style={{ verticalAlign: "inherit" }}
                                        >
                                          English
                                        </font>
                                      </font>
                                    </strong>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="panel panel-default panel-faq">
                          <div
                            id="deliverytab"
                            className="panel-collapse animated-collapse collapse"
                          >
                            <div className="panel-body js-tabcollapse-panel-body">
                              <div className="row no-margin">
                                <div className="col-sm-12">
                                  <strong>
                                    <font style={{ verticalAlign: "inherit" }}>
                                      <font
                                        style={{ verticalAlign: "inherit" }}
                                      >
                                        Delivery
                                      </font>
                                    </font>
                                  </strong>
                                  <p>
                                    <font style={{ verticalAlign: "inherit" }}>
                                      <font
                                        style={{ verticalAlign: "inherit" }}
                                      >
                                        • Your orders are delivered to you by
                                        the shipping company on the estimated
                                        delivery date specified.{" "}
                                      </font>
                                    </font>
                                    <br />
                                  </p>
                                  <strong>
                                    <font style={{ verticalAlign: "inherit" }}>
                                      <font
                                        style={{ verticalAlign: "inherit" }}
                                      >
                                        Return
                                      </font>
                                    </font>
                                  </strong>
                                  <p>
                                    <font style={{ verticalAlign: "inherit" }}>
                                      <font
                                        style={{ verticalAlign: "inherit" }}
                                      >
                                        • You can return any product you
                                        purchased{" "}
                                      </font>
                                      <strong>
                                        <font
                                          style={{ verticalAlign: "inherit" }}
                                        >
                                          free of charge within 15 days of the
                                          day
                                        </font>
                                      </strong>
                                      <font
                                        style={{ verticalAlign: "inherit" }}
                                      >
                                        {" "}
                                        your order is received, provided that it
                                        complies with the terms of{" "}
                                      </font>
                                    </font>
                                    <strong>
                                      <font
                                        style={{ verticalAlign: "inherit" }}
                                      >
                                        <font
                                          style={{ verticalAlign: "inherit" }}
                                        >
                                          return.
                                        </font>
                                      </font>
                                    </strong>
                                  </p>
                                  <p>
                                    <a href="/sss">
                                      <strong>
                                        <font
                                          style={{ verticalAlign: "inherit" }}
                                        ></font>
                                      </strong>
                                    </a>
                                    <font style={{ verticalAlign: "inherit" }}>
                                      <font
                                        style={{ verticalAlign: "inherit" }}
                                      >
                                        You can find details about delivery and
                                        return in our
                                      </font>
                                      <a href="/sss">
                                        <strong>
                                          <font
                                            style={{ verticalAlign: "inherit" }}
                                          >
                                            {" "}
                                            Frequently Asked Questions
                                          </font>
                                        </strong>
                                      </a>
                                      <font
                                        style={{ verticalAlign: "inherit" }}
                                      >
                                        {" "}
                                        section.
                                      </font>
                                    </font>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-6 col-sm-6 col-md-6">
                    <div className="tabdetails-container">
                      <div
                        className="index-match tab-to-accord panel-group"
                        id="product_tabs-accordion"
                      >
                        <div
                          className="panel panel-default panel-faq"
                          style={{
                            backgroundColor: "white",
                          }}
                          onClick={(event) =>
                            this.onMouseLangclickBtn("langprodtab")
                          }
                        >
                          <h2
                            className="h4 panel-title"
                            style={{
                              backgroundColor: "white",
                              cursor: "pointer",
                            }}
                          >
                            <font style={{ verticalAlign: "inherit" }}>
                              <font style={{ verticalAlign: "inherit" }}>
                                {trans("أختر البلد", " select country")}
                              </font>
                            </font>
                            <span className="css-arrow down pull-right"></span>
                          </h2>

                          <div
                            id="langprodtab"
                            className="panel-collapse animated-collapse collapse "
                            aria-expanded="true"
                          >
                            <div className=" js-tabcollapse-panel-body">
                              <div
                                className="row no-margin"
                                style={{
                                  width: "300px",
                                  position: "fixed",
                                  zIndex: "3333333",
                                  backgroundColor: "white",
                                  borderColor: "black",
                                }}
                              >
                                <div className="col-sm-12">
                                  <p
                                    style={{ cursor: "pointer" }}
                                    onClick={(event) => show_in_dollar()}
                                  >
                                    <strong>
                                      <font
                                        style={{ verticalAlign: "inherit" }}
                                      >
                                        <font
                                          style={{ verticalAlign: "inherit" }}
                                        >
                                          {trans("كل البلدان", "Detailed  ")}
                                          <img
                                            src="/static/earth.svg"
                                            style={{
                                              width: "34px",
                                              height: "26px",
                                              border: "1px solid transparent",
                                              padding: "0px",
                                              margin: "2px",
                                              borderColor: "black",
                                            }}
                                          />
                                        </font>
                                      </font>
                                    </strong>
                                  </p>
                                  <p
                                    style={{ cursor: "pointer" }}
                                    onClick={(event) => show_in_Kuwaiti_dinar()}
                                  >
                                    <strong>
                                      <font
                                        style={{ verticalAlign: "inherit" }}
                                      >
                                        <font
                                          style={{ verticalAlign: "inherit" }}
                                        >
                                          {trans(" الكويت", "Kuwait  ")}
                                          <img
                                            src="/static/kw.svg"
                                            style={{
                                              width: "34px",
                                              height: "26px",
                                              border: "1px solid transparent",
                                              padding: "0px",
                                              margin: "2px",
                                              borderColor: "black",
                                            }}
                                          />
                                        </font>
                                      </font>
                                    </strong>
                                  </p>
                                  <p
                                    style={{ cursor: "pointer" }}
                                    onClick={(event) => show_in_UAE()}
                                  >
                                    <strong>
                                      <font
                                        style={{ verticalAlign: "inherit" }}
                                      >
                                        <font
                                          style={{ verticalAlign: "inherit" }}
                                        >
                                          {trans(" الامارات", "UAE  ")}
                                          <img
                                            src="/static/ae.svg"
                                            style={{
                                              width: "34px",
                                              height: "26px",
                                              border: "1px solid transparent",
                                              padding: "0px",
                                              margin: "2px",
                                              borderColor: "black",
                                            }}
                                          />
                                        </font>
                                      </font>
                                    </strong>
                                  </p>
                                  <p
                                    style={{ cursor: "pointer" }}
                                    onClick={(event) => show_in_bh()}
                                  >
                                    <strong>
                                      <font
                                        style={{ verticalAlign: "inherit" }}
                                      >
                                        <font
                                          style={{ verticalAlign: "inherit" }}
                                        >
                                          {trans(" البحرين", "Bahrain")}
                                          <img
                                            src="/static/bh.svg"
                                            style={{
                                              width: "34px",
                                              height: "26px",
                                              border: "1px solid transparent",
                                              padding: "0px",
                                              margin: "2px",
                                              borderColor: "black",
                                            }}
                                          />
                                        </font>
                                      </font>
                                    </strong>
                                  </p>
                                  <p
                                    style={{ cursor: "pointer" }}
                                    onClick={(event) => show_in_OM()}
                                  >
                                    <strong>
                                      <font
                                        style={{ verticalAlign: "inherit" }}
                                      >
                                        <font
                                          style={{ verticalAlign: "inherit" }}
                                        >
                                          {trans(" عمان ", " Oman ")}
                                          <img
                                            src="/static/om.svg"
                                            style={{
                                              width: "34px",
                                              height: "26px",
                                              border: "1px solid transparent",
                                              padding: "0px",
                                              margin: "2px",
                                              borderColor: "black",
                                            }}
                                          />
                                        </font>
                                      </font>
                                    </strong>
                                  </p>
                                  <p
                                    style={{ cursor: "pointer" }}
                                    onClick={(event) => show_in_Saudi_riyal()}
                                  >
                                    <strong>
                                      <font
                                        style={{ verticalAlign: "inherit" }}
                                      >
                                        <font
                                          style={{ verticalAlign: "inherit" }}
                                        >
                                          {trans(" السعودية", "KSA  ")}
                                          <img
                                            src="/static/ksa.svg"
                                            style={{
                                              width: "34px",
                                              height: "26px",
                                              border: "1px solid transparent",
                                              padding: "0px",
                                              margin: "2px",
                                              borderColor: "black",
                                            }}
                                          />
                                        </font>
                                      </font>
                                    </strong>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="panel panel-default panel-faq">
                          <div
                            id="deliverytab"
                            className="panel-collapse animated-collapse collapse"
                          >
                            <div className="panel-body js-tabcollapse-panel-body">
                              <div className="row no-margin">
                                <div className="col-sm-12">
                                  <strong>
                                    <font style={{ verticalAlign: "inherit" }}>
                                      <font
                                        style={{ verticalAlign: "inherit" }}
                                      >
                                        Delivery
                                      </font>
                                    </font>
                                  </strong>
                                  <p>
                                    <font style={{ verticalAlign: "inherit" }}>
                                      <font
                                        style={{ verticalAlign: "inherit" }}
                                      >
                                        • Your orders are delivered to you by
                                        the shipping company on the estimated
                                        delivery date specified.{" "}
                                      </font>
                                    </font>
                                    <br />
                                  </p>
                                  <strong>
                                    <font style={{ verticalAlign: "inherit" }}>
                                      <font
                                        style={{ verticalAlign: "inherit" }}
                                      >
                                        Return
                                      </font>
                                    </font>
                                  </strong>
                                  <p>
                                    <font style={{ verticalAlign: "inherit" }}>
                                      <font
                                        style={{ verticalAlign: "inherit" }}
                                      >
                                        • You can return any product you
                                        purchased{" "}
                                      </font>
                                      <strong>
                                        <font
                                          style={{ verticalAlign: "inherit" }}
                                        >
                                          free of charge within 15 days of the
                                          day
                                        </font>
                                      </strong>
                                      <font
                                        style={{ verticalAlign: "inherit" }}
                                      >
                                        {" "}
                                        your order is received, provided that it
                                        complies with the terms of{" "}
                                      </font>
                                    </font>
                                    <strong>
                                      <font
                                        style={{ verticalAlign: "inherit" }}
                                      >
                                        <font
                                          style={{ verticalAlign: "inherit" }}
                                        >
                                          return.
                                        </font>
                                      </font>
                                    </strong>
                                  </p>
                                  <p>
                                    <a href="/sss">
                                      <strong>
                                        <font
                                          style={{ verticalAlign: "inherit" }}
                                        ></font>
                                      </strong>
                                    </a>
                                    <font style={{ verticalAlign: "inherit" }}>
                                      <font
                                        style={{ verticalAlign: "inherit" }}
                                      >
                                        You can find details about delivery and
                                        return in our
                                      </font>
                                      <a href="/sss">
                                        <strong>
                                          <font
                                            style={{ verticalAlign: "inherit" }}
                                          >
                                            {" "}
                                            Frequently Asked Questions
                                          </font>
                                        </strong>
                                      </a>
                                      <font
                                        style={{ verticalAlign: "inherit" }}
                                      >
                                        {" "}
                                        section.
                                      </font>
                                    </font>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
