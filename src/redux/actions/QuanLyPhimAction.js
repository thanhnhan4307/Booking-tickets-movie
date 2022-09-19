/* eslint-disable no-unused-vars */
import { QuanLyPhimService, quanLyPhimService } from "../../services/QuanLyPhimService";
import { SET_DANH_SACH_PHIM, SET_THONG_TIN_PHIM } from "./types/QuanLyPhimType";
import {history} from "../../App"

export const layDanhSachPhimAction = (tenPhim='') => {
  return async (dispatch) => {
    try {
      //Sử dụng tham số
      const result = await quanLyPhimService.layDanhSachPhim(tenPhim);
      

      //Sau khi lấy dữ liệu từ api => redux(reducer)
      dispatch({
        type: SET_DANH_SACH_PHIM,
        arrFilm: result.data.content,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const themPhimUploadHinhAction = (formData) => {
  return async (dispatch) => {
    try{

      const result = await quanLyPhimService.themPhimUploadHinh(formData);
      alert('Thêm phim thành công!')
      console.log(result.data.content);

      // dispatch({
      //   type:
      // })

    }catch(error){
      console.log(error.response?.data)
    }
  }
}

export const capNhatPhimUploadAction = (formData)=>{
  return async (dispatch)=>{
    try{

      const result = await quanLyPhimService.capNhatPhimUpload(formData);
      alert('Cập nhật phim thành công!')
      console.log(result.data.content);

      dispatch(layDanhSachPhimAction());

      history.push('/films');


    }catch(error){
      console.log(error.response?.data)
    }
     
  }
}

export const layThongTinPhimAction = (maPhim) => {
  return async (dispatch) => {
    try{
      //sử dụng tham số

      const result = await quanLyPhimService.layThongTinPhim(maPhim);

      dispatch({
        type:SET_THONG_TIN_PHIM,
        thongTinPhim:result.data.content 
      })

    }catch(error){
      console.log(error.response?.data)
    }
  }
}

export const xoaPhimAction = (maPhim) => {
  return async (dispatch) => {
    try{
      
      const result = await quanLyPhimService.xoaPhim(maPhim);
      console.log('result',result.data.content)
      alert('Xóa phim thành công')
      //Sau khi xóa load lại danh sách phim mới
      dispatch(layDanhSachPhimAction())

    }catch(errors){
      console.log('errors',errors.response?.data)
    }

  }
}