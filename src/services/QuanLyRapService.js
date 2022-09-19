/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */
/* eslint-disable no-unreachable */
import { http } from "../util/setting";
import { baseService } from "./baseService";
import { GROUPID } from "../util/setting";

export class QuanLyRapService extends baseService {
  constructor() {
    super();
  }

  layDanhSachHeThongRap = () => {
    return http.get(
      `/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUPID}`
    );
  };

  layThongTinLichChieuPhim = (maPhim) => {
    return http.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`);
  };

  layThongTinHeThongRap = () => {
    return http.get(`/api/QuanLyRap/LayThongTinHeThongRap?maHeThongRap=${GROUPID}`)
  } 

  layThongTinCumRap = (maHeThongRap) => {
    return http.get(`/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`)
  } 
}

export const quanLyRapService = new QuanLyRapService();
