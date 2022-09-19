/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable eqeqeq */
/* eslint-disable react/jsx-pascal-case */
/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import Slider from "react-slick";
import Film from "../Film/Film";
import styleSlick from "./MultipleRowSlick.module.css";
import Film_Flip from "../Film/Film_Flip";
import { useDispatch, useSelector } from "react-redux";
import Rslick from "../RSlick/RsSlick.css";
import "slick-carousel/slick/slick.css";
import MultipleRowSlick from "../RSlick/MultipleRowSlick.module.css";
import {
  SET_PHIM_DANG_CHIEU,
  SET_PHIM_SAP_CHIEU,
} from "../../redux/actions/types/QuanLyPhimType";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style }} onClick={onClick} />;
}

const MultipleRowsss = (props) => {
  const dispatch = useDispatch();
  const { dangChieu, sapChieu } = useSelector(
    (state) => state.QuanLyPhimReducer
  );

  const renderFilms = () => {
    return props.arrFilm.map((item, index) => {
      return (
        <div className={`${styleSlick["width-item"]}`} key={index}>
          <Film_Flip item={item}></Film_Flip>
        </div>
      );
    });
  };

  let activeClassDC = dangChieu == true ? "active_Film" : "none_active_Film";
  let activeClassSC = sapChieu == true ? "active_Film" : "none_active_Film";

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "100px",
    slidesToShow: 3,
    rows: 1,
    // slidesPerRow: 1,
    speed: 500,
    autoplay: false,
    autoSpeed: 2000,
    nextArrow: <RightOutlined />,
    prevArrow: <LeftOutlined />,
  };
  return (
    <div className="">
      <div className="text-center DC ">
        <button
          type="button"
          className={`${styleSlick[activeClassDC]}px-3 py-3 font-bold rounded-2xl dark:text-gray-100 mr-3 p-2 transform duration-500 hover:scale-110 hover:text-orange-600 text-lg`}
          onClick={() => {
            const action = { type: SET_PHIM_DANG_CHIEU };
            dispatch(action);
          }}
        >
          PHIM ĐANG CHIẾU
        </button>

        <button
          type="button"
          className={`${styleSlick[activeClassSC]}px-3 py-3 font-bold rounded-2xl ml-1 dark:text-gray-100 mr-3 p-2 transform duration-500 hover:scale-110 hover:text-orange-600 text-lg `}
          onClick={() => {
            const action = { type: SET_PHIM_SAP_CHIEU };
            dispatch(action);
          }}
        >
          PHIM SẮP CHIẾU
        </button>

        <Slider {...settings}>{renderFilms()}</Slider>
      </div>
    </div>
  );
};
export default MultipleRowsss;
