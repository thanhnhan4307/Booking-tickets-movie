/* eslint-disable no-unused-vars */
import axios from "axios";
import { ACCESS_TOKEN, DOMAIN, http } from "../../util/setting.jsx";
import { SET_CAROUSEL } from "./types/CarouselType.js";
import { quanLyPhimService } from "../../services/QuanLyPhimService";

export const getCarouselActions = () => {
  return async (dispatch) => {
    try {
      const result = await quanLyPhimService.layDanhSachBanner();

      dispatch({
        type: SET_CAROUSEL,
        arrImg: result.data.content,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

// http.get(
//   `${DOMAIN}/api/QuanLyPhim/LayDanhSachBanner`
// );