import React from "react";
import apifunctions from "../../api/apifunctions"
import { NavLink } from "react-router-dom";
import Login from '../../components/account/Login';
import {
    getUser,
    getToken,
    getLang,
    transToEnglish,
    transToArabic,
    trans,
    currency_trans, currency_transing, calc_discount,
    removeUserSession,
} from "../../Utils/Common";
export default class ProductItemQuarterWidthexport extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            product: props.product
        };

    }

    render() {
        return (
            <NavLink
                key={this.props.product.id}
                to={`/product/${this.props.product.id}`}
                id={`/product/${this.props.product.id}`}
            >
                <li
                    className="col-controlled col-xxs-6 col-xs-6 col-sm-3 col-md-3 col-lg-3 column"

                >
                    <div className="ulInnerWrapDiv mh_product_container">
                        <div className="modal fade in " tabindex="-1" role="dialog" aria-labelledby="share-modal" aria-hidden="true">


                            <Login />


                        </div>
                        <input type="hidden" className="enhanced-ecommerce-data"
                            data-productid="23295892" data-productname=" "
                            data-itemindex="1" data-category="" data-brand="U.S. Polo Assn." data-gender="" data-dim15="57" data-dim42="4755704" data-dim43="4276300" />

                        <a className="js-product" href="/">
                            <div className="topleftcon">




                            </div>
                            <div className="image-section">
                                {this.props.product &&
                                    this.props.product.productPhotos &&
                                    this.props.product.productPhotos.map(
                                        (productPhoto, index2) => (
                                            index2 == '0' ?
                                                (
                                                    <img

                                                        id={index2}
                                                        src={`${apifunctions.api_server_url + '/' + productPhoto.product_photo_path}`}
                                                        srcset={`${apifunctions.api_server_url + '/' + productPhoto.product_photo_path}`}
                                                        data-srcset={`${apifunctions.api_server_url + '/' + productPhoto.product_photo_path}`}
                                                        alt={trans(this.props.product.name_ar, this.props.product.name_en)}
                                                        title={trans(this.props.product.name_ar, this.props.product.name_en)} />
                                                ) :
                                                <span></span>

                                        )
                                    )}
                            </div>
                            <div className="stock_status">
                            </div>
                            <div className="mh_product_description">
                                <div className="mh_product_items">

                                    <div className="brand"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>
                                        {trans(this.props.product.name_ar, this.props.product.name_en)}
                                    </font></font></div>

                                    <div className="type"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>
                                        {trans(this.props.product.name_ar, this.props.product.name_en)}
                                    </font></font></div>
                                    <span className="prd_price ">
                                        <strong>
                                            <span className="text-danger"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>

                                                {currency_transing(this.state.product.newprice, this.state.product.currency_and_taxex.one_dinar_in_dollar, this.state.product.currency_and_taxex.one_dollars_in_SAR, this.state.product.currency_and_taxex.one_dollars_in_AED, this.state.product.currency_and_taxex.one_dollars_in_BHD, this.state.product.currency_and_taxex.one_dollars_in_OMR, this.state.product.currency_and_taxex.one_dollars_in_QAR)}
                                                <br />   {trans('حسم', 'discount')}    {calc_discount(this.state.product.newprice, this.state.product.showed_price)} %  <br />
                                            </font></font></span>
                                        </strong>
                                    </span>
                                    <font style={{ verticalAlign: 'inherit' }}>
                                        <span className="act_price text-muted "><s>
                                            <font style={{ verticalAlign: 'inherit' }}>

                                                {currency_transing(this.state.product.showed_price, this.state.product.currency_and_taxex.one_dinar_in_dollar, this.state.product.currency_and_taxex.one_dollars_in_SAR, this.state.product.currency_and_taxex.one_dollars_in_AED, this.state.product.currency_and_taxex.one_dollars_in_BHD, this.state.product.currency_and_taxex.one_dollars_in_OMR, this.state.product.currency_and_taxex.one_dollars_in_QAR)}


                                            </font></s></span>
                                        <span className="prd_price "><strong><span className="text-danger">
                                        </span></strong></span></font>

                                    {/*<  <span className="act_price text-muted "><s><font style={{ verticalAlign: 'inherit' }}>
                                </font></s></span>


                                div className="block-item">
                                    <div className="cardinfo ">
                                        <span className="badge-text"><font style={{ verticalAlign: 'inherit' }}>
                                            <font style={{ verticalAlign: 'inherit' }}>Free cargo</font></font></span>
                                    </div>
                                </div> */}

                                </div>
                            </div>
                        </a>




                        {/* <div className="quick_actions">
                        <div className="favourite-buttons">
                            <a className="make_fav">
                                <span aria-hidden="true" className="icontype  ui-favourite">
                                    <svg className="stroke-purple" height="18" role="img" title="Favorites" viewBox="0 0 18 18" width="18">
                                        <use xlinkHref="/Content/sprites/morhipo-icons.svg?v=25#ui-favourite"></use></svg></span>
                            </a>
                        </div>
                    </div> */}



                    </div>
                </li>
            </NavLink>

        );
    }

}
