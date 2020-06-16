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