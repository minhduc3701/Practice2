import axios from "axios";
import * as Configs from "./../constants/Config";

function callApi(endpoint, method = "GET", body) {
  return axios({
    method: method,
    url: `${Configs.API_URL}/${endpoint}`,
    data: body
  }).catch(err => {
    console.log(err);
  });
}

export default callApi;
