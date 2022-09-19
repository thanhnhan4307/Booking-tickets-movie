/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */
/* eslint-disable no-unreachable */
import { ACCESSTOKEN, http } from "../util/setting";
import { ThongTinDatVe } from "../_core/models/ThongTinDatVe";
import { baseService } from "./baseService";

export class QuanLyDatVeService extends baseService {
  constructor() {
    super();
  }

  layChiTietPhongVe = (maLichChieu) => {
    //mã lịch chiếu lấy từ url
    //taiKhoan:'',matKhau:''
    return http.get(
      `/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`
    );
  };

  datVe = (thongTinDatVe = new ThongTinDatVe()) => {
    return http.post(`/api/QuanLyDatVe/DatVe`, thongTinDatVe);
  };

  taoLichChieu = (thongTinLichChieu) => {
     return http.post(`/api/QuanLyDatVe/TaoLichChieu`,thongTinLichChieu)
  }
}

export const quanLyDatVeService = new QuanLyDatVeService();
