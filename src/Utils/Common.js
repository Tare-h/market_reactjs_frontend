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

export function show_in_Kuwaiti_dinar() {
  localStorage.setItem("currency", "dinar");
  window.location.reload(false);

}
export function show_in_Saudi_riyal() {
  localStorage.setItem("currency", "riyal");
  window.location.reload(false);

}
export function show_in_dollar() {
  localStorage.setItem("currency", "dollar");
  window.location.reload(false);
}
export function currency_trans(dollar_price) {
  const currency = localStorage.getItem('currency');
  if (currency == null || currency == 'dollar') { return dollar_price + "  $ "; }
  else if (currency == 'dinar') { return dollar_price * 0.31 + "  ‎KWD "; }
  if (currency == 'riyal') { return dollar_price * 3.75 + "  SAR"; }
  else {
    return dollar_price + " $ ";
  }


}
export function get_currency() {
  return localStorage.getItem('currency') || null;
}


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
      console.log(response.data);
      console.log(response);
      return response;
    })
    .catch(error => {
      if (error) {
        console.log("Sorry.....Error");
      }
    });
}