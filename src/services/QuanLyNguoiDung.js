/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */
/* eslint-disable no-unreachable */
import { ACCESSTOKEN, http } from "../util/setting";
import { baseService } from "./baseService";

export class QuanLyNguoiDungService extends baseService {
  constructor() {
    super();
  }

  dangNhap = (thongTinDangNhap) => {
    //taiKhoan:'abc123',matKhau:'123456789'
    return http.post(`/api/QuanLyNguoiDung/DangNhap`, thongTinDangNhap);
  };

  layThongTinNguoiDung = () => {
    return http.post(`/api/QuanLyNguoiDung/ThongTinTaiKhoan`);
  };

  dangKy = (thongTinDangKy) => {
    return http.post(`/api/QuanLyNguoiDung/DangKy`,thongTinDangKy)
  }
}

export const quanLyNguoiDungService = new QuanLyNguoiDungService();
