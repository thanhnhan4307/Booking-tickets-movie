/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Carousel } from "antd";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { ACCESS_TOKEN, http } from "../../../util/setting.jsx";
import { getCarouselActions } from "../../../redux/actions/CarouselAction.js";

const contentStyle = {
  height: "500px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  backgroundPosition: "center",
  backgroundSize: "100% ",
  backgroundRepeat: "no-repeat",
};

export default function HC() {
  const { arrImg } = useSelector((state) => state.CarouselReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    // const action = getCarouselActions(1);
    dispatch(getCarouselActions());
  }, []);
  console.log("arrImg", arrImg);

  const renderImg = () => {
    return arrImg.map((item, index) => {
      return (
        <div></div>
        // <div key={index}
        //   style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})` }}
        //   className="carousel-item active"
        // >
        //   <img
        //     src={item.hinhAnh}
        //     className="w-full opacity-0"
        //     alt={item.hinhAnh}
        //   ></img>
        // </div>
        
      );
    });
  };

  return (
    <div></div>
  );
}
