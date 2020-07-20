import React from 'react'
import { NavLink } from "react-router-dom";
import CampaignCategory from "../pages/CampaignCategory";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import NavBar from "../pages/NavBar";
import NotFound from "../pages/NotFound";
import ProductsOrder from "../pages/ProductsOrder";
import Activationaccount from "../pages/Activationaccount";
import ResetPassword from "../pages/ResetPassword";
import Products from "../pages/Products";
import Home from "../pages/Home";
import Footer from "../components/Footer";
import Product from "../pages/Product";
import Cart from "../pages/Cart";
import $ from "jquery";
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
import apifunctions from "../api/apifunctions"
import ChangePassword from "../pages/ChangePassword";
import Login from '../components/account/Login';
import Siteinfo from '../pages/Siteinfo'
import Signup from './Signup';
import ProductsFav from "../pages/ProductsFav";
import Profile from "../pages/Profile";
import ChoosProductsCategory from "../pages/ChoosProductsCategory";
import ProductsCarts from "../pages/ProductsCarts";
export default class PublicPage extends React.Component {
    state = {
        apiCategories: [],
        category4NavBar: [],
        categories: [
            {
                name: "man",
                url: "man",
            },
            {
                name: "women",
                url: "man",
            },
            {
                name: "kids",
                url: "kids",
            },
        ],
    };
    constructor(props) {
        super(props);
        apifunctions.getCategory()
            .then(data => {
                this.setState({
                    apiCategories: data.data.categories
                });

            });
        apifunctions.getCategory4NavBar()
            .then(data => {

                // console.log(data);

                this.setState({

                    category4NavBar: data.data.categories.sons
                });
                //// console.log(data);
            });
    }
    renderCategories = (routerProps) => {
        let campaignCategoryName = routerProps.match.params.name;

        let foundCampaignCategory = this.state.categories.find(
            (campaignCategoryObj) => campaignCategoryObj.name === campaignCategoryName
        );

        return foundCampaignCategory ? <CampaignCategory campaignCategory={foundCampaignCategory} /> : <NotFound />;
    };
    closeLoginDialog() {

        $("#login_dialog").hide();
        // 
    }
    render() {
        return (

            <body className="mrhp_web Malls Online_ps ps-colorfix"
                data-action="PrivateShoppingMainPage"  >
                <div className="loadscr-container" style={{ display: "none" }}>
                    <div className="loader-container">
                        <div id="pageloader"><div className="mloader">
                            <div className="bnc bnc1"></div>
                            <div className="bnc bnc2"></div>
                            <div className="bnc bnc3"></div>
                        </div></div>
                    </div>
                </div>

                <div className="modal fade in " id="login_dialog" tabIndex="-1" role="dialog" aria-labelledby="share-modal" aria-hidden="true">
                    <div className="login-modal" style={{ backgroundColor: "white" }}>
                        <div className="modal-header">
                            <button type="button" className="close"
                                onClick={(event) => this.closeLoginDialog()} datadismiss="modal" aria-hidden="true">
                                <font style={{ verticalAlign: 'inherit' }}>
                                    <font style={{ verticalAlign: 'inherit' }} >×</font>
                                </font></button>
                            <h4 className="modal-title" id="myModalLabel">
                                <font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>
                                    {trans(
                                        'تسجيل دخول',
                                        'Member login'
                                    )}

                                </font></font></h4>
                        </div>
                        {
                            window.location.href.substring(window.location.href.lastIndexOf('/') + 1) != 'login'
                                ? <Login {...this.props} >
                                    {this.props}
                                </Login> : <div></div>
                        }

                    </div>

                </div>
                <div>
                    <NavBar categories={this.state.category4NavBar}  {...this.props} />

                    {/* <div className="scroll-menu js-setnavigation visible-xs">
                        <ul className="nav nav-scrolling" id="mobile-scroll-nav">
                            <li className="setactive">
                                <a
                                    id="sm-"
                                    href="http://malls-online.com/"
                                    className="bigger js-mn-itm"
                                >
                                    <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>
                                            All Campaigns
                  </font>
                                    </font>
                                </a>
                            </li>
                            <li>
                                <a
                                    id="sm-moda"
                                    href="http://malls-online.com/moda"
                                    className="bigger js-mn-itm"
                                >
                                    <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>Season</font>
                                    </font>
                                </a>
                            </li>
                            <li>
                                <a
                                    id="sm-kampanya-alisveris-1"
                                    href="http://malls-online.com/kampanya/alisveris/1"
                                    className="bigger js-mn-itm"
                                >
                                    <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>Woman</font>
                                    </font>
                                </a>
                            </li>
                            <li>
                                <a
                                    id="sm-kampanya-alisveris-2"
                                    href="http://malls-online.com/kampanya/alisveris/2"
                                    className="bigger js-mn-itm"
                                >
                                    <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>Male</font>
                                    </font>
                                </a>
                            </li>
                            <li>
                                <a
                                    id="sm-kampanya-alisveris-5"
                                    href="http://malls-online.com/kampanya/alisveris/5"
                                    className="bigger js-mn-itm"
                                >
                                    <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>Shoe bag</font>
                                    </font>
                                </a>
                            </li>
                            <li>
                                <a
                                    id="sm-kampanya-alisveris-7"
                                    href="http://malls-online.com/kampanya/alisveris/7"
                                    className="bigger js-mn-itm"
                                >
                                    <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>Sportswear</font>
                                    </font>
                                </a>
                            </li>
                            <li>
                                <a
                                    id="sm-kampanya-alisveris-3"
                                    href="http://malls-online.com/kampanya/alisveris/3"
                                    className="bigger js-mn-itm"
                                >
                                    <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>Child</font>
                                    </font>
                                </a>
                            </li>
                            <li>
                                <a
                                    id="sm-kampanya-alisveris-4"
                                    href="http://malls-online.com/kampanya/alisveris/4"
                                    className="bigger js-mn-itm"
                                >
                                    <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>
                                            Home &amp; Life
                  </font>
                                    </font>
                                </a>
                            </li>
                            <li>
                                <a
                                    id="sm-kampanya-alisveris-8"
                                    href="http://malls-online.com/kampanya/alisveris/8"
                                    className="bigger js-mn-itm"
                                >
                                    <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>Cosmetic</font>
                                    </font>
                                </a>
                            </li>
                            <li>
                                <a
                                    id="sm-kampanya-alisveris-9"
                                    href="http://malls-online.com/kampanya/alisveris/9"
                                    className="bigger js-mn-itm"
                                >
                                    <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>Accessory</font>
                                    </font>
                                </a>
                            </li>
                            <li>
                                <a
                                    id="sm-markalar-0-marka"
                                    href="http://malls-online.com/markalar/0/marka"
                                    className="bigger js-mn-itm"
                                >
                                    <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>Brands</font>
                                    </font>
                                </a>
                            </li>
                        </ul>
                    </div> */}

                    <Switch>
                        <Route path="/" exact render={
                            (props) => (<Home {...props} currCategories={this.state.apiCategories} />)
                        } />
                        <Route path="/myorder" component={ProductsOrder} />
                        <Route path="/cart" component={ProductsCarts} />
                        <Route path="/fav" component={ProductsFav} />
                        <Route path="/profile" component={Profile} />
                        <Route
                            path="/campaigncategory/:name"
                            render={(routerProps) => this.renderCategories(routerProps)}
                        />

                        <Route path="/login" component={Login} />

                        <Route path="/activationaccount" component={Activationaccount} />
                        <Route path="/resetpassword" component={ResetPassword} />
                        <Route path="/changpassword" component={ChangePassword} />

                        <Route path="/signup" component={Signup} />
                        <Route path="/siteinfo" component={Siteinfo} />
                        <Route path="/allcategories" component={ChoosProductsCategory} />
                        <Route path="/Products" component={Products} />
                        <Route path="/search" component={Products} />
                        <Route path="/Product" component={Product} />
                        <Route component={NotFound} />
                    </Switch>
                    <Footer />

                </div>
            </body>

        );
    }
}


