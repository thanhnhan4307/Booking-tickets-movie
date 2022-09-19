/* eslint-disable no-unused-vars */
import { use } from "i18next";
import { ACCESSTOKEN, TOKEN_CYBERSOFT, USER_LOGIN } from "../../util/setting";
import {
  DANG_NHAP_ACTION,
  DANG_KY_ACTION,
  SET_THONG_TIN_NGUOI_DUNG,
} from "../actions/types/QuanLyNguoiDungType";

// let user = {};
// if (localStorage.getItem(USER_LOGIN)) {
//   user = JSON.parse(localStorage(USER_LOGIN));
// }

const stateDefault = {
  userLogin: {},
  thongTinNguoiDung: {},
  userRegister:{}
};

export const QuanLyNguoiDungReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case DANG_NHAP_ACTION: {
      const { thongTinDangNhap } = action;
      //lưu thông tin đăng nhập của người dùng,
      localStorage.setItem(USER_LOGIN, JSON.stringify(thongTinDangNhap));
      localStorage.setItem(ACCESSTOKEN, thongTinDangNhap.accessToken);

      return { ...state, userLogin: thongTinDangNhap };
    }

    case DANG_KY_ACTION: {
      const { thongTinDangKy } = action;
      return { ...state, userRegister: thongTinDangKy };
    }
    case SET_THONG_TIN_NGUOI_DUNG: {
      state.thongTinNguoiDung = action.thongTinNguoiDung;
      return { ...state };
    }

    default:
      return { ...state };
  }
};
