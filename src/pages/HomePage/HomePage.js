/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import HomeMenu from "./HomeMenu/HomeMenu";
import { useSelector, useDispatch } from "react-redux";

import { layDanhSachPhimAction } from "../../redux/actions/QuanLyPhimAction";
import MultipleRowsss from "../../components/RSlick/MultipleRowsss";
import { layDanhSachHeThongRapAction } from "../../redux/actions/QuanLyRapAction";
import HomeCarousel from "../../templates/layout/HomeCarousel/HomeCarousel";
import "./Homepage.css"
import HC from "../../templates/layout/HomeCarousel/HC";


export default function HomePage(props) {
  const { arrFilm } = useSelector((state) => state.QuanLyPhimReducer);

  const { heThongRapChieu } = useSelector((state) => state.QuanLyRapReducer);
  const dispatch = useDispatch();
  // console.log("propsHome", arrFilm);

  // const renderFilms = () => {
  //   return arrFilm.map((phim, index) => {
  //     return <Film key={index} ></Film>
  //   })
  // };

  useEffect(() => {
    const action = layDanhSachPhimAction();

    dispatch(action);
    
    dispatch(layDanhSachHeThongRapAction());
  }, []);

  return (
    <div>
      <HomeCarousel></HomeCarousel>
      {/* <HC></HC> */}
      <section className="text-gray-600 body-font">
        <div className="container  px-5 py-24 mx-auto">
          <MultipleRowsss arrFilm={arrFilm}></MultipleRowsss>
          
        </div>
        
      </section>
     
      <div className="mx-11 border border-gray-200  shadow-2xl ">
        <HomeMenu heThongRapChieu={heThongRapChieu}></HomeMenu>
      </div>
    </div>
  );
}
