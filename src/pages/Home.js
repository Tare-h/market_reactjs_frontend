import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


import Products from "../pages/Products";
import Homepagebigcategory from "../components/homepageitem/homepagebigcategory";
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      currentCategories: this.props.currCategories
    };

  }
  render() {
    return (
      <main className="container push-top" id="home-body-id" >

        <div
          className="hiden"
          data-listsource="mrp"
          style={{ display: "none" }}
        ></div>

        <div id="privateclub-maincontainer">
          <div className="row">
            <div className="col-xs-12 col-sm-12">
              <div className="story-cloud">
                <a
                  href="http://malls-online.com/boyner-10827?rType=1&amp;rKey=91090"
                  className="story-tag"
                >
                  <img
                    src="static/logoef03ed93119a49278324d77c6c6f86ec.jpg"
                    data-src="https://img-morhipo.mncdn.com/Content/Banners/logoef03ed93119a49278324d77c6c6f86ec.jpg"
                    alt="Boyner Butterfly"
                    className="story-tag-img ls-is-cached lazyloaded"
                  />
                </a>
                <a
                  href="http://malls-online.com/kampanya/liste/91073/beymen-designer-tek-kalanlar?rType=1&amp;rKey=91073"
                  className="story-tag"
                >
                  <img
                    src="static/logo2d6eeed2323245d79e47e5ec4db86516.jpg"
                    data-src="https://img-morhipo.mncdn.com/Content/Banners/logo2d6eeed2323245d79e47e5ec4db86516.jpg"
                    alt="Beymen &amp; Designer Single Remains"
                    className="story-tag-img ls-is-cached lazyloaded"
                  />
                </a>
                <a
                  href="http://malls-online.com/nike?rType=1&amp;rKey=90573"
                  className="story-tag"
                >
                  <img
                    src="static/logo34d6513ff56f495dbeb13eb06086beb0.jpg"
                    data-src="https://img-morhipo.mncdn.com/Content/Banners/logo34d6513ff56f495dbeb13eb06086beb0.jpg"
                    alt="Nike"
                    className="story-tag-img ls-is-cached lazyloaded"
                  />
                </a>
                <a
                  href="http://malls-online.com/ps-kampanya-48?rType=1&amp;rKey=90845"
                  className="story-tag"
                >
                  <img
                    src="static/logodf0172f5e201437aa5e43dc6b60bcfd6.jpg"
                    data-src="https://img-morhipo.mncdn.com/Content/Banners/logodf0172f5e201437aa5e43dc6b60bcfd6.jpg"
                    alt="People By Factory Woman"
                    className="story-tag-img ls-is-cached lazyloaded"
                  />
                </a>
                <a
                  href="http://malls-online.com/ps-kampanya-51?rType=1&amp;rKey=90843"
                  className="story-tag"
                >
                  <img
                    src="static/logo2c2fe846af1c4b09a9b47692dd669080.jpg"
                    data-src="https://img-morhipo.mncdn.com/Content/Banners/logo2c2fe846af1c4b09a9b47692dd669080.jpg"
                    alt="D By Divarese"
                    className="story-tag-img ls-is-cached lazyloaded"
                  />
                </a>
                <a
                  href="http://malls-online.com/kampanya/liste/91068/u-s-polo-assn-?rType=1&amp;rKey=91068"
                  className="story-tag"
                >
                  <img
                    src="static/ps-logo-fallback.png"
                    data-src="https://img-morhipo.mncdn.com/Content/Banners/logobc3b377fc17f47bdb47c1a59b78a7cf8.jpg"
                    alt="US Polo Assn."
                    className="story-tag-img lazyload"
                  />
                </a>
                <a
                  href="http://malls-online.com/kampanya/liste/90965/ipekyol-twist?rType=1&amp;rKey=90965"
                  className="story-tag"
                >
                  <img
                    src="static/ps-logo-fallback.png"
                    data-src="https://img-morhipo.mncdn.com/Content/Banners/logo23488fccf6b4460ca8feba7d9e7f56d6.jpg"
                    alt="Silk &amp; Twist"
                    className="story-tag-img lazyload"
                  />
                </a>
                <a
                  href="http://malls-online.com/adidas?rType=1&amp;rKey=87037"
                  className="story-tag"
                >
                  <img
                    src="static/ps-logo-fallback.png"
                    data-src="https://img-morhipo.mncdn.com/Content/Banners/logo9a6a7ed623c74d4e8a1f7c9e054a8126.jpg"
                    alt="adidas"
                    className="story-tag-img lazyload"
                  />
                </a>
                <a
                  href="http://malls-online.com/kampanya/alisveris/4?rType=1&amp;rKey=90143"
                  className="story-tag"
                >
                  <img
                    src="static/ps-logo-fallback.png"
                    data-src="https://img-morhipo.mncdn.com/Content/Banners/logo0953c9e313144aad80afe3df380ab14a.jpg"
                    alt="Home &amp; Life "
                    className="story-tag-img lazyload"
                  />
                </a>
                <a
                  href="http://malls-online.com/kozmetik-kampanya-8?rType=1&amp;rKey=89273"
                  className="story-tag"
                >
                  <img
                    src="static/ps-logo-fallback.png"
                    data-src="https://img-morhipo.mncdn.com/Content/Banners/logo6998103c77ed4da395a30d4cd31b7de3.jpg"
                    alt="Perfume Deals "
                    className="story-tag-img lazyload"
                  />
                </a>
                <a
                  href="http://malls-online.com/mavi-kampanya-1?ft=100:3120000075&amp;rType=1&amp;rKey=85284"
                  className="story-tag"
                >
                  <img
                    src="static/ps-logo-fallback.png"
                    data-src="https://img-morhipo.mncdn.com/Content/Banners/logod60459e622d74a008f1f88b0e49c7724.jpg"
                    alt="blue"
                    className="story-tag-img lazyload"
                  />
                </a>
                <a
                  href="http://malls-online.com/beymen-business-kampanya-1?ft=100:3110000025&amp;rType=1&amp;rKey=90391"
                  className="story-tag"
                >
                  <img
                    src="static/ps-logo-fallback.png"
                    data-src="https://img-morhipo.mncdn.com/Content/Banners/logo3c06ba1fe1af4c8fbfad271c0feff018.jpg"
                    alt="Beymen Business"
                    className="story-tag-img lazyload"
                  />
                </a>
                <a
                  href="http://malls-online.com/altinyildiz-classics-kampanya-1?ft=100:3110000025&amp;rType=1&amp;rKey=90689"
                  className="story-tag"
                >
                  <img
                    src="static/ps-logo-fallback.png"
                    data-src="https://img-morhipo.mncdn.com/Content/Banners/logocdb8aaf1f4844d48b5ea6bb92baa5865.jpg"
                    alt="Altinyildiz Classics"
                    className="story-tag-img lazyload"
                  />
                </a>
                <a
                  href="http://malls-online.com/ps-kampanya-35?rType=1&amp;rKey=91019"
                  className="story-tag"
                >
                  <img
                    src="static/ps-logo-fallback.png"
                    data-src="https://img-morhipo.mncdn.com/Content/Banners/logob5eb95ec601543b080bd55c65e8a7428.jpg"
                    alt="Special Ramadan Special Week "
                    className="story-tag-img lazyload"
                  />
                </a>
                <a
                  href="http://malls-online.com/avva?ft=100:3120004809&amp;rType=1&amp;rKey=90882"
                  className="story-tag"
                >
                  <img
                    src="static/ps-logo-fallback.png"
                    data-src="https://img-morhipo.mncdn.com/Content/Banners/logod9c4e944ecc94e61989a8b3bc83ec7f1.jpg"
                    alt="AVVA"
                    className="story-tag-img lazyload"
                  />
                </a>
                <a
                  href="http://malls-online.com/ps-kampanya-47?rType=1&amp;rKey=90183"
                  className="story-tag"
                >
                  <img
                    src="static/ps-logo-fallback.png"
                    data-src="https://img-morhipo.mncdn.com/Content/Banners/logoa007ef533a664fa6bc27471584be09fa.jpg"
                    alt="People By Factory Karma"
                    className="story-tag-img lazyload"
                  />
                </a>
                <a
                  href="http://malls-online.com/kampanya/liste/91069/pierre-cardin?rType=1&amp;rKey=91069"
                  className="story-tag"
                >
                  <img
                    src="static/ps-logo-fallback.png"
                    data-src="https://img-morhipo.mncdn.com/Content/Banners/logo08ec6dc6b0a54081a2c88628e343f734.jpg"
                    alt="Pierre Cardin"
                    className="story-tag-img lazyload"
                  />
                </a>
              </div>
            </div>
            <div className="visible-xs col-xs-12"></div>
          </div>
          <div className="row clearfix">
            <div className="col-minor col-xs-12 col-sm-12">
              {
                this.props.currCategories.map(category =>
                  <Homepagebigcategory category={category} />
                )

              }

            </div>
            {/* 
            <div className="col-ps-sidebar col-xs-3 col-sm-4">
              <div className="ps_sidebar-item">
                <div className="mh_promotion_container">
                  <a
                    title="Gift Card"
                    href="http://malls-online.com/hediye-karti-gift-card/321/morhipo-ozel"
                    target="_parent"
                  >
                    <img
                      className="lazyload"
                      src="static/gift5a72a4481d2746ad966cf5f6cb644363.jpg"
                      srcSet="/Content/ImagesResp/spacer-vitrin.png"
                      data-srcset="https://img-morhipo.mncdn.com/Content/Banners/gift5a72a4481d2746ad966cf5f6cb644363.jpg"
                      alt="Gift Card"
                    />
                  </a>
                </div>
              </div>

              <div className="ps_sidebar-item">
                <div className="mh_promotion_container">
                  <a
                    title="İyi İşler"
                    href="http://malls-online.com/iyi-isler/163/morhipo-ozel"
                    target="_parent"
                  >
                    <img
                      className="lazyload"
                      src="static/iyi6e7bab334c05443ca2c249951d1d5822.jpg"
                      srcSet="/Content/ImagesResp/spacer-vitrin.png"
                      data-srcset="https://img-morhipo.mncdn.com/Content/Banners/iyi6e7bab334c05443ca2c249951d1d5822.jpg"
                      alt="İyi İşler"
                    />
                  </a>
                </div>
              </div>

              <div className="ps_sidebar-item">
                <div className="mh_promotion_container">
                  <a
                    title="morhipo"
                    href="https://open.spotify.com/playlist/1YkTgjMWX3XwIu1JLUBq9q?si=PMFkHARzSdqniP28hH2Dgg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="lazyload"
                      src="static/playlist_pssag_ozamandans4b83d788ba0b64794a376006e3e774c72.gif"
                      srcSet="/Content/ImagesResp/spacer-vitrin.png"
                      data-srcset="https://img-morhipo.mncdn.com/Content/Banners/playlist_pssag_ozamandans4b83d788ba0b64794a376006e3e774c72.gif"
                      alt="morhipo"
                    />
                  </a>
                </div>
              </div>

              <div className="ps_sidebar-item">
                <div className="mh_promotion_container">
                  <a
                    title="9 Taksit Fırsatı"
                    href="http://malls-online.com/is-bankasi-kampanyasi/378/morhipo-ozel"
                    target="_parent"
                  >
                    <img
                      className="lazyload"
                      src="static/pssag527db17100f64550a9b40fefb7c5a9bd.jpg"
                      srcSet="/Content/ImagesResp/spacer-vitrin.png"
                      data-srcset="https://img-morhipo.mncdn.com/Content/Banners/pssag527db17100f64550a9b40fefb7c5a9bd.jpg"
                      alt="9 Taksit Fırsatı"
                    />
                  </a>
                </div>
              </div>

              <div className="ps_sidebar-item">
                <div className="mh_promotion_container">
                  <a
                    title="CardFinans"
                    href="http://malls-online.com/cardfinans-kampanyasi/474/morhipo-ozel"
                    target="_parent"
                  >
                    <img
                      className="lazyload"
                      src="static/psc5653e9a75e943e484b69febc64e797e.jpg"
                      srcSet="/Content/ImagesResp/spacer-vitrin.png"
                      data-srcset="https://img-morhipo.mncdn.com/Content/Banners/psc5653e9a75e943e484b69febc64e797e.jpg"
                      alt="CardFinans"
                    />
                  </a>
                </div>
              </div>

              <div className="ps_sidebar-item">
                <div className="mh_promotion_container">
                  <a
                    title="Mutfak Gereçleri"
                    href="http://malls-online.com/ev-yasam-kampanya-24?rType=1&amp;rKey=90672"
                    target="_parent"
                  >
                    <img
                      className="lazyload"
                      src="static/mutfak70d518f20d684f27b6328fc8221238d5.jpg"
                      srcSet="/Content/ImagesResp/spacer-vitrin.png"
                      data-srcset="https://img-morhipo.mncdn.com/Content/Banners/mutfak70d518f20d684f27b6328fc8221238d5.jpg"
                      alt="Mutfak Gereçleri"
                    />
                  </a>
                </div>
              </div>

              <div className="ps_sidebar-item">
                <div className="mh_promotion_container">
                  <a
                    title="Evde Cilt Bakımı"
                    href="http://malls-online.com/kadin-cilt-bakimi?rType=1&amp;rKey=90361"
                    target="_parent"
                  >
                    <img
                      className="lazyload"
                      src="static/ciltfc8a8a90070a4c7e82fdb1e27bacc489.jpg"
                      srcSet="/Content/ImagesResp/spacer-vitrin.png"
                      data-srcset="https://img-morhipo.mncdn.com/Content/Banners/ciltfc8a8a90070a4c7e82fdb1e27bacc489.jpg"
                      alt="Evde Cilt Bakımı"
                    />
                  </a>
                </div>
              </div>

              <div className="ps_sidebar-item">
                <div className="mh_promotion_container">
                  <a
                    title="Evde Eğlence"
                    href="http://malls-online.com/cocuk-kampanya-21?rType=1&amp;rKey=90233"
                    target="_parent"
                  >
                    <img
                      className="lazyload"
                      src="static/eğlence19afc21223aa43cc986fc82a8abcc1c5.jpg"
                      srcSet="/Content/ImagesResp/spacer-vitrin.png"
                      data-srcset="https://img-morhipo.mncdn.com/Content/Banners/eğlence19afc21223aa43cc986fc82a8abcc1c5.jpg"
                      alt="Evde Eğlence"
                    />
                  </a>
                </div>
              </div>

              <div className="ps_sidebar-item">
                <div className="mh_promotion_container">
                  <a
                    title="Designers Corner"
                    href="http://malls-online.com/designers-corner/572/morhipo-ozel"
                    target="_parent"
                  >
                    <img
                      className="lazyload"
                      src="static/corner849e818c93b44fb6bb2f4e0a1604eee6.jpg"
                      srcSet="/Content/ImagesResp/spacer-vitrin.png"
                      data-srcset="https://img-morhipo.mncdn.com/Content/Banners/corner849e818c93b44fb6bb2f4e0a1604eee6.jpg"
                      alt="Designers Corner"
                    />
                  </a>
                </div>
              </div>

              <div className="ps_sidebar-item">
                <div className="mh_promotion_container">
                  <a
                    title="Morpass"
                    href="http://malls-online.com/morpass"
                    target="_parent"
                  >
                    <img
                      className="lazyload"
                      src="static/morpassa2eab266ac2b4e00ac95cb36a66e493b.jpg"
                      srcSet="/Content/ImagesResp/spacer-vitrin.png"
                      data-srcset="https://img-morhipo.mncdn.com/Content/Banners/morpassa2eab266ac2b4e00ac95cb36a66e493b.jpg"
                      alt="Morpass"
                    />
                  </a>
                </div>
              </div>

              <div className="ps_sidebar-item">
                <div className="mh_promotion_container">
                  <a
                    title="Hopi"
                    href="http://malls-online.com/hopi-kampanyalari/486/morhipo-ozel"
                    target="_parent"
                  >
                    <img
                      className="lazyload"
                      src="static/hopi_indirffd05d5c1f824de5bb18f85a118e166f.jpg"
                      srcSet="/Content/ImagesResp/spacer-vitrin.png"
                      data-srcset="https://img-morhipo.mncdn.com/Content/Banners/hopi_indirffd05d5c1f824de5bb18f85a118e166f.jpg"
                      alt="Hopi"
                    />
                  </a>
                </div>
              </div>

              <div className="ps_sidebar-item">
                <div className="mh_promotion_container">
                  <a
                    title="Elbiseler"
                    href="http://malls-online.com/kadin-elbise"
                    target="_parent"
                  >
                    <img
                      className="lazyload"
                      src="static/elbiseler1658c7aa12b86407b8f6b0313c51e442c.jpg"
                      srcSet="/Content/ImagesResp/spacer-vitrin.png"
                      data-srcset="https://img-morhipo.mncdn.com/Content/Banners/elbiseler1658c7aa12b86407b8f6b0313c51e442c.jpg"
                      alt="Elbiseler"
                    />
                  </a>
                </div>
              </div>

              <div className="ps_sidebar-item">
                <div className="mh_promotion_container">
                  <a
                    title="Morhipo Home"
                    href="http://malls-online.com/ev-yasam"
                    target="_parent"
                  >
                    <img
                      className="lazyload"
                      src="static/home1b226ac9b0af4c8b91ff2bb98e440358.jpg"
                      srcSet="/Content/ImagesResp/spacer-vitrin.png"
                      data-srcset="https://img-morhipo.mncdn.com/Content/Banners/home1b226ac9b0af4c8b91ff2bb98e440358.jpg"
                      alt="Morhipo Home"
                    />
                  </a>
                </div>
              </div>

              <div className="ps_sidebar-item">
                <div className="mh_promotion_container">
                  <a
                    title="Morhipo Kozmetik"
                    href="http://malls-online.com/kozmetik/235/vitrin"
                    target="_parent"
                  >
                    <img
                      className="lazyload"
                      src="static/koz579e8568d6f14d23a43e4f7ec5b0817c.jpg"
                      srcSet="/Content/ImagesResp/spacer-vitrin.png"
                      data-srcset="https://img-morhipo.mncdn.com/Content/Banners/koz579e8568d6f14d23a43e4f7ec5b0817c.jpg"
                      alt="Morhipo Kozmetik"
                    />
                  </a>
                </div>
              </div>

              <div className="ps_sidebar-item">
                <div className="mh_promotion_container">
                  <a
                    title="Morhipo Kids"
                    href="http://malls-online.com/morhipo-kids"
                    target="_parent"
                  >
                    <img
                      className="lazyload"
                      src="static/kids2d1cf875802a4d7289babd84b45c9f35.jpg"
                      srcSet="/Content/ImagesResp/spacer-vitrin.png"
                      data-srcset="https://img-morhipo.mncdn.com/Content/Banners/kids2d1cf875802a4d7289babd84b45c9f35.jpg"
                      alt="Morhipo Kids"
                    />
                  </a>
                </div>
              </div>

              <div className="ps_sidebar-item">
                <div className="mh_promotion_container">
                  <a
                    title="Paylastik"
                    href="http://malls-online.com/paylastik/176/vitrin"
                  >
                    <img
                      className="lazyload"
                      src="static/payla8df9787a4fdf4fb9bafca0086cecc610.jpg"
                      srcSet="/Content/ImagesResp/spacer-vitrin.png"
                      data-srcset="https://img-morhipo.mncdn.com/Content/Banners/payla8df9787a4fdf4fb9bafca0086cecc610.jpg"
                      alt="Paylastik"
                    />
                  </a>
                </div>
              </div>

              <div className="ps_sidebar-item">
                <div className="mh_promotion_container">
                  <a
                    title="hopi"
                    href="http://malls-online.com/hopi-connect/485/morhipo-ozel"
                    target="_parent"
                  >
                    <img
                      className="lazyload"
                      src="static/hopic5ab4232cb204adc8db8442a23020cc5.jpg"
                      srcSet="/Content/ImagesResp/spacer-vitrin.png"
                      data-srcset="https://img-morhipo.mncdn.com/Content/Banners/hopic5ab4232cb204adc8db8442a23020cc5.jpg"
                      alt="hopi"
                    />
                  </a>
                </div>
              </div>

              <div className="ps_sidebar-item">
                <div className="mh_promotion_container">
                  <a
                    title="Kolay Iade"
                    href="http://malls-online.com/kolay-iade/599/morhipo-ozel"
                    target="_parent"
                  >
                    <img
                      className="lazyload"
                      src="static/iade2621337fd0bc2483ab7a100066e2955c4.jpg"
                      srcSet="/Content/ImagesResp/spacer-vitrin.png"
                      data-srcset="https://img-morhipo.mncdn.com/Content/Banners/iade2621337fd0bc2483ab7a100066e2955c4.jpg"
                      alt="Kolay Iade"
                    />
                  </a>
                </div>
              </div>

              <div className="ps_sidebar-item">
                <div className="mh_promotion_container">
                  <a
                    title="Mobil Uygulama"
                    href="http://malls-online.com/mobil-uygulamalar"
                    target="_parent"
                  >
                    <img
                      className="lazyload"
                      src="static/app29ae6eeba1bf14a21b757bacafd73ba1c.jpg"
                      srcSet="/Content/ImagesResp/spacer-vitrin.png"
                      data-srcset="https://img-morhipo.mncdn.com/Content/Banners/app29ae6eeba1bf14a21b757bacafd73ba1c.jpg"
                      alt="Mobil Uygulama"
                    />
                  </a>
                </div>
              </div>
            </div>
           */}

          </div>
          {/*    <div className="row">
            <div className="col-xs-12">
              <div className="section_title_seperator">
                <span className="sct-blocktitle">
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>
                      ONGOING CAMPAIGNS
                  </font>
                  </font>
                </span>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-u-s-polo-assn-pijama-ic-giyim-91076"
                  href="http://malls-online.com/kampanya/liste/91076/u-s-polo-assn-pijama-ic-giyim?rType=1&amp;rKey=91076"
                  target="_parent"
                  title="U.S. Polo Assn. Pijama &amp; İç Giyim"
                  data-campaignid="91076"
                  data-campaignintegrationcode="PSC20200513009"
                  data-position="75"
                  data-campaignname="75 TL Üzeri Kargo Bedava"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni38557c375648458a803d6e9f216b6ac2.jpg?q=95"
                      alt="U.S. Polo Assn. Pijama &amp; İç Giyim"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo76a22eae3ae148e8b15745a408a0be74.jpg"
                        alt="U.S. Polo Assn. Pijama &amp; İç Giyim"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml91076">5 Gün 21:38:48</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-aveda-91078"
                  href="http://malls-online.com/kampanya/liste/91078/aveda?rType=1&amp;rKey=91078"
                  target="_parent"
                  title="Aveda"
                  data-campaignid="91078"
                  data-campaignintegrationcode="PSC20200513010"
                  data-position="76"
                  data-campaignname="Aveda Artık Morhipo'da"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni3857d1847f2d4bd78ea4fff171bb20f5.jpg?q=95"
                      alt="Aveda"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo29ae2a287ff74fdab5338edf8bfb5d89.jpg"
                        alt="Aveda"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml91078">8 Gün 21:38:48</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-bade-natural-91092"
                  href="http://malls-online.com/kampanya/liste/91092/bade-natural?rType=1&amp;rKey=91092"
                  target="_parent"
                  title="Bade Natural"
                  data-campaignid="91092"
                  data-campaignintegrationcode="PSC20200514002"
                  data-position="77"
                  data-campaignname="Tüm Ürünlerde %50 ’ye Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni3892d689979b4d32be928a9162bea57c.jpg?q=95"
                      alt="Bade Natural"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo1a96fbe665c7482cb3f6ab494f6f5fd8.jpg"
                        alt="Bade Natural"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml91092">8 Gün 21:38:48</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-cacharel-taki-91082"
                  href="http://malls-online.com/kampanya/liste/91082/cacharel-taki?rType=1&amp;rKey=91082"
                  target="_parent"
                  title="Cacharel Takı"
                  data-campaignid="91082"
                  data-campaignintegrationcode="PSC20200513013"
                  data-position="78"
                  data-campaignname="Sepette %50 İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenid355404f278f4f22999ffbafa51b780d.jpg?q=95"
                      alt="Cacharel Takı"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logoaa3acd94debe4daabe30c21f5c2eee13.jpg"
                        alt="Cacharel Takı"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml91082">21:38:48</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-nomadic-republic-91079"
                  href="http://malls-online.com/nomadic-republic?rType=1&amp;rKey=91079"
                  target="_parent"
                  title="Nomadic Republic"
                  data-campaignid="91079"
                  data-campaignintegrationcode="PSC20200513011"
                  data-position="79"
                  data-campaignname="Nomadic Republic"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenibc60e26d522e4623b01d04a5da2f7feb.jpg?q=95"
                      alt="Nomadic Republic"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logode028f1e87f347ab87c58118047aafa7.jpg"
                        alt="Nomadic Republic"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml91079">1 Gün 21:38:48</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-vizon-taki-91072"
                  href="http://malls-online.com/aksesuar-kampanya-8?rType=1&amp;rKey=91072"
                  target="_parent"
                  title="Vizon Takı"
                  data-campaignid="91072"
                  data-campaignintegrationcode="PSC20200513006"
                  data-position="80"
                  data-campaignname="Sepette %15 İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni119abb505ab74f04b2c2517dccf71c87.jpg?q=95"
                      alt="Vizon Takı"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo49dcee9396184fb3a60ebdd677338005.jpg"
                        alt="Vizon Takı"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml91072">21:38:48</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-defacto-cocuk-91056"
                  href="http://malls-online.com/defacto-kampanya-8?ft=100:3120001745;1057:33289,33377,33324,33371&amp;rType=1&amp;rKey=91056"
                  target="_parent"
                  title="Defacto Çocuk"
                  data-campaignid="91056"
                  data-campaignintegrationcode="PSC20200512010"
                  data-position="81"
                  data-campaignname="Sepette Ekstra %50'ye Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni1c353a38d288436a80b57c9e825e5d9c.jpg?q=95"
                      alt="Defacto Çocuk"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo9f27f2ccaeae42c7942ae3198ea05298.jpg"
                        alt="Defacto Çocuk"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml91056">5 Gün 21:38:48</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-disney-60-a-varan-indirim-91044"
                  href="http://malls-online.com/kampanya/liste/91044/disney-60-a-varan-indirim?rType=1&amp;rKey=91044"
                  target="_parent"
                  title="Disney %60'a Varan İndirim"
                  data-campaignid="91044"
                  data-campaignintegrationcode="PSC20200512005"
                  data-position="82"
                  data-campaignname="%60'a Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni1232dc672e6e4bb393c4ddba0b1bf6a0.jpg?q=95"
                      alt="Disney %60'a Varan İndirim"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logoee771aaeee2740319085ec1223510873.jpg"
                        alt="Disney %60'a Varan İndirim"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml91044">4 Gün 21:38:48</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-by-leyal-sapka-91041"
                  href="http://malls-online.com/kampanya/liste/91041/by-leyal-sapka?rType=1&amp;rKey=91041"
                  target="_parent"
                  title="By Leyal Şapka "
                  data-campaignid="91041"
                  data-campaignintegrationcode="PSC20200512003"
                  data-position="83"
                  data-campaignname="Her Şey 7,99-12,99"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenic6e85395a38b4577bf04af36a3bb428f.jpg?q=95"
                      alt="By Leyal Şapka "
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logof4ee866ffc3341e09b245951eae60ce1.jpg"
                        alt="By Leyal Şapka "
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml91041">3 Gün 21:38:48</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-by-leyal-sepette-50-indirim-91040"
                  href="http://malls-online.com/kampanya/liste/91040/by-leyal-sepette-50-indirim?rType=1&amp;rKey=91040"
                  target="_parent"
                  title="By Leyal Sepette %50 İndirim"
                  data-campaignid="91040"
                  data-campaignintegrationcode="PSC20200512002"
                  data-position="84"
                  data-campaignname="Sepette %50 İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni734382844db545ae9ddeb4fa8057c705.jpg?q=95"
                      alt="By Leyal Sepette %50 İndirim"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo85b0ead63b7d40229db5c12378e2a410.jpg"
                        alt="By Leyal Sepette %50 İndirim"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml91040">3 Gün 21:38:48</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-people-by-fabrika-at-night-90848"
                  href="http://malls-online.com/ps-kampanya-10?rType=1&amp;rKey=90848"
                  target="_parent"
                  // // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_people-by-fabrika-at-night_PSC20200501009', 'eventAction': 'Tiklama'});"
                  title="People By Fabrika At Night"
                  data-campaignid="90848"
                  data-campaignintegrationcode="PSC20200501009"
                  data-position="85"
                  data-campaignname="Seçili ürünlerde sepette %20 İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenic103a0f2c46f457492d1f43bff68d585.jpg?q=95"
                      alt="People By Fabrika At Night"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logoe9c870dd5d4246919c4cb64175518cd0.jpg"
                        alt="People By Fabrika At Night"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml90848">21:38:48</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-katia-bony-90775"
                  href="http://malls-online.com/bony?rType=1&amp;rKey=90775"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_katia-bony_PSC20200428010', 'eventAction': 'Tiklama'});"
                  title="Katia &amp; Bony"
                  data-campaignid="90775"
                  data-campaignintegrationcode="PSC20200428010"
                  data-position="86"
                  data-campaignname="%50'ye Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni28b537f1bcf1440e953a4fd551955e02.jpg?q=95"
                      alt="Katia &amp; Bony"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo7a3bd8df6a314c1bbe78fc142a9ba370.jpg"
                        alt="Katia &amp; Bony"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml90775">4 Gün 21:38:48</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-anil-lingabooms-pijama-ve-ic-giyim-90209"
                  href="http://malls-online.com/ic-giyim-kampanya-1?rType=1&amp;rKey=90209"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_anil-lingabooms-pijama-ve-ic-giyim_PSC20200401023', 'eventAction': 'Tiklama'});"
                  title="Anıl &amp; Lingabooms Pijama Ve İç Giyim"
                  data-campaignid="90209"
                  data-campaignintegrationcode="PSC20200401023"
                  data-position="87"
                  data-campaignname="Anıl &amp; Lingabooms Pijama Ve İç Giyim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni7a012e3292524aa4ad5b986cc6022187.jpg?q=95"
                      alt="Anıl &amp; Lingabooms Pijama Ve İç Giyim"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo1cdea20617954176807a8a4d8ab0cd1c.jpg"
                        alt="Anıl &amp; Lingabooms Pijama Ve İç Giyim"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml90209">4 Gün 21:38:48</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-hays-pijama-ic-giyim-88199"
                  href="http://malls-online.com/hays?rType=1&amp;rKey=88199"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_hays-pijama-ic-giyim_PSC20200117003', 'eventAction': 'Tiklama'});"
                  title="Hays Pijama &amp; İç Giyim"
                  data-campaignid="88199"
                  data-campaignintegrationcode="PSC20200117003"
                  data-position="88"
                  data-campaignname="Hays Pijama &amp; İç Giyim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devameden_YENI2eae17a12dc8466498f81285bf236b20.jpg?q=95"
                      alt="Hays Pijama &amp; İç Giyim"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo9d3079a66eb243c49f0d07cf22b53e0c.jpg"
                        alt="Hays Pijama &amp; İç Giyim"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml88199">5 Gün 21:38:48</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-evde-pijama-keyfi-84285"
                  href="http://malls-online.com/ic-giyim-kampanya-2?rType=1&amp;rKey=84285"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_evde-pijama-keyfi_PSC20190827003', 'eventAction': 'Tiklama'});"
                  title="Evde Pijama Keyfi"
                  data-campaignid="84285"
                  data-campaignintegrationcode="PSC20190827003"
                  data-position="89"
                  data-campaignname="Evde Pijama Keyfi"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni35be6bcb50c645a9bd1cbcd1d1830b40.jpg?q=95"
                      alt="Evde Pijama Keyfi"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo156ec5cc330848abb307fc176fa23a30.jpg"
                        alt="Evde Pijama Keyfi"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml84285">4 Gün 21:38:48</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-black-noble-89735"
                  href="http://malls-online.com/erkek-giyim-kampanya-2?ft=100:3120005100&amp;rType=1&amp;rKey=89735"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_black-noble_PSC20200318017', 'eventAction': 'Tiklama'});"
                  title="Black Noble"
                  data-campaignid="89735"
                  data-campaignintegrationcode="PSC20200318017"
                  data-position="90"
                  data-campaignname="Sepette %50'ye Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenib5a391da0a0e441fb53a46ec0dbec6dc.jpg?q=95"
                      alt="Black Noble"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logoe6a2a0ca91a8403eb51aa5781e15b09a.jpg"
                        alt="Black Noble"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml89735">6 Gün 07:01:48</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-limonian-91039"
                  href="http://malls-online.com/kampanya/liste/91039/limonian?rType=1&amp;rKey=91039"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_limonian_PSC20200512001', 'eventAction': 'Tiklama'});"
                  title="Limonian"
                  data-campaignid="91039"
                  data-campaignintegrationcode="PSC20200512001"
                  data-position="91"
                  data-campaignname="Kore Kozmetikte %50’ye Varan İndirim 50 TL Üzeri Kargo Bedava"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni58c87e9b84a549abb6bcd120f029076c.jpg?q=95"
                      alt="Limonian"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo7895b22aa880443b8389fdb23bfec716.jpg"
                        alt="Limonian"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml91039">8 Gün 21:38:48</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-madmext-88265"
                  href="http://malls-online.com/spor-giyim-kampanya-25?ft=100:3120001205&amp;rType=1&amp;rKey=88265"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_madmext_PSC20200121009', 'eventAction': 'Tiklama'});"
                  title="Madmext"
                  data-campaignid="88265"
                  data-campaignintegrationcode="PSC20200121009"
                  data-position="92"
                  data-campaignname="Madmext | Sepette Ekstra %35 İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenie6c37a41f82349bb9cd018e88419e5ed.jpg?q=95"
                      alt="Madmext"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo9f4c9a5e369048f8b84165a79c433ef9.jpg"
                        alt="Madmext"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml88265">7 Gün 21:38:48</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-pierre-cardin-deri-90658"
                  href="http://malls-online.com/giyim-kampanya-5?rType=1&amp;rKey=90658"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_pierre-cardin-deri_PSC20200421016', 'eventAction': 'Tiklama'});"
                  title="Pierre Cardin Deri"
                  data-campaignid="90658"
                  data-campaignintegrationcode="PSC20200421016"
                  data-position="93"
                  data-campaignname="Pierre Cardin Deri - %40'a Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenid856ea4c0d2d4178b7d35a81ba018edb.jpg?q=95"
                      alt="Pierre Cardin Deri"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo52f13eaac56946218fd757340ca357ed.jpg"
                        alt="Pierre Cardin Deri"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml90658">5 Gün 21:38:48</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-kutahya-porselen-88999"
                  href="http://malls-online.com/kutahya-porselen?rType=1&amp;rKey=88999"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_kutahya-porselen_PSC20200221006', 'eventAction': 'Tiklama'});"
                  title="Kütahya Porselen"
                  data-campaignid="88999"
                  data-campaignintegrationcode="PSC20200221006"
                  data-position="94"
                  data-campaignname="%40'a Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni7cc93ce1709e40b0859815614f058e08.jpg?q=95"
                      alt="Kütahya Porselen"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logoc47b6f9efab14f829245f2c54feeca0c.jpg"
                        alt="Kütahya Porselen"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml88999">21:38:48</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-ayyildiz-ic-giyim-pijama-89787"
                  href="http://malls-online.com/kadin-giyim-kampanya-21?rType=1&amp;rKey=89787"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_ayyildiz-ic-giyim-pijama_PSC20200319014', 'eventAction': 'Tiklama'});"
                  title="Ayyıldız İç Giyim &amp; Pijama"
                  data-campaignid="89787"
                  data-campaignintegrationcode="PSC20200319014"
                  data-position="95"
                  data-campaignname="%70'e Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenid4ab3e0ccfe54c299f9b77d23e6099c2.jpg?q=95"
                      alt="Ayyıldız İç Giyim &amp; Pijama"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logocebb27c6f20c491dab6d7e3993b16d37.jpg"
                        alt="Ayyıldız İç Giyim &amp; Pijama"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml89787">4 Gün 21:38:48</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-lacoste-scuderia-ferrari-91067"
                  href="http://malls-online.com/kampanya/liste/91067/lacoste-scuderia-ferrari?rType=1&amp;rKey=91067"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_lacoste-scuderia-ferrari_PSC20200513003', 'eventAction': 'Tiklama'});"
                  title="Lacoste – Scuderia Ferrari"
                  data-campaignid="91067"
                  data-campaignintegrationcode="PSC20200513003"
                  data-position="96"
                  data-campaignname="%70'e Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenif1c2d746ba4e43a7b030c242b19c7fdf.jpg?q=95"
                      alt="Lacoste – Scuderia Ferrari"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logobace7231ddf14781b0b22cbbb4e7292b.jpg"
                        alt="Lacoste – Scuderia Ferrari"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml91067">21:38:48</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-hummel-cocuk-91043"
                  href="http://malls-online.com/cocuk-kampanya-9?rType=1&amp;rKey=91043"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_hummel-cocuk_PSC20200512004', 'eventAction': 'Tiklama'});"
                  title="Hummel Çocuk"
                  data-campaignid="91043"
                  data-campaignintegrationcode="PSC20200512004"
                  data-position="97"
                  data-campaignname="120 TL ve Üzeri Sepette %25"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni0848cfe5c42e43349e7fc51c74221bb3.jpg?q=95"
                      alt="Hummel Çocuk"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo7894db7d97864f368538675104956e87.jpg"
                        alt="Hummel Çocuk"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml91043">3 Gün 21:38:48</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-mcl-90488"
                  href="http://malls-online.com/erkek-giyim-kampanya-9?rType=1&amp;rKey=90488"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_mcl_PSC20200415005', 'eventAction': 'Tiklama'});"
                  title="MCL"
                  data-campaignid="90488"
                  data-campaignintegrationcode="PSC20200415005"
                  data-position="98"
                  data-campaignname="Tüm Ürünlerde %30 İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeniace01f0eb0874ec0af49634ec8201a62.jpg?q=95"
                      alt="MCL"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo9dcd5fb84bf9496ea4360fe6d1c73e67.jpg"
                        alt="MCL"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml90488">5 Gün 21:38:48</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-xint-90487"
                  href="http://malls-online.com/ps-kampanya-67?rType=1&amp;rKey=90487"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_xint_PSC20200415004', 'eventAction': 'Tiklama'});"
                  title="Xint"
                  data-campaignid="90487"
                  data-campaignintegrationcode="PSC20200415004"
                  data-position="99"
                  data-campaignname="Tüm Ürünlerde %20 İndirim "
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeniae5f0d7bc84142639e399b63c5834200.jpg?q=95"
                      alt="Xint"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com"
                        alt="Xint"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml90487">5 Gün 21:38:48</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-limon-company-yeni-urunlerle-90277"
                  href="http://malls-online.com/ps-kampanya-64?rType=1&amp;rKey=90277"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_limon-company-yeni-urunlerle_PSC20200406009', 'eventAction': 'Tiklama'});"
                  title="Limon Company  Yeni Ürünlerle "
                  data-campaignid="90277"
                  data-campaignintegrationcode="PSC20200406009"
                  data-position="100"
                  data-campaignname="%70’e Varan+ Seçili Ürünlerde Sepette %20 İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenie3c3d274d5b747eea8516ff862123d80.jpg?q=95"
                      alt="Limon Company  Yeni Ürünlerle "
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logob63d2145aa1f40e8b3db90ed3cbb9231.jpg"
                        alt="Limon Company  Yeni Ürünlerle "
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml90277">15:37:48</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-ayyildiz-beachwear-89786"
                  href="http://malls-online.com/kadin-giyim-kampanya-20?rType=1&amp;rKey=89786"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_ayyildiz-beachwear_PSC20200319013', 'eventAction': 'Tiklama'});"
                  title="Ayyıldız Beachwear"
                  data-campaignid="89786"
                  data-campaignintegrationcode="PSC20200319013"
                  data-position="101"
                  data-campaignname="%70'e Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni9706fee2ab8a421f9d6ead7f90fd0c53.jpg?q=95"
                      alt="Ayyıldız Beachwear"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logod84e997182464e0da84bf72036ecc7a1.jpg"
                        alt="Ayyıldız Beachwear"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml89786">4 Gün 21:38:48</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-loya-nbb-88035"
                  href="http://malls-online.com/tum-urunler?ft=1059:42793,47476&amp;rType=1&amp;rKey=88035"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_loya-nbb_PSC20200110002', 'eventAction': 'Tiklama'});"
                  title="Loya &amp; NBB"
                  data-campaignid="88035"
                  data-campaignintegrationcode="PSC20200110002"
                  data-position="102"
                  data-campaignname="Loya &amp; NBB"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenibcaef9444579443794a2d4b7fda6774d.jpg?q=95"
                      alt="Loya &amp; NBB"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logodefa08fa5d9c4dce8eb574bdf6bb3264.jpg"
                        alt="Loya &amp; NBB"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml88035">4 Gün 21:38:48</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-reflections-87704"
                  href="http://malls-online.com/reflections?rType=1&amp;rKey=87704"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_reflections_PSC20191225014', 'eventAction': 'Tiklama'});"
                  title="Reflections"
                  data-campaignid="87704"
                  data-campaignintegrationcode="PSC20191225014"
                  data-position="103"
                  data-campaignname="Reflections"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni6269f117c0974f5f9b768aa4aa85f13e.jpg?q=95"
                      alt="Reflections"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo79024bf8cc39492caf57c57c6b3cc8dd.jpg"
                        alt="Reflections"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml87704">4 Gün 21:38:48</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-corap-karnavali-85145"
                  href="http://malls-online.com/tum-urunler?ft=1064%3A109538%2C109540%2C32525%2C78325%2C36305%2C39415%2C40657&amp;sr=1&amp;rType=1&amp;rKey=85145"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_corap-karnavali_PSC20190927001', 'eventAction': 'Tiklama'});"
                  title="Çorap Karnavalı"
                  data-campaignid="85145"
                  data-campaignintegrationcode="PSC20190927001"
                  data-position="104"
                  data-campaignname="Çorap Karnavalı"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devameden_YENIf41c1f638b16404d8c148c7e0821f88b.jpg?q=95"
                      alt="Çorap Karnavalı"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo708e269625374b008842c9575ba12923.jpg"
                        alt="Çorap Karnavalı"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml85145">4 Gün 23:48:48</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-erkeklere-ozel-ic-giyim-pijama-84287"
                  href="http://malls-online.com/giyim-kampanya-49?ft=1057:32418&amp;rType=1&amp;rKey=84287"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_erkeklere-ozel-ic-giyim-pijama_PSC20190827005', 'eventAction': 'Tiklama'});"
                  title="Erkeklere Özel İç Giyim &amp; Pijama"
                  data-campaignid="84287"
                  data-campaignintegrationcode="PSC20190827005"
                  data-position="105"
                  data-campaignname="Erkeklere Özel İç Giyim &amp; Pijama"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni4f93040b33a3440e8988a3c5e889221c.jpg?q=95"
                      alt="Erkeklere Özel İç Giyim &amp; Pijama"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo7bc860d3541848b3ab26fe4cd96fd6b0.jpg"
                        alt="Erkeklere Özel İç Giyim &amp; Pijama"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml84287">4 Gün 21:38:48</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-ic-giyimin-vazgecilmezleri-84286"
                  href="http://malls-online.com/kadin-ic-ev-giyim?ft=1064%3A32514%2C32521&amp;rType=1&amp;rKey=84286"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_ic-giyimin-vazgecilmezleri_PSC20190827004', 'eventAction': 'Tiklama'});"
                  title="İç Giyimin Vazgeçilmezleri"
                  data-campaignid="84286"
                  data-campaignintegrationcode="PSC20190827004"
                  data-position="106"
                  data-campaignname="İç Giyimin Vazgeçilmezleri"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni08f9a98d43784426ac845c7409af2c4d.jpg?q=95"
                      alt="İç Giyimin Vazgeçilmezleri"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logob68ada97de2a4c70b373aa15403cf8cf.jpg"
                        alt="İç Giyimin Vazgeçilmezleri"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml84286">4 Gün 21:38:48</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-the-mia-71078"
                  href="http://malls-online.com/the-mia?rType=1&amp;rKey=71078"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_the-mia_PSC20180502009', 'eventAction': 'Tiklama'});"
                  title="The Mia"
                  data-campaignid="71078"
                  data-campaignintegrationcode="PSC20180502009"
                  data-position="107"
                  data-campaignname="%70'e Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenif4e27bf783eb41608ebacefd0f7623fb.jpg?q=95"
                      alt="The Mia"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo21aac696a4fe4b998769ce4acb54295d.jpg"
                        alt="The Mia"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml71078">21:38:48</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-spor-kombinim-tisort-jean-sneaker-90267"
                  href="http://malls-online.com/boyner-kampanya-7?rType=1&amp;rKey=90267"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_spor-kombinim-tisort-jean-sneaker_PSC20200406008', 'eventAction': 'Tiklama'});"
                  title="Spor Kombinim Tişört-Jean &amp; Sneaker"
                  data-campaignid="90267"
                  data-campaignintegrationcode="PSC20200406008"
                  data-position="108"
                  data-campaignname="%70 ‘e  Varan İndirim +  Seçili Ürünlerde Sepette Extra %25 İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni98addf0edfac4489827f8fdc23133a31.jpg?q=95"
                      alt="Spor Kombinim Tişört-Jean &amp; Sneaker"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo377808266451425185c277c6077150ca.jpg"
                        alt="Spor Kombinim Tişört-Jean &amp; Sneaker"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml90267">15:37:48</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-iyi-isler-dukkan-da-canta-firsatlari-89031"
                  href="http://malls-online.com/ozel-marka-kampanya-12?rType=1&amp;rKey=89031"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_iyi-isler-dukkan-da-canta-firsatlari_PSC20200221021', 'eventAction': 'Tiklama'});"
                  title="İyi İşler Dükkan'da Çanta Fırsatları"
                  data-campaignid="89031"
                  data-campaignintegrationcode="PSC20200221021"
                  data-position="109"
                  data-campaignname="Özel Ürünler"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeniff128c76adc6495aa8f12b890e1bf58d.jpg?q=95"
                      alt="İyi İşler Dükkan'da Çanta Fırsatları"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo89db94817f704ac88813d40c501ac02f.jpg"
                        alt="İyi İşler Dükkan'da Çanta Fırsatları"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml89031">4 Gün 21:38:48</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-iyi-isler-dukkan-84923"
                  href="http://malls-online.com/iyi-isler?rType=1&amp;rKey=84923"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_iyi-isler-dukkan_PSC20190918017', 'eventAction': 'Tiklama'});"
                  title="İYİ İŞLER DÜKKAN"
                  data-campaignid="84923"
                  data-campaignintegrationcode="PSC20190918017"
                  data-position="110"
                  data-campaignname="İYİ İŞLER DÜKKAN"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni6507b5120e22422b981b580688e88dbb.jpg?q=95"
                      alt="İYİ İŞLER DÜKKAN"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo1c9cf350186a4f53a6cc04120c8a3c86.jpg"
                        alt="İYİ İŞLER DÜKKAN"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml84923">4 Gün 21:38:48</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-emziren-annelere-ozel-urunler-89120"
                  href="http://malls-online.com/ozel-marka-kampanya-13?rType=1&amp;rKey=89120"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_emziren-annelere-ozel-urunler_PSC20200226018', 'eventAction': 'Tiklama'});"
                  title="Emziren Annelere Özel Ürünler"
                  data-campaignid="89120"
                  data-campaignintegrationcode="PSC20200226018"
                  data-position="111"
                  data-campaignname="%75'e Varan İndirimler"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenia5f18b6ca9ed416d9d2a779c8e247225.jpg?q=95"
                      alt="Emziren Annelere Özel Ürünler"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo303af1c253b14db699f0493b55749a1f.jpg"
                        alt="Emziren Annelere Özel Ürünler"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml89120">4 Gün 21:38:48</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-levi-s--90152"
                  href="http://malls-online.com/levis?rType=1&amp;rKey=90152"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_levi-s-_PSC20200401004', 'eventAction': 'Tiklama'});"
                  title=" Levi's®"
                  data-campaignid="90152"
                  data-campaignintegrationcode="PSC20200401004"
                  data-position="112"
                  data-campaignname=" Levi's® | %70'e Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devameden_YENI78ec2131ce674e9b916e81db02c04e77.jpg?q=95"
                      alt=" Levi's®"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo4a8c2ac10a8f4080840beeac727a43e9.jpg"
                        alt=" Levi's®"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml90152">7 Gün 21:38:48</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-adidas-reebok-88778"
                  href="http://malls-online.com/emekspor?ft=100:3120005227&amp;rType=1&amp;rKey=88778"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_adidas-reebok_PSC20200211020', 'eventAction': 'Tiklama'});"
                  title="adidas &amp; Reebok"
                  data-campaignid="88778"
                  data-campaignintegrationcode="PSC20200211020"
                  data-position="113"
                  data-campaignname="%50'ye Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni60d19a341753446aa5b8f8eeebda10d8.jpg?q=95"
                      alt="adidas &amp; Reebok"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo124d3ae499c64e40b84214214a7a485f.jpg"
                        alt="adidas &amp; Reebok"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml88778">21:38:48</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-paylastik-87993"
                  href="http://malls-online.com/ozel-marka-kampanya-10?rType=1&amp;rKey=87993"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_paylastik_PSC20200117001', 'eventAction': 'Tiklama'});"
                  title="PaylaşTIK"
                  data-campaignid="87993"
                  data-campaignintegrationcode="PSC20200117001"
                  data-position="114"
                  data-campaignname="Özel Ürünler"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenid9ffe0306e5a458aba7dd2999cb82c05.jpg?q=95"
                      alt="PaylaşTIK"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logob5552556bca44cde9298647bef021789.jpg"
                        alt="PaylaşTIK"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml87993">4 Gün 21:38:48</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-defacto-87132"
                  href="http://malls-online.com/defacto?rType=1&amp;rKey=87132"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_defacto_PSC20191130009', 'eventAction': 'Tiklama'});"
                  title="DeFacto"
                  data-campaignid="87132"
                  data-campaignintegrationcode="PSC20191130009"
                  data-position="115"
                  data-campaignname="DeFacto"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni9c4bec1ad7004226bf94779ed196115d.jpg?q=95"
                      alt="DeFacto"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo0f78207978db41daa2f14dc399fc4a2d.jpg"
                        alt="DeFacto"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml87132">4 Gün 21:38:48</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-columbia-marka-88688"
                  href="http://malls-online.com/columbia?rType=1&amp;rKey=88688"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_columbia-marka_PSC20200207010', 'eventAction': 'Tiklama'});"
                  title="Columbia Marka"
                  data-campaignid="88688"
                  data-campaignintegrationcode="PSC20200207010"
                  data-position="116"
                  data-campaignname="Columbia | %50'ye Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenid319c15d56034250bb5c7a7dbb7c7d11.jpg?q=95"
                      alt="Columbia Marka"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logoc222c25a76f0476dab50ff71e6cb2fb8.jpg"
                        alt="Columbia Marka"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml88688">21:38:48</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-l-oreal-garnier-maybelline-88100"
                  href="http://malls-online.com/kozmetik-kampanya-1?rType=1&amp;rKey=88100"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_l-oreal-garnier-maybelline_PSC20200114004', 'eventAction': 'Tiklama'});"
                  title="L'Oréal - Garnier - Maybelline"
                  data-campaignid="88100"
                  data-campaignintegrationcode="PSC20200114004"
                  data-position="117"
                  data-campaignname=" 60 TL Üzeri Kargo Bedava"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenib583eb26b1164d539f55b7bd636e8425.jpg?q=95"
                      alt="L'Oréal - Garnier - Maybelline"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logoc170f6cdbe9447c8801d2264cfa79a71.jpg"
                        alt="L'Oréal - Garnier - Maybelline"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml88100">1 Gün 21:38:48</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-puma-85615"
                  href="http://malls-online.com/puma?rType=1&amp;rKey=85615"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_puma_PSC20191012011', 'eventAction': 'Tiklama'});"
                  title="Puma"
                  data-campaignid="85615"
                  data-campaignintegrationcode="PSC20191012011"
                  data-position="118"
                  data-campaignname="%50'ye Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devameden_YENI4b5691587fd14bff96a4332bd4cee977.jpg?q=95"
                      alt="Puma"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo0d2262f19c2846a1aaf82c304b33d4a7.jpg"
                        alt="Puma"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml85615">21:38:48</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-mavi-85462"
                  href="http://malls-online.com/mavi-outlet?ft=100:3120000075&amp;rType=1&amp;rKey=85462"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_mavi_PSC20191008012', 'eventAction': 'Tiklama'});"
                  title="Mavi"
                  data-campaignid="85462"
                  data-campaignintegrationcode="PSC20191008012"
                  data-position="119"
                  data-campaignname="Özel İndirimler"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenice8dc8723ac644c7ae8f0ec34a919b28.jpg?q=95"
                      alt="Mavi"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logod42b0440c5fd46599e5769255336cfd5.jpg"
                        alt="Mavi"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml85462">1 Gün 15:37:48</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-the-north-face-89071"
                  href="http://malls-online.com/spor-giyim-kampanya-28?ft=100:3120004770&amp;rType=1&amp;rKey=89071"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_the-north-face_PSC20200225006', 'eventAction': 'Tiklama'});"
                  title="The North Face"
                  data-campaignid="89071"
                  data-campaignintegrationcode="PSC20200225006"
                  data-position="120"
                  data-campaignname=" Yeni Sezon"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenifbeb1d4028174dc9ac1e04c37e208d87.jpg?q=95"
                      alt="The North Face"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logoe748c647806847c48784603a4031f1bf.jpg"
                        alt="The North Face"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml89071">21:38:48</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-cep-telefonunda-cok-satanlar-86643"
                  href="http://malls-online.com/cep-telefonu?rType=1&amp;rKey=86643"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_cep-telefonunda-cok-satanlar_PSC20191115033', 'eventAction': 'Tiklama'});"
                  title="Cep Telefonunda Çok Satanlar"
                  data-campaignid="86643"
                  data-campaignintegrationcode="PSC20191115033"
                  data-position="121"
                  data-campaignname="%40'a Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenib3740fd0386545eca807caf92334af37.jpg?q=95"
                      alt="Cep Telefonunda Çok Satanlar"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo362a7f7ebf634a2e94a0fe8921573a9c.jpg"
                        alt="Cep Telefonunda Çok Satanlar"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml86643">21:38:48</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-stilini-sec-ev-keyfine-enerji-kat-90266"
                  href="http://malls-online.com/boyner-kampanya-8?rType=1&amp;rKey=90266"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_stilini-sec-ev-keyfine-enerji-kat_PSC20200405002', 'eventAction': 'Tiklama'});"
                  title="Stilini Seç  Ev Keyfine Enerji Kat "
                  data-campaignid="90266"
                  data-campaignintegrationcode="PSC20200405002"
                  data-position="122"
                  data-campaignname="%70‘e  Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni08620014896d45c494567c0a0311383e.jpg?q=95"
                      alt="Stilini Seç  Ev Keyfine Enerji Kat "
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo3d5e36c86e02489e84d71feffdaa9acb.jpg"
                        alt="Stilini Seç  Ev Keyfine Enerji Kat "
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml90266">3 Gün 15:37:48</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-boyner-yeni-sezon-50-e-varan-indirim-90243"
                  href="http://malls-online.com/boyner-361?rType=1&amp;rKey=90243"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_boyner-yeni-sezon-50-e-varan-indirim_PSC20200404002', 'eventAction': 'Tiklama'});"
                  title="Boyner Yeni Sezon- %50‘e Varan İndirim"
                  data-campaignid="90243"
                  data-campaignintegrationcode="PSC20200404002"
                  data-position="123"
                  data-campaignname="Boyner Yeni Sezon- %50‘e Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenic0b0341d22904dbeb26b58269da2ef8c.jpg?q=95"
                      alt="Boyner Yeni Sezon- %50‘e Varan İndirim"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo30d730b8a70543dfb86818355c4e9f1a.jpg"
                        alt="Boyner Yeni Sezon- %50‘e Varan İndirim"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml90243">3 Gün 15:37:48</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-boyner-de-yeni-sezon-2020ss--89572"
                  href="http://malls-online.com/boyner-kampanya-5?rType=1&amp;rKey=89572"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_boyner-de-yeni-sezon-2020ss-_PSC20200313007', 'eventAction': 'Tiklama'});"
                  title="Boyner'de Yeni Sezon(2020SS)"
                  data-campaignid="89572"
                  data-campaignintegrationcode="PSC20200313007"
                  data-position="124"
                  data-campaignname="Boyner'de Yeni Sezon(2020SS)"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni90c1daa98aa246c3b2eef7a88d2bb792.jpg?q=95"
                      alt="Boyner'de Yeni Sezon(2020SS)"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logodb459bb4e2374373b2b501ffc8c4a6d1.jpg"
                        alt="Boyner'de Yeni Sezon(2020SS)"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml89572">3 Gün 15:37:48</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-bebegim-icin-her-sey-89140"
                  href="http://malls-online.com/boyner-kampanya-6?rType=1&amp;rKey=89140"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_bebegim-icin-her-sey_PSC20200227004', 'eventAction': 'Tiklama'});"
                  title="Bebeğim İçin Her şey"
                  data-campaignid="89140"
                  data-campaignintegrationcode="PSC20200227004"
                  data-position="125"
                  data-campaignname="Bebeğim İçin Her şey"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenib94d145be2c24121a9562c1de83f4752.jpg?q=95"
                      alt="Bebeğim İçin Her şey"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo0a5268a7fd57479494152913aabd97e5.jpg"
                        alt="Bebeğim İçin Her şey"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml89140">3 Gün 15:37:48</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-cocuklara-ozel-urunler-88593"
                  href="http://malls-online.com/iyi-isler-kampanya-1?rType=1&amp;rKey=88593"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_cocuklara-ozel-urunler_PSC20200131015', 'eventAction': 'Tiklama'});"
                  title="Çocuklara Özel Ürünler"
                  data-campaignid="88593"
                  data-campaignintegrationcode="PSC20200131015"
                  data-position="126"
                  data-campaignname="Çocuklara Özel Ürünler"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni5e9d8682d321403c8cb63b73a7858844.jpg?q=95"
                      alt="Çocuklara Özel Ürünler"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logof7d341ddeeb547e2bbab00f7f0ea5546.jpg"
                        alt="Çocuklara Özel Ürünler"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml88593">4 Gün 21:38:48</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-national-geographic-88406"
                  href="http://malls-online.com/national-geographic?rType=1&amp;rKey=88406"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_national-geographic_PSC20200128002', 'eventAction': 'Tiklama'});"
                  title="National Geographic"
                  data-campaignid="88406"
                  data-campaignintegrationcode="PSC20200128002"
                  data-position="127"
                  data-campaignname="National Geographic %60'a varan indirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenic92bb156796c45c1b6cd941d8d9b56a6.jpg?q=95"
                      alt="National Geographic"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logobc501fd8c1814064b7b274b195499f9b.jpg"
                        alt="National Geographic"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml88406">3 Gün 15:37:48</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-boyner-maximum-99-99-tl-88240"
                  href="http://malls-online.com/boyner-10840?pr=0%2C100&amp;rType=1&amp;rKey=88240"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_boyner-maximum-99-99-tl_PSC20200118011', 'eventAction': 'Tiklama'});"
                  title="Boyner Maximum 99,99 TL"
                  data-campaignid="88240"
                  data-campaignintegrationcode="PSC20200118011"
                  data-position="128"
                  data-campaignname="Boyner Maximum 99,99 TL"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni6a0f9945f0e54e2286ea30abed70e3c1.jpg?q=95"
                      alt="Boyner Maximum 99,99 TL"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo178fa0c3d91149129ccd769468e053f7.jpg"
                        alt="Boyner Maximum 99,99 TL"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml88240">3 Gün 15:37:48</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-boyner-maximum-49-99-tl-88081"
                  href="http://malls-online.com/boyner-10840?pr=0%2C50&amp;rType=1&amp;rKey=88081"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_boyner-maximum-49-99-tl_PSC20200111012', 'eventAction': 'Tiklama'});"
                  title="Boyner Maxımum  49,99  TL"
                  data-campaignid="88081"
                  data-campaignintegrationcode="PSC20200111012"
                  data-position="129"
                  data-campaignname="Boyner Maxımum  49,99  TL"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni691f900d798a4e23a666b2b474b044ee.jpg?q=95"
                      alt="Boyner Maxımum  49,99  TL"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logoe3478e65623c4df887d19a769cf5cf86.jpg"
                        alt="Boyner Maxımum  49,99  TL"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml88081">3 Gün 15:37:48</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-tek-fiyat-19-99-29-99-39-99-tl-88080"
                  href="http://malls-online.com/boyner-10840?pr=0%2C40&amp;rType=1&amp;rKey=88080"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_tek-fiyat-19-99-29-99-39-99-tl_PSC20200111011', 'eventAction': 'Tiklama'});"
                  title="Tek fiyat 19,99-29,99-39,99 TL"
                  data-campaignid="88080"
                  data-campaignintegrationcode="PSC20200111011"
                  data-position="130"
                  data-campaignname="Tek fiyat 19,99-29,99-39,99 TL"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni4fe94fc8f0c348059f371c682d6714c1.jpg?q=95"
                      alt="Tek fiyat 19,99-29,99-39,99 TL"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo519daa47b5be428a9a653c40691ad8fd.jpg"
                        alt="Tek fiyat 19,99-29,99-39,99 TL"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml88080">3 Gün 15:37:48</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-boyner-maximum-19-99-tl-88079"
                  href="http://malls-online.com/boyner-10840?pr=0%2C20&amp;rType=1&amp;rKey=88079"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_boyner-maximum-19-99-tl_PSC20200111010', 'eventAction': 'Tiklama'});"
                  title="Boyner Maxımum 19,99 TL"
                  data-campaignid="88079"
                  data-campaignintegrationcode="PSC20200111010"
                  data-position="131"
                  data-campaignname="Boyner Maxımum 19,99 TL"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni893ad6474cb74c8f8ab3dc594ba0e64f.jpg?q=95"
                      alt="Boyner Maxımum 19,99 TL"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logoab94333cdc74440bb05a723964bff8d5.jpg"
                        alt="Boyner Maxımum 19,99 TL"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml88079">3 Gün 15:37:48</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-beymen-studio-87441"
                  href="http://malls-online.com/beymen-studio?rType=1&amp;rKey=87441"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_beymen-studio_PSC20191214015', 'eventAction': 'Tiklama'});"
                  title="Beymen Studio"
                  data-campaignid="87441"
                  data-campaignintegrationcode="PSC20191214015"
                  data-position="132"
                  data-campaignname="Beymen Studio"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni6e6b5581fd7f4824a861a0a56dbb0c6e.jpg?q=95"
                      alt="Beymen Studio"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logodd536f0561c446d39139476f263f3579.jpg"
                        alt="Beymen Studio"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml87441">3 Gün 15:37:48</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-cocuk-oyun-zamani-86461"
                  href="http://malls-online.com/ozel-marka-kampanya-3?rType=1&amp;rKey=86461"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_cocuk-oyun-zamani_PSC20191109036', 'eventAction': 'Tiklama'});"
                  title="Çocuk Oyun Zamanı"
                  data-campaignid="86461"
                  data-campaignintegrationcode="PSC20191109036"
                  data-position="133"
                  data-campaignname="Çocuk Oyun Zamanı"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devame107111db8e34ae19a446419054be85d.jpg?q=95"
                      alt="Çocuk Oyun Zamanı"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logof26fb5f3bf3b43db88b647794086d419.jpg"
                        alt="Çocuk Oyun Zamanı"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml86461">4 Gün 21:38:48</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-nemesis-85847"
                  href="http://malls-online.com/nemesis-shoes?rType=1&amp;rKey=85847"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_nemesis_PSC20191023007', 'eventAction': 'Tiklama'});"
                  title="Nemesis"
                  data-campaignid="85847"
                  data-campaignintegrationcode="PSC20191023007"
                  data-position="134"
                  data-campaignname="Nemesis"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devameden_YENI5fef2fb256e449769292517f27c3e1c8.jpg?q=95"
                      alt="Nemesis"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logoc921d3d9760f4c33916d0aa94ac06ae4.jpg"
                        alt="Nemesis"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml85847">4 Gün 21:38:48</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-boyner-ayakkabi-80846"
                  href="http://malls-online.com/boyner-10830?rType=1&amp;rKey=80846"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_boyner-ayakkabi_PSC20190325008', 'eventAction': 'Tiklama'});"
                  title="Boyner Ayakkabı"
                  data-campaignid="80846"
                  data-campaignintegrationcode="PSC20190325008"
                  data-position="135"
                  data-campaignname="Boyner Ayakkabı %80'e varan"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni506ca460ddca402ba478636f9cfd90cb.jpg?q=95"
                      alt="Boyner Ayakkabı"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logobcc00f9e99884724a8cd319a08991b04.jpg"
                        alt="Boyner Ayakkabı"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml80846">3 Gün 15:37:48</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-boyner-cocuk-80821"
                  href="http://malls-online.com/boyner-10829?rType=1&amp;rKey=80821"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_boyner-cocuk_PSC20190329007', 'eventAction': 'Tiklama'});"
                  title="Boyner Çocuk"
                  data-campaignid="80821"
                  data-campaignintegrationcode="PSC20190329007"
                  data-position="136"
                  data-campaignname="Boyner Çocuk"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenib384f31727a04ed69186b07b1566b3bd.jpg?q=95"
                      alt="Boyner Çocuk"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/boyner_cocuk0ee83a44954a4c94ab1e7c01bb944c6a.jpg"
                        alt="Boyner Çocuk"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml80821">3 Gün 15:37:48</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-t-box-80818"
                  href="http://malls-online.com/t-box?rType=1&amp;rKey=80818"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_t-box_PSC20190329005', 'eventAction': 'Tiklama'});"
                  title="T-Box"
                  data-campaignid="80818"
                  data-campaignintegrationcode="PSC20190329005"
                  data-position="137"
                  data-campaignname="T-Box %80'e varan"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenifb63aa0679344505a965e09228d01f50.jpg?q=95"
                      alt="T-Box"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo8cd8bad4911a4223b52a403e09bb75c7.jpg"
                        alt="T-Box"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml80818">3 Gün 15:37:48</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-house-of-camelia-black-pepper-80812"
                  href="http://malls-online.com/tum-urunler?ft=1059%3A133251%2C136189&amp;rType=1&amp;rKey=80812"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_house-of-camelia-black-pepper_PSC20190329003', 'eventAction': 'Tiklama'});"
                  title="House of Camelia &amp; Black Pepper"
                  data-campaignid="80812"
                  data-campaignintegrationcode="PSC20190329003"
                  data-position="138"
                  data-campaignname="House of Camelia &amp; Black Pepper %80'e varan"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni77f6a1ed44a84769a07fa4ff692f836d.jpg?q=95"
                      alt="House of Camelia &amp; Black Pepper"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logocc587830895c48d19151b4c295a18f5a.jpg"
                        alt="House of Camelia &amp; Black Pepper"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml80812">3 Gün 15:37:48</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-boyner-outlet-79606"
                  href="http://malls-online.com/boyner-outlet?rType=1&amp;rKey=79606"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_boyner-outlet_PSC20190209005', 'eventAction': 'Tiklama'});"
                  title="Boyner Outlet"
                  data-campaignid="79606"
                  data-campaignintegrationcode="PSC20190209005"
                  data-position="139"
                  data-campaignname="Boyner Outlet - %80'e varan"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenif57f18167dec4b419b9d928d7c36bea2.jpg?q=95"
                      alt="Boyner Outlet"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logof66586f00f3b44b0866f506e61e9d12e.jpg"
                        alt="Boyner Outlet"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml79606">3 Gün 15:37:48</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-boyner-yeni-sezon-79403"
                  href="http://malls-online.com/boyner-yeni-sezon?rType=1&amp;rKey=79403"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_boyner-yeni-sezon_PSC20190204002', 'eventAction': 'Tiklama'});"
                  title="Boyner Yeni Sezon"
                  data-campaignid="79403"
                  data-campaignintegrationcode="PSC20190204002"
                  data-position="140"
                  data-campaignname="Boyner Yeni Sezon"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni839b108d1f4f4563ae307f37bc817552.jpg?q=95"
                      alt="Boyner Yeni Sezon"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo46edfba91f73486b942cb900275fef9d.jpg"
                        alt="Boyner Yeni Sezon"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml79403">3 Gün 15:37:48</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-esq-91026"
                  href="http://malls-online.com/kampanya/liste/91026/esq?rType=1&amp;rKey=91026"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_esq_PSC20200509007', 'eventAction': 'Tiklama'});"
                  title="ESQ"
                  data-campaignid="91026"
                  data-campaignintegrationcode="PSC20200509007"
                  data-position="141"
                  data-campaignname="Sepette %20 İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenic254ec50cbf948af88c24a5c500e49ba.jpg?q=95"
                      alt="ESQ"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logodb11a5240d8f4bb89402c0a03059d76e.jpg"
                        alt="ESQ"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml91026">21:38:48</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-boyner-cocuk-senligi-91020"
                  href="http://malls-online.com/boyner-10826?rType=1&amp;rKey=91020"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_boyner-cocuk-senligi_PSC20200509005', 'eventAction': 'Tiklama'});"
                  title="Boyner Çocuk Şenliği"
                  data-campaignid="91020"
                  data-campaignintegrationcode="PSC20200509005"
                  data-position="142"
                  data-campaignname="%70'e Varan İndirim+Sepette %30'a Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenia81a3917f3bc46c3978b156cda5d3c91.jpg?q=95"
                      alt="Boyner Çocuk Şenliği"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logobff79544287e413098a2b2a8a6dcf8f1.jpg"
                        alt="Boyner Çocuk Şenliği"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml91020">15:37:48</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-elbise-tulum-90381"
                  href="http://malls-online.com/kadin-giyim-aksesuar-kampanya-10?rType=1&amp;rKey=90381"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_elbise-tulum_PSC20200408015', 'eventAction': 'Tiklama'});"
                  title="Elbise &amp; Tulum"
                  data-campaignid="90381"
                  data-campaignintegrationcode="PSC20200408015"
                  data-position="143"
                  data-campaignname="Sepette Sürpriz İndirimler"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni865a712ff59949a1adb0a934ebc1681e.jpg?q=95"
                      alt="Elbise &amp; Tulum"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo7c1644eda3d34f148a8d2067d80009ed.jpg"
                        alt="Elbise &amp; Tulum"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml90381">5 Gün 21:38:48</span>x
                  </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-superstep-87148"
                  href="http://malls-online.com/superstep-firsatlari?rType=1&amp;rKey=87148"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_superstep_PSC20191203005', 'eventAction': 'Tiklama'});"
                  title="SuperStep"
                  data-campaignid="87148"
                  data-campaignintegrationcode="PSC20191203005"
                  data-position="144"
                  data-campaignname="SuperStep - %50'ye Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni91e387df684b48ad89f5701244324358.jpg?q=95"
                      alt="SuperStep"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logoc0cfbf01b2a34343ac6b352f8bcb1388.jpg"
                        alt="SuperStep"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml87148">8 Gün 15:37:48</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-by-harmony-gunes-gozlugu-91022"
                  href="http://malls-online.com/kampanya/liste/91022/by-harmony-gunes-gozlugu?rType=1&amp;rKey=91022"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_by-harmony-gunes-gozlugu_PSC20200509006', 'eventAction': 'Tiklama'});"
                  title="By Harmony Güneş Gözlüğü"
                  data-campaignid="91022"
                  data-campaignintegrationcode="PSC20200509006"
                  data-position="145"
                  data-campaignname="%85'e Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni75df8a95430845f0b124bc056004f4a6.jpg?q=95"
                      alt="By Harmony Güneş Gözlüğü"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logoe5179bfee8dd460fb0c3414b3e1aee44.jpg"
                        alt="By Harmony Güneş Gözlüğü"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml91022">21:38:48</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-kozmetige-dair-her-sey-90466"
                  href="http://malls-online.com/kampanya/alisveris/8?rType=1&amp;rKey=90466"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_kozmetige-dair-her-sey_PSC20200414007', 'eventAction': 'Tiklama'});"
                  title="Kozmetiğe Dair Her Şey"
                  data-campaignid="90466"
                  data-campaignintegrationcode="PSC20200414007"
                  data-position="146"
                  data-campaignname="Kişisel Bakımda %80'e Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni90e4884e34274da1be98a8c125ef0acf.jpg?q=95"
                      alt="Kozmetiğe Dair Her Şey"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo339de9d8246a4e9bbd6fbdc033e9fb05.jpg"
                        alt="Kozmetiğe Dair Her Şey"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml90466">1 Gün 21:38:48</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-lancome-88885"
                  href="http://malls-online.com/lancome?rType=1&amp;rKey=88885"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_lancome_PSC20200215008', 'eventAction': 'Tiklama'});"
                  title="Lancome"
                  data-campaignid="88885"
                  data-campaignintegrationcode="PSC20200215008"
                  data-position="147"
                  data-campaignname="%35 ‘e Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni9dadfc48842b4bea940eb9ed327f0f8b.jpg?q=95"
                      alt="Lancome"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo79088e681c5b4ff99213caec926ac252.jpg"
                        alt="Lancome"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml88885">1 Gün 21:38:48</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-clarins-88647"
                  href="http://malls-online.com/clarins?ft=100:3120004309&amp;rType=1&amp;rKey=88647"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_clarins_PSC20200205013', 'eventAction': 'Tiklama'});"
                  title="Clarins "
                  data-campaignid="88647"
                  data-campaignintegrationcode="PSC20200205013"
                  data-position="148"
                  data-campaignname="%50’ye Varan İndirim "
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenicff9b91b5b05412cb19b61072d3d3a82.jpg?q=95"
                      alt="Clarins "
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo99aa346dfe9c45f7b99effcda269c965.jpg"
                        alt="Clarins "
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml88647">1 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-diego-dalla-palma-88858"
                  href="http://malls-online.com/diego-dalla-palma?rType=1&amp;rKey=88858"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_diego-dalla-palma_PSC20200214009', 'eventAction': 'Tiklama'});"
                  title="Diego Dalla Palma "
                  data-campaignid="88858"
                  data-campaignintegrationcode="PSC20200214009"
                  data-position="149"
                  data-campaignname="Özel Fiyatlarla"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni6a7181ef93a346988dbbca0a71f2c9ff.jpg?q=95"
                      alt="Diego Dalla Palma "
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logoee0b71dd7e464f49891220da366c8139.jpg"
                        alt="Diego Dalla Palma "
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml88858">1 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-kozmetik-88786"
                  href="http://malls-online.com/kozmetik?pr=0%2C49&amp;rType=1&amp;rKey=88786"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_kozmetik_PSC20200212004', 'eventAction': 'Tiklama'});"
                  title="Kozmetik"
                  data-campaignid="88786"
                  data-campaignintegrationcode="PSC20200212004"
                  data-position="150"
                  data-campaignname="49 Tl Altı Ürünler"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni746b258dcc3246228ce81ff5aca48615.jpg?q=95"
                      alt="Kozmetik"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo3dbd00a48a3d48bc85baf12fcd035d09.jpg"
                        alt="Kozmetik"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml88786">1 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-deno-kids-sepette-25-indirim-90999"
                  href="http://malls-online.com/cocuk-kampanya-4?rType=1&amp;rKey=90999"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_deno-kids-sepette-25-indirim_PSC20200508005', 'eventAction': 'Tiklama'});"
                  title="Deno Kids Sepette %25 İndirim"
                  data-campaignid="90999"
                  data-campaignintegrationcode="PSC20200508005"
                  data-position="151"
                  data-campaignname="Sepette %25 İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni94eb0f568bf945e9a8fdda91500a8b50.jpg?q=95"
                      alt="Deno Kids Sepette %25 İndirim"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo295c5379ee6640ebb67a80ef879f27eb.jpg"
                        alt="Deno Kids Sepette %25 İndirim"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml90999">3 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-dujour-taki-80-e-varan-indirim-90994"
                  href="http://malls-online.com/kampanya/liste/90994/dujour-taki-80-e-varan-indirim?rType=1&amp;rKey=90994"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_dujour-taki-80-e-varan-indirim_PSC20200508003', 'eventAction': 'Tiklama'});"
                  title="Dujour Takı %80'e Varan İndirim"
                  data-campaignid="90994"
                  data-campaignintegrationcode="PSC20200508003"
                  data-position="152"
                  data-campaignname="Dujour Takı %80'e Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenic00975eb43484c59b5fc6bcdcba07f99.jpg?q=95"
                      alt="Dujour Takı %80'e Varan İndirim"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo3f39c5cd14824d5ca3e1a97302f2fd21.jpg"
                        alt="Dujour Takı %80'e Varan İndirim"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml90994">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-aksesuara-dair-her-sey-90479"
                  href="http://malls-online.com/kadin-aksesuar?rType=1&amp;rKey=90479"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_aksesuara-dair-her-sey_PSC20200414014', 'eventAction': 'Tiklama'});"
                  title="Aksesuara Dair Her Şey"
                  data-campaignid="90479"
                  data-campaignintegrationcode="PSC20200414014"
                  data-position="153"
                  data-campaignname="Aksesuara Dair Her Şey"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni805e90fe0dfa4f01b93812296f86f25d.jpg?q=95"
                      alt="Aksesuara Dair Her Şey"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logoc76b2c5242a44f69a98e566e1d20b698.jpg"
                        alt="Aksesuara Dair Her Şey"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml90479">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-kiko-milano-88419"
                  href="http://malls-online.com/kiko-milano?rType=1&amp;rKey=88419"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_kiko-milano_PSC20200127008', 'eventAction': 'Tiklama'});"
                  title="Kiko Milano"
                  data-campaignid="88419"
                  data-campaignintegrationcode="PSC20200127008"
                  data-position="154"
                  data-campaignname="%45'e Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenid84c08eb00ea469ab783086ec831214b.jpg?q=95"
                      alt="Kiko Milano"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo46edee3d6b2943fdabc492557d205a3e.jpg"
                        alt="Kiko Milano"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml88419">1 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-bobbi-brown-88373"
                  href="http://malls-online.com/bobbi-brown?rType=1&amp;rKey=88373"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_bobbi-brown_PSC20200124020', 'eventAction': 'Tiklama'});"
                  title="Bobbi Brown"
                  data-campaignid="88373"
                  data-campaignintegrationcode="PSC20200124020"
                  data-position="155"
                  data-campaignname="Net %30 İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devameden_YENI7a578590bbe54d049b050db528b94340.jpg?q=95"
                      alt="Bobbi Brown"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo798f42823517430a8ccb66b52bf61ec6.jpg"
                        alt="Bobbi Brown"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml88373">1 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-dermokozmetik-85597"
                  href="http://malls-online.com/kozmetik-kampanya-3?rType=1&amp;rKey=85597"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_dermokozmetik_PSC20191011027', 'eventAction': 'Tiklama'});"
                  title="Dermokozmetik"
                  data-campaignid="85597"
                  data-campaignintegrationcode="PSC20191011027"
                  data-position="156"
                  data-campaignname="Dermokozmetik"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devameden_YENI99ba3e7784d54319b08f7d4d81467950.jpg?q=95"
                      alt="Dermokozmetik"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo9168eeb6ebd54282b80120e75fb93d3d.jpg"
                        alt="Dermokozmetik"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml85597">1 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-erkeklere-ozel-bakim-urunleri-83551"
                  href="http://malls-online.com/erkek-kozmetik?rType=1&amp;rKey=83551"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_erkeklere-ozel-bakim-urunleri_PSC20190725007', 'eventAction': 'Tiklama'});"
                  title="Erkeklere Özel Bakım Ürünleri"
                  data-campaignid="83551"
                  data-campaignintegrationcode="PSC20190725007"
                  data-position="157"
                  data-campaignname="Erkeklere Özel Bakım Ürünleri"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni164e3391231f4c49a0a1d75836562df6.jpg?q=95"
                      alt="Erkeklere Özel Bakım Ürünleri"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logod9cdfe1307874db7b7205410bfa722b8.jpg"
                        alt="Erkeklere Özel Bakım Ürünleri"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml83551">1 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-puruzsuz-makyajin-sirlari--67261"
                  href="http://malls-online.com/kadin-yuz-makyaji?rType=1&amp;rKey=67261"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_puruzsuz-makyajin-sirlari-_PSC20180127011', 'eventAction': 'Tiklama'});"
                  title="Pürüzsüz Makyajın Sırları!"
                  data-campaignid="67261"
                  data-campaignintegrationcode="PSC20180127011"
                  data-position="158"
                  data-campaignname="Pürüzsüz Makyajın Sırları "
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni76beaf7b473640efacd570f3fbf9f070.jpg?q=95"
                      alt="Pürüzsüz Makyajın Sırları!"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/puruzsuz_makyajin_sirlarid9913dbab2404baaad447dde06fcddd3.jpg"
                        alt="Pürüzsüz Makyajın Sırları!"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml67261">1 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-goz-makyajinin-incelikleri--67260"
                  href="http://malls-online.com/kadin-goz-makyaji?rType=1&amp;rKey=67260"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_goz-makyajinin-incelikleri-_PSC20180127010', 'eventAction': 'Tiklama'});"
                  title="Göz Makyajının İncelikleri!"
                  data-campaignid="67260"
                  data-campaignintegrationcode="PSC20180127010"
                  data-position="159"
                  data-campaignname="Göz Makyajının İncelikleri"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenib1c3de598a5c4d49a70b5129ac52e4fe.jpg?q=95"
                      alt="Göz Makyajının İncelikleri!"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/goz_makyajinin_inceliklerieb34792e968f406fb959a1030a424a6d.jpg"
                        alt="Göz Makyajının İncelikleri!"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml67260">1 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-renk-renk-dudaklar-67259"
                  href="http://malls-online.com/kadin-dudak-makyaji?rType=1&amp;rKey=67259"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_renk-renk-dudaklar_PSC20180127009', 'eventAction': 'Tiklama'});"
                  title="Renk Renk Dudaklar"
                  data-campaignid="67259"
                  data-campaignintegrationcode="PSC20180127009"
                  data-position="160"
                  data-campaignname="Renk Renk Dudaklar"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni2b5f7c3c5dc1462d986b1c64961d46df.jpg?q=95"
                      alt="Renk Renk Dudaklar"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/renk_renk_dudaklared8b9d88ba7541f18b04d6c8da0587b0.jpg"
                        alt="Renk Renk Dudaklar"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml67259">1 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-estee-lauder-90581"
                  href="http://malls-online.com/estee-lauder?rType=1&amp;rKey=90581"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_estee-lauder_PSC20200417008', 'eventAction': 'Tiklama'});"
                  title="Estée Lauder"
                  data-campaignid="90581"
                  data-campaignintegrationcode="PSC20200417008"
                  data-position="161"
                  data-campaignname="%70 'e Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni14074d96143442bf81c8cbbcb2a25a78.jpg?q=95"
                      alt="Estée Lauder"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo489a90beada14f27bebfa7a09a47c6e7.jpg"
                        alt="Estée Lauder"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml90581">1 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-balmain-88913"
                  href="http://malls-online.com/kozmetik-kampanya-9?rType=1&amp;rKey=88913"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_balmain_PSC20200218010', 'eventAction': 'Tiklama'});"
                  title="Balmain "
                  data-campaignid="88913"
                  data-campaignintegrationcode="PSC20200218010"
                  data-position="162"
                  data-campaignname="%30 'a Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni66d815f13cff4537b77bc9cb1994c3d8.jpg?q=95"
                      alt="Balmain "
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo112a6ec15e68442a88b6c7a449b2e1c1.jpg"
                        alt="Balmain "
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml88913">1 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-clinique-90580"
                  href="http://malls-online.com/clinique?rType=1&amp;rKey=90580"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_clinique_PSC20200417007', 'eventAction': 'Tiklama'});"
                  title="Clinique"
                  data-campaignid="90580"
                  data-campaignintegrationcode="PSC20200417007"
                  data-position="163"
                  data-campaignname="%70 'e Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni24aab4ee2d1048599c68a31a63f17a81.jpg?q=95"
                      alt="Clinique"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo337d6d3146654e46baf2695e3a55e6bc.jpg"
                        alt="Clinique"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml90580">1 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-sarjiniz-bitmesin-90236"
                  href="http://malls-online.com/elektronik?ft=1064:124622,93170,110782&amp;rType=1&amp;rKey=90236"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_sarjiniz-bitmesin_PSC20200403008', 'eventAction': 'Tiklama'});"
                  title="Şarjınız Bitmesin"
                  data-campaignid="90236"
                  data-campaignintegrationcode="PSC20200403008"
                  data-position="164"
                  data-campaignname="%75'e Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni40d28458e5794806bac9624c4a9c260c.jpg?q=95"
                      alt="Şarjınız Bitmesin"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo902e6a49e9f2486e8591589ccf1835b8.jpg"
                        alt="Şarjınız Bitmesin"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml90236">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-evinizi-duzenleyin-84373"
                  href="http://malls-online.com/ev-yasam?ft=1064:33436,33471,46118,35404,70914,33426,109629&amp;rType=1&amp;rKey=84373"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_evinizi-duzenleyin_PSC20190828024', 'eventAction': 'Tiklama'});"
                  title="Evinizi Düzenleyin"
                  data-campaignid="84373"
                  data-campaignintegrationcode="PSC20190828024"
                  data-position="165"
                  data-campaignname="%80'e Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devameden_YENI04cf82f0097a4dcaaece7a34929e67b5.jpg?q=95"
                      alt="Evinizi Düzenleyin"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo0c6e7eee48bf4199b698416b4f097394.jpg"
                        alt="Evinizi Düzenleyin"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml84373">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-etnik-dekorasyon-89811"
                  href="http://malls-online.com/ev-yasam-kampanya-16?rType=1&amp;rKey=89811"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_etnik-dekorasyon_PSC20200320005', 'eventAction': 'Tiklama'});"
                  title="Etnik Dekorasyon"
                  data-campaignid="89811"
                  data-campaignintegrationcode="PSC20200320005"
                  data-position="166"
                  data-campaignname="%75'e Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni99e133b5c8cd4c2fa07c531892a2751b.jpg?q=95"
                      alt="Etnik Dekorasyon"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo5173a9e457ee4aecaf111c9d76889e76.jpg"
                        alt="Etnik Dekorasyon"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml89811">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-222-concept-88562"
                  href="http://malls-online.com/222-concept?rType=1&amp;rKey=88562"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_222-concept_PSC20200203001', 'eventAction': 'Tiklama'});"
                  title="222 Concept"
                  data-campaignid="88562"
                  data-campaignintegrationcode="PSC20200203001"
                  data-position="167"
                  data-campaignname="%45'e Varan İndirim+Kargo Bedava"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni602b0ef8a41d4cf5ba385bd13c193882.jpg?q=95"
                      alt="222 Concept"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo5d2441137c48471d853f064c0061ad9a.jpg"
                        alt="222 Concept"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml88562">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-victorinox-90727"
                  href="http://malls-online.com/victorinox?rType=1&amp;rKey=90727"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_victorinox_PSC20200428001', 'eventAction': 'Tiklama'});"
                  title="Victorinox"
                  data-campaignid="90727"
                  data-campaignintegrationcode="PSC20200428001"
                  data-position="168"
                  data-campaignname="%30'a Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenidef4c25b7ae34187a838539db4ea6bc3.jpg?q=95"
                      alt="Victorinox"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo2d57cad5ec1f42b5897f4abb5ea1c688.jpg"
                        alt="Victorinox"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml90727">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-penelope-bedroom-89124"
                  href="http://malls-online.com/ev-yasam?ft=1059:233489,113279&amp;rType=1&amp;rKey=89124"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_penelope-bedroom_PSC20200225021', 'eventAction': 'Tiklama'});"
                  title="Penelope Bedroom"
                  data-campaignid="89124"
                  data-campaignintegrationcode="PSC20200225021"
                  data-position="169"
                  data-campaignname="Seçili Ürünlerde %50'ye Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni4fe9811a915842a99d606e29398eab3f.jpg?q=95"
                      alt="Penelope Bedroom"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo0488cb8da6c341afb09eb540a6b4c521.jpg"
                        alt="Penelope Bedroom"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml89124">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-iskandinav-evler-89251"
                  href="http://malls-online.com/ev-yasam-kampanya-19?rType=1&amp;rKey=89251"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_iskandinav-evler_PSC20200304001', 'eventAction': 'Tiklama'});"
                  title="İskandinav Evler"
                  data-campaignid="89251"
                  data-campaignintegrationcode="PSC20200304001"
                  data-position="170"
                  data-campaignname="%70'e Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni57f05e7ccd714755ae3e3ed04d0c83c9.jpg?q=95"
                      alt="İskandinav Evler"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logoefbb043a65494cc6b8ad22080e674f45.jpg"
                        alt="İskandinav Evler"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml89251">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-philips-88383"
                  href="http://malls-online.com/philips?rType=1&amp;rKey=88383"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_philips_PSC20200127003', 'eventAction': 'Tiklama'});"
                  title="Philips"
                  data-campaignid="88383"
                  data-campaignintegrationcode="PSC20200127003"
                  data-position="171"
                  data-campaignname="%50'ye Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenid785f40e68b342f8badafe22d3a36ea6.jpg?q=95"
                      alt="Philips"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logob9d90c5bcc494458b2704edc24009ff4.jpg"
                        alt="Philips"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml88383">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-m-s-cocuk-ozel-fiyatlar-90964"
                  href="http://malls-online.com/marks-spencer?qcat=related-brand&amp;q=marks&amp;ft=1057:33289,33377,33324,33371&amp;rType=1&amp;rKey=90964"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_m-s-cocuk-ozel-fiyatlar_PSC20200506007', 'eventAction': 'Tiklama'});"
                  title="M&amp;S Çocuk Özel Fiyatlar"
                  data-campaignid="90964"
                  data-campaignintegrationcode="PSC20200506007"
                  data-position="172"
                  data-campaignname="Özel Fiyatlar"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni693240cc4a604b6d9f7eba6384db5fcf.jpg?q=95"
                      alt="M&amp;S Çocuk Özel Fiyatlar"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logoda6cc7febd464516a10b4e15e94a3477.jpg"
                        alt="M&amp;S Çocuk Özel Fiyatlar"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml90964">5 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-mobilyada-yeni-urunler-90808"
                  href="http://malls-online.com/dekoratif-mobilya?rType=1&amp;rKey=90808"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_mobilyada-yeni-urunler_PSC20200430004', 'eventAction': 'Tiklama'});"
                  title="Mobilyada Yeni Ürünler"
                  data-campaignid="90808"
                  data-campaignintegrationcode="PSC20200430004"
                  data-position="173"
                  data-campaignname="%65'e Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenica2fb61a77ff41458dc3f7b291a545c2.jpg?q=95"
                      alt="Mobilyada Yeni Ürünler"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo9ecff1e9aa214129a02310549138602f.jpg"
                        alt="Mobilyada Yeni Ürünler"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml90808">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-ramazana-ozel-pisirme-sofra-90672"
                  href="http://malls-online.com/ev-yasam-kampanya-24?rType=1&amp;rKey=90672"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_ramazana-ozel-pisirme-sofra_PSC20200422004', 'eventAction': 'Tiklama'});"
                  title="Ramazana Özel Pişirme &amp; Sofra"
                  data-campaignid="90672"
                  data-campaignintegrationcode="PSC20200422004"
                  data-position="174"
                  data-campaignname="%80'e Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni19d801ffdaad48168ddb9149d21acd26.jpg?q=95"
                      alt="Ramazana Özel Pişirme &amp; Sofra"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logoac771b8558ff46c79dc1bb8273b77efb.jpg"
                        alt="Ramazana Özel Pişirme &amp; Sofra"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml90672">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-bahar-dekorasyonu-90460"
                  href="http://malls-online.com/ev-yasam-kampanya-18?rType=1&amp;rKey=90460"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_bahar-dekorasyonu_PSC20200414004', 'eventAction': 'Tiklama'});"
                  title="Bahar Dekorasyonu"
                  data-campaignid="90460"
                  data-campaignintegrationcode="PSC20200414004"
                  data-position="175"
                  data-campaignname="%75'e Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenib930dd3002314c7a883640111c46c8cd.jpg?q=95"
                      alt="Bahar Dekorasyonu"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo8052aa49ab6e43e987b33435a5efecc2.jpg"
                        alt="Bahar Dekorasyonu"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml90460">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-ev-yasam-90034"
                  href="http://malls-online.com/ev-yasam?pr=0%2C50&amp;rType=1&amp;rKey=90034"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_ev-yasam_PSC20200327005', 'eventAction': 'Tiklama'});"
                  title="Ev&amp;Yaşam"
                  data-campaignid="90034"
                  data-campaignintegrationcode="PSC20200327005"
                  data-position="176"
                  data-campaignname="%80'e Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni8d41282d925d4d6e84f70fca6fd6f628.jpg?q=95"
                      alt="Ev&amp;Yaşam"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo0b364d9ceca44a468d060d03604ed70f.jpg"
                        alt="Ev&amp;Yaşam"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml90034">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-kisisel-bakim-firsatlari-89097"
                  href="http://malls-online.com/kisisel-bakim-aletleri?rType=1&amp;rKey=89097"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_kisisel-bakim-firsatlari_PSC20200226003', 'eventAction': 'Tiklama'});"
                  title="Kişisel Bakım Fırsatları"
                  data-campaignid="89097"
                  data-campaignintegrationcode="PSC20200226003"
                  data-position="177"
                  data-campaignname="%50'ye Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenib0ed768a9df24b599acb6ad5364bb6b1.jpg?q=95"
                      alt="Kişisel Bakım Fırsatları"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo55d27c5012aa4ce0a6b897deda3dacc3.jpg"
                        alt="Kişisel Bakım Fırsatları"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml89097">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-mutfak-sofra-88801"
                  href="http://malls-online.com/mutfak-sofra?rType=1&amp;rKey=88801"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_mutfak-sofra_PSC20200212011', 'eventAction': 'Tiklama'});"
                  title="Mutfak &amp; Sofra"
                  data-campaignid="88801"
                  data-campaignintegrationcode="PSC20200212011"
                  data-position="178"
                  data-campaignname="%80’e Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeniebf73f748ace4d559b2340eb2a59fd00.jpg?q=95"
                      alt="Mutfak &amp; Sofra"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logoa66a7e067c444d43a4f99f945c73a225.jpg"
                        alt="Mutfak &amp; Sofra"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml88801">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-dekorasyonda-son-trendler-88782"
                  href="http://malls-online.com/ev-dekorasyon?rType=1&amp;rKey=88782"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_dekorasyonda-son-trendler_PSC20200212001', 'eventAction': 'Tiklama'});"
                  title="Dekorasyonda Son Trendler"
                  data-campaignid="88782"
                  data-campaignintegrationcode="PSC20200212001"
                  data-position="179"
                  data-campaignname="%75'e Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenic56431da0be545eb8e61666e737c98bc.jpg?q=95"
                      alt="Dekorasyonda Son Trendler"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logofef048ff78c44edd91dcb5c6cc0019a4.jpg"
                        alt="Dekorasyonda Son Trendler"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml88782">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-fly-mobilya-88380"
                  href="http://malls-online.com/fly-mobilya?rType=1&amp;rKey=88380"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_fly-mobilya_PSC20200127002', 'eventAction': 'Tiklama'});"
                  title="Fly Mobilya"
                  data-campaignid="88380"
                  data-campaignintegrationcode="PSC20200127002"
                  data-position="180"
                  data-campaignname="%70'e Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenid1ada69e72f14ef9a005ef0ac2eccbbf.jpg?q=95"
                      alt="Fly Mobilya"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo683f79fbbb574de5b847ee005a48bf76.jpg"
                        alt="Fly Mobilya"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml88380">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-mutfaktaki-sefler-88277"
                  href="http://malls-online.com/yemek-pisirme-setleri?rType=1&amp;rKey=88277"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_mutfaktaki-sefler_PSC20200121017', 'eventAction': 'Tiklama'});"
                  title="Mutfaktaki Şefler"
                  data-campaignid="88277"
                  data-campaignintegrationcode="PSC20200121017"
                  data-position="181"
                  data-campaignname="%70'e Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenie8fcc6ff20884ca5b47a6685d7cbc228.jpg?q=95"
                      alt="Mutfaktaki Şefler"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo6ebbd2b1ee834e4c936a95c71cad0ca6.jpg"
                        alt="Mutfaktaki Şefler"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml88277">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-tefal-88254"
                  href="http://malls-online.com/tefal?rType=1&amp;rKey=88254"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_tefal_PSC20200121004', 'eventAction': 'Tiklama'});"
                  title="Tefal"
                  data-campaignid="88254"
                  data-campaignintegrationcode="PSC20200121004"
                  data-position="182"
                  data-campaignname="%60'a Varan İndirim+ Kargo Bedava"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenid36cb16f97234f4c8320bf43e4d39219.jpg?q=95"
                      alt="Tefal"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo5f20b6befcb74e5188d688305a4b464c.jpg"
                        alt="Tefal"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml88254">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-tp-link-88071"
                  href="http://malls-online.com/tp-link?rType=1&amp;rKey=88071"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_tp-link_PSC20200111007', 'eventAction': 'Tiklama'});"
                  title="TP-LINK"
                  data-campaignid="88071"
                  data-campaignintegrationcode="PSC20200111007"
                  data-position="183"
                  data-campaignname="%40'a Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devameden_YENI59895eed20d94a1eace383a5fe4a737c.jpg?q=95"
                      alt="TP-LINK"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo7285ab0e9e46431eaa24329f00098528.jpg"
                        alt="TP-LINK"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml88071">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-tekno-firsatlar-87779"
                  href="http://malls-online.com/ev-yasam-kampanya-4?rType=1&amp;rKey=87779"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_tekno-firsatlar_PSC20191227019', 'eventAction': 'Tiklama'});"
                  title="Tekno Fırsatlar"
                  data-campaignid="87779"
                  data-campaignintegrationcode="PSC20191227019"
                  data-position="184"
                  data-campaignname="Özel Fiyatlar"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni409bda2512ec412c8a56180166f349a1.jpg?q=95"
                      alt="Tekno Fırsatlar"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logobcf36968bfa049959cdb81b036820d15.jpg"
                        alt="Tekno Fırsatlar"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml87779">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-dekoratif-saksi-ve-cicekler-87675"
                  href="http://malls-online.com/dekoratif-saksi-ciceklik?rType=1&amp;rKey=87675"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_dekoratif-saksi-ve-cicekler_PSC20191224009', 'eventAction': 'Tiklama'});"
                  title="Dekoratif Saksı ve Çiçekler"
                  data-campaignid="87675"
                  data-campaignintegrationcode="PSC20191224009"
                  data-position="185"
                  data-campaignname="%70'e Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni1e9c46361efb4ad7b67ad30d1c7c46a8.jpg?q=95"
                      alt="Dekoratif Saksı ve Çiçekler"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logofcf40640c3444c89ba2fec4a9f93b5d2.jpg"
                        alt="Dekoratif Saksı ve Çiçekler"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml87675">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-acil-durum-kitleri-87495"
                  href="http://malls-online.com/ev-yasam-kampanya-12?rType=1&amp;rKey=87495"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_acil-durum-kitleri_PSC20191217015', 'eventAction': 'Tiklama'});"
                  title="Acil Durum Kitleri"
                  data-campaignid="87495"
                  data-campaignintegrationcode="PSC20191217015"
                  data-position="186"
                  data-campaignname="Özel Fiyatlar"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni5a69225c3999401490f82fa49b629082.jpg?q=95"
                      alt="Acil Durum Kitleri"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo1afb3ff86e3146418188bf1191c0f3ee.jpg"
                        alt="Acil Durum Kitleri"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml87495">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-kitchenaid-87285"
                  href="http://malls-online.com/kitchenaid?rType=1&amp;rKey=87285"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_kitchenaid_PSC20191209001', 'eventAction': 'Tiklama'});"
                  title="KitchenAid"
                  data-campaignid="87285"
                  data-campaignintegrationcode="PSC20191209001"
                  data-position="187"
                  data-campaignname="Özel Fiyatlar"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenied71c38bcdd94d728ef98145e2b0c2cd.jpg?q=95"
                      alt="KitchenAid"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo1e4e4b9322434113b2c6697675f4e4fd.jpg"
                        alt="KitchenAid"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml87285">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-funbou-87248"
                  href="http://malls-online.com/funbou?rType=1&amp;rKey=87248"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_funbou_PSC20191205008', 'eventAction': 'Tiklama'});"
                  title="Funbou"
                  data-campaignid="87248"
                  data-campaignintegrationcode="PSC20191205008"
                  data-position="188"
                  data-campaignname="%30'a Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenibe5a38b5e6f54733bca3390e71c512fc.jpg?q=95"
                      alt="Funbou"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo352bc9186ccb438cacc7893691ed3755.jpg"
                        alt="Funbou"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml87248">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-bambum-86714"
                  href="http://malls-online.com/bambum?rType=1&amp;rKey=86714"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_bambum_PSC20191120015', 'eventAction': 'Tiklama'});"
                  title="Bambum"
                  data-campaignid="86714"
                  data-campaignintegrationcode="PSC20191120015"
                  data-position="189"
                  data-campaignname="%55'e Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni2d435518ff41418d964096d7ca8dc6ca.jpg?q=95"
                      alt="Bambum"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo5dd967fc01024701842ebf3b91feecaa.jpg"
                        alt="Bambum"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml86714">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-porland-86713"
                  href="http://malls-online.com/porland?rType=1&amp;rKey=86713"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_porland_PSC20191120014', 'eventAction': 'Tiklama'});"
                  title="Porland"
                  data-campaignid="86713"
                  data-campaignintegrationcode="PSC20191120014"
                  data-position="190"
                  data-campaignname="%60'a Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenida63b5b32ef446749a44b42fca38f336.jpg?q=95"
                      alt="Porland"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo0f34017668a242e4b95e5992e4e8afa5.jpg"
                        alt="Porland"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml86713">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-koleksiyon-86712"
                  href="http://malls-online.com/koleksiyon?rType=1&amp;rKey=86712"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_koleksiyon_PSC20191120013', 'eventAction': 'Tiklama'});"
                  title="Koleksiyon"
                  data-campaignid="86712"
                  data-campaignintegrationcode="PSC20191120013"
                  data-position="191"
                  data-campaignname="%60'a Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeniac4148000ee9445791d2e1c8ece1c84d.jpg?q=95"
                      alt="Koleksiyon"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo70ff6343d5b340f7bbc00eceba64c9fb.jpg"
                        alt="Koleksiyon"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml86712">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-tum-paspas-modelleri-86702"
                  href="http://malls-online.com/ev-yasam?ft=1064:33434,100223&amp;rType=1&amp;rKey=86702"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_tum-paspas-modelleri_PSC20191120006', 'eventAction': 'Tiklama'});"
                  title="Tüm Paspas Modelleri"
                  data-campaignid="86702"
                  data-campaignintegrationcode="PSC20191120006"
                  data-position="192"
                  data-campaignname="%60'a Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni073dfa368e2e44afaf7dfefd2cd46eb7.jpg?q=95"
                      alt="Tüm Paspas Modelleri"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logocd4817f7e19a42769be8ca2ad9083812.jpg"
                        alt="Tüm Paspas Modelleri"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml86702">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-hecha-86584"
                  href="http://malls-online.com/hecha?rType=1&amp;rKey=86584"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_hecha_PSC20191114015', 'eventAction': 'Tiklama'});"
                  title="Hecha"
                  data-campaignid="86584"
                  data-campaignintegrationcode="PSC20191114015"
                  data-position="193"
                  data-campaignname="Özel Fiyatlar"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni9fa1c9d29d4348dc813162943821ed8b.jpg?q=95"
                      alt="Hecha"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logoc2b9d36586ec49689ac7777570c14593.jpg"
                        alt="Hecha"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml86584">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-dekorasyonda-mavi-etki-86518"
                  href="http://malls-online.com/ev-yasam-kampanya-5?rType=1&amp;rKey=86518"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_dekorasyonda-mavi-etki_PSC20191113009', 'eventAction': 'Tiklama'});"
                  title="Dekorasyonda Mavi Etki"
                  data-campaignid="86518"
                  data-campaignintegrationcode="PSC20191113009"
                  data-position="194"
                  data-campaignname="%60'a Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenif16c37673fc34fad928014dab89be80e.jpg?q=95"
                      alt="Dekorasyonda Mavi Etki"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo69bde348b0494ed8bdd42792671d184a.jpg"
                        alt="Dekorasyonda Mavi Etki"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml86518">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-warm-design-86479"
                  href="http://malls-online.com/warm-design?rType=1&amp;rKey=86479"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_warm-design_PSC20191112008', 'eventAction': 'Tiklama'});"
                  title="Warm Design"
                  data-campaignid="86479"
                  data-campaignintegrationcode="PSC20191112008"
                  data-position="195"
                  data-campaignname="%40'a Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni849cf55192b84bfd93d91547f0810311.jpg?q=95"
                      alt="Warm Design"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logod18d2426f42249a19817f37a80ef5695.jpg"
                        alt="Warm Design"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml86479">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-vitale-86332"
                  href="http://malls-online.com/vitale?rType=1&amp;rKey=86332"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_vitale_PSC20191108019', 'eventAction': 'Tiklama'});"
                  title="Vitale"
                  data-campaignid="86332"
                  data-campaignintegrationcode="PSC20191108019"
                  data-position="196"
                  data-campaignname="%70'e Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni5ce4cacd76f245138ed69ea43175162c.jpg?q=95"
                      alt="Vitale"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo720ce28f03834afeac4267e1746b6e97.jpg"
                        alt="Vitale"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml86332">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-komfort-home-85940"
                  href="http://malls-online.com/komfort-home?rType=1&amp;rKey=85940"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_komfort-home_PSC20191028001', 'eventAction': 'Tiklama'});"
                  title="Komfort Home"
                  data-campaignid="85940"
                  data-campaignintegrationcode="PSC20191028001"
                  data-position="197"
                  data-campaignname="%70'e Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenib8a259bd4b4a4008bff9ba542ec98fae.jpg?q=95"
                      alt="Komfort Home"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logocf082e665c3243ba92326301e21fddd2.jpg"
                        alt="Komfort Home"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml85940">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-banyonuz-icin-her-sey-85556"
                  href="http://malls-online.com/banyo?rType=1&amp;rKey=85556"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_banyonuz-icin-her-sey_PSC20191010024', 'eventAction': 'Tiklama'});"
                  title="Banyonuz İçin Her Şey"
                  data-campaignid="85556"
                  data-campaignintegrationcode="PSC20191010024"
                  data-position="198"
                  data-campaignname="Kaçırılmayacak Fırsat"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni4d3e597660134dd1b5b28fae7e6f74e8.jpg?q=95"
                      alt="Banyonuz İçin Her Şey"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logodbb249503fa4477ab23925f00310463a.jpg"
                        alt="Banyonuz İçin Her Şey"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml85556">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-kulaklik-ve-ses-sistemleri-81803"
                  href="http://malls-online.com/ev-yasam?ft=1064%3A58925%2C52632%2C189483&amp;rType=1&amp;rKey=81803"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_kulaklik-ve-ses-sistemleri_PSC20190509003', 'eventAction': 'Tiklama'});"
                  title="Kulaklık ve Ses Sistemleri"
                  data-campaignid="81803"
                  data-campaignintegrationcode="PSC20190509003"
                  data-position="199"
                  data-campaignname="%50'ye Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/yeni_devameden57c4e1329b6346efabe8637cac59952d.jpg?q=95"
                      alt="Kulaklık ve Ses Sistemleri"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/kulaklik_ses_sistemleric7eaa2af039c4eb0b202ae43d3ba61cf.jpg"
                        alt="Kulaklık ve Ses Sistemleri"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml81803">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-jbl-81753"
                  href="http://malls-online.com/jbl?rType=1&amp;rKey=81753"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_jbl_PSC20190507019', 'eventAction': 'Tiklama'});"
                  title="JBL"
                  data-campaignid="81753"
                  data-campaignintegrationcode="PSC20190507019"
                  data-position="200"
                  data-campaignname="%40'a Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenic53dfaf1c5934d459e0c878224f0170b.jpg?q=95"
                      alt="JBL"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo118aced13f714df8ae0d64121fc94946.jpg"
                        alt="JBL"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml81753">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-fujifilm-81751"
                  href="http://malls-online.com/fujifilm?rType=1&amp;rKey=81751"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_fujifilm_PSC20190507017', 'eventAction': 'Tiklama'});"
                  title="Fujifilm"
                  data-campaignid="81751"
                  data-campaignintegrationcode="PSC20190507017"
                  data-position="201"
                  data-campaignname="%40'a Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni687cb6739d214b35932475673eebf225.jpg?q=95"
                      alt="Fujifilm"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/fujif23d6016d94b40fc923605a002a340b5.jpg"
                        alt="Fujifilm"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml81751">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-schafer-81353"
                  href="http://malls-online.com/schafer?rType=1&amp;rKey=81353"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_schafer_PSC20190422004', 'eventAction': 'Tiklama'});"
                  title="Schafer"
                  data-campaignid="81353"
                  data-campaignintegrationcode="PSC20190422004"
                  data-position="202"
                  data-campaignname="%70'e Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenie43d27318834405abb566e5132f81185.jpg?q=95"
                      alt="Schafer"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo56cb3dbfec2a4e79937bc27f660131bf.jpg"
                        alt="Schafer"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml81353">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-boyner-evde-80841"
                  href="http://malls-online.com/boyner-evde?rType=1&amp;rKey=80841"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_boyner-evde_PSC20190329011', 'eventAction': 'Tiklama'});"
                  title="Boyner Evde"
                  data-campaignid="80841"
                  data-campaignintegrationcode="PSC20190329011"
                  data-position="203"
                  data-campaignname="%80'e Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenib56a3bdde51f457fbcc44e651f216f61.jpg?q=95"
                      alt="Boyner Evde"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logod2bdc7b8e0d247468bad7cbf2612ba7a.jpg"
                        alt="Boyner Evde"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml80841">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-hibboux-80502"
                  href="http://malls-online.com/hibboux?rType=1&amp;rKey=80502"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_hibboux_PSC20190316003', 'eventAction': 'Tiklama'});"
                  title="Hibboux"
                  data-campaignid="80502"
                  data-campaignintegrationcode="PSC20190316003"
                  data-position="204"
                  data-campaignname="Seçili Ürünlerde %25'e Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni8e847dad112a46be9c2c559b35c50616.jpg?q=95"
                      alt="Hibboux"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logoc41bf811e85e43a1a1627533dd40f96e.jpg"
                        alt="Hibboux"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml80502">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-lorena-canals-80397"
                  href="http://malls-online.com/lorena-canals?rType=1&amp;rKey=80397"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_lorena-canals_PSC20190312017', 'eventAction': 'Tiklama'});"
                  title="Lorena Canals"
                  data-campaignid="80397"
                  data-campaignintegrationcode="PSC20190312017"
                  data-position="205"
                  data-campaignname="Özel fiyatlar"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devameden_YENI2cf4a122d6fe45fdbc5d29cda620b08f.jpg?q=95"
                      alt="Lorena Canals"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logoe02167e25f9f439ca167d627d87ef3fc.jpg"
                        alt="Lorena Canals"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml80397">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-irya-79793"
                  href="http://malls-online.com/irya?rType=1&amp;rKey=79793"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_irya_PSC20190218006', 'eventAction': 'Tiklama'});"
                  title="İrya "
                  data-campaignid="79793"
                  data-campaignintegrationcode="PSC20190218006"
                  data-position="206"
                  data-campaignname="%50'ye Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenifd0b8d3e57f34798a9d398f14aba31d6.jpg?q=95"
                      alt="İrya "
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo2f09e24c280a49e0a5a009e723076a7a.jpg"
                        alt="İrya "
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml79793">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-lwp-shop-lovewithprint-76697"
                  href="http://malls-online.com/lwp-shop?rType=1&amp;rKey=76697"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_lwp-shop-lovewithprint_PSC20181025013', 'eventAction': 'Tiklama'});"
                  title="LWP Shop - LoveWithPrint"
                  data-campaignid="76697"
                  data-campaignintegrationcode="PSC20181025013"
                  data-position="207"
                  data-campaignname="%50'ye Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni5976003791fa400baa7026ce92957950.jpg?q=95"
                      alt="LWP Shop - LoveWithPrint"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo763160b4344041aa94ebc97bd5ba5d54.jpg"
                        alt="LWP Shop - LoveWithPrint"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml76697">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-rakle-glass-works-76666"
                  href="http://malls-online.com/rakle?rType=1&amp;rKey=76666"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_rakle-glass-works_PSC20181024019', 'eventAction': 'Tiklama'});"
                  title="Rakle Glass Works"
                  data-campaignid="76666"
                  data-campaignintegrationcode="PSC20181024019"
                  data-position="208"
                  data-campaignname="9,90 TL'den Başlayan Fiyatlar"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devameden749823500d4e4697b36e48f52aea8749.jpg?q=95"
                      alt="Rakle Glass Works"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/raklef234fae7253f453f91434811c608c0c9.jpg"
                        alt="Rakle Glass Works"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml76666">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-sofranin-yildizlari-89559"
                  href="http://malls-online.com/ev-yasam-kampanya-14?rType=1&amp;rKey=89559"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_sofranin-yildizlari_PSC20200312006', 'eventAction': 'Tiklama'});"
                  title="Sofranın Yıldızları"
                  data-campaignid="89559"
                  data-campaignintegrationcode="PSC20200312006"
                  data-position="209"
                  data-campaignname="%80'e Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni2030cb3a2a7d4647947f091848b33412.jpg?q=95"
                      alt="Sofranın Yıldızları"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo8d0119b3222c4f8abf10950b8957945c.jpg"
                        alt="Sofranın Yıldızları"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml89559">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-alla-turca-79728"
                  href="http://malls-online.com/alla-turca?rType=1&amp;rKey=79728"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_alla-turca_PSC20190214015', 'eventAction': 'Tiklama'});"
                  title="Alla Turca"
                  data-campaignid="79728"
                  data-campaignintegrationcode="PSC20190214015"
                  data-position="210"
                  data-campaignname="%70'e Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni75a7e1bc232646468c2de215f6d67678.jpg?q=95"
                      alt="Alla Turca"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo6e9b21ec42664ff0a3a91fe8cc06dfa3.jpg"
                        alt="Alla Turca"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml79728">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-gant-90936"
                  href="http://malls-online.com/giyim-kampanya-7?ft=100:3120003650&amp;rType=1&amp;rKey=90936"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_gant_PSC20200504002', 'eventAction': 'Tiklama'});"
                  title="Gant"
                  data-campaignid="90936"
                  data-campaignintegrationcode="PSC20200504002"
                  data-position="211"
                  data-campaignname="Gant - Seçili Ürünlerde Sepette %10 İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenie7a126eb11084893a866d4abd72dd24c.jpg?q=95"
                      alt="Gant"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo36077a84d0384762b0d875f45fee57fa.jpg"
                        alt="Gant"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml90936">7 Gün 07:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-topshop-70-e-varan-indirim-90977"
                  href="http://malls-online.com/kampanya/liste/90977/topshop-70-e-varan-indirim?rType=1&amp;rKey=90977"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_topshop-70-e-varan-indirim_PSC20200507002', 'eventAction': 'Tiklama'});"
                  title="Topshop %70'e Varan İndirim"
                  data-campaignid="90977"
                  data-campaignintegrationcode="PSC20200507002"
                  data-position="212"
                  data-campaignname="%70'e Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni6f9d72727d7d484381b57d6902e907d4.jpg?q=95"
                      alt="Topshop %70'e Varan İndirim"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo113bd4fbc00c48ae842ed045ad918eab.jpg"
                        alt="Topshop %70'e Varan İndirim"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml90977">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-doka-yeni-sezon-90471"
                  href="http://malls-online.com/doka?rType=1&amp;rKey=90471"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_doka-yeni-sezon_PSC20200413003', 'eventAction': 'Tiklama'});"
                  title="Doka - Yeni Sezon "
                  data-campaignid="90471"
                  data-campaignintegrationcode="PSC20200413003"
                  data-position="213"
                  data-campaignname="Doka - Yeni Sezon "
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenia53cce788677421b873742efb331d7ab.jpg?q=95"
                      alt="Doka - Yeni Sezon "
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logoa82f44e6dbb84b7ca5ff74cc459596db.jpg"
                        alt="Doka - Yeni Sezon "
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml90471">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-sportive-87206"
                  href="http://malls-online.com/sportive-kampanya-3?ft=100:3120002908&amp;rType=1&amp;rKey=87206"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_sportive_PSC20191204010', 'eventAction': 'Tiklama'});"
                  title="Sportive"
                  data-campaignid="87206"
                  data-campaignintegrationcode="PSC20191204010"
                  data-position="214"
                  data-campaignname="%70'e Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni14d9f6f2e0ac4791a0307ba0e634211d.jpg?q=95"
                      alt="Sportive"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logod30835ed1ff24b0f8315a877d11b19ce.jpg"
                        alt="Sportive"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml87206">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-bilcee-90940"
                  href="http://malls-online.com/spor-giyim-kampanya-31?ft=100:3120002721&amp;rType=1&amp;rKey=90940"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_bilcee_PSC20200504003', 'eventAction': 'Tiklama'});"
                  title="Bilcee"
                  data-campaignid="90940"
                  data-campaignintegrationcode="PSC20200504003"
                  data-position="215"
                  data-campaignname="Sepette %50'ye Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni677a61a082f8432589bfec9be72d1d40.jpg?q=95"
                      alt="Bilcee"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo6356b8bcd77f4a70b77e876a03f73e0c.jpg"
                        alt="Bilcee"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml90940">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-fossil-cuzdan-set-19-99-tl-79-99-tl-90943"
                  href="http://malls-online.com/kampanya/liste/90943/fossil-cuzdan-set-19-99-tl-79-99-tl?rType=1&amp;rKey=90943"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_fossil-cuzdan-set-19-99-tl-79-99-tl_PSC20200505008', 'eventAction': 'Tiklama'});"
                  title="Fossil Cüzdan - Set 19,99 TL - 79,99 TL"
                  data-campaignid="90943"
                  data-campaignintegrationcode="PSC20200505008"
                  data-position="216"
                  data-campaignname="Fossil Cüzdan - Set 19,99 TL - 79,99 TL"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenie7c3ceaaf9d440b09b15d9a3c5bd9b5d.jpg?q=95"
                      alt="Fossil Cüzdan - Set 19,99 TL - 79,99 TL"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo5a3341081d824e6b84fc0c58e540d6c6.jpg"
                        alt="Fossil Cüzdan - Set 19,99 TL - 79,99 TL"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml90943">5 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-makyajda-trend-90825"
                  href="http://malls-online.com/kozmetik-kampanya-21?rType=1&amp;rKey=90825"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_makyajda-trend_PSC20200429011', 'eventAction': 'Tiklama'});"
                  title="Makyajda Trend"
                  data-campaignid="90825"
                  data-campaignintegrationcode="PSC20200429011"
                  data-position="217"
                  data-campaignname="%70 'e Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni4a952fb17fed4411ad10d4d7cdcb28eb.jpg?q=95"
                      alt="Makyajda Trend"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo0395ced8faee4903991144837e7d0103.jpg"
                        alt="Makyajda Trend"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml90825">1 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-evde-sac-bakimi-90366"
                  href="http://malls-online.com/kozmetik-kampanya-17?rType=1&amp;rKey=90366"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_evde-sac-bakimi_PSC20200409003', 'eventAction': 'Tiklama'});"
                  title="Evde Saç Bakımı"
                  data-campaignid="90366"
                  data-campaignintegrationcode="PSC20200409003"
                  data-position="218"
                  data-campaignname="%80 'e Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeniaedea54a124b41919651c6eca66e1781.jpg?q=95"
                      alt="Evde Saç Bakımı"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo7e2bba587e674f778825b32d47dfae94.jpg"
                        alt="Evde Saç Bakımı"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml90366">1 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-styletag-90851"
                  href="http://malls-online.com/ps-kampanya-18?rType=1&amp;rKey=90851"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_styletag_PSC20200501012', 'eventAction': 'Tiklama'});"
                  title="Styletag"
                  data-campaignid="90851"
                  data-campaignintegrationcode="PSC20200501012"
                  data-position="219"
                  data-campaignname="Sepette net %20 indirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenid6c287dea1124e3d9fdbf1504ef8e9af.jpg?q=95"
                      alt="Styletag"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo2eb092430dd440209579782e0a222435.jpg"
                        alt="Styletag"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml90851">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-mizalle-70-e-varan-indirim-90416"
                  href="http://malls-online.com/kadin-modest-pardesu-trenckot?rType=1&amp;rKey=90416"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_mizalle-70-e-varan-indirim_PSC20200410011', 'eventAction': 'Tiklama'});"
                  title="Mizalle - %70'e Varan İndirim"
                  data-campaignid="90416"
                  data-campaignintegrationcode="PSC20200410011"
                  data-position="220"
                  data-campaignname="Mizalle - %70'e Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni67d905616552435c8212d80998acd81a.jpg?q=95"
                      alt="Mizalle - %70'e Varan İndirim"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logoef43584f8d3c4a27afebc83e6be01ad0.jpg"
                        alt="Mizalle - %70'e Varan İndirim"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml90416">4 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-mizalle-sepette-30-indirim-90415"
                  href="http://malls-online.com/kadin-giyim-kampanya-10?rType=1&amp;rKey=90415"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_mizalle-sepette-30-indirim_PSC20200410010', 'eventAction': 'Tiklama'});"
                  title="Mizalle - Sepette %30 İndirim "
                  data-campaignid="90415"
                  data-campaignintegrationcode="PSC20200410010"
                  data-position="221"
                  data-campaignname="Mizalle - Sepette %30 İndirim "
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni8ca19b9b35b74a7cb74095981a9983e3.jpg?q=95"
                      alt="Mizalle - Sepette %30 İndirim "
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logoa6d14bf2d4f844dbbd2475c90c6f6be4.jpg"
                        alt="Mizalle - Sepette %30 İndirim "
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml90415">4 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-koton-50-ye-varan-indirim-90046"
                  href="http://malls-online.com/koton-kampanya-3?ft=100:3120001506&amp;rType=1&amp;rKey=90046"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_koton-50-ye-varan-indirim_PSC20200326017', 'eventAction': 'Tiklama'});"
                  title="Koton - %50'ye Varan İndirim"
                  data-campaignid="90046"
                  data-campaignintegrationcode="PSC20200326017"
                  data-position="222"
                  data-campaignname="Koton - %50'ye Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni0599cc61b053421383d3b561a407c0f4.jpg?q=95"
                      alt="Koton - %50'ye Varan İndirim"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo5ede489c50244f8281a95709910dcf0a.jpg"
                        alt="Koton - %50'ye Varan İndirim"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml90046">4 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-lufian-90604"
                  href="http://malls-online.com/erkek-giyim-kampanya-4?rType=1&amp;rKey=90604"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_lufian_PSC20200418002', 'eventAction': 'Tiklama'});"
                  title="Lufian"
                  data-campaignid="90604"
                  data-campaignintegrationcode="PSC20200418002"
                  data-position="223"
                  data-campaignname="Lufian - Net %70"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni874eb513ae024c30b941a2b945b0e9f6.jpg?q=95"
                      alt="Lufian"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo95e3186075d44a9b9d86bb0d975f21c8.jpg"
                        alt="Lufian"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml90604">4 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-lufian-sezon-90603"
                  href="http://malls-online.com/erkek-giyim-kampanya-13?rType=1&amp;rKey=90603"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_lufian-sezon_PSC20200418001', 'eventAction': 'Tiklama'});"
                  title="Lufian Sezon"
                  data-campaignid="90603"
                  data-campaignintegrationcode="PSC20200418001"
                  data-position="224"
                  data-campaignname="Lufian Sezon - Net %50 İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenibf9c993341464dad8d72a6b8d58a17db.jpg?q=95"
                      alt="Lufian Sezon"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logofe7509a217cc4466b5da61bd8fabb216.jpg"
                        alt="Lufian Sezon"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml90603">4 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-kigili-sepette-10-89955"
                  href="http://malls-online.com/erkek-giyim-kampanya-6?rType=1&amp;rKey=89955"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_kigili-sepette-10_PSC20200323010', 'eventAction': 'Tiklama'});"
                  title="Kiğılı Sepette %10"
                  data-campaignid="89955"
                  data-campaignintegrationcode="PSC20200323010"
                  data-position="225"
                  data-campaignname="Sepette %10 Esktra İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenic653f4a7f0294b4a99eb9ddceeb7c743.jpg?q=95"
                      alt="Kiğılı Sepette %10"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logoa37e3f0879d94fb79d38425c739c4d4a.jpg"
                        alt="Kiğılı Sepette %10"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml89955">4 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-kigili-89944"
                  href="http://malls-online.com/erkek-giyim-kampanya-12?rType=1&amp;rKey=89944"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_kigili_PSC20200324012', 'eventAction': 'Tiklama'});"
                  title="Kiğılı"
                  data-campaignid="89944"
                  data-campaignintegrationcode="PSC20200324012"
                  data-position="226"
                  data-campaignname="2. Ürüne Sepette %60 İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenic5bc59161f5e441db79cbed25fd07572.jpg?q=95"
                      alt="Kiğılı"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logoc38999a9db1341c5a5ebd57278cf976e.jpg"
                        alt="Kiğılı"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml89944">4 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-hemington-sezon-90800"
                  href="http://malls-online.com/kampanya/liste/90800/hemington-sezon?rType=1&amp;rKey=90800"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_hemington-sezon_PSC20200430002', 'eventAction': 'Tiklama'});"
                  title="Hemington Sezon"
                  data-campaignid="90800"
                  data-campaignintegrationcode="PSC20200430002"
                  data-position="227"
                  data-campaignname="Net %30 İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni6b30d5e417d443a89ac2144a5e9fb346.jpg?q=95"
                      alt="Hemington Sezon"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo793358336743432095661c57f7c9712b.jpg"
                        alt="Hemington Sezon"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml90800">4 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-wessi-90445"
                  href="http://malls-online.com/giyim-kampanya-46?ft=100:3120003438&amp;rType=1&amp;rKey=90445"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_wessi_PSC20200413001', 'eventAction': 'Tiklama'});"
                  title="Wessi"
                  data-campaignid="90445"
                  data-campaignintegrationcode="PSC20200413001"
                  data-position="228"
                  data-campaignname="Wessi - Sepette Ekstra %20 İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni0be49ba5ee134580a32d38f6bc0ddc4d.jpg?q=95"
                      alt="Wessi"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logob8b9a357adfb471ca3540b1f90aed477.jpg"
                        alt="Wessi"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml90445">4 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-koton-koton-kids-88204"
                  href="http://malls-online.com/koton-tum-urunler?ft=100:3120001506&amp;rType=1&amp;rKey=88204"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_koton-koton-kids_PSC20200117005', 'eventAction': 'Tiklama'});"
                  title="Koton- Koton Kids"
                  data-campaignid="88204"
                  data-campaignintegrationcode="PSC20200117005"
                  data-position="229"
                  data-campaignname="Koton- Koton Kids"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenibf47554c1692478ca0d6aff8e55899a1.jpg?q=95"
                      alt="Koton- Koton Kids"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logoda3e2ee009ab4e27b321eb43095a6522.jpg"
                        alt="Koton- Koton Kids"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml88204">4 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-cache-the-bag-90850"
                  href="http://malls-online.com/kadin-giyim-aksesuar-kampanya-17?rType=1&amp;rKey=90850"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_cache-the-bag_PSC20200501011', 'eventAction': 'Tiklama'});"
                  title="Cache The Bag"
                  data-campaignid="90850"
                  data-campaignintegrationcode="PSC20200501011"
                  data-position="230"
                  data-campaignname="Sepette %40'a Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni65e26471dead49e3b8dc1fceafc89de3.jpg?q=95"
                      alt="Cache The Bag"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo16ba870a255343b086387ccf064d6c5f.jpg"
                        alt="Cache The Bag"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml90850">5 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-hemington-90799"
                  href="http://malls-online.com/kampanya/liste/90799/hemington?rType=1&amp;rKey=90799"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_hemington_PSC20200430001', 'eventAction': 'Tiklama'});"
                  title="Hemington"
                  data-campaignid="90799"
                  data-campaignintegrationcode="PSC20200430001"
                  data-position="231"
                  data-campaignname="%70'e Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenifd7d202fa5d141ef9580d3c1c9aa4361.jpg?q=95"
                      alt="Hemington"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logof4289d7c092d448eb04d0e763fbe1df9.jpg"
                        alt="Hemington"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml90799">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-koton-kids-65-e-varan-indirim-90794"
                  href="http://malls-online.com/kampanya/arama?q=koton&amp;qcat=internal&amp;ft=1057%3A33289%2C33377%2C33324%2C33371&amp;sr=5&amp;rType=1&amp;rKey=90794"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_koton-kids-65-e-varan-indirim_PSC20200429005', 'eventAction': 'Tiklama'});"
                  title="Koton Kids %65'e Varan İndirim"
                  data-campaignid="90794"
                  data-campaignintegrationcode="PSC20200429005"
                  data-position="232"
                  data-campaignname="%65'e Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni2ca86a8ac8fd4f60a91db5bf8431eecc.jpg?q=95"
                      alt="Koton Kids %65'e Varan İndirim"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo28388f0dafc84f62a0c3588807588f44.jpg"
                        alt="Koton Kids %65'e Varan İndirim"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml90794">4 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-avva-yeni-sezon-90432"
                  href="http://malls-online.com/avva-kampanya-2?ft=100:3120004809&amp;rType=1&amp;rKey=90432"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_avva-yeni-sezon_PSC20200411001', 'eventAction': 'Tiklama'});"
                  title="AVVA Yeni sezon"
                  data-campaignid="90432"
                  data-campaignintegrationcode="PSC20200411001"
                  data-position="233"
                  data-campaignname="AVVA Yeni Sezon"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni2101969def6e43099aa74ac96155438d.jpg?q=95"
                      alt="AVVA Yeni sezon"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo04fd43fa254544c7b2fbde812c340ffd.jpg"
                        alt="AVVA Yeni sezon"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml90432">4 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-defacto-maksimum-19-99-tl-90351"
                  href="http://malls-online.com/giyim-kampanya-22?ft=100:3120001745&amp;rType=1&amp;rKey=90351"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_defacto-maksimum-19-99-tl_PSC20200407018', 'eventAction': 'Tiklama'});"
                  title="DeFacto- Maksimum 19,99 TL"
                  data-campaignid="90351"
                  data-campaignintegrationcode="PSC20200407018"
                  data-position="234"
                  data-campaignname="DeFacto- Maksimum 19,99 TL"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni8f06c81376844978bf77348cac027c4f.jpg?q=95"
                      alt="DeFacto- Maksimum 19,99 TL"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logod6dd55b88cbc452483991925f7827293.jpg"
                        alt="DeFacto- Maksimum 19,99 TL"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml90351">4 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-defacto-maksimum-29-99-tl-90347"
                  href="http://malls-online.com/giyim-kampanya-21?ft=100:3120001745&amp;rType=1&amp;rKey=90347"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_defacto-maksimum-29-99-tl_PSC20200408007', 'eventAction': 'Tiklama'});"
                  title="DeFacto- Maksimum 29,99 TL"
                  data-campaignid="90347"
                  data-campaignintegrationcode="PSC20200408007"
                  data-position="235"
                  data-campaignname="DeFacto- Maksimum 29,99 TL"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni280ea759ebca402c9bed0f0090cd4edc.jpg?q=95"
                      alt="DeFacto- Maksimum 29,99 TL"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo9ee840375aca4118ab90d951d2d1c52a.jpg"
                        alt="DeFacto- Maksimum 29,99 TL"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml90347">4 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-stamina-yeni-sezon-90336"
                  href="http://malls-online.com/kadin-giyim-kampanya-27?rType=1&amp;rKey=90336"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_stamina-yeni-sezon_PSC20200407017', 'eventAction': 'Tiklama'});"
                  title="Stamina- Yeni Sezon "
                  data-campaignid="90336"
                  data-campaignintegrationcode="PSC20200407017"
                  data-position="236"
                  data-campaignname="Stamina| Yeni Sezon-Kargo Bedava"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenibc15ef5be08e48649939a21cc5506376.jpg?q=95"
                      alt="Stamina- Yeni Sezon "
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logod4da3924422b42ef95c57387dddaf658.jpg"
                        alt="Stamina- Yeni Sezon "
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml90336">5 Gün 02:01:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-george-hogg-sezon-90142"
                  href="http://malls-online.com/george-hogg-kampanya-2?rType=1&amp;rKey=90142"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_george-hogg-sezon_PSC20200331023', 'eventAction': 'Tiklama'});"
                  title="George Hogg Sezon"
                  data-campaignid="90142"
                  data-campaignintegrationcode="PSC20200331023"
                  data-position="237"
                  data-campaignname="George Hogg Yeni sezon"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeniadbaa7027f234a4d91a2b63ddbc5c2ca.jpg?q=95"
                      alt="George Hogg Sezon"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo78cf7f9445024ef4943a6203f8b3ebec.jpg"
                        alt="George Hogg Sezon"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml90142">4 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-defacto-yeni-sezon-89694"
                  href="http://malls-online.com/giyim-kampanya-23?ft=100:3120001745&amp;rType=1&amp;rKey=89694"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_defacto-yeni-sezon_PSC20200318002', 'eventAction': 'Tiklama'});"
                  title="DeFacto| Yeni Sezon"
                  data-campaignid="89694"
                  data-campaignintegrationcode="PSC20200318002"
                  data-position="238"
                  data-campaignname="DeFacto| Yeni Sezon"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenifa0009acfc2f4b9091664f28eae90db1.jpg?q=95"
                      alt="DeFacto| Yeni Sezon"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo3ba539aebf4a4ad2ad199f6df720f10a.jpg"
                        alt="DeFacto| Yeni Sezon"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml89694">4 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-tiffany-tomato-net-20-indirim-89638"
                  href="http://malls-online.com/kadin-giyim-aksesuar-kampanya-12?ft=100:3120004870&amp;rType=1&amp;rKey=89638"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_tiffany-tomato-net-20-indirim_PSC20200314013', 'eventAction': 'Tiklama'});"
                  title="Tiffany&amp;Tomato -Net %20 İndirim"
                  data-campaignid="89638"
                  data-campaignintegrationcode="PSC20200314013"
                  data-position="239"
                  data-campaignname="Tiffany&amp;Tomato -Net %20 İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni798a311d954c4e1187a005d6cdea7d51.jpg?q=95"
                      alt="Tiffany&amp;Tomato -Net %20 İndirim"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logocf5ad233bd2b44e1858aff57ceae4f0f.jpg"
                        alt="Tiffany&amp;Tomato -Net %20 İndirim"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml89638">4 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-benetton-kids-89462"
                  href="http://malls-online.com/benetton?ft=1057:33289,33377,33324&amp;rType=1&amp;rKey=89462"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_benetton-kids_PSC20200310006', 'eventAction': 'Tiklama'});"
                  title="Benetton Kids"
                  data-campaignid="89462"
                  data-campaignintegrationcode="PSC20200310006"
                  data-position="240"
                  data-campaignname="Benetton Kids"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni35b1ea9d512042ac84b3acc44f3410de.jpg?q=95"
                      alt="Benetton Kids"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logob64c8ac3bf3b47e0b24e5c5261526047.jpg"
                        alt="Benetton Kids"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml89462">4 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-lescon-kids-65-e-varan-indirim-89405"
                  href="http://malls-online.com/lescon/cocuk/4/44933/marka?sr=5&amp;rType=1&amp;rKey=89405"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_lescon-kids-65-e-varan-indirim_PSC20200307008', 'eventAction': 'Tiklama'});"
                  title="Lescon Kids %65'e Varan İndirim"
                  data-campaignid="89405"
                  data-campaignintegrationcode="PSC20200307008"
                  data-position="241"
                  data-campaignname="Lescon Kids %65'e Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenidbb4143808f541f586aa8baaf333521a.jpg?q=95"
                      alt="Lescon Kids %65'e Varan İndirim"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logodc1f539c94764a53a652d4fa5afbca54.jpg"
                        alt="Lescon Kids %65'e Varan İndirim"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml89405">4 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-toysall-ozel-fiyatlar-88992"
                  href="http://malls-online.com/toysall?rType=1&amp;rKey=88992"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_toysall-ozel-fiyatlar_PSC20200221002', 'eventAction': 'Tiklama'});"
                  title="Toysall - Özel Fiyatlar"
                  data-campaignid="88992"
                  data-campaignintegrationcode="PSC20200221002"
                  data-position="242"
                  data-campaignname="Toysall - Özel Fiyatlar"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenif57e7ad041ab401f82521bc020dbbd5b.jpg?q=95"
                      alt="Toysall - Özel Fiyatlar"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logoe4df05c5c23f450781eb4d2d2c2aa138.jpg"
                        alt="Toysall - Özel Fiyatlar"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml88992">4 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-camper-kids-65-e-varan-indirim-88405"
                  href="http://malls-online.com/camper/cocuk/4/32762/marka?rType=1&amp;rKey=88405"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_camper-kids-65-e-varan-indirim_PSC20200128001', 'eventAction': 'Tiklama'});"
                  title="Camper Kids %65'e Varan İndirim"
                  data-campaignid="88405"
                  data-campaignintegrationcode="PSC20200128001"
                  data-position="243"
                  data-campaignname="Camper Kids %65'e Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni64543bb95b3a4c168f5a6b23e27a592d.jpg?q=95"
                      alt="Camper Kids %65'e Varan İndirim"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo8a28c888b32e4385966db70977a25f77.jpg"
                        alt="Camper Kids %65'e Varan İndirim"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml88405">4 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-dekoratif-cocuk-odalari-88202"
                  href="http://malls-online.com/cocuk-bebek-odasi?ft=1057:33261,33289,33377,33324,33371&amp;rType=1&amp;rKey=88202"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_dekoratif-cocuk-odalari_PSC20200116014', 'eventAction': 'Tiklama'});"
                  title="Dekoratif Çocuk Odaları"
                  data-campaignid="88202"
                  data-campaignintegrationcode="PSC20200116014"
                  data-position="244"
                  data-campaignname="Dekoratif Çocuk Odaları"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni0e4984509f42457a879cb2ca8670139c.jpg?q=95"
                      alt="Dekoratif Çocuk Odaları"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logof528a75b446a4a029aac415f18fa7565.jpg"
                        alt="Dekoratif Çocuk Odaları"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml88202">4 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-d-s-damat-twn-88000"
                  href="http://malls-online.com/dsdamat-damat-tween-twn-kampanya?rType=1&amp;rKey=88000"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_d-s-damat-twn_PSC20200108011', 'eventAction': 'Tiklama'});"
                  title="D'S Damat - TWN"
                  data-campaignid="88000"
                  data-campaignintegrationcode="PSC20200108011"
                  data-position="245"
                  data-campaignname="D'S Damat - TWN - Sepette Ekstra %55 İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni3dfdc1967873432282fcd00f29c8f474.jpg?q=95"
                      alt="D'S Damat - TWN"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo051ea13e1a27424da92dac3e1c746b2c.jpg"
                        alt="D'S Damat - TWN"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml88000">4 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-timberland-columbia-kids-87850"
                  href="http://malls-online.com/tum-urunler?ft=1057:33289,33324,33371;1059:41851,44882&amp;rType=1&amp;rKey=87850"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_timberland-columbia-kids_PSC20191231012', 'eventAction': 'Tiklama'});"
                  title="Timberland-Columbia Kids "
                  data-campaignid="87850"
                  data-campaignintegrationcode="PSC20191231012"
                  data-position="246"
                  data-campaignname="Timberland-Columbia Kids Özel Fiyatlar"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni0e99d8fa4f104701b930a397db4ab99e.jpg?q=95"
                      alt="Timberland-Columbia Kids "
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logocbd011aa4e9c47db8e7c2385e2a1338e.jpg"
                        alt="Timberland-Columbia Kids "
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml87850">4 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-rue-ozel-fiyatlar-87813"
                  href="http://malls-online.com/kadin-giyim-kampanya-11?rType=1&amp;rKey=87813"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_rue-ozel-fiyatlar_PSC20191228010', 'eventAction': 'Tiklama'});"
                  title="Rue Özel Fiyatlar "
                  data-campaignid="87813"
                  data-campaignintegrationcode="PSC20191228010"
                  data-position="247"
                  data-campaignname="Rue Özel Fiyatlar "
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devameden_YENI28dbf60301094c2085d12e6a30643a84.jpg?q=95"
                      alt="Rue Özel Fiyatlar "
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo1ba09278a3044607916d092072ebbd74.jpg"
                        alt="Rue Özel Fiyatlar "
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml87813">4 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-koton-her-sey-maksimum-29-99-tl-87767"
                  href="http://malls-online.com/koton?pr=0%2C30&amp;rType=1&amp;rKey=87767"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_koton-her-sey-maksimum-29-99-tl_PSC20191227016', 'eventAction': 'Tiklama'});"
                  title="Koton Her Şey Maksimum 29,99 TL"
                  data-campaignid="87767"
                  data-campaignintegrationcode="PSC20191227016"
                  data-position="248"
                  data-campaignname="Koton Her Şey Maksimum 29,99 TL"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devameden_YENI36c9212edc994d2cbf0f047483048358.jpg?q=95"
                      alt="Koton Her Şey Maksimum 29,99 TL"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logob59c3fd2a25044228f9924e70cc6efd7.jpg"
                        alt="Koton Her Şey Maksimum 29,99 TL"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml87767">5 Gün 04:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-first-step-l-ozel-fiyatlarla-87683"
                  href="http://malls-online.com/first-step?rType=1&amp;rKey=87683"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_first-step-l-ozel-fiyatlarla_PSC20191225002', 'eventAction': 'Tiklama'});"
                  title="First Step l Özel Fiyatlarla"
                  data-campaignid="87683"
                  data-campaignintegrationcode="PSC20191225002"
                  data-position="249"
                  data-campaignname="First Step l Özel Fiyatlarla"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni7eb4fbb4aaef4dc2a2c06dddd3e137e5.jpg?q=95"
                      alt="First Step l Özel Fiyatlarla"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logoa961f26e0b7a45e8a16b879db8217506.jpg"
                        alt="First Step l Özel Fiyatlarla"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml87683">4 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-her-bedende-siklik-87032"
                  href="http://malls-online.com/giyim-kampanya-6?rType=1&amp;rKey=87032"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_her-bedende-siklik_PSC20191127010', 'eventAction': 'Tiklama'});"
                  title="Her Bedende Şıklık"
                  data-campaignid="87032"
                  data-campaignintegrationcode="PSC20191127010"
                  data-position="250"
                  data-campaignname="Her Bedende Şıklık"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenic3b0c0f7e1c6451a8cecbb418bd3091a.jpg?q=95"
                      alt="Her Bedende Şıklık"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo28f40118205940c29c01ac9865ffa1d9.jpg"
                        alt="Her Bedende Şıklık"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml87032">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-nike-kids-86815"
                  href="http://malls-online.com/cocuk-kampanya-8?rType=1&amp;rKey=86815"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_nike-kids_PSC20191123001', 'eventAction': 'Tiklama'});"
                  title="Nike Kids "
                  data-campaignid="86815"
                  data-campaignintegrationcode="PSC20191123001"
                  data-position="251"
                  data-campaignname="%50'ye Varan İndirim!"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni0eadc80520fd44d9802449f16600c500.jpg?q=95"
                      alt="Nike Kids "
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logof88c5b0927814b05b15b605e97195d0a.jpg"
                        alt="Nike Kids "
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml86815">4 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-oyuncakta-cok-satanlar-86601"
                  href="http://malls-online.com/cocuk-oyuncak?rType=1&amp;rKey=86601"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_oyuncakta-cok-satanlar_PSC20191115004', 'eventAction': 'Tiklama'});"
                  title="Oyuncakta Çok Satanlar"
                  data-campaignid="86601"
                  data-campaignintegrationcode="PSC20191115004"
                  data-position="252"
                  data-campaignname="Oyuncaklarda Çok Satanlar %40'a Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni16a11422347d482d8f31e77804cb254a.jpg?q=95"
                      alt="Oyuncakta Çok Satanlar"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo10827f6405b84c91bedda1d621db9950.jpg"
                        alt="Oyuncakta Çok Satanlar"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml86601">4 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-cocuklar-icin-aradiginiz-her-sey-86598"
                  href="http://malls-online.com/happy-center?rType=1&amp;rKey=86598"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_cocuklar-icin-aradiginiz-her-sey_PSC20191115001', 'eventAction': 'Tiklama'});"
                  title="Çocuklar İçin Aradığınız Her Şey"
                  data-campaignid="86598"
                  data-campaignintegrationcode="PSC20191115001"
                  data-position="253"
                  data-campaignname="%40'a Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni6829867b29be4ad3bffa2113ec77b889.jpg?q=95"
                      alt="Çocuklar İçin Aradığınız Her Şey"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo29411457aad64839b7064c9fedf6007c.jpg"
                        alt="Çocuklar İçin Aradığınız Her Şey"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml86598">4 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-morhipoxsudi-etuz-86371"
                  href="http://malls-online.com/ps-kampanya-15?rType=1&amp;rKey=86371"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_morhipoxsudi-etuz_PSC20191108037', 'eventAction': 'Tiklama'});"
                  title="Morhipoxsudi etuz"
                  data-campaignid="86371"
                  data-campaignintegrationcode="PSC20191108037"
                  data-position="254"
                  data-campaignname="Morhipoxsudi etuz"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni5cb6dc3e7b204c69b0f03404c8331251.jpg?q=95"
                      alt="Morhipoxsudi etuz"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo064b464fef05435586d0ba3242ff137b.jpg"
                        alt="Morhipoxsudi etuz"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml86371">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-deno-kids-l-yeni-sezon-85804"
                  href="http://malls-online.com/deno-kids?rType=1&amp;rKey=85804"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_deno-kids-l-yeni-sezon_PSC20191022002', 'eventAction': 'Tiklama'});"
                  title="Deno Kids l Yeni Sezon"
                  data-campaignid="85804"
                  data-campaignintegrationcode="PSC20191022002"
                  data-position="255"
                  data-campaignname="Deno Kids l Yeni Sezon"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni0b5e99dba21642b0b7587052ce3e7d5a.jpg?q=95"
                      alt="Deno Kids l Yeni Sezon"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo2caead53208a489ab3cfed00d7d100b1.jpg"
                        alt="Deno Kids l Yeni Sezon"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml85804">4 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-mushi-l-yeni-sezon-85803"
                  href="http://malls-online.com/mushi?rType=1&amp;rKey=85803"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_mushi-l-yeni-sezon_PSC20191022001', 'eventAction': 'Tiklama'});"
                  title="Mushi l Yeni Sezon"
                  data-campaignid="85803"
                  data-campaignintegrationcode="PSC20191022001"
                  data-position="256"
                  data-campaignname="Mushi l Yeni Sezon"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni51899289914a4c5585cf30a4ff44a3d5.jpg?q=95"
                      alt="Mushi l Yeni Sezon"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo7c459b9d0bea41ac90ce31a0ad81f779.jpg"
                        alt="Mushi l Yeni Sezon"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml85803">4 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-ollie-olla-85737"
                  href="http://malls-online.com/ollie-olla?rType=1&amp;rKey=85737"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_ollie-olla_PSC20191018001', 'eventAction': 'Tiklama'});"
                  title="Ollie&amp;Olla"
                  data-campaignid="85737"
                  data-campaignintegrationcode="PSC20191018001"
                  data-position="257"
                  data-campaignname="Yeni Sezon"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni6d30098c04644c46a6316790ba7185e8.jpg?q=95"
                      alt="Ollie&amp;Olla"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo25297868428040809af98f50f76d45ab.jpg"
                        alt="Ollie&amp;Olla"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml85737">4 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-spider-man-84760"
                  href="http://malls-online.com/spider-man?rType=1&amp;rKey=84760"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_spider-man_PSC20190912004', 'eventAction': 'Tiklama'});"
                  title="Spider-Man"
                  data-campaignid="84760"
                  data-campaignintegrationcode="PSC20190912004"
                  data-position="258"
                  data-campaignname="Özel Fiyatlarla!"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devameden_YENIa1b91a75904145f49e762511328e25d5.jpg?q=95"
                      alt="Spider-Man"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo_1716cdb443b36e4e79ac94170821097520.jpg"
                        alt="Spider-Man"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml84760">4 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-kirtasiye-84658"
                  href="http://malls-online.com/kirtasiye?rType=1&amp;rKey=84658"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_kirtasiye_PSC20190910004', 'eventAction': 'Tiklama'});"
                  title="Kırtasiye"
                  data-campaignid="84658"
                  data-campaignintegrationcode="PSC20190910004"
                  data-position="259"
                  data-campaignname="Özel Fiyatlarla!"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni9180795d44e743609e0a12535e505507.jpg?q=95"
                      alt="Kırtasiye"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logoc468c94a3c1548bfbbfc4b32e8437d1a.jpg"
                        alt="Kırtasiye"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml84658">4 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-funko-84276"
                  href="http://malls-online.com/funko/cocuk/4/140107/marka?rType=1&amp;rKey=84276"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_funko_PSC20190824014', 'eventAction': 'Tiklama'});"
                  title="Funko"
                  data-campaignid="84276"
                  data-campaignintegrationcode="PSC20190824014"
                  data-position="260"
                  data-campaignname="Funko Özel Fiyatlar"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni2c570a98fa6540fd80d7c82f71767b9b.jpg?q=95"
                      alt="Funko"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo4a85d1a283ce4a32854c9d1847ab0c3e.jpg"
                        alt="Funko"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml84276">4 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-barbie-83908"
                  href="http://malls-online.com/barbie/cocuk/4/33308/marka?sr=4&amp;rType=1&amp;rKey=83908"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_barbie_PSC20190808017', 'eventAction': 'Tiklama'});"
                  title="Barbie"
                  data-campaignid="83908"
                  data-campaignintegrationcode="PSC20190808017"
                  data-position="261"
                  data-campaignname="Barbie %85'e varan İndirim!"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni153c712c5e6c4ecb94425e47a2a159ad.jpg?q=95"
                      alt="Barbie"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo5cc135ac9a464e4ab60bb3ed0c591012.jpg"
                        alt="Barbie"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml83908">4 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-oyuncak-firsatlari-83650"
                  href="http://malls-online.com/cocuk-kampanya-2?rType=1&amp;rKey=83650"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_oyuncak-firsatlari_PSC20190730005', 'eventAction': 'Tiklama'});"
                  title="Oyuncak Fırsatları"
                  data-campaignid="83650"
                  data-campaignintegrationcode="PSC20190730005"
                  data-position="262"
                  data-campaignname="Oyuncak Fırsatları"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devameden43f8585ca2b04458a0cdd59fbf249aeb.jpg?q=95"
                      alt="Oyuncak Fırsatları"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/playdoh_fisherprice_lego4b48746bf757439fbe581b86db011ef5.jpg"
                        alt="Oyuncak Fırsatları"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml83650">4 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-instreet-kids-83416"
                  href="http://malls-online.com/instreet?ft=1057%3A33289%2C33324&amp;rType=1&amp;rKey=83416"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_instreet-kids_PSC20190720001', 'eventAction': 'Tiklama'});"
                  title="Instreet Kids"
                  data-campaignid="83416"
                  data-campaignintegrationcode="PSC20190720001"
                  data-position="263"
                  data-campaignname="Instreet Kids"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenic9950f2326fa4675ac4428e105ccbe8a.jpg?q=95"
                      alt="Instreet Kids"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo8a227f0627aa4d6caccdb90d367af045.jpg"
                        alt="Instreet Kids"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml83416">4 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-slipstop-crocs-birkenstock-82187"
                  href="http://malls-online.com/tum-urunler?ft=1059%3A126265%2C153959%2C56694%3B1057%3A33289%2C33377%2C33324%2C33371&amp;ps=120&amp;rType=1&amp;rKey=82187"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_slipstop-crocs-birkenstock_PSC20190523012', 'eventAction': 'Tiklama'});"
                  title="Slipstop-Crocs-Birkenstock"
                  data-campaignid="82187"
                  data-campaignintegrationcode="PSC20190523012"
                  data-position="264"
                  data-campaignname="Slipstop-Crocs-Birkenstock"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devamedena6f3f3cd9d234e57bf5bfd7e054d211e.jpg?q=95"
                      alt="Slipstop-Crocs-Birkenstock"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/slipstop_birkenstock_crocs64c32c0fd7ba40119acbee3d7a7694cd.jpg"
                        alt="Slipstop-Crocs-Birkenstock"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml82187">4 Gün 15:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-koton-kids-82157"
                  href="http://malls-online.com/koton-kids?rType=1&amp;rKey=82157"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_koton-kids_PSC20190522017', 'eventAction': 'Tiklama'});"
                  title="Koton Kids "
                  data-campaignid="82157"
                  data-campaignintegrationcode="PSC20190522017"
                  data-position="265"
                  data-campaignname="Koton Kids | Özel Fiyatlarla"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devameden_YENI6e6bae0d3f654bd595b677593d6af056.jpg?q=95"
                      alt="Koton Kids "
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo696f62ce5444429dad14ff21e3d7bf8e.jpg"
                        alt="Koton Kids "
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml82157">4 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-flo-kids-81512"
                  href="http://malls-online.com/flo?ps=240&amp;ft=1057%3A33289%2C33324&amp;sr=5&amp;rType=1&amp;rKey=81512"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_flo-kids_PSC20190426026', 'eventAction': 'Tiklama'});"
                  title="Flo Kids"
                  data-campaignid="81512"
                  data-campaignintegrationcode="PSC20190426026"
                  data-position="266"
                  data-campaignname="%60'a varan indirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devameden_YENIedf5dbf1b6c44b5f8c8cb5a8748fa905.jpg?q=95"
                      alt="Flo Kids"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo570262eda6064f7c89f283ead39b97d5.jpg"
                        alt="Flo Kids"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml81512">4 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-kacirilmayacak-outlet-firsatlari-90868"
                  href="http://malls-online.com/kampanya/liste/90868/kacirilmayacak-outlet-firsatlari?rType=1&amp;rKey=90868"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_kacirilmayacak-outlet-firsatlari_PSC20200430016', 'eventAction': 'Tiklama'});"
                  title="Kaçırılmayacak Outlet Fırsatları"
                  data-campaignid="90868"
                  data-campaignintegrationcode="PSC20200430016"
                  data-position="267"
                  data-campaignname="Kaçırılmayacak Outlet Fırsatları"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenidca6f8c1c42c4bc89d3b1650f945edfc.jpg?q=95"
                      alt="Kaçırılmayacak Outlet Fırsatları"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logod85c276f18f444ca95ddaf7fba4dd56b.jpg"
                        alt="Kaçırılmayacak Outlet Fırsatları"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml90868">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-lescon-88935"
                  href="http://malls-online.com/lescon?ft=100:3120005214&amp;rType=1&amp;rKey=88935"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_lescon_PSC20200219007', 'eventAction': 'Tiklama'});"
                  title="Lescon"
                  data-campaignid="88935"
                  data-campaignintegrationcode="PSC20200219007"
                  data-position="268"
                  data-campaignname="%70'e Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni9d5beb8afaaa468ea3d704fccd02121e.jpg?q=95"
                      alt="Lescon"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo43578968c95142618a5c70a506bab2e1.jpg"
                        alt="Lescon"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml88935">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-vans-87439"
                  href="http://malls-online.com/vans?rType=1&amp;rKey=87439"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_vans_PSC20191214013', 'eventAction': 'Tiklama'});"
                  title="Vans"
                  data-campaignid="87439"
                  data-campaignintegrationcode="PSC20191214013"
                  data-position="269"
                  data-campaignname="%50'ye Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni0578c518bff24fa6b645db7a7806240e.jpg?q=95"
                      alt="Vans"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo0b7fac0209504eacbeebfd2d199f1322.jpg"
                        alt="Vans"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml87439">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-foremia-90809"
                  href="http://malls-online.com/kadin-giyim-kampanya-18?ft=100:3120005191&amp;rType=1&amp;rKey=90809"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_foremia_PSC20200430005', 'eventAction': 'Tiklama'});"
                  title="Foremia"
                  data-campaignid="90809"
                  data-campaignintegrationcode="PSC20200430005"
                  data-position="270"
                  data-campaignname="Sepette %25 İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenif0170a9cb707472b9a275b9f691cb956.jpg?q=95"
                      alt="Foremia"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo0947c5427611427a85224b7073826bdc.jpg"
                        alt="Foremia"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml90809">4 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-tophills-90801"
                  href="http://malls-online.com/kampanya/liste/90801/tophills?rType=1&amp;rKey=90801"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_tophills_PSC20200429009', 'eventAction': 'Tiklama'});"
                  title="TopHılls"
                  data-campaignid="90801"
                  data-campaignintegrationcode="PSC20200429009"
                  data-position="271"
                  data-campaignname="%60’a Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni1b755447e05d434d94dbdefc2d76d0a3.jpg?q=95"
                      alt="TopHılls"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo6b9d77fbb16e47c2ab37845a04d7cf31.jpg"
                        alt="TopHılls"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml90801">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-meltem-ozbek-90796"
                  href="http://malls-online.com/geelong-australia?rType=1&amp;rKey=90796"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_meltem-ozbek_PSC20200429007', 'eventAction': 'Tiklama'});"
                  title="Meltem Özbek"
                  data-campaignid="90796"
                  data-campaignintegrationcode="PSC20200429007"
                  data-position="272"
                  data-campaignname="Meltem Özbek | Sepette %20 İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenicdb8bf9035294d0486203341e500802c.jpg?q=95"
                      alt="Meltem Özbek"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo1a01fa94693e42bebf28352621ef8219.jpg"
                        alt="Meltem Özbek"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml90796">5 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-esra-gurses-90795"
                  href="http://malls-online.com/esra-gurses?rType=1&amp;rKey=90795"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_esra-gurses_PSC20200429006', 'eventAction': 'Tiklama'});"
                  title="Esra Gürses"
                  data-campaignid="90795"
                  data-campaignintegrationcode="PSC20200429006"
                  data-position="273"
                  data-campaignname="Sepette %15 İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenif00681504d1748c7a178ab0fab766f76.jpg?q=95"
                      alt="Esra Gürses"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo0219ad1f5c5b4e88a0e3de394812eab1.jpg"
                        alt="Esra Gürses"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml90795">5 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-sunshine-taki-90784"
                  href="http://malls-online.com/aksesuar-kampanya-29?rType=1&amp;rKey=90784"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_sunshine-taki_PSC20200428014', 'eventAction': 'Tiklama'});"
                  title="Sunshine Takı"
                  data-campaignid="90784"
                  data-campaignintegrationcode="PSC20200428014"
                  data-position="274"
                  data-campaignname="Net %50 İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni4580d0b025ed4280a8ae151f9c0783b6.jpg?q=95"
                      alt="Sunshine Takı"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo898fad0775214b7b991a0fadc8d744f3.jpg"
                        alt="Sunshine Takı"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml90784">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-pembe-potin-90302"
                  href="http://malls-online.com/pembe-potin?rType=1&amp;rKey=90302"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_pembe-potin_PSC20200407002', 'eventAction': 'Tiklama'});"
                  title="Pembe Potin"
                  data-campaignid="90302"
                  data-campaignintegrationcode="PSC20200407002"
                  data-position="275"
                  data-campaignname="Pembe Potin"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni2f9e9bdc61b04a49a8e3e09d6c37f616.jpg?q=95"
                      alt="Pembe Potin"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logoce979ef9277c4c618a3d5ed8431d96bf.jpg"
                        alt="Pembe Potin"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml90302">4 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-muggo-86786"
                  href="http://malls-online.com/chiccy-deco-life?ft=100:3120004951&amp;rType=1&amp;rKey=86786"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_muggo_PSC20191122010', 'eventAction': 'Tiklama'});"
                  title="Muggo"
                  data-campaignid="86786"
                  data-campaignintegrationcode="PSC20191122010"
                  data-position="276"
                  data-campaignname="Sepette %35 İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenif302f1f410654c1ba80daa9e62368824.jpg?q=95"
                      alt="Muggo"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logod7048443decc426aa0ec0a19d050831b.jpg"
                        alt="Muggo"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml86786">4 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-nautica-87025"
                  href="http://malls-online.com/giyim-kampanya-8?ft=100:3120004963&amp;rType=1&amp;rKey=87025"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_nautica_PSC20191129005', 'eventAction': 'Tiklama'});"
                  title="Nautica"
                  data-campaignid="87025"
                  data-campaignintegrationcode="PSC20191129005"
                  data-position="277"
                  data-campaignname="Nautica - Seçili Ürünlerde Sepette %30 İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni38ff8939b6514e389ba3bcbb5ac4a937.jpg?q=95"
                      alt="Nautica"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logoa7df44e10f58431a8e418e042d4dcc59.jpg"
                        alt="Nautica"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml87025">8 Gün 15:37:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-vizon-canta-90737"
                  href="http://malls-online.com/canta-kampanya-9?rType=1&amp;rKey=90737"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_vizon-canta_PSC20200425003', 'eventAction': 'Tiklama'});"
                  title="Vizon Çanta"
                  data-campaignid="90737"
                  data-campaignintegrationcode="PSC20200425003"
                  data-position="278"
                  data-campaignname="Sepette %15 İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni1ef70cd2ab094188ac689a789d50c137.jpg?q=95"
                      alt="Vizon Çanta"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logof74df187371a401591225468bb1ca076.jpg"
                        alt="Vizon Çanta"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml90737">4 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-note-cosmetice-88886"
                  href="http://malls-online.com/note?rType=1&amp;rKey=88886"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_note-cosmetice_PSC20200215009', 'eventAction': 'Tiklama'});"
                  title="Note Cosmetice"
                  data-campaignid="88886"
                  data-campaignintegrationcode="PSC20200215009"
                  data-position="279"
                  data-campaignname="%50 ‘ye Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devameden_YENIfd37fa0a75ef466588b6b7c4dfcd95fc.jpg?q=95"
                      alt="Note Cosmetice"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo3bd43da147a0445792d6b017bb6e89c8.jpg"
                        alt="Note Cosmetice"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml88886">1 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-grace-cole-89500"
                  href="http://malls-online.com/grace-cole?rType=1&amp;rKey=89500"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_grace-cole_PSC20200311001', 'eventAction': 'Tiklama'});"
                  title="Grace Cole"
                  data-campaignid="89500"
                  data-campaignintegrationcode="PSC20200311001"
                  data-position="280"
                  data-campaignname="%60 İndirim "
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni637f910b0fd54850b437c5ff03c0b915.jpg?q=95"
                      alt="Grace Cole"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo61dedf75cda64be793f9df43f33694a5.jpg"
                        alt="Grace Cole"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml89500">1 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-boutique-89414"
                  href="http://malls-online.com/upscale?rType=1&amp;rKey=89414"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_boutique_PSC20200309003', 'eventAction': 'Tiklama'});"
                  title="Boutique"
                  data-campaignid="89414"
                  data-campaignintegrationcode="PSC20200309003"
                  data-position="281"
                  data-campaignname="Tüm Ürünlerde Özel Fiyat 39.90 TL"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenic2a4edd0a86d4d6a93354c171820feb8.jpg?q=95"
                      alt="Boutique"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logoa18f2ed75e914178b9c98363e35a6d15.jpg"
                        alt="Boutique"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml89414">1 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-kozmetikte-temel-ihtiyaclar-90091"
                  href="http://malls-online.com/kozmetik-kampanya-14?rType=1&amp;rKey=90091"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_kozmetikte-temel-ihtiyaclar_PSC20200328021', 'eventAction': 'Tiklama'});"
                  title="Kozmetikte Temel İhtiyaçlar"
                  data-campaignid="90091"
                  data-campaignintegrationcode="PSC20200328021"
                  data-position="282"
                  data-campaignname="%80'e Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenic3c81e6d3cf84ea0b4822aee7fd01c87.jpg?q=95"
                      alt="Kozmetikte Temel İhtiyaçlar"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo71ba373dad1445d0a4b324238b6d8f81.jpg"
                        alt="Kozmetikte Temel İhtiyaçlar"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml90091">1 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-kryolan-sothys-babor-89893"
                  href="http://malls-online.com/kampanya/liste/89893/kryolan-sothys-babor?rType=1&amp;rKey=89893"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_kryolan-sothys-babor_PSC20200321023', 'eventAction': 'Tiklama'});"
                  title="Kryolan-Sothys-Babor"
                  data-campaignid="89893"
                  data-campaignintegrationcode="PSC20200321023"
                  data-position="283"
                  data-campaignname="Seçili Ürünlerde %20 ‘ye Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenia2f30fd5491d4c14a96a8f3f987efc11.jpg?q=95"
                      alt="Kryolan-Sothys-Babor"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo53aad7d84def40af8d3487f57984bd74.jpg"
                        alt="Kryolan-Sothys-Babor"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml89893">1 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-avon-89945"
                  href="http://malls-online.com/avon?rType=1&amp;rKey=89945"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_avon_PSC20200323009', 'eventAction': 'Tiklama'});"
                  title="Avon"
                  data-campaignid="89945"
                  data-campaignintegrationcode="PSC20200323009"
                  data-position="284"
                  data-campaignname="%70 'e Varan İndirim + 100 TL Üzeri Kargo Bedava"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni8d50aa02de8c4c65908b276d7520f99c.jpg?q=95"
                      alt="Avon"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo31e5449e93c141b584bb028091b94d8c.jpg"
                        alt="Avon"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml89945">1 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-fruit-works-89415"
                  href="http://malls-online.com/umbro?rType=1&amp;rKey=89415"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_fruit-works_PSC20200310001', 'eventAction': 'Tiklama'});"
                  title="Fruit Works"
                  data-campaignid="89415"
                  data-campaignintegrationcode="PSC20200310001"
                  data-position="285"
                  data-campaignname=" Tüm Ürünlerde Özel Fiyat 39.90 TL"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni10888614d9f941f689b889da4f98b57a.jpg?q=95"
                      alt="Fruit Works"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo8208d52f9fdb456abe9e2e129845cfb3.jpg"
                        alt="Fruit Works"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml89415">1 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-dior-89089"
                  href="http://malls-online.com/dior?rType=1&amp;rKey=89089"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_dior_PSC20200225017', 'eventAction': 'Tiklama'});"
                  title="Dior "
                  data-campaignid="89089"
                  data-campaignintegrationcode="PSC20200225017"
                  data-position="286"
                  data-campaignname="%70 'e Varan İndirim "
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni43f2cb9c4b7045c38016c3579b4c4852.jpg?q=95"
                      alt="Dior "
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo222bcc69789f42d19aa6cb8555f77a02.jpg"
                        alt="Dior "
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml89089">1 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-divage-88940"
                  href="http://malls-online.com/divage?rType=1&amp;rKey=88940"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_divage_PSC20200219011', 'eventAction': 'Tiklama'});"
                  title="Divage"
                  data-campaignid="88940"
                  data-campaignintegrationcode="PSC20200219011"
                  data-position="287"
                  data-campaignname=" Ürünlerinde %30 İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenicebde8b7873042f2b2d788eb127b6c0a.jpg?q=95"
                      alt="Divage"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo2b08bf01b0414a97bb037551f8dfe1f7.jpg"
                        alt="Divage"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml88940">1 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-fenerium-86750"
                  href="http://malls-online.com/spor-giyim-kampanya-6?ft=100:3120004955&amp;rType=1&amp;rKey=86750"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_fenerium_PSC20191121010', 'eventAction': 'Tiklama'});"
                  title="Fenerium"
                  data-campaignid="86750"
                  data-campaignintegrationcode="PSC20191121010"
                  data-position="288"
                  data-campaignname="Fenerium | %50'ye Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenie8108886d8c64a3283b433abc4c2b314.jpg?q=95"
                      alt="Fenerium"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo7faa35f4adf845dc90788940b6a11b27.jpg"
                        alt="Fenerium"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml86750">7 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-fashion-friends-90695"
                  href="http://malls-online.com/giyim-kampanya-18?rType=1&amp;rKey=90695"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_fashion-friends_PSC20200423012', 'eventAction': 'Tiklama'});"
                  title="Fashion Friends"
                  data-campaignid="90695"
                  data-campaignintegrationcode="PSC20200423012"
                  data-position="289"
                  data-campaignname="Sepette %40 İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni02987e2b70a748fbacb53cc846600e7c.jpg?q=95"
                      alt="Fashion Friends"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo01a0ecb5592f437fad6f47fd6d98e72d.jpg"
                        alt="Fashion Friends"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml90695">5 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-casio-90680"
                  href="http://malls-online.com/aksesuar-kampanya-26?rType=1&amp;rKey=90680"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_casio_PSC20200422010', 'eventAction': 'Tiklama'});"
                  title="Casio "
                  data-campaignid="90680"
                  data-campaignintegrationcode="PSC20200422010"
                  data-position="290"
                  data-campaignname="İndirimlere Ek+Sepette %10"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni81904340891847b7bee6d55eb3c965da.jpg?q=95"
                      alt="Casio "
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logobc84110c8687427db5f808114a65a8e7.jpg"
                        alt="Casio "
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml90680">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-aldo-sole-sisters-90113"
                  href="http://malls-online.com/ayakkabi-kampanya-15?rType=1&amp;rKey=90113"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_aldo-sole-sisters_PSC20200331008', 'eventAction': 'Tiklama'});"
                  title="Aldo &amp; Sole Sisters"
                  data-campaignid="90113"
                  data-campaignintegrationcode="PSC20200331008"
                  data-position="291"
                  data-campaignname="Aldo &amp; Sole Sisters"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni1dba3f72c84d490c8faa49f4649a4ff7.jpg?q=95"
                      alt="Aldo &amp; Sole Sisters"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo0ada742fc6b0422fb6d7d58dbbb9e51b.jpg"
                        alt="Aldo &amp; Sole Sisters"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml90113">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-sogutlu-silver-87070"
                  href="http://malls-online.com/sogutlu-silver?rType=1&amp;rKey=87070"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_sogutlu-silver_PSC20191128021', 'eventAction': 'Tiklama'});"
                  title="Söğütlü Silver"
                  data-campaignid="87070"
                  data-campaignintegrationcode="PSC20191128021"
                  data-position="292"
                  data-campaignname="%60'a Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeniefe52fc7a4874b8488ef87280668d20c.jpg?q=95"
                      alt="Söğütlü Silver"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo431e6aef48e54d4dbaf4f2fe1939c664.jpg"
                        alt="Söğütlü Silver"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml87070">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-argentum-da-60-a-varan-indirim-88831"
                  href="http://malls-online.com/aksesuar-kampanya-34?rType=1&amp;rKey=88831"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_argentum-da-60-a-varan-indirim_PSC20200213008', 'eventAction': 'Tiklama'});"
                  title="Argentum'da %60'a Varan İndirim"
                  data-campaignid="88831"
                  data-campaignintegrationcode="PSC20200213008"
                  data-position="293"
                  data-campaignname="%60'a Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni3d0df209c22e40d196f2389d689c229a.jpg?q=95"
                      alt="Argentum'da %60'a Varan İndirim"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo4ed5bd09c19a47beb43bbded3b1776b9.jpg"
                        alt="Argentum'da %60'a Varan İndirim"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml88831">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-hahai-accessories-87122"
                  href="http://malls-online.com/z-xclusive?rType=1&amp;rKey=87122"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_hahai-accessories_PSC20191129028', 'eventAction': 'Tiklama'});"
                  title="Hahai Accessories"
                  data-campaignid="87122"
                  data-campaignintegrationcode="PSC20191129028"
                  data-position="294"
                  data-campaignname="Hahai Accessories"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni5501fbe7862a4765b17cbe2f660172de.jpg?q=95"
                      alt="Hahai Accessories"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo2be117f015df421592d1eb4bec9e39f9.jpg"
                        alt="Hahai Accessories"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml87122">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-labalaba-87095"
                  href="http://malls-online.com/comiccurious?rType=1&amp;rKey=87095"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_labalaba_PSC20191128027', 'eventAction': 'Tiklama'});"
                  title="Labalaba"
                  data-campaignid="87095"
                  data-campaignintegrationcode="PSC20191128027"
                  data-position="295"
                  data-campaignname="%50'ye Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeniac5be6f3c2f64b479235ceb04d01f1ff.jpg?q=95"
                      alt="Labalaba"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logob06e81012eee4d52810afc9d53c61def.jpg"
                        alt="Labalaba"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml87095">1 Gün 15:37:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-in-bebek-30-indirimli-89082"
                  href="http://malls-online.com/aksesuar-kampanya-36?rType=1&amp;rKey=89082"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_in-bebek-30-indirimli_PSC20200226001', 'eventAction': 'Tiklama'});"
                  title="İn Bebek %30 İndirimli"
                  data-campaignid="89082"
                  data-campaignintegrationcode="PSC20200226001"
                  data-position="296"
                  data-campaignname="İn Bebek %30 İndirimli"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni89fc4bc864554f8f840246d23cc968e9.jpg?q=95"
                      alt="İn Bebek %30 İndirimli"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo4c3b110242bd423586a3e2a01748daf5.jpg"
                        alt="İn Bebek %30 İndirimli"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml89082">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-bella-gloria-88299"
                  href="http://malls-online.com/aksesuar-kampanya-2?rType=1&amp;rKey=88299"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_bella-gloria_PSC20200122007', 'eventAction': 'Tiklama'});"
                  title="Bella Gloria"
                  data-campaignid="88299"
                  data-campaignintegrationcode="PSC20200122007"
                  data-position="297"
                  data-campaignname="Sepette %40 İndirimli"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni787ffae52a7345dda6c8f2e157ab5b00.jpg?q=95"
                      alt="Bella Gloria"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logob4e9936894c946bd96d59db98bdf7190.jpg"
                        alt="Bella Gloria"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml88299">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-mist-jewels-87667"
                  href="http://malls-online.com/aksesuar-kampanya-13?rType=1&amp;rKey=87667"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_mist-jewels_PSC20191224003', 'eventAction': 'Tiklama'});"
                  title="Mist Jewels "
                  data-campaignid="87667"
                  data-campaignintegrationcode="PSC20191224003"
                  data-position="298"
                  data-campaignname="Mist Jewels"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni374cf2b8b7b54ed68ab1205eb665e8fb.jpg?q=95"
                      alt="Mist Jewels "
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo19a11cefcb094b0e94d638b9b2f04050.jpg"
                        alt="Mist Jewels "
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml87667">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-19-90-tl-den-baslayan-fiyatlarla-87755"
                  href="http://malls-online.com/aksesuar-kampanya-9?rType=1&amp;rKey=87755"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_19-90-tl-den-baslayan-fiyatlarla_PSC20191227004', 'eventAction': 'Tiklama'});"
                  title="19,90 TL' den Başlayan Fiyatlarla"
                  data-campaignid="87755"
                  data-campaignintegrationcode="PSC20191227004"
                  data-position="299"
                  data-campaignname="En Moda Takılar19,90 TL' den Başlayan Fiyatlarla "
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni2cbb32318eb04989bf4ed3be369d8782.jpg?q=95"
                      alt="19,90 TL' den Başlayan Fiyatlarla"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logocc1729ddf3c84e49a4a7d49206c09c5f.jpg"
                        alt="19,90 TL' den Başlayan Fiyatlarla"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml87755">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-new-obsession-sepette-30-indirim-90373"
                  href="http://malls-online.com/aksesuar-kampanya-19?rType=1&amp;rKey=90373"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_new-obsession-sepette-30-indirim_PSC20200409008', 'eventAction': 'Tiklama'});"
                  title="New Obsession Sepette %30 İndirim"
                  data-campaignid="90373"
                  data-campaignintegrationcode="PSC20200409008"
                  data-position="300"
                  data-campaignname="Sepette %30 İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenib7a1cbee74e24cf4af018666f57c5fee.jpg?q=95"
                      alt="New Obsession Sepette %30 İndirim"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logoe0f95f31e403410893e03210b3a4789c.jpg"
                        alt="New Obsession Sepette %30 İndirim"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml90373">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-saat-tutkusu-90229"
                  href="http://malls-online.com/aksesuar-kampanya-18?rType=1&amp;rKey=90229"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_saat-tutkusu_PSC20200403003', 'eventAction': 'Tiklama'});"
                  title="Saat Tutkusu "
                  data-campaignid="90229"
                  data-campaignintegrationcode="PSC20200403003"
                  data-position="301"
                  data-campaignname="Saat Tutkusu "
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni658ca01a33c347c18c5f77d1b862cc61.jpg?q=95"
                      alt="Saat Tutkusu "
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo1b9ad91a290048878e3cfc7a85091374.jpg"
                        alt="Saat Tutkusu "
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml90229">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-gaudi-90053"
                  href="http://malls-online.com/kampanya/liste/90053/gaudi?rType=1&amp;rKey=90053"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_gaudi_PSC20200328006', 'eventAction': 'Tiklama'});"
                  title="Gaudi"
                  data-campaignid="90053"
                  data-campaignintegrationcode="PSC20200328006"
                  data-position="302"
                  data-campaignname="Sepette ekstra %50"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni9e806b8a83de40de87181526d1d52347.jpg?q=95"
                      alt="Gaudi"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo72f12e76e0d447f69dab6944600d759e.jpg"
                        alt="Gaudi"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml90053">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-takistir-90047"
                  href="http://malls-online.com/kampanya/liste/90047/takistir?rType=1&amp;rKey=90047"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_takistir_PSC20200327010', 'eventAction': 'Tiklama'});"
                  title="Takıştır"
                  data-campaignid="90047"
                  data-campaignintegrationcode="PSC20200327010"
                  data-position="303"
                  data-campaignname="Tek Fiyat 19-29-39 TL"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenid68343735bc1478c9d4da8f9072e9218.jpg?q=95"
                      alt="Takıştır"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo7621b97123cd484a870f26bb5ea3e0d2.jpg"
                        alt="Takıştır"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml90047">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-gozluk-tutkusu-90030"
                  href="http://malls-online.com/aksesuar-kampanya-17?rType=1&amp;rKey=90030"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_gozluk-tutkusu_PSC20200327002', 'eventAction': 'Tiklama'});"
                  title="Gözlük Tutkusu"
                  data-campaignid="90030"
                  data-campaignintegrationcode="PSC20200327002"
                  data-position="304"
                  data-campaignname="Tek Fiyat 79,90 - 99,90 TL + Sepette %50 İndirimli"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni85b5f8f7f2084320b860077f55f5e161.jpg?q=95"
                      alt="Gözlük Tutkusu"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo8e6f4eac73154eef8a0a08a33c25f528.jpg"
                        alt="Gözlük Tutkusu"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml90030">1 Gün 15:37:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-q-q-ferrucci-homies-89999"
                  href="http://malls-online.com/aksesuar-kampanya-15?rType=1&amp;rKey=89999"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_q-q-ferrucci-homies_PSC20200326005', 'eventAction': 'Tiklama'});"
                  title="Q&amp;Q , Ferruccİ, Homies"
                  data-campaignid="89999"
                  data-campaignintegrationcode="PSC20200326005"
                  data-position="305"
                  data-campaignname="Sepette %30 İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni884495b54a7e4cbfa18f436b30164e8e.jpg?q=95"
                      alt="Q&amp;Q , Ferruccİ, Homies"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logocf8ba3fca4424965a3eb8e6a12cf66b2.jpg"
                        alt="Q&amp;Q , Ferruccİ, Homies"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml89999">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-saat-saat-89615"
                  href="http://malls-online.com/saatsaat-kampanya-2?rType=1&amp;rKey=89615"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_saat-saat_PSC20200313020', 'eventAction': 'Tiklama'});"
                  title="Saat &amp; Saat"
                  data-campaignid="89615"
                  data-campaignintegrationcode="PSC20200313020"
                  data-position="306"
                  data-campaignname=" %65’e Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenib3921ec38d6a4905aa936ed2559440df.jpg?q=95"
                      alt="Saat &amp; Saat"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logof33dc7f3997145dcb99bcd2b21423fc6.jpg"
                        alt="Saat &amp; Saat"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml89615">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-harem-altin-30-a-varan-indirim-89411"
                  href="http://malls-online.com/aksesuar-kampanya-7?rType=1&amp;rKey=89411"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_harem-altin-30-a-varan-indirim_PSC20200306019', 'eventAction': 'Tiklama'});"
                  title="Harem Altın %30'a Varan İndirim"
                  data-campaignid="89411"
                  data-campaignintegrationcode="PSC20200306019"
                  data-position="307"
                  data-campaignname="Harem Altın %30'a Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni4fd400d7c6874290bef1f395275a4425.jpg?q=95"
                      alt="Harem Altın %30'a Varan İndirim"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logoac8134ca526a4b16bdb21d9b55e5c5dd.jpg"
                        alt="Harem Altın %30'a Varan İndirim"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml89411">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-zuk-collection-89363"
                  href="http://malls-online.com/kampanya/liste/89363/zuk-collection?rType=1&amp;rKey=89363"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_zuk-collection_PSC20200306002', 'eventAction': 'Tiklama'});"
                  title="Zuk Collection"
                  data-campaignid="89363"
                  data-campaignintegrationcode="PSC20200306002"
                  data-position="308"
                  data-campaignname="%85’e Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni4d09d7ae2c70409880a073f15af60ef2.jpg?q=95"
                      alt="Zuk Collection"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logof10d954cd0934452870c26e092c9c36d.jpg"
                        alt="Zuk Collection"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml89363">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-welch-de-55-e-varan-indirim-89321"
                  href="http://malls-online.com/kampanya/liste/89321/welch-de-55-e-varan-indirim?rType=1&amp;rKey=89321"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_welch-de-55-e-varan-indirim_PSC20200305014', 'eventAction': 'Tiklama'});"
                  title="Welch’de %55’e Varan İndirim"
                  data-campaignid="89321"
                  data-campaignintegrationcode="PSC20200305014"
                  data-position="309"
                  data-campaignname="Welch’de %55’e Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenia5075f4cb5ae40f6a8bd1fea5db311ed.jpg?q=95"
                      alt="Welch’de %55’e Varan İndirim"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo4f5040a25d3c4f73a8dcc24ffc80b710.jpg"
                        alt="Welch’de %55’e Varan İndirim"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml89321">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-amulette-jewel-89234"
                  href="http://malls-online.com/kampanya/liste/89234/amulette-jewel?rType=1&amp;rKey=89234"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_amulette-jewel_PSC20200303004', 'eventAction': 'Tiklama'});"
                  title="Amulette Jewel"
                  data-campaignid="89234"
                  data-campaignintegrationcode="PSC20200303004"
                  data-position="310"
                  data-campaignname="%40’a Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devameden_YENI6f20f43621c048f0a056bc753199dd58.jpg?q=95"
                      alt="Amulette Jewel"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logoe98ffd67645b479c94b215743397461d.jpg"
                        alt="Amulette Jewel"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml89234">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-jewelicon-89173"
                  href="http://malls-online.com/aksesuar-kampanya-32?rType=1&amp;rKey=89173"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_jewelicon_PSC20200228006', 'eventAction': 'Tiklama'});"
                  title="Jewelicon"
                  data-campaignid="89173"
                  data-campaignintegrationcode="PSC20200228006"
                  data-position="311"
                  data-campaignname="Net %55 İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenic1f3f91e70e4464683a3944c1a96cf9a.jpg?q=95"
                      alt="Jewelicon"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo71901fe8f56942c0921c20258da74b57.jpg"
                        alt="Jewelicon"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml89173">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-hola-design-da-50-ye-varan-indirim-88905"
                  href="http://malls-online.com/kampanya/liste/88905/hola-design-da-50-ye-varan-indirim?rType=1&amp;rKey=88905"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_hola-design-da-50-ye-varan-indirim_PSC20200217003', 'eventAction': 'Tiklama'});"
                  title="Hola Design’da %50’ye Varan İndirim"
                  data-campaignid="88905"
                  data-campaignintegrationcode="PSC20200217003"
                  data-position="312"
                  data-campaignname="Hola Design’da %50’ye Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni28a6eea65d7448cab7c5c68800741fa2.jpg?q=95"
                      alt="Hola Design’da %50’ye Varan İndirim"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo41c38b1adfc24bc5a503eb2f5972a2d4.jpg"
                        alt="Hola Design’da %50’ye Varan İndirim"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml88905">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-angemiel-de-net-60-indirim-88787"
                  href="http://malls-online.com/kampanya/liste/88787/angemiel-de-net-60-indirim?rType=1&amp;rKey=88787"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_angemiel-de-net-60-indirim_PSC20200212005', 'eventAction': 'Tiklama'});"
                  title="Angemiel'de Net %60 İndirim"
                  data-campaignid="88787"
                  data-campaignintegrationcode="PSC20200212005"
                  data-position="313"
                  data-campaignname="Angemiel'de Net %60 İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenie8a0a5f5a78447478ba4f6d9e312edeb.jpg?q=95"
                      alt="Angemiel'de Net %60 İndirim"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo6be30261c12d49f683d8aefa9ec16c71.jpg"
                        alt="Angemiel'de Net %60 İndirim"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml88787">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-gozluk-firsatlari-88707"
                  href="http://malls-online.com/aksesuar-kampanya-31?rType=1&amp;rKey=88707"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_gozluk-firsatlari_PSC20200208006', 'eventAction': 'Tiklama'});"
                  title="Gözlük Fırsatları "
                  data-campaignid="88707"
                  data-campaignintegrationcode="PSC20200208006"
                  data-position="314"
                  data-campaignname="Gözlük Fırsatları 49,90 TL’ Den Başlayan Fiyatlarla"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenie0af269abe9549e0a3e0e1c74c68db26.jpg?q=95"
                      alt="Gözlük Fırsatları "
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logoeee03ad3efb24835bbfcb08489c147c8.jpg"
                        alt="Gözlük Fırsatları "
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml88707">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-my-joyas-design-88701"
                  href="http://malls-online.com/mila?rType=1&amp;rKey=88701"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_my-joyas-design_PSC20200211001', 'eventAction': 'Tiklama'});"
                  title="My Joyas Design"
                  data-campaignid="88701"
                  data-campaignintegrationcode="PSC20200211001"
                  data-position="315"
                  data-campaignname="%50'ye Varan"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenic14d014165ea4f1188766da380053945.jpg?q=95"
                      alt="My Joyas Design"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo7ad4de9d029f4a4989feb29c3f06d67a.jpg"
                        alt="My Joyas Design"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml88701">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-mo-for-every-moment-net-15-indirim-87669"
                  href="http://malls-online.com/aksesuar-kampanya-12?rType=1&amp;rKey=87669"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_mo-for-every-moment-net-15-indirim_PSC20191224005', 'eventAction': 'Tiklama'});"
                  title=" Mo For Every Moment Net %15 İndirim"
                  data-campaignid="87669"
                  data-campaignintegrationcode="PSC20191224005"
                  data-position="316"
                  data-campaignname=" Mo For Every Moment Net %15 İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni57cbda3dde9e4f529d1b6f6cb18598e3.jpg?q=95"
                      alt=" Mo For Every Moment Net %15 İndirim"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo56adc6eec4a74d6dbed035e897ad4791.jpg"
                        alt=" Mo For Every Moment Net %15 İndirim"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml87669">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-sapka-86628"
                  href="http://malls-online.com/tum-urunler?ft=1064:32839&amp;rType=1&amp;rKey=86628"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_sapka_PSC20191114018', 'eventAction': 'Tiklama'});"
                  title="Şapka"
                  data-campaignid="86628"
                  data-campaignintegrationcode="PSC20191114018"
                  data-position="317"
                  data-campaignname="%80’e Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenidebe9b4900734cb58d02d578745c72ea.jpg?q=95"
                      alt="Şapka"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logobfb0224bc2944996a0db677e44647d6e.jpg"
                        alt="Şapka"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml86628">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-sal-esarp-fular-86622"
                  href="http://malls-online.com/tum-urunler?ft=1064:32819,32816,32817&amp;rType=1&amp;rKey=86622"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_sal-esarp-fular_PSC20191115021', 'eventAction': 'Tiklama'});"
                  title="Şal - Eşarp - Fular"
                  data-campaignid="86622"
                  data-campaignintegrationcode="PSC20191115021"
                  data-position="318"
                  data-campaignname="Morhipo'ya Özel Fiyatlarla"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni7d3136cd0c43460faa1103af0870f976.jpg?q=95"
                      alt="Şal - Eşarp - Fular"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo6412838f7167441792692d646b97311d.jpg"
                        alt="Şal - Eşarp - Fular"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml86622">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-goz-kamastiran-kupeler-86213"
                  href="http://malls-online.com/kadin-kupe?rType=1&amp;rKey=86213"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_goz-kamastiran-kupeler_PSC20191105022', 'eventAction': 'Tiklama'});"
                  title="Göz Kamaştıran Küpeler"
                  data-campaignid="86213"
                  data-campaignintegrationcode="PSC20191105022"
                  data-position="319"
                  data-campaignname="Göz Kamaştıran Küpeler"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni4a55a0f09da54194a38dceca63b8c4a1.jpg?q=95"
                      alt="Göz Kamaştıran Küpeler"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logoada4c3677b894d54a54ff76e1219088f.jpg"
                        alt="Göz Kamaştıran Küpeler"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml86213">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-erkek-aksesuar-86054"
                  href="http://malls-online.com/erkek-aksesuar?rType=1&amp;rKey=86054"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_erkek-aksesuar_PSC20191031017', 'eventAction': 'Tiklama'});"
                  title="Erkek Aksesuar"
                  data-campaignid="86054"
                  data-campaignintegrationcode="PSC20191031017"
                  data-position="320"
                  data-campaignname="Erkek Aksesuar %80'e Varan İndirimler!"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni382afcc4e1b9495c81d27d060ca0e81d.jpg?q=95"
                      alt="Erkek Aksesuar"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logoc9915436265e46a9ab8f6eab92679225.jpg"
                        alt="Erkek Aksesuar"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml86054">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-kadin-aksesuar-86051"
                  href="http://malls-online.com/kadin-aksesuar?rType=1&amp;rKey=86051"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_kadin-aksesuar_PSC20191031016', 'eventAction': 'Tiklama'});"
                  title="Kadın Aksesuar"
                  data-campaignid="86051"
                  data-campaignintegrationcode="PSC20191031016"
                  data-position="321"
                  data-campaignname="Kadın Aksesuar %80'e Varan İndirimler!"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni9181f98b29ec468390ef450f45eb4a28.jpg?q=95"
                      alt="Kadın Aksesuar"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logod79bf61927cd4c8f9be60b48b22d2270.jpg"
                        alt="Kadın Aksesuar"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml86051">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-sanches-90669"
                  href="http://malls-online.com/aksesuar-kampanya-5?rType=1&amp;rKey=90669"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_sanches_PSC20200422002', 'eventAction': 'Tiklama'});"
                  title="Sanches"
                  data-campaignid="90669"
                  data-campaignintegrationcode="PSC20200422002"
                  data-position="322"
                  data-campaignname="Net %50 İndirimli"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni5f25cae7320b4c19bf4918a7523f45aa.jpg?q=95"
                      alt="Sanches"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo970fd9c298294c9484d5e42a79cdd14d.jpg"
                        alt="Sanches"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml90669">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-dexter-saat-90674"
                  href="http://malls-online.com/kampanya/liste/90674/dexter-saat?rType=1&amp;rKey=90674"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_dexter-saat_PSC20200422005', 'eventAction': 'Tiklama'});"
                  title="Dexter Saat"
                  data-campaignid="90674"
                  data-campaignintegrationcode="PSC20200422005"
                  data-position="323"
                  data-campaignname="Dexter Saat"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni090f972d87b54002ab52596486ae92b5.jpg?q=95"
                      alt="Dexter Saat"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo4df2e92912b94aa08e35222c6503b836.jpg"
                        alt="Dexter Saat"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml90674">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-asortishey-de-85-e-varan-indirim-90670"
                  href="http://malls-online.com/kampanya/liste/90670/asortishey-de-85-e-varan-indirim?rType=1&amp;rKey=90670"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_asortishey-de-85-e-varan-indirim_PSC20200422003', 'eventAction': 'Tiklama'});"
                  title="Asortishey’de %85’e Varan İndirim"
                  data-campaignid="90670"
                  data-campaignintegrationcode="PSC20200422003"
                  data-position="324"
                  data-campaignname="Asortishey’de %85’e Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni750586b584f0459291494b9a3663173d.jpg?q=95"
                      alt="Asortishey’de %85’e Varan İndirim"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo07ba2f0a681f42eb8f31ad80552ce0e2.jpg"
                        alt="Asortishey’de %85’e Varan İndirim"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml90670">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-timberland-88474"
                  href="http://malls-online.com/timberland?rType=1&amp;rKey=88474"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_timberland_PSC20200129025', 'eventAction': 'Tiklama'});"
                  title="Timberland"
                  data-campaignid="88474"
                  data-campaignintegrationcode="PSC20200129025"
                  data-position="325"
                  data-campaignname="Timberland | %50'ye Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devameden_YENI67d1923731ba4c67adc4a4eedc9372b3.jpg?q=95"
                      alt="Timberland"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo731932b03c7f42c99bde2203634dc1b1.jpg"
                        alt="Timberland"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml88474">7 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-welder-saatlerde-ozel-fiyatlar-90552"
                  href="http://malls-online.com/aksesuar-kampanya-21?rType=1&amp;rKey=90552"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_welder-saatlerde-ozel-fiyatlar_PSC20200416003', 'eventAction': 'Tiklama'});"
                  title="Welder Saatlerde Özel Fiyatlar"
                  data-campaignid="90552"
                  data-campaignintegrationcode="PSC20200416003"
                  data-position="326"
                  data-campaignname="Welder Saatlerde Özel Fiyatlar"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni9c3094cfdbfc4f37ab6111ee7bc31e32.jpg?q=95"
                      alt="Welder Saatlerde Özel Fiyatlar"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo93279188576044a984010c6e742974f2.jpg"
                        alt="Welder Saatlerde Özel Fiyatlar"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml90552">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-xonix-saatlerde-50-ye-varan-indirim-90505"
                  href="http://malls-online.com/aksesuar-kampanya-20?rType=1&amp;rKey=90505"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_xonix-saatlerde-50-ye-varan-indirim_PSC20200415017', 'eventAction': 'Tiklama'});"
                  title="Xonix Saatlerde %50’ye Varan İndirim"
                  data-campaignid="90505"
                  data-campaignintegrationcode="PSC20200415017"
                  data-position="327"
                  data-campaignname="Xonix Saatlerde %50’ye Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni29ee9d4b94c54977aa17d5dcb7131130.jpg?q=95"
                      alt="Xonix Saatlerde %50’ye Varan İndirim"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo7586aebe5056419c92991399afa600e2.jpg"
                        alt="Xonix Saatlerde %50’ye Varan İndirim"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml90505">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-cigit-sepette-50-indirim--90467"
                  href="http://malls-online.com/cocuk-kampanya-20?rType=1&amp;rKey=90467"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_cigit-sepette-50-indirim-_PSC20200414008', 'eventAction': 'Tiklama'});"
                  title="Cigit Sepette %50 İndirim!"
                  data-campaignid="90467"
                  data-campaignintegrationcode="PSC20200414008"
                  data-position="328"
                  data-campaignname="Cigit Sepette %50 İndirim!"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenid5c9054f9cf34bdeb746cdeb9760b1db.jpg?q=95"
                      alt="Cigit Sepette %50 İndirim!"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logoa46ace74686c4d4b9a820bd21c25660b.jpg"
                        alt="Cigit Sepette %50 İndirim!"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml90467">3 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-gozlukte-marka-festivali-90465"
                  href="http://malls-online.com/kampanya/liste/90465/gozlukte-marka-festivali?rType=1&amp;rKey=90465"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_gozlukte-marka-festivali_PSC20200414006', 'eventAction': 'Tiklama'});"
                  title="Gözlükte Marka Festivali"
                  data-campaignid="90465"
                  data-campaignintegrationcode="PSC20200414006"
                  data-position="329"
                  data-campaignname="%85'e Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni6aa0b5f65dde4fa8bc45f36ac25f3e6b.jpg?q=95"
                      alt="Gözlükte Marka Festivali"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logoc2932d51196d4d31a894fc4f30862a76.jpg"
                        alt="Gözlükte Marka Festivali"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml90465">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-cigit-yeni-sezon-sepette-30-indirim-90436"
                  href="http://malls-online.com/cocuk-kampanya-16?rType=1&amp;rKey=90436"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_cigit-yeni-sezon-sepette-30-indirim_PSC20200411003', 'eventAction': 'Tiklama'});"
                  title="Cigit Yeni Sezon Sepette %30 İndirim"
                  data-campaignid="90436"
                  data-campaignintegrationcode="PSC20200411003"
                  data-position="330"
                  data-campaignname="Cigit Yeni Sezon Sepette %30 İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni085083dcffc048e6bb32c93168c0609d.jpg?q=95"
                      alt="Cigit Yeni Sezon Sepette %30 İndirim"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logoafdf40f904d84a3a9d2ef9035ac905a7.jpg"
                        alt="Cigit Yeni Sezon Sepette %30 İndirim"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml90436">3 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-huxel-86999"
                  href="http://malls-online.com/spor-giyim-kampanya-15?ft=100:3120005264&amp;rType=1&amp;rKey=86999"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_huxel_PSC20191127002', 'eventAction': 'Tiklama'});"
                  title="Huxel"
                  data-campaignid="86999"
                  data-campaignintegrationcode="PSC20191127002"
                  data-position="331"
                  data-campaignname="Huxel | 2 Al 1 Öde"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni2e42baf81f7e4e279b122a274cbc8f0e.jpg?q=95"
                      alt="Huxel"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logoee3249c0724d4d7594bf68ff76fdad23.jpg"
                        alt="Huxel"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml86999">1 Gün 02:30:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-bad-bear-90162"
                  href="http://malls-online.com/bad-bear?rType=1&amp;rKey=90162"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_bad-bear_PSC20200401011', 'eventAction': 'Tiklama'});"
                  title=" Bad Bear"
                  data-campaignid="90162"
                  data-campaignintegrationcode="PSC20200401011"
                  data-position="332"
                  data-campaignname=" Bad Bear | %50'ye Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni5479eb54bd6f4200a94f5b8cc0926a07.jpg?q=95"
                      alt=" Bad Bear"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logocebb527b5539438e967a56f19c7db8fa.jpg"
                        alt=" Bad Bear"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml90162">7 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-sporthink-90141"
                  href="http://malls-online.com/sporthink?ft=100:3120004956&amp;rType=1&amp;rKey=90141"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_sporthink_PSC20200331022', 'eventAction': 'Tiklama'});"
                  title="Sporthink"
                  data-campaignid="90141"
                  data-campaignintegrationcode="PSC20200331022"
                  data-position="333"
                  data-campaignname="Hummel – Levis – Jack &amp; Jones | %50'ye Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenic6522cbc0b3d43b4a32a0da035071d9b.jpg?q=95"
                      alt="Sporthink"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo2db2a7f369ec456b9a491ad31402767e.jpg"
                        alt="Sporthink"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml90141">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-quzu-89087"
                  href="http://malls-online.com/kadin-giyim-kampanya-9?rType=1&amp;rKey=89087"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_quzu_PSC20200226002', 'eventAction': 'Tiklama'});"
                  title="Quzu"
                  data-campaignid="89087"
                  data-campaignintegrationcode="PSC20200226002"
                  data-position="334"
                  data-campaignname="Quzu | Yeni Ürünlerle"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni02c6798ed2ea4041acd5004851d2c679.jpg?q=95"
                      alt="Quzu"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logoc24c219397b4436c928c086bf69b84cf.jpg"
                        alt="Quzu"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml89087">5 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-rodi-jeans-90424"
                  href="http://malls-online.com/kampanya/liste/90424/rodi-jeans?rType=1&amp;rKey=90424"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_rodi-jeans_PSC20200410015', 'eventAction': 'Tiklama'});"
                  title="Rodi Jeans"
                  data-campaignid="90424"
                  data-campaignintegrationcode="PSC20200410015"
                  data-position="335"
                  data-campaignname="Rodi Jeans | Net %50 İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenidfc4eaa0e2c843c2a3d89f6e05b9899b.jpg?q=95"
                      alt="Rodi Jeans"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo107a6ba6a3b0458db61f9e8c62597fe1.jpg"
                        alt="Rodi Jeans"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml90424">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-ninova-sepette-50-indirimli-90371"
                  href="http://malls-online.com/aksesuar-kampanya-10?rType=1&amp;rKey=90371"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_ninova-sepette-50-indirimli_PSC20200409006', 'eventAction': 'Tiklama'});"
                  title="Ninova Sepette %50 İndirimli"
                  data-campaignid="90371"
                  data-campaignintegrationcode="PSC20200409006"
                  data-position="336"
                  data-campaignname="Sepette %50 İndirimli"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenib307c034e66649e6887e34be411a8ec4.jpg?q=95"
                      alt="Ninova Sepette %50 İndirimli"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logodb65a1bd5bd445d79e3fc527ae8d344f.jpg"
                        alt="Ninova Sepette %50 İndirimli"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml90371">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-izla-dizayn-sepette-50-indirimli-90370"
                  href="http://malls-online.com/aksesuar-kampanya-35?rType=1&amp;rKey=90370"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_izla-dizayn-sepette-50-indirimli_PSC20200409005', 'eventAction': 'Tiklama'});"
                  title="İzla Dizayn Sepette %50 İndirimli"
                  data-campaignid="90370"
                  data-campaignintegrationcode="PSC20200409005"
                  data-position="337"
                  data-campaignname="Sepette %50 İndirimli"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni67b97f8df75d4655b395b64321bea2da.jpg?q=95"
                      alt="İzla Dizayn Sepette %50 İndirimli"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logoa0c7102c2e984917bfb55dd6b8989668.jpg"
                        alt="İzla Dizayn Sepette %50 İndirimli"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml90370">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-designers-corner-86386"
                  href="http://malls-online.com/designers-corner?rType=1&amp;rKey=86386"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_designers-corner_PSC20191109012', 'eventAction': 'Tiklama'});"
                  title="Designers' Corner"
                  data-campaignid="86386"
                  data-campaignintegrationcode="PSC20191109012"
                  data-position="338"
                  data-campaignname="Designers' Corner"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenib8a6cf259c934be88af78640b9c13e92.jpg?q=95"
                      alt="Designers' Corner"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logoe4bb0f357a7942328af3b1d68406ff6d.jpg"
                        alt="Designers' Corner"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml86386">5 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-yasebags-89380"
                  href="http://malls-online.com/eternal-child?rType=1&amp;rKey=89380"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_yasebags_PSC20200306015', 'eventAction': 'Tiklama'});"
                  title="YaseBags"
                  data-campaignid="89380"
                  data-campaignintegrationcode="PSC20200306015"
                  data-position="339"
                  data-campaignname="Sepette %20 İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni7329e4a7ad614cf29cc85ccb7088e93b.jpg?q=95"
                      alt="YaseBags"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logob36c47386d644606930fe4f95ee97b48.jpg"
                        alt="YaseBags"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml89380">5 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-anar-jewelry-90348"
                  href="http://malls-online.com/anar-jewelry?rType=1&amp;rKey=90348"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_anar-jewelry_PSC20200408008', 'eventAction': 'Tiklama'});"
                  title="Anar Jewelry"
                  data-campaignid="90348"
                  data-campaignintegrationcode="PSC20200408008"
                  data-position="340"
                  data-campaignname="Anar Jewelry | Sepette %20 İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenid6764070c8f34a10a6a17fabb6572903.jpg?q=95"
                      alt="Anar Jewelry"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo15e48227d87c41fda364b294cd4d4580.jpg"
                        alt="Anar Jewelry"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml90348">5 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-evde-el-ve-ayak-bakimi-90333"
                  href="http://malls-online.com/kadin-el-ayak-bakimi?rType=1&amp;rKey=90333"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_evde-el-ve-ayak-bakimi_PSC20200406015', 'eventAction': 'Tiklama'});"
                  title="Evde El ve Ayak Bakımı"
                  data-campaignid="90333"
                  data-campaignintegrationcode="PSC20200406015"
                  data-position="341"
                  data-campaignname="%70 'e Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeniddefa76d482f49d8bc6b1c7cd0952084.jpg?q=95"
                      alt="Evde El ve Ayak Bakımı"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo7f8d4c76493347c889f77ee22328417b.jpg"
                        alt="Evde El ve Ayak Bakımı"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml90333">1 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-frau-sepette-50-indirim-90307"
                  href="http://malls-online.com/frau?rType=1&amp;rKey=90307"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_frau-sepette-50-indirim_PSC20200407005', 'eventAction': 'Tiklama'});"
                  title="Frau - Sepette %50 İndirim"
                  data-campaignid="90307"
                  data-campaignintegrationcode="PSC20200407005"
                  data-position="342"
                  data-campaignname="Sepette %50 İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenib11c99d7d047415fbbcb33387664c73b.jpg?q=95"
                      alt="Frau - Sepette %50 İndirim"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo264f55e9750f463aab3ab066b8fa3e2b.jpg"
                        alt="Frau - Sepette %50 İndirim"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml90307">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-cocuklar-icin-evde-eglence-rahatlik-90233"
                  href="http://malls-online.com/cocuk-kampanya-21?rType=1&amp;rKey=90233"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_cocuklar-icin-evde-eglence-rahatlik_PSC20200403005', 'eventAction': 'Tiklama'});"
                  title="Çocuklar İçin Evde Eğlence&amp;Rahatlık"
                  data-campaignid="90233"
                  data-campaignintegrationcode="PSC20200403005"
                  data-position="343"
                  data-campaignname="Çocuklar İçin Evde Eğlence&amp;Rahatlık"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni552c82777a444ea08c185ef60c07fd01.jpg?q=95"
                      alt="Çocuklar İçin Evde Eğlence&amp;Rahatlık"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logobca345fbd0da410bbfcbe48884f33a9d.jpg"
                        alt="Çocuklar İçin Evde Eğlence&amp;Rahatlık"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml90233">4 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-basic-evde-rahat-giyim-89974"
                  href="http://malls-online.com/kadin-giyim-kampanya-24?rType=1&amp;rKey=89974"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_basic-evde-rahat-giyim_PSC20200325009', 'eventAction': 'Tiklama'});"
                  title="Basic - Evde Rahat Giyim"
                  data-campaignid="89974"
                  data-campaignintegrationcode="PSC20200325009"
                  data-position="344"
                  data-campaignname="Kaçırılmayacak Fırsatlar"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni53dd9f2e4711441f91ec1af9c8427906.jpg?q=95"
                      alt="Basic - Evde Rahat Giyim"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo98b43f4acc8b4f71a19c7b9c60f95728.jpg"
                        alt="Basic - Evde Rahat Giyim"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml89974">5 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-lumberjack-90235"
                  href="http://malls-online.com/lumberjack?rType=1&amp;rKey=90235"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_lumberjack_PSC20200403007', 'eventAction': 'Tiklama'});"
                  title="Lumberjack"
                  data-campaignid="90235"
                  data-campaignintegrationcode="PSC20200403007"
                  data-position="345"
                  data-campaignname="Seçili Ürünlede %20 İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni67fbb2ce144e42b996369ca684bdf58c.jpg?q=95"
                      alt="Lumberjack"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo08c2150ff5c941cc885e3ac00715b36f.jpg"
                        alt="Lumberjack"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml90235">4 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-nesvay-yeni-sezon-90210"
                  href="http://malls-online.com/aksesuar-kampanya-1?rType=1&amp;rKey=90210"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_nesvay-yeni-sezon_PSC20200402011', 'eventAction': 'Tiklama'});"
                  title="Nesvay Yeni Sezon"
                  data-campaignid="90210"
                  data-campaignintegrationcode="PSC20200402011"
                  data-position="346"
                  data-campaignname="%40’a Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni63bb8636a51f4d73a8eaf3b9037b0a0e.jpg?q=95"
                      alt="Nesvay Yeni Sezon"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo654840fc61674b44a1aef57355ee1b97.jpg"
                        alt="Nesvay Yeni Sezon"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml90210">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-takistir-tattoo-90204"
                  href="http://malls-online.com/kampanya/liste/90204/takistir-tattoo?rType=1&amp;rKey=90204"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_takistir-tattoo_PSC20200402007', 'eventAction': 'Tiklama'});"
                  title="Takıştır Tattoo"
                  data-campaignid="90204"
                  data-campaignintegrationcode="PSC20200402007"
                  data-position="347"
                  data-campaignname="%70 İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni6969bcbea0dd45158599744635655afb.jpg?q=95"
                      alt="Takıştır Tattoo"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo7ef3c022c1a04777a12c715cfada93f7.jpg"
                        alt="Takıştır Tattoo"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml90204">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-marka-park-canta-90203"
                  href="http://malls-online.com/marka-park-kampanya-4?ft=100:3120000525&amp;rType=1&amp;rKey=90203"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_marka-park-canta_PSC20200402006', 'eventAction': 'Tiklama'});"
                  title="Marka Park - Çanta "
                  data-campaignid="90203"
                  data-campaignintegrationcode="PSC20200402006"
                  data-position="348"
                  data-campaignname="Sepette %20 İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni54e66bb4814b4f6fba8c0fd7ccd097be.jpg?q=95"
                      alt="Marka Park - Çanta "
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo7f2bdd15afbe490b9a933a06a3dd682f.jpg"
                        alt="Marka Park - Çanta "
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml90203">1 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-takistir-90076"
                  href="http://malls-online.com/kampanya/liste/90076/takistir?rType=1&amp;rKey=90076"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_takistir_PSC20200328017', 'eventAction': 'Tiklama'});"
                  title="Takıştır"
                  data-campaignid="90076"
                  data-campaignintegrationcode="PSC20200328017"
                  data-position="349"
                  data-campaignname="%70’e Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni4571cc4ab82e4ad594049103503f2ecc.jpg?q=95"
                      alt="Takıştır"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logoe2e338e5e4fc40808601c9371aa2c008.jpg"
                        alt="Takıştır"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml90076">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-online-taki-90171"
                  href="http://malls-online.com/aksesuar-kampanya-6?rType=1&amp;rKey=90171"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_online-taki_PSC20200401013', 'eventAction': 'Tiklama'});"
                  title="Online Takı"
                  data-campaignid="90171"
                  data-campaignintegrationcode="PSC20200401013"
                  data-position="350"
                  data-campaignname="Online Takı"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni60285f34325a4bcc8fe15ebf3ef814bc.jpg?q=95"
                      alt="Online Takı"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logodb0c660fab014d909d44b76374ace7c7.jpg"
                        alt="Online Takı"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml90171">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-reebok-marka-90144"
                  href="http://malls-online.com/reebok?rType=1&amp;rKey=90144"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_reebok-marka_PSC20200331025', 'eventAction': 'Tiklama'});"
                  title="Reebok Marka"
                  data-campaignid="90144"
                  data-campaignintegrationcode="PSC20200331025"
                  data-position="351"
                  data-campaignname="Reebok | %50'ye Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni89e7b99203594b4893233fd214bd1e5a.jpg?q=95"
                      alt="Reebok Marka"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo230841e3ca1b4413b411a6518b2bd89a.jpg"
                        alt="Reebok Marka"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml90144">7 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-palmers-90078"
                  href="http://malls-online.com/kampanya/liste/90078/palmers?rType=1&amp;rKey=90078"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_palmers_PSC20200328018', 'eventAction': 'Tiklama'});"
                  title="Palmers"
                  data-campaignid="90078"
                  data-campaignintegrationcode="PSC20200328018"
                  data-position="352"
                  data-campaignname=" Net %40 İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni7ac8ee866ffd473ea4f37bafd1c5200b.jpg?q=95"
                      alt="Palmers"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logoa094022eaed246e5af2ddafa8074ca54.jpg"
                        alt="Palmers"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml90078">1 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-jean-modasi-90132"
                  href="http://malls-online.com/kadin-giyim-aksesuar-kampanya-6?rType=1&amp;rKey=90132"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_jean-modasi_PSC20200331016', 'eventAction': 'Tiklama'});"
                  title="Jean Modası"
                  data-campaignid="90132"
                  data-campaignintegrationcode="PSC20200331016"
                  data-position="353"
                  data-campaignname="Sepette Sürpriz İndirimler"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni74d75f722e8248a2ba118bbd5f8fa0df.jpg?q=95"
                      alt="Jean Modası"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo75dd76cd38c4401cb084f31155157a26.jpg"
                        alt="Jean Modası"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml90132">5 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-sole-sisters-90099"
                  href="http://malls-online.com/sole-sisters?rType=1&amp;rKey=90099"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_sole-sisters_PSC20200331001', 'eventAction': 'Tiklama'});"
                  title="Sole Sisters"
                  data-campaignid="90099"
                  data-campaignintegrationcode="PSC20200331001"
                  data-position="354"
                  data-campaignname="Sole Sisters"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni109aa592c2934510a0084a9e37c9b4a7.jpg?q=95"
                      alt="Sole Sisters"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logoe10038b632d945729150a2fee0358445.jpg"
                        alt="Sole Sisters"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml90099">1 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-dogan-saat-90044"
                  href="http://malls-online.com/aksesuar-kampanya-4?rType=1&amp;rKey=90044"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_dogan-saat_PSC20200327009', 'eventAction': 'Tiklama'});"
                  title="Doğan Saat"
                  data-campaignid="90044"
                  data-campaignintegrationcode="PSC20200327009"
                  data-position="355"
                  data-campaignname="%60'a Varan +Sepette %20 İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni722b26c79fdb4614a8c2aa1a267db891.jpg?q=95"
                      alt="Doğan Saat"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logob1e2dcfda97549628d103c2f127c1b4b.jpg"
                        alt="Doğan Saat"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml90044">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-birkenstock-yeni-sezon-90008"
                  href="http://malls-online.com/birkenstock?rType=1&amp;rKey=90008"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_birkenstock-yeni-sezon_PSC20200326009', 'eventAction': 'Tiklama'});"
                  title="Birkenstock - Yeni Sezon"
                  data-campaignid="90008"
                  data-campaignintegrationcode="PSC20200326009"
                  data-position="356"
                  data-campaignname="Birkenstock - Yeni Sezon"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni32b6ff752e4448b383d0323ca9afeaca.jpg?q=95"
                      alt="Birkenstock - Yeni Sezon"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logof403e287b21246b9977806c860cb9447.jpg"
                        alt="Birkenstock - Yeni Sezon"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml90008">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-ashton-polo-90032"
                  href="http://malls-online.com/aksesuar-kampanya-16?rType=1&amp;rKey=90032"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_ashton-polo_PSC20200327004', 'eventAction': 'Tiklama'});"
                  title="Ashton Polo"
                  data-campaignid="90032"
                  data-campaignintegrationcode="PSC20200327004"
                  data-position="357"
                  data-campaignname="79,90 - 99,90 TL + Sepette %50 "
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenic361444e6bf94d2fa99793994b13190b.jpg?q=95"
                      alt="Ashton Polo"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo2bcfdfa5381146cc905a416791f1c69e.jpg"
                        alt="Ashton Polo"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml90032">1 Gün 15:37:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-aldo-89984"
                  href="http://malls-online.com/aldo?rType=1&amp;rKey=89984"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_aldo_PSC20200325012', 'eventAction': 'Tiklama'});"
                  title="Aldo"
                  data-campaignid="89984"
                  data-campaignintegrationcode="PSC20200325012"
                  data-position="358"
                  data-campaignname="Aldo"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni9371003ec7cc4b748cd11c3e050f5c00.jpg?q=95"
                      alt="Aldo"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logoc5dd82332c3544018a0b7f14a50a450d.jpg"
                        alt="Aldo"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml89984">21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-marka-park-89925"
                  href="http://malls-online.com/marka-park?ft=100:3120000525&amp;rType=1&amp;rKey=89925"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_marka-park_PSC20200324004', 'eventAction': 'Tiklama'});"
                  title="Marka Park"
                  data-campaignid="89925"
                  data-campaignintegrationcode="PSC20200324004"
                  data-position="359"
                  data-campaignname="%70'e Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devameden_YENIbfeb5c7db75a49cf92a0544fb86ff90a.jpg?q=95"
                      alt="Marka Park"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo9ef0fc0fe5084d6a8dabbca0984ab043.jpg"
                        alt="Marka Park"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml89925">1 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-cengiz-pakel-86842"
                  href="http://malls-online.com/cengiz-pakel?ft=100:3120001360&amp;rType=1&amp;rKey=86842"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_cengiz-pakel_PSC20191125027', 'eventAction': 'Tiklama'});"
                  title="Cengiz Pakel "
                  data-campaignid="86842"
                  data-campaignintegrationcode="PSC20191125027"
                  data-position="360"
                  data-campaignname="Cengiz Pakel "
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni5b2c0f569ac74a75a0246efd38c6b133.jpg?q=95"
                      alt="Cengiz Pakel "
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logoaba841d3a01f457784b92e363ef6fc17.jpg"
                        alt="Cengiz Pakel "
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml86842">1 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-jump-kids-89795"
                  href="http://malls-online.com/ayakkabi-kampanya-19?rType=1&amp;rKey=89795"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_jump-kids_PSC20200319019', 'eventAction': 'Tiklama'});"
                  title="Jump Kids"
                  data-campaignid="89795"
                  data-campaignintegrationcode="PSC20200319019"
                  data-position="361"
                  data-campaignname="Sepette %15 İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni2240f818b2e84e44861de7a0f331606b.jpg?q=95"
                      alt="Jump Kids"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo998639f29ab643ae89dffc6107a59bdf.jpg"
                        alt="Jump Kids"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml89795">1 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-deery-87740"
                  href="http://malls-online.com/carla-mara?rType=1&amp;rKey=87740"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_deery_PSC20191226011', 'eventAction': 'Tiklama'});"
                  title="Deery"
                  data-campaignid="87740"
                  data-campaignintegrationcode="PSC20191226011"
                  data-position="362"
                  data-campaignname="Sepette %25 İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni12b2db77e7db4ec9adea41b09858810f.jpg?q=95"
                      alt="Deery"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logoc15356f89efd453e81698391cd738fbc.jpg"
                        alt="Deery"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml87740">4 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-spx-89059"
                  href="http://malls-online.com/spx?ft=100:3120002653&amp;rType=1&amp;rKey=89059"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_spx_PSC20200222010', 'eventAction': 'Tiklama'});"
                  title="SPX"
                  data-campaignid="89059"
                  data-campaignintegrationcode="PSC20200222010"
                  data-position="363"
                  data-campaignname="SPX | Jack Wolfskin &amp; Merrell &amp; Salomon"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni3bed0914090b4ac1adaddcf13dead7f4.jpg?q=95"
                      alt="SPX"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo49dfde41a5194607b2f897ab81820130.jpg"
                        alt="SPX"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml89059">8 Gün 01:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-fudela-88818"
                  href="http://malls-online.com/ayakkabi-kampanya-10?ft=100:3120004180&amp;rType=1&amp;rKey=88818"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_fudela_PSC20200213001', 'eventAction': 'Tiklama'});"
                  title="Fudela"
                  data-campaignid="88818"
                  data-campaignintegrationcode="PSC20200213001"
                  data-position="364"
                  data-campaignname="Fudela"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni44e42cad3d34414db6a02d4b3df54b97.jpg?q=95"
                      alt="Fudela"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo8fecc993b6004fc2bbae6a3b152c2e0e.jpg"
                        alt="Fudela"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml88818">4 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-polo1988-89509"
                  href="http://malls-online.com/much-more?rType=1&amp;rKey=89509"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_polo1988_PSC20200311008', 'eventAction': 'Tiklama'});"
                  title="POLO1988"
                  data-campaignid="89509"
                  data-campaignintegrationcode="PSC20200311008"
                  data-position="365"
                  data-campaignname="Sepette %20 İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni38893fb6b4a44c1aa8203238fcf1c4ba.jpg?q=95"
                      alt="POLO1988"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo63c17cccc80a490482f871a7fdd7f25a.jpg"
                        alt="POLO1988"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml89509">2 Gün 01:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-david-jones-89424"
                  href="http://malls-online.com/david-jones?ft=100:3120001487&amp;rType=1&amp;rKey=89424"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_david-jones_PSC20200307016', 'eventAction': 'Tiklama'});"
                  title="David Jones"
                  data-campaignid="89424"
                  data-campaignintegrationcode="PSC20200307016"
                  data-position="366"
                  data-campaignname="Sepette %30 İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenif806a6611bfa4532847beb426cca059d.jpg?q=95"
                      alt="David Jones"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo76765ff6046c4e69b952f38de1935373.jpg"
                        alt="David Jones"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml89424">4 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-kutup-ayisi-89286"
                  href="http://malls-online.com/spor-giyim-kampanya-27?ft=100:3120005166&amp;rType=1&amp;rKey=89286"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_kutup-ayisi_PSC20200303019', 'eventAction': 'Tiklama'});"
                  title="Kutup Ayısı"
                  data-campaignid="89286"
                  data-campaignintegrationcode="PSC20200303019"
                  data-position="367"
                  data-campaignname="Kutup Ayısı | %50'ye Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenid0b4bbafbfdb4a0d9956fdc544bdb5b6.jpg?q=95"
                      alt="Kutup Ayısı"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo9f983f973e2d4fddaacc9af1ca0b6bf7.jpg"
                        alt="Kutup Ayısı"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml89286">7 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-moon-canta-88714"
                  href="http://malls-online.com/belle-rue-zest?rType=1&amp;rKey=88714"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_moon-canta_PSC20200208009', 'eventAction': 'Tiklama'});"
                  title="Moon Çanta"
                  data-campaignid="88714"
                  data-campaignintegrationcode="PSC20200208009"
                  data-position="368"
                  data-campaignname="Sepette %20 İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenibe7d11b6a30f42bb8a1ce7539c04b152.jpg?q=95"
                      alt="Moon Çanta"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo2dfe9466254a4e00946cb029f1c27761.jpg"
                        alt="Moon Çanta"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml88714">4 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-vizon-sneaker-ayakkabi-firsati-89100"
                  href="http://malls-online.com/canta-kampanya-2?ft=100:3120005253&amp;rType=1&amp;rKey=89100"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_vizon-sneaker-ayakkabi-firsati_PSC20200226006', 'eventAction': 'Tiklama'});"
                  title="Vizon Sneaker &amp; Ayakkabı Fırsatı"
                  data-campaignid="89100"
                  data-campaignintegrationcode="PSC20200226006"
                  data-position="369"
                  data-campaignname="Sepette %30 İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni8329015a5b954422b27f2f0b8dcf10fc.jpg?q=95"
                      alt="Vizon Sneaker &amp; Ayakkabı Fırsatı"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo494fc650593d49fa9210920a2f46f2cb.jpg"
                        alt="Vizon Sneaker &amp; Ayakkabı Fırsatı"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml89100">4 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-silver-polo-88881"
                  href="http://malls-online.com/canta-kampanya-3?rType=1&amp;rKey=88881"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_silver-polo_PSC20200215005', 'eventAction': 'Tiklama'});"
                  title="Silver Polo"
                  data-campaignid="88881"
                  data-campaignintegrationcode="PSC20200215005"
                  data-position="370"
                  data-campaignname="%70'e Varan İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni0274f5c5ebac4befb28a8b7a4712a5ea.jpg?q=95"
                      alt="Silver Polo"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo332c831b21cb44c69d4b962d175ca9a6.jpg"
                        alt="Silver Polo"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml88881">1 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-limoya-86392"
                  href="http://malls-online.com/ayakkabi-kampanya-5?rType=1&amp;rKey=86392"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_limoya_PSC20191109016', 'eventAction': 'Tiklama'});"
                  title="Limoya"
                  data-campaignid="86392"
                  data-campaignintegrationcode="PSC20191109016"
                  data-position="371"
                  data-campaignname="Sepette %25 İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni0d37482d73e44a708e314d4d12270f23.jpg?q=95"
                      alt="Limoya"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logoe9e8513a7486468ea24206f7ed721fa0.jpg"
                        alt="Limoya"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml86392">4 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-matras-tek-fiyat-86812"
                  href="http://malls-online.com/matras?rType=1&amp;rKey=86812"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_matras-tek-fiyat_PSC20191125017', 'eventAction': 'Tiklama'});"
                  title="Matraş Tek Fiyat"
                  data-campaignid="86812"
                  data-campaignintegrationcode="PSC20191125017"
                  data-position="372"
                  data-campaignname="Matraş Tek Fiyat"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenib177b0a88e0340a0b19a0bac0ce4e6bf.jpg?q=95"
                      alt="Matraş Tek Fiyat"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo39842a98c1f346f5901638bc25a445bc.jpg"
                        alt="Matraş Tek Fiyat"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml86812">1 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-pier-lucci-87043"
                  href="http://malls-online.com/ayakkabi-kampanya-2?rType=1&amp;rKey=87043"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_pier-lucci_PSC20191128004', 'eventAction': 'Tiklama'});"
                  title="Pier Lucci"
                  data-campaignid="87043"
                  data-campaignintegrationcode="PSC20191128004"
                  data-position="373"
                  data-campaignname="Pier Lucci"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenifa5db82e866f46fc8960422711168e7e.jpg?q=95"
                      alt="Pier Lucci"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logoc4dc08b3426646809ee2c46957f0c7e2.jpg"
                        alt="Pier Lucci"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml87043">15 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-marka-park-th-bags-88336"
                  href="http://malls-online.com/ayakkabi-canta-kampanya-6?ft=100:3120000525&amp;rType=1&amp;rKey=88336"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_marka-park-th-bags_PSC20200124001', 'eventAction': 'Tiklama'});"
                  title="Marka Park- TH BAGS"
                  data-campaignid="88336"
                  data-campaignintegrationcode="PSC20200124001"
                  data-position="374"
                  data-campaignname="Sepette %20 İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni98dabbe346064aaf9eca527bf57f9d4f.jpg?q=95"
                      alt="Marka Park- TH BAGS"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo1040671a8bea44bfa301c03cb0427d4b.jpg"
                        alt="Marka Park- TH BAGS"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml88336">1 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-ev-terligi-87500"
                  href="http://malls-online.com/ayakkabi-kampanya-20?rType=1&amp;rKey=87500"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_ev-terligi_PSC20191218004', 'eventAction': 'Tiklama'});"
                  title=" Ev Terliği"
                  data-campaignid="87500"
                  data-campaignintegrationcode="PSC20191218004"
                  data-position="375"
                  data-campaignname=" Ev Terliği"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni2456516e2ce649d1a3ad5382068b3c96.jpg?q=95"
                      alt=" Ev Terliği"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo41f2024c3d6a4fb59f56c1bf95e1d024.jpg"
                        alt=" Ev Terliği"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml87500">1 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-akinal-bella-87212"
                  href="http://malls-online.com/ayakkabi-kampanya-11?rType=1&amp;rKey=87212"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_akinal-bella_PSC20191204014', 'eventAction': 'Tiklama'});"
                  title="Akınal Bella"
                  data-campaignid="87212"
                  data-campaignintegrationcode="PSC20191204014"
                  data-position="376"
                  data-campaignname="Akınal Bella"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni10d20deceab343d883b675989e4e49a0.jpg?q=95"
                      alt="Akınal Bella"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo34c53de47d85409585d07e476b8390d8.jpg"
                        alt="Akınal Bella"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml87212">1 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-modagon-86821"
                  href="http://malls-online.com/modagon?rType=1&amp;rKey=86821"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_modagon_PSC20191122020', 'eventAction': 'Tiklama'});"
                  title="Modagon "
                  data-campaignid="86821"
                  data-campaignintegrationcode="PSC20191122020"
                  data-position="377"
                  data-campaignname="Sepette %30 İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni84160468abc24486b06454bda8ddb8fa.jpg?q=95"
                      alt="Modagon "
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo749fc74e30844fb79d6a6941896194f7.jpg"
                        alt="Modagon "
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml86821">4 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-gola-84404"
                  href="http://malls-online.com/gola?rType=1&amp;rKey=84404"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_gola_PSC20190830009', 'eventAction': 'Tiklama'});"
                  title="Gola"
                  data-campaignid="84404"
                  data-campaignintegrationcode="PSC20190830009"
                  data-position="378"
                  data-campaignname="Gola"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devameden_YENI3fc2afb8cf1c43118593acc7d540046d.jpg?q=95"
                      alt="Gola"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo9e8b8d787cf8469d84534a4713982c17.jpg"
                        alt="Gola"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml84404">1 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-john-may-84084"
                  href="http://malls-online.com/ayakkabi-kampanya-23?rType=1&amp;rKey=84084"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_john-may_PSC20190820006', 'eventAction': 'Tiklama'});"
                  title="John May"
                  data-campaignid="84084"
                  data-campaignintegrationcode="PSC20190820006"
                  data-position="379"
                  data-campaignname="John May"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni9410ad0df8f049a49c838ed6bfb1eccc.jpg?q=95"
                      alt="John May"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo681de9e152e148c8a536ab6272b5a931.jpg"
                        alt="John May"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml84084">1 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-bagmori-83896"
                  href="http://malls-online.com/bagmori?rType=1&amp;rKey=83896"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_bagmori_PSC20190808012', 'eventAction': 'Tiklama'});"
                  title="Bagmori"
                  data-campaignid="83896"
                  data-campaignintegrationcode="PSC20190808012"
                  data-position="380"
                  data-campaignname="Bagmori"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni5603eaa84ef84bcb93c1c4e6105037e5.jpg?q=95"
                      alt="Bagmori"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo977197baf9dc419f96c321d0985561da.jpg"
                        alt="Bagmori"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml83896">1 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-chekich-87409"
                  href="http://malls-online.com/ayakkabi-kampanya-12?rType=1&amp;rKey=87409"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_chekich_PSC20191214001', 'eventAction': 'Tiklama'});"
                  title="Chekich"
                  data-campaignid="87409"
                  data-campaignintegrationcode="PSC20191214001"
                  data-position="381"
                  data-campaignname="Sepette %20 İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenib1551ca355f8469c8bb5742311195b69.jpg?q=95"
                      alt="Chekich"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo7ee8997b54d04f38bac88fa1261ecde5.jpg"
                        alt="Chekich"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml87409">4 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-cuzdan-kartlik-88636"
                  href="http://malls-online.com/cuzdan?rType=1&amp;rKey=88636"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_cuzdan-kartlik_PSC20200205006', 'eventAction': 'Tiklama'});"
                  title="Cüzdan- Kartlık"
                  data-campaignid="88636"
                  data-campaignintegrationcode="PSC20200205006"
                  data-position="382"
                  data-campaignname="Cüzdan- Kartlık"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni103bf9059d31488b9c3277992d48f72b.jpg?q=95"
                      alt="Cüzdan- Kartlık"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo381a37e921264a54a2201f9e5348f5c8.jpg"
                        alt="Cüzdan- Kartlık"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml88636">4 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-valiz-firsati-88203"
                  href="http://malls-online.com/seyahat-cantasi?rType=1&amp;rKey=88203"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_valiz-firsati_PSC20200117004', 'eventAction': 'Tiklama'});"
                  title="Valiz Fırsatı"
                  data-campaignid="88203"
                  data-campaignintegrationcode="PSC20200117004"
                  data-position="383"
                  data-campaignname="Valiz Fırsatı"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenidcffaea6c57b461b9ae12ed9b39e495c.jpg?q=95"
                      alt="Valiz Fırsatı"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logoba97aab0600447bbb8c98a1d0bf78a91.jpg"
                        alt="Valiz Fırsatı"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml88203">4 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-dark-seer-87989"
                  href="http://malls-online.com/dark-seer?rType=1&amp;rKey=87989"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_dark-seer_PSC20200108003', 'eventAction': 'Tiklama'});"
                  title="Dark Seer"
                  data-campaignid="87989"
                  data-campaignintegrationcode="PSC20200108003"
                  data-position="384"
                  data-campaignname="Sepette %35 İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenida7911f41dda4f4ba064831422c1a739.jpg?q=95"
                      alt="Dark Seer"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo98d6b95d901143b6b20041e47a867f47.jpg"
                        alt="Dark Seer"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml87989">4 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-jump-84856"
                  href="http://malls-online.com/jump?rType=1&amp;rKey=84856"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_jump_PSC20190917005', 'eventAction': 'Tiklama'});"
                  title="Jump"
                  data-campaignid="84856"
                  data-campaignintegrationcode="PSC20190917005"
                  data-position="385"
                  data-campaignname="Sepette %15 İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yenia1acf69201604aa38f5c905134127d30.jpg?q=95"
                      alt="Jump"
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo18d9f403b45d4b30aa674ba5db0c34a8.jpg"
                        alt="Jump"
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml84856">1 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4 column sb-col"
              data-appear-top-offset="1200"
            >
              <div className="mh_promotion_container shortblocks hidden">
                <a
                  id="ela-oik-devam-eden-kam-tripy-86851"
                  href="http://malls-online.com/tripy?ft=100:3120004950&amp;rType=1&amp;rKey=86851"
                  target="_parent"
                  // onClick="dataLayer.push({'event': '_trackEvent', 'eventCategory': 'Bannerlar','eventSender': 'KampanyaSayfasi_kb_tripy_PSC20191124006', 'eventAction': 'Tiklama'});"
                  title="Tripy "
                  data-campaignid="86851"
                  data-campaignintegrationcode="PSC20191124006"
                  data-position="386"
                  data-campaignname="Sepette %35 İndirim"
                >
                  <div className="image-section">
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://img-morhipo.mncdn.com/mnresize/414/216/Content/Banners/devam_eden_yeni88201db76bda43f9952c207e40e9cd2e.jpg?q=95"
                      alt="Tripy "
                    />
                  </div>
                  <div className="mh_promotion_description">
                    <span className="logo-clip" aria-hidden="true">
                      <img
                        className="lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://img-morhipo.mncdn.com/Content/Banners/logo11de6bbc3fea443c843da01688bff075.jpg"
                        alt="Tripy "
                      />
                    </span>
                    <div className="ps_timer hidden-xs">
                      <span id="cntdwnSml86851">4 Gün 21:38:49</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
         */} <div className="row"></div>
          <div id="lastviewed-widget"></div>
        </div>

        <div
          className="hiden"
          style={{ display: "none", title: "buyuk-banner-kampanya" }}
        >
          91090;91073;90573;90845;90843;91068;90847;90965;87037;91059;90143;87026;89273;85284;91051;90391;90689;90811;91019;90205;90207;87153;91097;90854;91074;90881;90821;90588;91023;91004;90655;90271;91063;90278;90139;90140;90882;90649;91028;91037;87892;91055;89417;80953;91052;85616;89542;89147;91021;90814;90279;90297;90280;90844;90945;90519;89318;90361;76531;86202;90422;90883;90807;90183;91093;91064;91069;90452;90640;90560;87041;88135;91080;90319
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
