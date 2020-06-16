import axios from 'axios';
import $ from 'jquery';
let api_server_url = 'http://malls-online.com/api/malls_online/back/public/';// //'http://127.0.0.1:8000'; //
export function getCategory() {
    try {
        return axios.get(api_server_url + '/api/categories/home_page');

    } catch (e) {
        console.log(e);
    }
}
export function getCategory4NavBar() {
    try {
        return axios.get(api_server_url + '/api/categories_tree_sons/main_nav_bar');

    } catch (e) {
        console.log(e);
    }
}
export function getJsonResourcesWithBarrer(link, token) {

    $.ajax({
        url: link,
        headers: {
            'Authorization': 'Bearer ' + token
        },
        data: {},
        success: function (responseText) {



            console.log(responseText);

        }
    });
}

export default {
    getCategory, getCategory4NavBar, api_server_url, getJsonResourcesWithBarrer
}