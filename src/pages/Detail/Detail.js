/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
import React, { useEffect } from "react";
import "../../assets/styles/circle.scss";
import { Radio, Space, Tabs } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { SET_CHI_TIET_PHIM } from "../../redux/actions/types/QuanLyRapType";
import { layThongTinChiTietPhim } from "../../redux/actions/QuanLyRapAction";
import moment from "moment";
import { StarFilled, StarOutlined } from "@ant-design/icons";
import { Rate } from "antd";
import cgv2 from "../../assets/img/cgv2.jpg";
import { NavLink } from "react-router-dom";
import { history } from "../../App";
import '../../assets/styles/circle.scss'
import "./Detail.scss"

const { TabPane } = Tabs;

const contentStyle = {
  // height: "100px",
  color: "#fff",
  // lineHeight: "160px",
  // textAlign: "center",
  backgroundPosition: "center",
  backgroundSize: "100% ",
  backgroundRepeat: "no-repeat",
};


export default function Detail(props) {
  const filmDetail = useSelector((state) => state.QuanLyPhimReducer.filmDetail);
  // console.log({filmDetail})

  const dispatch = useDispatch();

  useEffect(() => {
    //lấy thông tin param từ url
    let { id } = props.match.params;

    dispatch(layThongTinChiTietPhim(id));
  }, []);
  return (

  // <div style={{...contentStyle, backgroundImage: `url(${filmDetail.hinhAnh})`}} className="movie_card" id="bright">
  //   <div className="info_section">
  //     <div className="movie_header">
  //       <img className="locandina" src={filmDetail.hinhAnh} />
  //       <h1>{filmDetail.tenPhim}</h1>
  //       <h4>2017, David Ayer</h4>
  //       <span className="minutes">117 min</span>
  //       <p className="type">Action, Crime, Fantasy</p>
  //     </div>
  //     <div className="movie_desc">
  //       <p className="text">
  //         {filmDetail.moTa} 
  //       </p>
  //     </div>
  //     <div className="movie_social">
  //       <ul>
  //         <li><i className="material-icons">share</i></li>
  //         <li><i className="material-icons"></i></li>
  //         <li><i className="material-icons">chat_bubble</i></li>
  //       </ul>
  //     </div>
  //   </div>
  //   <div className="blur_back bright_back"  />

  // </div>


    <div className="detail">
      <div style={{ paddingTop: 170, minHeight: "100vh" }}>
        <div className="grid grid-cols-12">
          <div className="col-span-6 col-start-3">
            <div className="grid grid-cols-2 date ">
              <img className=" transition duration-500 hover:scale-110 cursor-pointer"
                src={filmDetail.hinhAnh}
                style={{ width: 250, height: 300 }}
                alt="123"
              >
              </img>
              <div className="ml-4 text-white" style={{ marginTop: "1%" }}>
                <p>
                  <span className="font-bold  text-xl">Ngày khởi chiếu: </span>
                  {moment(filmDetail.ngayKhoiChieu).format("DD.MM.YYYY")}
                  
                </p>
                <p  className="text-white">
                  <span className="font-bold  text-xl">Tên phim: </span>
                  {filmDetail.tenPhim}
                </p>
                <p>
                  <span className="font-bold text-xl">Giới thiệu: </span>
                  {filmDetail.moTa}
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-span-4"
            style={{ marginTop: "10%", marginLeft: "25%" }}
          >
            <h1
              style={{ marginLeft: "11%" }}
              className="text-white text-base"
            >
              Đánh giá
            </h1>
            <h1 style={{ marginLeft: "1%" }} className="text-pink-900">
              <Rate className="transition duration-500 hover:scale-125 cursor-pointer"
                allowHalf
                value={filmDetail.danhGia / 2}
                style={{ color: "green", fontSize: 20 }}
              ></Rate>
            </h1>
            <div
              style={{ marginLeft: "3%", marginTop: "3%" }}
              class={`c100 p${filmDetail.danhGia * 10} green`}
            >
              <span>{filmDetail.danhGia * 10}%</span>
              <div class="slice">
                <div class="bar"></div>
                <div class="fill"></div>
              </div>
            </div>
          </div>
        </div>

        <div className=" mt-10 container ml-52 w-2/3  border-2 border-white">
        
          <Tabs className="date2" defaultActiveKey="" centered>
            <TabPane tab="Lịch chiếu" key="1">
              <div>
                <Tabs tabPosition={"left"}>
                  {filmDetail.heThongRapChieu?.map((htr, index) => {
                    return (
                      <TabPane
                        tab={
                          <div>
                            <img
                              src={htr.logo}
                              className="rounded-full font-bold  transition duration-300 hover:scale-125"
                              width={50}
                            ></img>
                            {htr.tenHeThongRap}
                          </div>
                        }
                        key={index}
                      >
                        {htr.cumRapChieu?.map((cumRap, index) => {
                          return (
                            <div className="mt-4" key={index}>
                              <div className="flex flex-row">
                                <img
                                  style={{ width: 50, height: 50 }}
                                  src={
                                    "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                                  }
                                ></img>
                                <div>
                                  <p className="ml-2 text-white font-medium ">
                                    {" "}
                                    {cumRap.tenCumRap}
                                  </p>
                                  <p
                                    style={{ marginTop: 0, fontSize: 12 }}
                                    className="ml-2 mt-2 font text-gray-400 font-medium"
                                  >
                                    {" "}
                                    {cumRap.tenCumRap}
                                  </p>
                                </div>
                              </div>
                              <div className="thong-tin-lich-chieu grid grid-cols-7 gap-5 mb-3 mt-2">
                                {cumRap.lichChieuPhim
                                  ?.slice(0,37)
                                  .map((lichChieu, index) => {
                                    return (
                                      <NavLink style={{ border: '1px solid #a9a7a9b6'}}
                                        to={`/checkout/${lichChieu.maLichChieu}`} key={index}
                                        className=" bg-gray-200 text-sm font-semibold text-green-700 p-1 rounded-md hover:text-orange-600 "
                                      >
                                        {moment(
                                          lichChieu.ngayChieuGioChieu
                                        ).format("hh:mm A")}
                                      </NavLink>
                                    );
                                  })}
                              </div>
                            </div>
                          );
                        })}
                      </TabPane>
                    );
                  })}
                </Tabs>
              </div>
            </TabPane>
            <TabPane className="text-center py-5 text-white" tab="Thông tin" key="2">
              Không có thông tin phim !
            </TabPane>
            <TabPane className="text-center py-5 text-white" tab="Đánh giá" key="3">
              Không có đánh giá phim !
            </TabPane>
          </Tabs>
          </div>
      </div>
    </div>
  );
}
