
import React from "react";
import { NavLink } from "react-router-dom";
import {
  getUser,
  getToken,
  getLang,
  transToEnglish,
  transToArabic,
  trans,
  removeUserSession,
} from "../../Utils/Common";
import apifunctions from "../../api/apifunctions"
export default class homepagebigcategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      category: this.props.category
    };

  }
  render() {
    return (
      <div className="mh_promotion_container longblocks">

        <NavLink
          className="campaign-banners"
          key={this.props.category.id}
          to={`/products/${this.props.category.id}`}
          id={`/products/${this.props.category.id}`}
        >
          <div className="image-section">
            <picture>
              {/*[if IE 9]><video style='display: none'><![endif]*/}
              <source
                data-srcset={`${apifunctions.api_server_url + '/' + this.props.category.pc_site_photo}`}
                media="(max-width: 470px)"
                srcSet={`${apifunctions.api_server_url + '/' + this.props.category.pc_site_photo}`}
              />
              <source
                data-srcset={`${apifunctions.api_server_url + '/' + this.props.category.pc_site_photo}`}
                srcSet={`${apifunctions.api_server_url + '/' + this.props.category.pc_site_photo}`}
              />
              {/*[if IE 9]></video><![endif]*/}
              <img
                src={`${apifunctions.api_server_url + '/' + this.props.category.pc_site_photo}`}
                data-src={`${apifunctions.api_server_url + '/' + this.props.category.pc_site_photo}`}
                className="ls-is-cached lazyloaded"
                alt={this.props.category.category_name_en}
              />
            </picture>
          </div>

          <div className="mh_promotion_description text-right">

            <span className="ls-is-cached lazyloaded" style={{ "fontSize": "25px", color: "black", "fontWeight": "bold" }} >
              {trans(this.props.category.category_name_ar, this.props.category.category_name_en)}
            </span>


            {/* 
               <img
                className="ls-is-cached lazyloaded"
                src={`http://localhost:8000/${this.props.category.pc_site_photo}`}
                data-src={`http://localhost:8000/${this.props.category.pc_site_photo}`}
                alt="Boyner Butterfly"
              /> */}

            <div className="mh_promotion_slogan pull-left hidden-xxs">
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>

                </font>
              </font>
            </div>
            <div className="ps_timer hidden-xxs pull-right">
              <span id="cntdwnBig91090">          </span>
            </div>
          </div>
        </NavLink>
      </div >
    );
  }
}
