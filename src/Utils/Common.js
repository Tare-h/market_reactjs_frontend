import axios from 'axios';
// return the user data from the session storage
export const getUser = () => {
  const userStr = localStorage.getItem('user');
  if (userStr) return JSON.parse(userStr);
  else return null;
}

// return the token from the session storage
export const getToken = () => {

  return localStorage.getItem('token') || null;
}



// remove the token and user from the session storage
export const removeUserSession = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
}

// set the token and user from the session storage
export const setUserSession = (token, user) => {
  localStorage.setItem('token', token);
  localStorage.setItem('user', JSON.stringify(user));
}
export function transToEnglish() {
  localStorage.setItem("lang", "ar");
  window.location.reload(false);

}
export function transToArabic() {
  localStorage.setItem("lang", "en");
  window.location.reload(false);

}
export function getLang() {
  return localStorage.getItem('lang') || null;
}
export function start_search() {
  localStorage.setItem("start_search", "true");
}
export function stop_search() {
  localStorage.setItem("start_search", "false");
}
export function getStart_search() {
  if (localStorage.getItem('start_search') == "true") {
    return true;
  }
  else {
    return false;
  }
  return false;
}




export function save_url_befor_register_or_login(url) {
  localStorage.setItem("subrl", url);
}
export function get_url_befor_register_or_login() {
  return localStorage.getItem('subrl') || '/';
}

export function show_in_Kuwaiti_dinar() {
  localStorage.setItem("currency", "dinar");
  window.location.reload(false);

}
export function show_in_bh() {
  localStorage.setItem("currency", "bh");
  window.location.reload(false);

}
export function show_in_OM() {
  localStorage.setItem("currency", "OMR");
  window.location.reload(false);

}
export function show_in_UAE() {
  localStorage.setItem("currency", "UAE");
  window.location.reload(false);

}
export function show_in_Saudi_riyal() {
  localStorage.setItem("currency", "riyal");
  window.location.reload(false);

}

export function show_in_QAR() {
  localStorage.setItem("currency", "QAR");
  window.location.reload(false);

}
export function show_in_dollar() {
  localStorage.setItem("currency", "dollar");
  window.location.reload(false);
}


export function currency_transing(dinar_price, one_dinar_in_dollar, one_dollars_in_SAR, one_dollars_in_AED, one_dollars_in_BHD, one_dollars_in_OMR, one_dollars_in_QAR) {

  const currency = localStorage.getItem('currency');
  if (currency == null || currency == 'dinar') {
    return dinar_price + " ‎KWD";

  }

  if (currency == 'riyal') { return (dinar_price * one_dinar_in_dollar * one_dollars_in_SAR).toFixed(2) + "  SAR"; }
  if (currency == 'UAE') { return (dinar_price * one_dinar_in_dollar * one_dollars_in_AED).toFixed(2) + "  AED"; }
  if (currency == 'bh') { return (dinar_price * one_dinar_in_dollar * one_dollars_in_BHD).toFixed(2) + "  BHD"; }
  if (currency == 'OMR') { return (dinar_price * one_dinar_in_dollar * one_dollars_in_OMR).toFixed(2) + "  OMR"; }
  if (currency == 'QAR') { return (dinar_price * one_dinar_in_dollar * one_dollars_in_QAR).toFixed(2) + "  QAR"; }
  if (currency == 'dollar') { return (dinar_price * one_dinar_in_dollar).toFixed(2) + "  $ "; }

  return dinar_price + " ‎KWD ";



}
export function calc_discount(new_price, showed_price) {
  return (((showed_price - new_price) * 100) / showed_price).toFixed()
}
export function currency_trans(dollar_price) {
  const currency = localStorage.getItem('currency');
  if (currency == null || currency == 'dollar') { return dollar_price + "  $ "; }
  else if (currency == 'dinar') { return dollar_price * 0.31 + "  ‎KWD "; }
  if (currency == 'riyal') { return dollar_price * 3.75 + "  SAR"; }
  if (currency == 'UAE') { return dollar_price * 3.75 + "  AED"; }
  if (currency == 'bh') { return dollar_price * 3.75 + "  BHD"; }
  if (currency == 'OMR') { return dollar_price * 3.75 + "  OMR"; }
  else {
    return dollar_price + " $ ";
  }


}
export function get_currency() {
  return localStorage.getItem('currency') || null;
}

///////////////////////
export function start_fetch_orders() {
  localStorage.setItem("orders", "started");

}
export function end_fetch_orders() {
  localStorage.setItem("orders", "ended");
}
export function is_fetching_orders() {
  const orders_state = localStorage.getItem('orders');
  if (orders_state == null || orders_state == 'ended') { return false; }
  return true;

}
///////////////////////
export function start_fetch_category_pagies() {
  localStorage.setItem("category_pagies", "started");

}
export function end_fetch_category_pagies() {
  localStorage.setItem("category_pagies", "ended");
}
export function is_fetching_category_pagies() {
  const category_pagies = localStorage.getItem('category_pagies');
  if (category_pagies == null || category_pagies == 'ended') { return false; }
  return true;

}
///////////////////////
export function start_fetch_orders_details() {
  localStorage.setItem("orders_details", "started");

}
export function end_fetch_orders_details() {
  localStorage.setItem("orders_details", "ended");
}
export function is_fetching_orders_details() {
  const orders_state = localStorage.getItem('orders_details');
  if (orders_state == null || orders_state == 'ended') { return false; }
  return true;

}



export function start_fetch_register_guest() {
  localStorage.setItem("register_guest", "started");

}
export function end_fetch_register_guest() {
  localStorage.setItem("register_guest", "ended");
}
export function is_fetching_register_guest() {
  const register_guest_state = localStorage.getItem('register_guest');
  if (register_guest_state == null || register_guest_state == 'ended') { return false; }
  return true;
}

export function start_fetch_user_register() {
  localStorage.setItem("user_register", "started");

}
export function end_fetch_user_register() {
  localStorage.setItem("user_register", "ended");
}
export function is_fetching_user_register() {
  const orders_state = localStorage.getItem('user_register');
  if (orders_state == null || orders_state == 'ended') { return false; }
  return true;
}


export function start_fetch_fav_details() {
  localStorage.setItem("fav_details", "started");

}
export function end_fetch_fav_details() {
  localStorage.setItem("fav_details", "ended");
}
export function is_fetching_fav_details() {
  const fav_state = localStorage.getItem('fav_details');
  if (fav_state == null || fav_state == 'ended') { return false; }
  return true;

}

export function start_fetch_fav() {
  localStorage.setItem("fav", "started");

}
export function end_fetch_fav() {
  localStorage.setItem("fav", "ended");
}
export function is_fetching_fav() {
  const fav_state = localStorage.getItem('fav');
  if (fav_state == null || fav_state == 'ended') { return false; }
  return true;

}

export function start_fetch_profile() {
  localStorage.setItem("profile", "started");

}
export function end_fetch_profile() {
  localStorage.setItem("profile", "ended");
}
export function is_fetching_profile() {
  const profile_state = localStorage.getItem('profile');
  if (profile_state == null || profile_state == 'ended') { return false; }
  return true;

}


export function start_fetch_cart_details() {
  localStorage.setItem("cart_details", "started");

}
export function end_fetch_cart_details() {
  localStorage.setItem("cart_details", "ended");
}
export function is_fetching_cart_details() {
  const cart_state = localStorage.getItem('cart_details');
  if (cart_state == null || cart_state == 'ended') { return false; }
  return true;

}

export function start_fetch_cart() {
  localStorage.setItem("cart", "started");

}
export function end_fetch_cart() {
  localStorage.setItem("cart", "ended");
}
export function is_fetching_cart() {
  const cart_state = localStorage.getItem('cart');
  if (cart_state == null || cart_state == 'ended') { return false; }
  return true;

}

export function trans(txt_ar, txt_en) {
  const lang = localStorage.getItem('lang');
  if (lang == null || lang == 'ar') { return txt_ar; }
  else {
    return txt_en;
  }


}

export const postAuthData = (token, data, url) => {
  token = localStorage.getItem('token') || null;

  axios.post('http://localhost/Auth/api/validate.php', { "Authorization: Bearer": token }, {
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    }
  })

    .then(response => {
      // console.log(response.data);
      // console.log(response);
      return response;
    })
    .catch(error => {
      if (error) {
        console.log("Sorry.....Error");
      }
    });
}