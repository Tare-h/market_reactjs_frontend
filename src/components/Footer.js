import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { NavLink } from "react-router-dom";
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
import Products from "../pages/Products";
import Homepagebigcategory from "../components/homepageitem/homepagebigcategory";
export default class Footer extends React.Component {
    constructor(props) {
        super(props);


    }
    render() {
        return (

            < footer >
                <div className="container">
                    <div className="row">
                        <div className="col-xxs-6 col-xs-6 col-sm-3 col-md-3">
                            <div className="h4">
                                <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>
                                        {trans(
                                            'تابعنا',
                                            'Follow us'
                                        )}
                                    </font>
                                </font>
                            </div>

                            <ul className="footer-links">
                                <li> <font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>

                                    {trans(
                                        ' فيسبوك',
                                        'Facebook'
                                    )}
                                </font></font> </li>
                                <li> <font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>
                                    {trans(
                                        ' تويتر',
                                        'twitter'
                                    )}
                                </font></font>
                                </li>
                                <li> <font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>
                                    {trans(
                                        ' يوتيوب',
                                        'YouTube'
                                    )}
                                </font></font>
                                </li>
                                <li> <font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>
                                    {trans(
                                        ' انستغرام',
                                        'Instagram'
                                    )}
                                </font></font> </li>
                            </ul>
                        </div>


                        <div className="col-xxs-6 col-xs-6 col-sm-3 col-md-3">
                            <div className="h4">
                                <NavLink
                                    key='/siteinfo/contuct_us'
                                    to='/siteinfo/contuct_us'
                                    id='/siteinfo/contuct_us'
                                    data-hover="dropdown"
                                    className="dropdown-toggle js-mn-itm"
                                >
                                    <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>
                                            {trans(
                                                'اتصل بنا',
                                                'Contact us'
                                            )}
                                        </font>
                                    </font>
                                </NavLink>

                            </div>
                            <ul className="footer-links">
                                <li> <font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>

                                    {trans(
                                        'سياسة الاسترداد والتبادل',
                                        'Refund & Exchange Policy'
                                    )}
                                </font></font> </li>
                                <li> <font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>
                                    {trans(
                                        'سياسة الخصوصية وشروط الخدمة',
                                        'Tearms & Conditions'
                                    )}
                                </font></font> </li>
                            </ul>
                        </div>

                        <div className="col-xxs-6 col-xs-6 col-sm-3 col-md-3">
                            <div className="h4">
                                <NavLink
                                    key='/siteinfo/about_us'
                                    to='/siteinfo/about_us'
                                    id='/siteinfo/about_us'
                                    data-hover="dropdown"
                                    className="dropdown-toggle js-mn-itm"
                                >
                                    <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>
                                            {trans(
                                                'من نحن',
                                                'About US'
                                            )}
                                        </font>
                                    </font>
                                </NavLink>

                            </div>

                            <ul className="footer-links">
                                <li>
                                    <font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>
                                        {trans(
                                            'الموقع :  www.malls-online.com',
                                            ' Website : www.malls-online.com'
                                        )}

                                    </font></font>

                                </li>
                                <li> <font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>
                                    {trans(
                                        'الايميل :   marketing@malls-online.com',
                                        ' Email :  marketing@malls-online.com'
                                    )}

                                </font></font> </li>
                                <li> <font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>

                                    {trans(
                                        '   WhatsApp : +965 60713555'
                                        ,
                                        '  WhatsApp : +965 60713555'
                                    )}
                                </font></font>
                                </li>
                                <li> <font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>
                                    {trans(
                                        ' Tel : + 965 60713555',
                                        ' Tel : + 965 60713555'
                                    )}

                                </font></font> </li>

                            </ul>
                        </div>

                        <div className="col-xxs-6 col-xs-6 col-sm-3 col-md-3">
                            <div className="h4">
                                <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>
                                        {trans(
                                            '   حمل تطبيقنا',
                                            ' DOWNLOAD OUR APP '
                                        )}
                                    </font>
                                </font>
                            </div>

                            <ul className="footer-links">
                                <li> <font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>


                                    {trans(
                                        'متجر غوغل',
                                        'Google play store '
                                    )}
                                </font></font> </li>
                                <li> <font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}> </font></font> </li>
                                <li> <font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>

                                    {trans(
                                        'متجر ابل',
                                        'Apple Store '
                                    )}
                                </font></font> </li>
                            </ul>
                        </div>

                    </div>
                </div>

            </footer >

        );
    }
}