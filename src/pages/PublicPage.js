import React from 'react'
import { NavLink } from "react-router-dom";
import CampaignCategory from "../pages/CampaignCategory";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import NavBar from "../pages/NavBar";
import NotFound from "../pages/NotFound";
import ProductsOrder from "../pages/ProductsOrder";
import Products from "../pages/Products";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Cart from "../pages/Cart";
import apifunctions from "../api/apifunctions"
import Login from '../components/account/Login';
import Signup from './Signup';
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
                this.setState({
                    category4NavBar: data.data.categories.sons
                });
                //console.table(data);
            });
    }
    renderCategories = (routerProps) => {
        let campaignCategoryName = routerProps.match.params.name;

        let foundCampaignCategory = this.state.categories.find(
            (campaignCategoryObj) => campaignCategoryObj.name === campaignCategoryName
        );

        return foundCampaignCategory ? <CampaignCategory campaignCategory={foundCampaignCategory} /> : <NotFound />;
    };

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
                        <Route path="/cart" component={Cart} />
                        <Route path="/myorder" component={ProductsOrder} />

                        <Route
                            path="/campaigncategory/:name"
                            render={(routerProps) => this.renderCategories(routerProps)}
                        />

                        <Route path="/login" component={Login} />
                        <Route path="/signup" component={Signup} />
                        <Route path="/Products" component={Products} />
                        <Route path="/Product" component={Product} />
                        <Route component={NotFound} />
                    </Switch>
                    {/*  FOOTER*/}
                    <footer>
                        <div className="container">
                            <div className="row">
                                <div className="col-xxs-6 col-xs-6 col-sm-3 col-md-2">
                                    <div className="h4">
                                        <font style={{ verticalAlign: "inherit" }}>
                                            <font style={{ verticalAlign: "inherit" }}>
                                                Contact us
                    </font>
                                        </font>
                                    </div>                </div>

                                <div className="col-xxs-6 col-xs-6 col-sm-3 col-md-offset-1 col-md-2">
                                    <div className="h4">
                                        <font style={{ verticalAlign: "inherit" }}>
                                            <font style={{ verticalAlign: "inherit" }}>
                                                I Malls Online.co
                    </font>
                                        </font>
                                    </div>           </div>

                                <div className="col-xxs-6 col-xs-6 col-sm-2 col-md-offset-1 col-md-2">
                                    <div className="h4">
                                        <font style={{ verticalAlign: "inherit" }}>
                                            <font style={{ verticalAlign: "inherit" }}>
                                                Follow us
                    </font>
                                        </font>
                                    </div>         </div>

                                <div className="col-xxs-6 col-xs-6 col-sm-2 col-md-2">
                                    <div className="h4">
                                        <font style={{ verticalAlign: "inherit" }}>
                                            <font style={{ verticalAlign: "inherit" }}>
                                                Mobile
                    </font>
                                        </font>
                                    </div>   </div>


                            </div>
                        </div>
                        {/* CONTAINER FOOTER*/}
                    </footer>


                </div>
            </body>

        );
    }
}


