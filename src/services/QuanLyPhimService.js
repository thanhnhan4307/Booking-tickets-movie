/* eslint-disable eqeqeq */
/* eslint-disable no-useless-constructor */
/* eslint-disable no-unreachable */
import { http } from "../util/setting";
import { baseService } from "./baseService";
import { GROUPID } from "../util/setting";

export class QuanLyPhimService extends baseService {
  constructor() {
    super();
  }

  layDanhSachBanner = () => {
    return http.get(`/api/QuanLyPhim/LayDanhSachBanner`);
  };

  layDanhSachPhim = (tenPhim = "") => {
    if (tenPhim.trim() != "") {
      return http.get(
        `/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}&tenPhim=${tenPhim}`
      );
    }
    return http.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}`);
  };

  themPhimUploadHinh = (formData) => {
    return http.post(`/api/QuanLyPhim/ThemPhimUploadHinh`, formData);
  };

  layThongTinPhim = (maPhim) => {
    return http.get(`api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`);
  };

  capNhatPhimUpload = (formData) => {
    return http.post(`/api/QuanLyPhim/CapNhatPhimUpload`, formData);
  };

  xoaPhim = (maPhim) => {
    return this.delete(`/api/QuanLyPhim/XP?MaPhim=${maPhim}`);
  };
}

export const quanLyPhimService = new QuanLyPhimService();
