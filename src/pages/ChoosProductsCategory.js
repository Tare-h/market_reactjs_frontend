import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import apifunctions from '../api/apifunctions'
import $ from "jquery";
import Products from "./Products";
import Homepagebigcategory from "../components/homepageitem/homepagebigcategory";
import {

  start_fetch_category_pagies,
  end_fetch_category_pagies,
  is_fetching_category_pagies,
  start_fetch_orders,

} from '../Utils/Common';
import axios from 'axios';
export default class ChoosProductsCategory extends React.Component {
  state = {
    product_id: ""
  }
  constructor(props) {
    super(props);
    this.state = {
      s_page_name: "",
      currCategories: ""
    };

  }
  componentDidMount() {

    let url = window.location.href;
    let page_name_cat_id = url.substring(window.location.href.lastIndexOf('/') + 1);

    const cat_id = page_name_cat_id.split('-')[1];
    const page_name = page_name_cat_id.split('-')[0];

    if (!is_fetching_category_pagies()) {

      //  alert('page_name = ' + page_name);
      $(".loadscr-container").show();
      start_fetch_category_pagies();
      axios
        .get(
          apifunctions.api_server_url + '/api/view_by_page_name_and_cat_id/' + page_name + '/' + cat_id,
          this.config,
          this.bodyParameters
        )
        .then((response) => {
          // console.log(response);
          console.log(response.data.categories);
          this.setState({ currCategories: response.data.categories, s_page_name: page_name })


          $(".loadscr-container").hide();
          //setUserSession(response.data.token, response.data.user);
          end_fetch_category_pagies();
        })
        .catch((error) => {
          //  removeUserSession();
          $(".loadscr-container").hide();
          end_fetch_category_pagies();
        });


    }



  }
  componentDidUpdate() {

    let url = window.location.href;
    let page_name_cat_id = url.substring(window.location.href.lastIndexOf('/') + 1);

    const cat_id = page_name_cat_id.split('-')[1];
    const page_name = page_name_cat_id.split('-')[0];

    if (!is_fetching_category_pagies()) {

      // alert('page_name = ' + page_name);
      $(".loadscr-container").show();
      start_fetch_category_pagies();
      axios
        .get(
          apifunctions.api_server_url + '/api/view_by_page_name_and_cat_id/' + page_name + '/' + cat_id,
          this.config,
          this.bodyParameters
        )
        .then((response) => {
          // console.log(response);
          console.log(response.data.categories);
          this.setState({ currCategories: response.data.categories, s_page_name: page_name })


          $(".loadscr-container").hide();
          //setUserSession(response.data.token, response.data.user);
          end_fetch_category_pagies();
        })
        .catch((error) => {
          //  removeUserSession();
          $(".loadscr-container").hide();
          end_fetch_category_pagies();
        });


    }



  }
  render() {
    return (
      <main className="container push-top" id="home-body-id" >

        <div
          className="hiden"
          data-listsource="mrp"
          style={{ display: "none" }}
        ></div>

        <div className="row clearfix ps-timer-row">
          <div className="col-xs-12 col-sm-6">
            <h1 id="productListVisibleName"><font style={{ verticalAlign: 'inherit' }}>
              <font style={{ verticalAlign: 'inherit' }}>





              </font></font></h1>
            <span className="m-product-count visible-xs visible-xxs"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}> </font></font></span>
          </div>
          <div className="col-xs-12 col-sm-6">



          </div>
          {/*<div className="visible-xs visible-sm col-xs-6 col-sm-12">
                            <button type="button" className="filter-toggle submenutg m-filter-toggle" data-toggle="collapse" data-target=".filter">
                                <span className="icon-text"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>
                                    filter
                    </font></font><span id="filter-cnt" className="filter-cnt"></span>
                                </span>
                                <span aria-hidden="true" className="icontype  ui-filter">
                                    <svg className="fill-gray" height="20" role="img" title="Filter" viewBox="0 0 20 20" width="20"><use xlinkHref="/Content/sprites/morhipo-icons.svg?v=25#ui-filter"></use></svg></span>
                            </button>
                        </div>*/}
        </div>


        <div id="privateclub-maincontainer">
          <div className="row clearfix">
            <div className="col-minor col-xs-12 col-sm-12">

              {
                this.state && this.state.currCategories && this.state.currCategories.map(category =>
                  <Homepagebigcategory category={category} />
                )

              }

            </div>
            <div className="row"></div>
            <div id="lastviewed-widget"></div>
          </div>

        </div>
        <div
          className="hiden"
          style={{ display: "none", title: "kucuk-banner-kampanya" }}
        >
          91076;91078;91092;91082;91079;91072;91056;91044;91041;91040;90848;90775;90209;88199;84285;89735;91039;88265;90658;88999;89787;91067;91043;90488;90487;90277;89786;88035;87704;85145;84287;84286;71078;90267;89031;84923;89120;90152;88778;87993;87132;88688;88100;85615;85462;89071;86643;90266;90243;89572;89140;88593;88406;88240;88081;88080;88079;87441;86461;85847;80846;80821;80818;80812;79606;79403;91026;91020;90381;87148;91022;90466;88885;88647;88858;88786;90999;90994;90479;88419;88373;85597;83551;67261;67260;67259;90581;88913;90580;90236;84373;89811;88562;90727;89124;89251;88383;90964;90808;90672;90460;90034;89097;88801;88782;88380;88277;88254;88071;87779;87675;87495;87285;87248;86714;86713;86712;86702;86584;86518;86479;86332;85940;85556;81803;81753;81751;81353;80841;80502;80397;79793;76697;76666;89559;79728;90936;90977;90471;87206;90940;90943;90825;90366;90851;90416;90415;90046;90604;90603;89955;89944;90800;90445;88204;90850;90799;90794;90432;90351;90347;90336;90142;89694;89638;89462;89405;88992;88405;88202;88000;87850;87813;87767;87683;87032;86815;86601;86598;86371;85804;85803;85737;84760;84658;84276;83908;83650;83416;82187;82157;81512;90868;88935;87439;90809;90801;90796;90795;90784;90302;86786;87025;90737;88886;89500;89414;90091;89893;89945;89415;89089;88940;86750;90695;90680;90113;87070;88831;87122;87095;89082;88299;87667;87755;90373;90229;90053;90047;90030;89999;89615;89411;89363;89321;89234;89173;88905;88787;88707;88701;87669;86628;86622;86213;86054;86051;90669;90674;90670;88474;90552;90505;90467;90465;90436;86999;90162;90141;89087;90424;90371;90370;86386;89380;90348;90333;90307;90233;89974;90235;90210;90204;90203;90076;90171;90144;90078;90132;90099;90044;90008;90032;89984;89925;86842;89795;87740;89059;88818;89509;89424;89286;88714;89100;88881;86392;86812;87043;88336;87500;87212;86821;84404;84084;83896;87409;88636;88203;87989;84856;86851
      </div>

        <div id="alertPopup" style={{ display: "none" }}></div>
      </main>
    );
  }
}
