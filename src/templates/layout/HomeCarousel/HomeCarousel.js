/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unreachable */
import React, { useEffect } from "react";
import { Carousel } from "antd";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { ACCESS_TOKEN, http } from "../../../util/setting.jsx";
import { getCarouselActions } from "../../../redux/actions/CarouselAction.js";
import { StarFilled, StarOutlined, DownOutlined } from "@ant-design/icons";
import "./HomeCarousel.css"

// import { DOMAIN } from "../../../util/setting.jsx";




const contentStyle = {
  height: "500px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  backgroundPosition: "center",
  backgroundSize: "100% ",
  backgroundRepeat: "no-repeat",
};



export default function HomeCarousel(props) {
  const { arrImg } = useSelector((state) => state.CarouselReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    // const action = getCarouselActions(1);
    dispatch(getCarouselActions());
  },[]);

  const renderImg = () => {
    return arrImg.map((item, index) => {
      return (
        <div key={index}> 
          <div
            style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})` }}
          >
            <img
              src={item.hinhAnh}
              className="w-full opacity-0"
              alt={item.hinhAnh}
            ></img>
          </div>  
        </div>
        
        
      );
     
    });
  };
  



  return (
    <Carousel  effect="fade" style={{ position: "relative" }}>
      {renderImg()}
    </Carousel>
  );
}
























