/* eslint-disable no-unused-vars */
import axios, { Axios } from "axios";
import { DOMAIN, TOKEN_CYBERSOFT } from "../util/setting.jsx";
export class baseService {
  put = (url, model) => {
    return Axios({
      url: `${DOMAIN}/${url}`,
      mothod: "PUT",
      data: model,
      headers: {
        Authorization: "Bearer" + localStorage.getItem(TOKEN_CYBERSOFT),
      },
    });
  };
  post = (url, model) => {
    return Axios({
      url: `${DOMAIN}/${url}`,
      mothod: "POST",
      data: model,
      headers: {
        Authorization: "Bearer" + localStorage.getItem(TOKEN_CYBERSOFT),
      },
    });
  };
  get = (url, model) => {
    return Axios({
      url: `${DOMAIN}/${url}`,
      mothod: "GET",
      data: model,
      headers: {
        Authorization: "Bearer" + localStorage.getItem(TOKEN_CYBERSOFT),
      },
    });
  };
  delete = (url, model) => {
    return Axios({
      url: `${DOMAIN}/${url}`,
      mothod: "DELETE",
      data: model,
      headers: {
        Authorization: "Bearer" + localStorage.getItem(TOKEN_CYBERSOFT),
      },
    });
  };
}
