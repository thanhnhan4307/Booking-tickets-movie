/* eslint-disable import/first */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unreachable */
/* eslint-disable no-mixed-operators */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import { Radio, Space, Tabs } from "antd";
import { render } from "react-dom";
import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
const { TabPane } = Tabs;
import moment from "moment";
import "./Menu.css"


export default function HomeMenu(props) {
  console.log(props)
  const [state, setState] = useState({
    tabPosition: "left",
  });

  const changeTabPosition = (e) => {
    setState({ tabPosition: e.target.value });
  };

  const renderHeThongRap = () => {
    let { tabPosition } = state;
    return props.heThongRapChieu?.map((heThongRap, index) => {
      return (
        
        <TabPane id="cr" className="font-medium mt-2 "
          tab={
            <img
              src={heThongRap.logo}
              className=" mt-2 rounded-full transition duration-300 hover:scale-125 cursor-pointer "
              width="50"
            ></img>
          }
          key={index}
        >
          <Tabs className="" tabPosition={tabPosition}>
            {heThongRap.lstCumRap?.slice(0, 8).map((cumRap, index) => {
              return (
                <TabPane
                  tab={
                    <div className=" text-gray-100" style={{ width: "50", height:"50", display: "flex" }}>
                      {/* <img  src="https://picsum.photos/50/50" sstyle={{ width: 50, height: 50 }}></img> <br></br> */}
                      <div className=" glass-button text-left font-medium ml-2 mt-2">
                        {cumRap.tenCumRap}
                        <p  className="text-gray-300 font-normal mt-2 hover:text-orange-600 cursor-pointer">Chi tiết</p>
                      </div>
                    </div>
                  }
                  key={index}
                >
                  {cumRap.danhSachPhim.slice(0, 7).map((phim, index) => {
                    return (
                      <Fragment key={index}>
                        <div className="my-5 ">
                          <div  style={{ display: "flex" }}>
                            <img 
                              style={{ width: 50, height: 50 }}
                              src={phim.hinhAnh}
                              alt={phim.tenPhim}
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = "http://picsum.photos/75/75";
                              }}
                            ></img>
                            <div className="ml-2 ">
                              <h1 className="font-medium text-white ">{phim.tenPhim}</h1>
                              <p className="text-white">{cumRap.diaChi}</p>
                              <div  className="grid grid-cols-5 gap-6 ">
                                {phim.lstLichChieuTheoPhim
                                  ?.slice(0, 23)
                                  .map((lichChieu, index) => {
                                    return (
                                      <NavLink style={{ border: '1px solid #a9a7a9b6'}}
                                        className=" bg-gray-100 text-sm text-green-700 p-1 rounded-md hover:text-orange-600 " 
                                        to={`/checkout/${lichChieu.maLichChieu}`}
                                        key={index}
                                      >
                                        {moment(
                                          lichChieu.ngayChieuGioChieu
                                        ).format("hh:mm A")}
                                      </NavLink>
                                    );
                                  })}
                              </div>
                            </div>
                          </div>
                        </div>
                        <hr />
                      </Fragment>
                    );
                  })}
                </TabPane>
              );
            })}
          </Tabs>
        </TabPane>
      );
    });
  };

  const { tabPosition } = state;

  return (
    <>
    
      <Tabs tabPosition={tabPosition}>{renderHeThongRap()}</Tabs>
    </>
  );
}
