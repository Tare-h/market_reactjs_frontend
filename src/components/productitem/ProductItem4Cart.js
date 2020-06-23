import React from "react";
import {
    getUser,
    getToken,
    getLang,
    transToEnglish,
    transToArabic,
    trans,
    removeUserSession,
    setUserSession,
} from '../../Utils/Common';
import apifunctions from "../../api/apifunctions"
import { NavLink } from "react-router-dom";
import Login from '../../components/account/Login';
export default class ProductItem4Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            cart: props.cart
        };

    }
    render() {
        return (

            <NavLink
                key={this.props.cart.product.id}
                to={`/product/${this.props.cart.product.id}`}
                id={`/product/${this.props.cart.product.id}`}
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
                            {this.props.cart.product &&
                                this.props.cart.product.productPhotos &&
                                this.props.cart.product.productPhotos.map(
                                    (productPhoto, index2) => (
                                        index2 == '0' ?
                                            (
                                                <img className="prd-img-top ls-is-cached lazyloaded" id={index2}
                                                    src={`${apifunctions.api_server_url + '/' + productPhoto.product_photo_path}`}
                                                    srcset={`${apifunctions.api_server_url + '/' + productPhoto.product_photo_path}`}
                                                    data-srcset={`${apifunctions.api_server_url + '/' + productPhoto.product_photo_path}`} alt="US Polo Assn.  T-Shirt Green" title="US Polo Assn.  T-Shirt Green" />
                                            ) :
                                            <img className="prd-img-btm ls-is-cached lazyloaded"
                                                src={`${apifunctions.api_server_url + '/' + productPhoto.product_photo_path}`}
                                                srcset={`${apifunctions.api_server_url + '/' + productPhoto.product_photo_path}`}
                                                data-srcset={`${apifunctions.api_server_url + '/' + productPhoto.product_photo_path}`}
                                                alt="US Polo Assn.  T-Shirt Green" title="US Polo Assn.  T-Shirt Green" />

                                    )
                                )}
                        </div>
                        <div className="stock_status">
                        </div>
                        <div className="mh_product_description">
                            <div className="mh_product_items">

                                <div className="brand"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>
                                    {trans(this.props.cart.product.name_ar, this.props.cart.product.name_en)}
                                    {}</font></font></div>

                                <div className="type"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>
                                    {trans(this.props.cart.product.name_ar, this.props.cart.product.name_en)}
                                </font></font></div>
                                <span className="prd_price ">
                                    <strong>
                                        <span className="text-danger"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>{this.props.cart.product.showed_price} </font></font></span>
                                    </strong>
                                </span>
                                <font style={{ verticalAlign: 'inherit' }}>
                                    <span className="act_price text-muted "><s>
                                        <font style={{ verticalAlign: 'inherit' }}> {this.props.cart.product.showed_price + 1} </font></s></span>
                                    <span className="prd_price "><strong><span className="text-danger">
                                        <font style={{ verticalAlign: 'inherit' }}>$</font></span></strong></span></font>

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

            </NavLink>

        );
    }

}
