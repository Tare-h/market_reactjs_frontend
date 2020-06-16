import React from "react";

const CampaignCategory = ({ campaignCategory }) => {

  return (


    <main className="container push-top" id="home-body-id">

      <div className="row clearfix">
        <div className="col-xs-12">
          <ol className="breadcrumb">
            <li><a id="ela-urun-showcase-anasayfa" href="/">
              <font style={{ verticalAlign: 'inherit' }}>
                <font style={{ verticalAlign: 'inherit' }}>Home page</font></font></a></li>


            <li className="active">
              <font style={{ verticalAlign: 'inherit' }}>
                <font style={{ verticalAlign: 'inherit' }}>
                  {campaignCategory.name}
                </font>
              </font>
            </li>
          </ol >
        </div >
      </div >
      <div id="category-maincontainer">
        <div className="row clearfix">
          <div className="col-xs-12">
            <h1><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Male</font></font></h1>
            <input id="hidPageHierarchy" name="hidPageHierarchy" type="hidden" value="Erkek.Liste" />

          </div>
        </div>
        <div className="row clearfix">
          <div className="visible-xs visible-sm col-xxs-12 col-xs-12 column visible-rwd">
            <button type="button" className="filter-toggle submenutg" data-toggle="collapse" data-target=".sidebar">
              <div className="toggle-container">
                <span className="icon-text"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>SUB CATEGORIES</font></font></span>
                <span className="icontype pull-right ui-plus-md">
                  <svg role="presentation" width="13" height="13" viewBox="0 0 13 13">
                    <use xlinkHref="/Content/sprites/morhipo-icons.svg#ui-plus-md"></use>
                  </svg>
                </span>
              </div>
            </button>
          </div>
          <div className="col-xxs-12 col-xs-12 col-sm-12 col-md-3 column">
            <div className="sidebar filter-collapse collapse">
              <ul className="desktop-ul-fix">
                <li><a className="title" href="/erkek?fh=discount_rate_catalog01%5D25"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Rated DISCOUNTS</font></font></a></li>
                <li><a href="/erkek-gomlek?pr=19,49,19,2496"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Shirts Under 59,99 TL</font></font></a></li>
                <li><a href="/erkek-kazak?pr=12,69,12,2226"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Sweaters Under $ 69.99</font></font></a></li>
              </ul>
              <hr />



              <ul>
                <li><a id="vitrin-menu-/erkek-giyim" className="title" href="/erkek-giyim"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Clothing</font></font></a></li>
                <li><a id="vitrin-menu-/erkek-sweatshirt" href="/erkek-sweatshirt"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Sweatshirt</font></font></a></li>
                <li><a id="vitrin-menu-/erkek-pantolon" href="/erkek-pantolon"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Trousers</font></font></a></li>
                <li><a id="vitrin-menu-/erkek-gomlek" href="/erkek-gomlek"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Shirt</font></font></a></li>
                <li><a id="vitrin-menu-/erkek-tisort" href="/erkek-tisort"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>T-shirt</font></font></a></li>
                <li><a id="vitrin-menu-/erkek-jean-giyim" href="/erkek-jean-giyim"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Jean</font></font></a></li>
                <li><a id="vitrin-menu-/erkek-ceket" href="/erkek-ceket"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Jacket</font></font></a></li>
                <li><a id="vitrin-menu-/erkek-takim-elbise" href="/erkek-takim-elbise"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Suit</font></font></a></li>
                <li><a id="vitrin-menu-/erkek-kazak" href="/erkek-kazak"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Sweater</font></font></a></li>
                <li><a id="vitrin-menu-/erkek-hirka" href="/erkek-hirka"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Cardigan</font></font></a></li>
                <li><a id="vitrin-menu-/erkek-esofman" href="/erkek-esofman"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Track suit</font></font></a></li>
                <li><a id="vitrin-menu-/erkek-yelek" href="/erkek-yelek"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Vest</font></font></a></li>
                <li><a id="vitrin-menu-/erkek-suveter" href="/erkek-suveter"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Sweater</font></font></a></li>
                <li><a id="vitrin-menu-/erkek-smokin" href="/erkek-smokin"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Tuxedo</font></font></a></li>
                <li><a id="vitrin-menu-/erkek-sort" href="/erkek-sort"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Shorts</font></font></a></li>
              </ul>
              <hr />
              <ul>
                <li><a id="vitrin-menu-/erkek-dis-giyim" className="title" href="/erkek-dis-giyim"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Outerwear</font></font></a></li>
                <li><a id="vitrin-menu-/erkek-mont" href="/erkek-mont"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Monte</font></font></a></li>
                <li><a id="vitrin-menu-/erkek-kaban" href="/erkek-kaban"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Coat</font></font></a></li>
                <li><a id="vitrin-menu-/erkek-trenckot-pardesu" href="/erkek-trenckot-pardesu"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Trench Coat &amp; Topcoat</font></font></a></li>
                <li><a id="vitrin-menu-/erkek-yagmurluk" href="/erkek-yagmurluk"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Raincoat</font></font></a></li>
                <li><a id="vitrin-menu-/erkek-palto" href="/erkek-palto"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Coat</font></font></a></li>
              </ul>
              <hr />
              <ul>
                <li><a id="vitrin-menu-/erkek-ayakkabi" className="title" href="/erkek-ayakkabi"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Shoe</font></font></a></li>
                <li><a id="vitrin-menu-/erkek-bot" href="/erkek-bot"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Boots</font></font></a></li>
                <li><a id="vitrin-menu-/erkek-spor-ayakkabi" href="/erkek-spor-ayakkabi"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Sport shoes</font></font></a></li>
                <li><a id="vitrin-menu-/erkek-gunluk-ayakkabi" href="/erkek-gunluk-ayakkabi"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Casual Shoes</font></font></a></li>
                <li><a id="vitrin-menu-/erkek-sneakers" href="/erkek-sneakers"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Sneakers</font></font></a></li>
                <li><a id="vitrin-menu-/erkek-terlik" href="/erkek-terlik"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Slipper</font></font></a></li>
              </ul>
              <hr />
              <ul>
                <li><a id="vitrin-menu-/erkek-canta" className="title" href="/erkek-canta"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Bag</font></font></a></li>
                <li><a id="vitrin-menu-/erkek-cuzdan" href="/erkek-cuzdan"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Wallet</font></font></a></li>
                <li><a id="vitrin-menu-/erkek-sirt-cantasi" href="/erkek-sirt-cantasi"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Backpack</font></font></a></li>
                <li><a id="vitrin-menu-/erkek-omuz-cantasi" href="/erkek-omuz-cantasi"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Shoulder bag</font></font></a></li>
                <li><a id="vitrin-menu-/erkek-kartlik" href="/erkek-kartlik"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>card wallet</font></font></a></li>
                <li><a id="vitrin-menu-/laptop-evrak-cantasi" href="/laptop-evrak-cantasi"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Laptop &amp; Briefcase</font></font></a></li>
                <li><a id="vitrin-menu-/seyahat-cantasi" href="/seyahat-cantasi"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Travel bag</font></font></a></li>
              </ul>
              <hr />
              <ul>
                <li><a id="vitrin-menu-/erkek-aksesuar" className="title" href="/erkek-aksesuar"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Accessory</font></font></a></li>
                <li><a id="vitrin-menu-/erkek-kol-saati" href="/erkek-kol-saati"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Hour</font></font></a></li>
                <li><a id="vitrin-menu-/erkek-atki-bere-eldiven" href="/erkek-atki-bere-eldiven"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Scarf, Beanie &amp; Gloves</font></font></a></li>
                <li><a id="vitrin-menu-/erkek-gunes-gozlugu" href="/erkek-gunes-gozlugu"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Sunglasses</font></font></a></li>
                <li><a id="vitrin-menu-/erkek-kemer" href="/erkek-kemer"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Belt</font></font></a></li>
                <li><a id="vitrin-menu-/erkek-papyon" href="/erkek-papyon"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Bow tie</font></font></a></li>
                <li><a id="vitrin-menu-/erkek-kravat" href="/erkek-kravat"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Tie</font></font></a></li>
                <li><a id="vitrin-menu-/erkek-kol-dugmesi" href="/erkek-kol-dugmesi"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Cufflinks</font></font></a></li>
                <li><a id="vitrin-menu-/semsiye" href="/semsiye"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Umbrella</font></font></a></li>
              </ul>
              <hr />
              <ul>
                <li><a id="vitrin-menu-/outdoor-giyim-aksesuar" className="title" href="/outdoor-giyim-aksesuar"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Outdoor Wear</font></font></a></li>
              </ul>
              <hr />
              <ul>
                <li><a id="vitrin-menu-/erkek-spor-giyim-aksesuar" className="title" href="/erkek-spor-giyim-aksesuar"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Sportswear</font></font></a></li>
              </ul>
              <hr />
              <ul>
                <li><a id="vitrin-menu-/erkek-designer-luks" className="title" href="/erkek-designer-luks"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Designer &amp; Luxury</font></font></a></li>
              </ul>
              <hr />
              <ul>
                <li><a id="vitrin-menu-/erkek-ic-ev-giyim" className="title" href="/erkek-ic-ev-giyim"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Underwear &amp; Home Wear</font></font></a></li>
                <li><a id="vitrin-menu-/erkek-ic-camasiri" href="/erkek-ic-camasiri"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Underwear</font></font></a></li>
                <li><a id="vitrin-menu-/erkek-pijama" href="/erkek-pijama"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Pyjamas</font></font></a></li>
                <li><a id="vitrin-menu-/erkek-corap" href="/erkek-corap"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Socks</font></font></a></li>
                <li><a id="vitrin-menu-/erkek-ic-giyim-fanila-atlet" href="/erkek-ic-giyim-fanila-atlet"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Flannel &amp; Athlete</font></font></a></li>
              </ul>
              <hr />
              <ul>
                <li><a id="vitrin-menu-/erkek-kozmetik" className="title" href="/erkek-kozmetik"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Cosmetic</font></font></a></li>
                <li><a id="vitrin-menu-/erkek-parfum" href="/erkek-parfum"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Perfume</font></font></a></li>
                <li><a id="vitrin-menu-/erkek-cilt-bakimi" href="/erkek-cilt-bakimi"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Skin care</font></font></a></li>
                <li><a id="vitrin-menu-/erkek-sac-bakimi" href="/erkek-sac-bakimi"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Hair care</font></font></a></li>
              </ul>
              <hr />
              <ul>
                <li><a id="vitrin-menu-#" className="title" href="#"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Popular Brands</font></font></a></li>
                <li><a id="vitrin-menu-/people-by-fabrika?ft=1057:32418" href="/people-by-fabrika?ft=1057:32418"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>People By Factory</font></font></a></li>
                <li><a id="vitrin-menu-/d-by-divarese?ft=1057:32418" href="/d-by-divarese?ft=1057:32418"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>D By Divarese</font></font></a></li>
                <li><a id="vitrin-menu-/network?ft=1057:32418" href="/network?ft=1057:32418"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Network</font></font></a></li>
                <li><a id="vitrin-menu-/altinyildiz-classics" href="/altinyildiz-classics"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Altinyildiz Classics</font></font></a></li>
                <li><a id="vitrin-menu-/koton?ft=1057:32418" href="/koton?ft=1057:32418"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Cotton</font></font></a></li>
                <li><a id="vitrin-menu-/lacoste?ft=1057:32418" href="/lacoste?ft=1057:32418"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Lacoste</font></font></a></li>
                <li><a id="vitrin-menu-/nike?ft=1057:32418" href="/nike?ft=1057:32418"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Nike</font></font></a></li>
                <li><a id="vitrin-menu-/adidas?ft=1057:32418" href="/adidas?ft=1057:32418"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>adidas</font></font></a></li>
                <li><a id="vitrin-menu-/levis?ft=1057:32418" href="/levis?ft=1057:32418"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Levi's®</font></font></a></li>
                <li><a id="vitrin-menu-/jack-jones?ft=1057:32418" href="/jack-jones?ft=1057:32418"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Jack &amp; Jones</font></font></a></li>
                <li><a id="vitrin-menu-/mavi?ft=1057:32418" href="/mavi?ft=1057:32418"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>blue</font></font></a></li>
                <li><a id="vitrin-menu-/hummel?ft=1057:32418" href="/hummel?ft=1057:32418"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Hummel</font></font></a></li>
              </ul>
              <hr />
              <ul>
                <li><a id="vitrin-menu-/erkek/2/marka" className="title" href="/erkek/2/marka"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Brands A to Z</font></font></a></li>
              </ul>
              <hr />
              <ul>
                <li><a id="vitrin-menu-/erkek?pr=0%2C29" className="title" href="/erkek?pr=0%2C29"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Under 29 TL Products</font></font></a></li>
              </ul>
              <hr />
              <ul>
                <li><a id="vitrin-menu-/erkek?fh=discount_rate_catalog01%5D25" className="title" href="/erkek?fh=discount_rate_catalog01%5D25"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Discounted products</font></font></a></li>
              </ul>
              <hr />
              <ul>
                <li><a id="vitrin-menu-/erkek?pr=0%2C49" className="title" href="/erkek?pr=0%2C49"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Under 49 TL Products</font></font></a></li>
              </ul>
              <hr />
              <ul>
                <li><a id="vitrin-menu-/erkek?pr=0%2C99" className="title" href="/erkek?pr=0%2C99"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Products under 99 TL</font></font></a></li>
              </ul>
              <hr />
              <ul>
                <li><a id="vitrin-menu-/erkek?fh=recencyday_catalog01%5B15" className="title" href="/erkek?fh=recencyday_catalog01%5B15">
                  <font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>The Newests</font></font></a></li>
              </ul>





            </div>
          </div>
          <div className="col-xxs-12 col-xs-12 col-sm-12 col-md-9 column">
            <div className="categories-content">
              <div className="row">
                <div className="col-xs-12 col-sm-12 column-slider">
                  <div className="home-hero">
                    <div className="banner-container">
                      <a className="opaque" href="http://www.morhipo.com/avva-kampanya-2"  >
                        <picture>


                          <img className=" lazyloaded" src="https://img-morhipo.mncdn.com/Content/Banners/avva_sayfa_slider_111c43ef0dc08443c9a611d6cfee30044e.jpg" data-src="https://img-morhipo.mncdn.com/Content/Banners/avva_sayfa_slider_111c43ef0dc08443c9a611d6cfee30044e.jpg" alt="Avva" />
                        </picture>
                      </a>
                      <a href="http://www.morhipo.com/giyim-kampanya-53" >
                        <picture>


                          <img className="lazyload" src="https://img-morhipo.mncdn.com/Content/Banners/newsliderplc8f7fef0d5b5048dcad1ef36eaf5c4b65.png" data-src="https://img-morhipo.mncdn.com/Content/Banners/altinyildiz_sayfa_slider_1163d8d90b9b49459db20006667a641369.jpg" alt="Altınyıldız" />
                        </picture>
                      </a>

                    </div>
                    <div className="hero-arrows-sct">
                      <div className="hero-arrows">
                        <span className="mg-control hero-prev active">
                          <span className="icontype ui-arrow_left-lg">
                            <svg className="fill-white" role="presentation" title="Back" width="12" height="18" viewBox="0 0 12 18">
                              <use xlinkHref="/Content/sprites/morhipo-icons.svg?v=1#ui-arrow_left-lg"></use>
                            </svg>
                          </span>
                        </span>
                        <span className="mg-control hero-next">
                          <span className="icontype ui-arrow_right-lg">
                            <svg className="fill-white" role="presentation" title="Further" width="12" height="18" viewBox="0 0 12 18">
                              <use xlinkHref="/Content/sprites/morhipo-icons.svg?v=1#ui-arrow_right-lg"></use>
                            </svg>
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xxs-12 col-xs-6 col-sm-6">
                  <div className="mh_promotion_container">
                    <a href="http://malls-online.com/takim-elbise-nasil-secilir-/500/morhipo-ozel" >
                      <div className="image-section">
                        <img src="https://img-morhipo.mncdn.com/Content/Banners/sezon_sayfalar_erkek_0387241624afe249a59f13e0cbc531c9e5.jpg" alt="Suit" /></div>
                      <div className="mh_promotion_description">
                        <span className="title"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Suit</font></font></span>
                        <p><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>New season</font></font></p>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="col-xxs-12 col-xs-6 col-sm-6">
                  <div className="mh_promotion_container">
                    <a href="http://malls-online.com/erkek-giyim?ft=1064:32013,32018,32102" >
                      <div className="image-section"><img src="https://img-morhipo.mncdn.com/Content/Banners/sezon_sayfalar_erkek_0568b5d77241c245b6ba0ff80cc27d4404.jpg" alt="Knitwear" /></div>
                      <div className="mh_promotion_description">
                        <span className="title"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Knitwear</font></font></span>
                        <p><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>New season</font></font></p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-xxs-12 col-xs-6 col-sm-6">
                  <div className="mh_promotion_container">
                    <a href="/erkek-dis-giyim" >
                      <div className="image-section"><img src="https://img-morhipo.mncdn.com/Content/Banners/sezon_sayfalar_erkek_095a877ac03c4f438085e0f3e23a353225.jpg" alt="Men's Outerwear" /></div>
                      <div className="mh_promotion_description">
                        <span className="title"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Men's Outerwear</font></font></span>
                        <p><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>New season</font></font></p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-xxs-12 col-xs-6 col-sm-6">
                  <div className="mh_promotion_container">
                    <a href="http://malls-online.com/erkek-sweatshirt">
                      <div className="image-section"><img src="https://img-morhipo.mncdn.com/Content/Banners/sezon_sayfalar_erkek_107a06a626e88d4f34852c0e4716440d1f.jpg" alt="Sweatshirt" /></div>
                      <div className="mh_promotion_description">
                        <span className="title"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Sweatshirt</font></font></span>
                        <p><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>New season</font></font></p>
                      </div>
                    </a>
                  </div >
                </div >
                <div className="col-xxs-12 col-xs-6 col-sm-4">
                  <div className="mh_promotion_container">
                    <a href="/network?ft=1057%3A32418" >
                      <div className="image-section"><img src="https://img-morhipo.mncdn.com/Content/Banners/sezon_sayfalar_erkek_13315e676e9c0a4a14970acfcb6a41c3b4.jpg" alt="Network" /></div>
                      <div className="mh_promotion_description">
                        <span className="title"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Network</font></font></span>
                        <p><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Start shopping</font></font></p>
                      </div>
                    </a>
                  </div >
                </div >
                <div className="col-xxs-12 col-xs-6 col-sm-4">
                  <div className="mh_promotion_container">
                    <a href="/people-by-fabrika/erkek/2/32485/marka" >
                      <div className="image-section"><img src="https://img-morhipo.mncdn.com/Content/Banners/sezon_sayfalar_erkek_15ae4eb2b19ede4ac39e7b992639fe255b.jpg" alt="People By Factory" /></div>
                      <div className="mh_promotion_description">
                        <span className="title"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>People By Factory</font></font></span>
                        <p><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>New season</font></font></p>
                      </div>
                    </a>
                  </div >
                </div >
                <div className="col-xxs-12 col-xs-6 col-sm-4">
                  <div className="mh_promotion_container">
                    <a href="http://malls-online.com/kigili" >
                      <div className="image-section"><img src="https://img-morhipo.mncdn.com/Content/Banners/sezon_sayfalar_erkek_177c380e0c03da4e20939b7c2cbd57dca1.jpg" alt="Kiğılı" /></div>
                      <div className="mh_promotion_description">
                        <span className="title"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Kiğılı</font></font></span>
                        <p><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>New season</font></font></p>
                      </div>
                    </a>
                  </div >
                </div >
                <div className="col-xxs-12 col-xs-6 col-sm-4">
                  <div className="mh_promotion_container">
                    <a href="http://malls-online.com/kappa" >
                      <div className="image-section"><img src="https://img-morhipo.mncdn.com/Content/Banners/sezon_sayfalar_erkek_22497b6a3c0ba2491cb6162c8fb5497803.jpg" alt="Kappa" /></div>
                      <div className="mh_promotion_description">
                        <span className="title"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Kappa</font></font></span>
                        <p><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Up to 25% Discount</font></font></p>
                      </div>
                    </a>
                  </div >
                </div >
                <div className="col-xxs-12 col-xs-6 col-sm-4">
                  <div className="mh_promotion_container">
                    <a href="/lc-waikiki/erkek/2/155537/marka" >
                      <div className="image-section"><img src="https://img-morhipo.mncdn.com/Content/Banners/sezon_sayfalar_erkek_23d626dc1d369d4e91a083713f463c891c.jpg" alt="LCW" /></div>
                      <div className="mh_promotion_description">
                        <span className="title"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>LC Waikiki</font></font></span>
                        <p><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Up to 40% Discount</font></font></p>
                      </div>
                    </a>
                  </div >
                </div >
                <div className="col-xxs-12 col-xs-6 col-sm-4">
                  <div className="mh_promotion_container">
                    <a href="http://malls-online.com/giyim-kampanya-32?ft=100:3120001745;1057:32418&amp;rType=1&amp;rKey=89794" >
                      <div className="image-section"><img src="https://img-morhipo.mncdn.com/Content/Banners/sezon_sayfalar_erkek_240f0768cb74344a6ab4a6574f579c76f4.jpg" alt="defacto" /></div>
                      <div className="mh_promotion_description">
                        <span className="title"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>defacto</font></font></span>
                        <p><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Start shopping</font></font></p>
                      </div>
                    </a>
                  </div >
                </div >
                <div className="col-xxs-12 col-xs-6 col-sm-4">
                  <div className="mh_promotion_container">
                    <a href="/erkek-giyim/8/liste?pr=0,39" >
                      <div className="image-section"><img src="https://img-morhipo.mncdn.com/Content/Banners/sezon_sayfalar_erkek_288e16a17f61994c1e868ac7ee11ed6d82.jpg" alt="Maximum 39" /></div>
                      <div className="mh_promotion_description">
                        <span className="title"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Maximum 39,99 TL</font></font></span>
                        <p><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Start shopping</font></font></p>
                      </div>
                    </a>
                  </div >
                </div >
                <div className="col-xxs-12 col-xs-6 col-sm-4">
                  <div className="mh_promotion_container">
                    <a href="/erkek-giyim/8/liste?pr=0,49" >
                      <div className="image-section"><img src="https://img-morhipo.mncdn.com/Content/Banners/sezon_sayfalar_erkek_295cb4a66d3f134311a7bf77299c04e56d.jpg" alt="Maximum 49" /></div>
                      <div className="mh_promotion_description">
                        <span className="title"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Maximum 49.99 TL</font></font></span>
                        <p><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Start shopping</font></font></p>
                      </div>
                    </a>
                  </div >
                </div >
                <div className="col-xxs-12 col-xs-6 col-sm-4">
                  <div className="mh_promotion_container">
                    <a href="/erkek-giyim-gomlek/32/liste?pr=0,59" >
                      <div className="image-section"><img src="https://img-morhipo.mncdn.com/Content/Banners/sezon_sayfalar_erkek_3039c544a010324f708c21f6106f70a51f.jpg" alt="Maximum 59" /></div>
                      <div className="mh_promotion_description">
                        <span className="title"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Maximum 59.99 TL</font></font></span>
                        <p><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Start shopping</font></font></p>
                      </div>
                    </a>
                  </div >
                </div >






              </div >
            </div >
          </div >
        </div >
        <div className="row no-margin">
          <script type="text/javascript">
            $business.LastViewedProductWidget();
        </script>
          <div id="lastviewed-widget"></div>
        </div>

        <div className="row no-margin">

        </div>
      </div >
    </main >

  );
};

export default CampaignCategory;
