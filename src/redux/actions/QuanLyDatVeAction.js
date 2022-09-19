/* eslint-disable no-unused-vars */
import { quanLyDatVeService } from "../../services/QuanLyDatVeService";
import { ThongTinDatVe } from "../../_core/models/ThongTinDatVe";
import { displayLoadingnACtion, hideLoadingnACtion } from "./LoadingAction";
import {
  CHUYEN_TAB,
  DAT_VE_HOAN_TAT,
  SET_CHI_TIET_PHONG_VE,
} from "./types/QuanLyDatVeType";

export const layChiTietPhongVeAction = (malichChieu) => {
  return async (dispatch) => {
    try {
      const result = await quanLyDatVeService.layChiTietPhongVe(malichChieu);

      //   console.log("result", result);
      if (result.status === 200) {
        dispatch({
          type: SET_CHI_TIET_PHONG_VE,
          chiTietPhongVe: result.data.content,
        });
      }
    } catch (error) {
      console.log("error", error);
    }
  };
};

export const datVeAction = (thongTinDatVe = new ThongTinDatVe()) => {
  return async (dispatch) => {
    try {
      dispatch(displayLoadingnACtion);
      const result = await quanLyDatVeService.datVe(thongTinDatVe);
      console.log(result.data.content);

      //Đặt vé thành công call api load lại phòng vé

      await dispatch(layChiTietPhongVeAction(thongTinDatVe.maLichChieu));

      await dispatch({
        type: DAT_VE_HOAN_TAT,
      });

      await dispatch(hideLoadingnACtion);

      dispatch({
        type: CHUYEN_TAB,
      });
    } catch (error) {
      dispatch(hideLoadingnACtion);
      console.log(error);
    }
  };
};
