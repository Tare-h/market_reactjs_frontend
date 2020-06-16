var PrimeWidgets={debug:!1,pageType:"Other",lastViewedProducts:null,abcCookieName:"PW-ABC",abcCookieValue:null,dataLayerEventActionForSAC:null,version:"1.1.9",init:function(){-1<window.location.search.indexOf("debug=true")&&(this.debug=!0),this.detectPageType(),this.runWidgets()},detectPageType:function(){if("/"===window.location.pathname&&(this.pageType="Home"),"undefined"!=typeof google_tag_params&&null!=google_tag_params&&void 0!==google_tag_params.pagetype&&null!=google_tag_params.pagetype)switch(google_tag_params.pagetype){case"product":case"PSProductDetail":case"SeasonProductDetail":this.pageType="Product";break;case"category":this.pageType="Category";break;case"cart":this.pageType="Cart";break;case"purchase":this.pageType="Purchase"}$(".error404Area").length&&(this.pageType="NotFound")},log:function(e,t,a){t=void 0!==t&&t,a=void 0!==a&&a,(this.debug||t)&&(a?console.log("%c"+e,"background: #4c8bd6; color: #fff"):console.log(e))},getProductJourneyItems:function(){var e=this.getProductJourney();return null==e?new Array(0):e.map(function(e){return e.c})},getProductJourney:function(){var e=localStorage.getItem("pwProductJourney");return e&&JSON.parse(e)},setProductJourney:function(){var e,t,a,o,s;"undefined"!=typeof fullDetailsForSk&&null!=fullDetailsForSk&&void 0!==fullDetailsForSk.variantId&&null!=fullDetailsForSk.variantId&&"Product"==this.pageType&&(e=(new Date).getTime(),t=fullDetailsForSk.variantId,null==(a=this.getProductJourney())&&(a=[]),null==(o=a.filter(function(e){return e.c==t}))||0==o.length?(o={c:t,fv:e,lv:e,vc:1},a.push(o)):(o[0].lv=e,o[0].vc+=1),20<(s=a.sort(function(e,t){return t.lv-e.lv})).length&&(s.length=20),localStorage.setItem("pwProductJourney",JSON.stringify(s)))},runWidgets:function(){this.loadCssCodeBlock(),this.abcCookieValue=this.getCookie(this.abcCookieName),(null==this.abcCookieValue||this.abcCookieValue.length<1)&&(this.abcCookieValue=Math.floor(100*Math.random())+1,this.setCookie(this.abcCookieName,this.abcCookieValue,30)),this.displaySearchAutoCompleteWidget(),this.reviewCheckoutItems(),setTimeout(function(){PrimeWidgets.setProductJourney()},1500)},displaySearchAutoCompleteWidget:function(){var e;this.abcCookieValue<0?this.sendEvent("PrimeWidgets","SearchAutoComplete","NotShown"):(e="primeWidgetsSearchAutoCompleteWidget",0<$("."+e).size()||($("input.search-input").hide(),$(".search-icon").after('<div id="pw-search-autocomplete"><div class="live-search-results text-left z-top"><div class="autocomplete-suggestions"></div></div></div>'),$(".search-icon").after('<input type="search" name="q" id="pw-search-autocomplete-q" class="search-input '+e+'" placeholder="Marka, kategori, ürün ara" autocomplete="off" autocapitalize="none" />'),$("#search").click(function(e){""===PrimeWidgets.getSearchTerm()?($("#pw-search-autocomplete-q").attr("placeholder","Lütfen arama kriteri giriniz"),$(this).blur()):window.location.href="/kampanya/arama?q="+encodeURIComponent(PrimeWidgets.getSearchTerm())+"&qcat=ps"}),$("."+e).bind("keypress",function(e){var t;13===e.keyCode&&(""===(t=$(this).val().trim()).trim()?($(this).attr("placeholder","Lütfen arama kriteri giriniz"),$(this).blur()):window.location.href="/kampanya/arama?q="+encodeURIComponent(t)+"&qcat=ps")}),$("."+e).on("input",function(){var e=$(this).val().trim();0===e.length?($("#pw-search-autocomplete .autocomplete-suggestions").html(""),PrimeWidgets.getLastViewedProductsInSearchAutoComplete()):PrimeWidgets.getSearchAutoCompleteResults(e)}).focus(function(){$(this).val().trim().length<1&&PrimeWidgets.getLastViewedProductsInSearchAutoComplete(),$("#pw-search-autocomplete .autocomplete-suggestions").show()}),$(document).click(function(e){"pw-search-autocomplete"==e.target.id||"pw-search-autocomplete-q"==e.target.id||$("#pw-search-autocomplete").find(e.target).length||$("#pw-search-autocomplete .autocomplete-suggestions").hide()})))},reviewCheckoutItems:function(){if("Purchase"===this.pageType&&null!=(a=this.getProductJourney())){var e=google_tag_params.ecomm_prodid;for(i=0;i<e.length;i++){var t=e[i],a=a.filter(function(e){return e.c!=t});localStorage.setItem("pwProductJourney",JSON.stringify(a))}}},getSearchAutoCompleteResults:function(e){new Date;$.ajax("https://api.tr.primewidgets.com/schemas/autocomplete/morhipo",{method:"POST",contentType:"application/json",processData:!1,data:JSON.stringify([{schema:"product",search:e,groupBy:"item_group_id",filter:{limit:4,orderBy:"DESC"}},{schema:"brand",search:e,filter:{limit:3}},{schema:"category",search:e,filter:{limit:3}},{schema:"campaign",search:e,filter:{limit:3}}])}).then(function(e){PrimeWidgets.bindSearchAutoCompleteResults(e)})},bindSearchAutoCompleteResults:function(e,t){var a=new Date;$pwSearchAutoComplete=$("#pw-search-autocomplete .autocomplete-suggestions"),$pwSearchAutoComplete.html("");var o=$("input.js-searchKey").val(),s=null!=e.results.data?[]:e.results.brands.data,r=null!=e.results.data?[]:e.results.categories.data,i=null!=e.results.data?[]:e.results.campaigns.data,c=null!=e.results.data?e.results.data:e.results.products.data;(0<s.length||0<i.length||0<r.length||0<c.length)&&$pwSearchAutoComplete.append('<div><span class="closeBtn"></span></div>'),0<s.length&&($pwSearchAutoComplete.append('<div class="categoryResultsContainer"><div class="brandResults"><span>İlgili marka sonuçları</span></div><div class="categoryTitle hidden"><span>'+o+"</span></div></div>"),$brandResults=$("#pw-search-autocomplete .brandResults"),s.forEach(function(e,t){var a=e.url+(-1!==e.url.indexOf("?")?"&":"?")+"qcat=related-brand&q="+encodeURIComponent(PrimeWidgets.getSearchTerm());$brandResults.append('<div class="categoryResult" data-product-id="'+e.code+'" data-product-url="'+a+'" datalayer-event-action="SearchAutoComplete.Brand"><span class="categoryName">'+e.name+"</span></div>")})),0<i.length&&($pwSearchAutoComplete.append('<div class="categoryResultsContainer"><div class="campaignResults"><span>İlgili kampanya sonuçları</span></div></div>'),$pwCategoryResults=$("#pw-search-autocomplete .campaignResults"),i.forEach(function(e,t){var a=e.url+(-1!==e.url.indexOf("?")?"&":"?")+"qcat=related-campaign&q="+encodeURIComponent(PrimeWidgets.getSearchTerm());$pwCategoryResults.append('<div class="categoryResult" data-product-id="'+e.code+'" data-product-url="'+a+'" datalayer-event-action="SearchAutoComplete.Campaign"><span class="categoryName">'+e.name+"</span></div>")})),0<r.length&&($pwSearchAutoComplete.append('<div class="categoryResultsContainer"><div class="categoryResults"><span>İlgili kategori sonuçları</span></div></div>'),$pwCategoryResults=$("#pw-search-autocomplete .categoryResults"),r.forEach(function(e,t){var a=e.url+(-1!==e.url.indexOf("?")?"&":"?")+"qcat=related-cat&q="+encodeURIComponent(PrimeWidgets.getSearchTerm()),o=e.name.split(" > "),s=1<o.length?o[o.length-1]+" &gt; "+o[0]:e.name;$pwCategoryResults.append('<div class="categoryResult" data-product-id="'+e.code+'" data-product-url="'+a+'" datalayer-event-action="SearchAutoComplete.Category"><span class="categoryName">'+s+'</span> <span class="categoryNameSuffix">kategorisinde</span></div>')})),null!=c&&0<c.length&&(null!=t&&!0===t?(PrimeWidgets.dataLayerEventActionForSAC="SearchAutoComplete.LastViewedProduct",$pwSearchAutoComplete.append('<div class="lastViewedProducts"><span>Son Baktığınız Ürünler</span><span class="closeBtn"></span></div>')):(PrimeWidgets.dataLayerEventActionForSAC="SearchAutoComplete.Product",$pwSearchAutoComplete.append('<div class="productResults"><span>İlgili ürün sonuçları</span><span class="closeBtn"></span></div>')),c.forEach(function(e,t){var a=e.brand.name+" "+e.name,o=e.url+(-1!==e.url.indexOf("?")?"&":"?")+"qcat="+("SearchAutoComplete.LastViewedProduct"==PrimeWidgets.dataLayerEventActionForSAC?"related-last-visited-product":"related-product")+"&q="+encodeURIComponent(PrimeWidgets.getSearchTerm());$pwSearchAutoComplete.append('<div class="autocomplete-suggestion" data-index="'+t+'" data-product-id="'+e.code+'" data-product-url="'+o+'"><img class="search-image lazyloaded" src="'+PrimeWidgets.resizeImageSet(e.images)+'"><div class="search-name">'+a+'</div><span class="search-price"><span data-product-id="'+e.code+'"><span class="amount">'+e.price.toLocaleString("tr-TR",{style:"currency",currency:"TRY"}).substring(1)+" TL</span></span><span></span></span></div>")}));var n=new Date-a;this.log("PrimeWidgets.SearchAutoComplete API queried in "+n+" ms.",!1,!0),$("#pw-search-autocomplete .autocomplete-suggestion, #pw-search-autocomplete .categoryResult").mouseover(function(){$(this).addClass("autocomplete-selected")}).mouseout(function(){$(this).removeClass("autocomplete-selected")}).click(function(){var e=$(this).attr("datalayer-event-action");null!=e&&""!==e||(e=PrimeWidgets.dataLayerEventActionForSAC),PrimeWidgets.sendEvent("PrimeWidgets",e,window.location.pathname+"_"+$("#pw-search-autocomplete-q").val()+"_"+$(this).attr("data-product-id")),window.location=$(this).attr("data-product-url"),$("#pw-search-autocomplete .autocomplete-suggestions").hide()}),$("#pw-search-autocomplete .closeBtn").click(function(){$pwSearchAutoComplete.slideUp(700,function(){})})},getLastViewedProductsInSearchAutoComplete:function(){var e=this.getProductJourneyItems();e.length<1||(null==this.lastViewedProducts?$.ajax("https://api.tr.primewidgets.com/products/availability/morhipo",{method:"POST",contentType:"application/json",processData:!1,data:JSON.stringify({itemGroupIds:e,groupBy:"item_group_id",filter:{limit:5}})}).then(function(e){PrimeWidgets.lastViewedProducts=e,PrimeWidgets.bindSearchAutoCompleteResults(e,!0)}):this.bindSearchAutoCompleteResults(this.lastViewedProducts,!0))},resizeImageSet:function(e){return null==e||0==e.length||null==e[0]||""==e[0]?"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==":e[0].replace(".com/productimages/",".com/mnresize/85/117/productimages/")},sendEvent:function(e,t,a){"ga"in window&&(tracker=ga.getAll()[0],tracker&&tracker.send("event",e,t,a))},setCookie:function(e,t,a){var o,s="";a&&((o=new Date).setTime(o.getTime()+24*a*60*60*1e3),s="; expires="+o.toUTCString()),document.cookie=e+"="+(t||"")+s+"; path=/"},getCookie:function(e){for(var t=e+"=",a=document.cookie.split(";"),o=0;o<a.length;o++){for(var s=a[o];" "==s.charAt(0);)s=s.substring(1,s.length);if(0==s.indexOf(t))return s.substring(t.length,s.length)}return null},getAttributeValueByName:function(e,t){if(null==t||0==t.length)return"";for(var a=0;a<t.length;a++)if(t[a].name===e&&0<t[a].values.length)return t[a].values[0]},getSearchTerm:function(){return $("#pw-search-autocomplete-q").val().trim()},loadCssCodeBlock:function(){var e=document.createElement("style");e.type="text/css",e.innerHTML="#pw-search-autocomplete .z-top{z-index:9995}\n#pw-search-autocomplete .live-search-results{text-align:left;color:#111;box-shadow:0 0 10px 0 rgba(0,0,0,0.1);left:0;right:0;background-color: #ffffff;position:absolute; border-radius: 4px; overflow:hidden;}\n#pw-search-autocomplete .autocomplete-selected{background-color:rgba(0,0,0,0.05)}\n#pw-search-autocomplete .autocomplete-suggestions{max-height:80vh;overflow-y:auto}\n#pw-search-autocomplete .autocomplete-suggestion{padding:10px 15px;display:flex;-ms-flex-align:center;align-items:center;cursor:pointer}\n#pw-search-autocomplete .autocomplete-suggestion img{width:40px;border-radius:4px;display:inline-block;margin-right:10px}\n#pw-search-autocomplete .autocomplete-suggestion img + .search-name{margin-top:-.15em;padding-left:.5em}\n#pw-search-autocomplete .autocomplete-suggestion .search-name{-ms-flex:1;flex:1}\n#pw-search-autocomplete .autocomplete-suggestion .search-price{padding-top:3px;margin-left:5px;font-size:.8em}\n#pw-search-autocomplete span.amount{font-size: 12px; white-space:nowrap;color:#000000;font-weight:700}\n#pw-search-autocomplete div.lastViewedProducts{border-bottom:1px solid #ddd;padding:15px 10px 15px 20px;color:#666}\n#pw-search-autocomplete div.lastViewedProducts span{font-weight:bold}\n#pw-search-autocomplete div.categoryResultsContainer{padding:0}\n#pw-search-autocomplete div.categoryResultsContainer .categoryNameSuffix {font-weight: 400}#pw-search-autocomplete div.campaignResults, #pw-search-autocomplete div.categoryResults, #pw-search-autocomplete div.brandResults{font-weight: bold;color:#6e6c6c}\n#pw-search-autocomplete div.categoryTitle{color:#000;font-weight:bold}\n#pw-search-autocomplete div.categoryResults > .categoryResult, #pw-search-autocomplete div.brandResults > .categoryResult, #pw-search-autocomplete div.campaignResults > .categoryResult {padding:6px 6px 6px 15px;}#pw-search-autocomplete div.categoryResults > span:first-child, #pw-search-autocomplete div.brandResults > span:first-child, #pw-search-autocomplete div.campaignResults > span:first-child {display: block; padding: 10px 6px 5px 15px;}#pw-search-autocomplete div.categoryResult{color:#666;padding: 6px 2px 6px 0;cursor:pointer}\n#pw-search-autocomplete div.categoryResult span.categoryName{font-weight:bold;color:#000000}\n#pw-search-autocomplete div.productResults{font-weight: bold;padding:12px 6px 12px 15px;color:#6e6c6c}\n@media only screen and (max-width : 799px) {   #pw-search-autocomplete .autocomplete-suggestions{max-height:80vh;overflow-y:auto}   #pw-search-autocomplete .closeBtn{background:url(https://cdn.primewidgets.com/images/icons/close-black.svg) no-repeat 50%;background-size:16px;width:30px;height:30px;cursor:pointer;display:block;position:absolute;right:8px;top:10px;z-index:1}\n}",document.getElementsByTagName("head")[0].appendChild(e)}};PrimeWidgets.init();