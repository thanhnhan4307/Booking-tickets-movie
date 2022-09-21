/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-labels */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-labels */
/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-undef */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
import React, { Fragment, useEffect, useState } from "react";
import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";
import {
  datVeAction,
  layChiTietPhongVeAction,
} from "../../redux/actions/QuanLyDatVeAction";
import style from "./Checkout.module.css";
import "./Checkout.css";
import { UserOutlined } from "@ant-design/icons";
import { CHUYEN_TAB, DAT_VE } from "../../redux/actions/types/QuanLyDatVeType";
import { ThongTinDatVe } from "../../_core/models/ThongTinDatVe";
import {
  StarFilled,
  StarOutlined,
  DownOutlined,
  CaretDownOutlined,
  CaretRightOutlined,
  CaretLeftOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
  LeftOutlined,
  RightOutlined,
  EyeInvisibleOutlined,
  FrownFilled,
  PoweroffOutlined,
  UndoOutlined,
} from "@ant-design/icons";
import { Tabs } from "antd";
import { layThongTinNguoiDungAction } from "../../redux/actions/QuanLyNguoiDungAction";
import moment from "moment";
import { history } from "../../App";
import { ACCESSTOKEN, TOKEN_CYBERSOFT, USER_LOGIN } from "../../util/setting";
import { NavLink } from "react-router-dom";

function Checkout(props) {
  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);
  const { chiTietPhongVe, danhSachGheDangDat } = useSelector(
    (state) => state.QuanLyDatVeReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    //Gọi hàm tạo ra 1 async function
    const action = layChiTietPhongVeAction(props.match.params.id);
    //Dispatch function này đi
    dispatch(action);
  }, []);

  console.log({ chiTietPhongVe });

  const { thongTinPhim, danhSachGhe } = chiTietPhongVe;

  const renderSeats = () => {
    return danhSachGhe.map((ghe, index) => {
      let classGheVip = ghe.loaiGhe === "Vip" ? "gheVip" : "";
      let classGheDaDat = ghe.daDat === true ? "gheDaDat" : "";

      let classGheDangDat = "";
      //Kiểm tra từng ghế render xem có trong mảng ghế đang đặt hay không

      let indexGheDD = danhSachGheDangDat.findIndex(
        (gheDD) => gheDD.maGhe === ghe.maGhe
      );

      let classDaDuocDat = "";
      if (userLogin.taiKhoan === ghe.taiKhoanNguoiDat) {
        classDaDuocDat = "gheDaDuocDat";
      }
      if (indexGheDD != -1) {
        classGheDaDat = "gheDangDat";
      }

      return (
        <Fragment key={index}>
          <button
            onClick={() => {
              dispatch({
                type: DAT_VE,
                gheDuocChon: ghe,
              });
            }}
            disabled={ghe.daDat}
            className={`ghe ${classGheVip} ${classGheDaDat} ${classGheDangDat} ${classDaDuocDat} text-center`}
            key={index}
          >
            {ghe.daDat ? (
              <EyeInvisibleOutlined style={{ marginBottom: "5px" }} />
            ) : (
              ghe.stt
            )}
          </button>
          {(index + 1) % 15 === 0 ? <br></br> : ""}
        </Fragment>
      );
    });
  };

  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-12">
        <div className="col-span-9">
          <div className="flex flex-col items-center mt-5">
            <div
              className="bg-blue-300"
              style={{ width: "90%", height: "8px" }}
            ></div>
            <div className={`${style["trapezoid"]} text-center`}>
              <h3 className="mt-3 font-extrabold text-gray-900">Màn hình</h3>
            </div>
            <div className="mt-5">{renderSeats()}</div>
          </div>
          <div className="mt-5 mb-16 flex justify-center">
            <table className="w-4/5 divide-y divide-pink-200">
              <thead className="bg-gray-100 p-5">
                <tr>
                  <th>Ghế chưa đặt</th>
                  <th>Ghế đang đặt</th>
                  <th>Ghế đã được đặt</th>
                  <th>Ghế vip</th>
                </tr>
              </thead>
              <tbody className=" bg-white divide-y divide-gray-200">
                <tr>
                  <td>
                    <button className="ghe text-center"></button>
                  </td>
                  <td>
                    <button className="ghe gheDangDat text-center"></button>
                  </td>
                  <td>
                    <button className="ghe gheDaDat text-center">
                      <EyeInvisibleOutlined
                        style={{ marginBottom: "7px" }}
                      ></EyeInvisibleOutlined>
                    </button>
                  </td>
                  <td>
                    <button className="ghe gheVip text-center"></button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-span-3 mt-5">
          <h3 className="text-4xl font-bold text-orange-600 text-center">
            {thongTinPhim.tenPhim}
          </h3>
          <p style={{ color: "white" }}>
            <span style={{ color: "white" }} className="font-bold text-lg">
              Địa điểm:{" "}
            </span>{" "}
            {thongTinPhim.tenCumRap} - {thongTinPhim.tenRap}
          </p>
          <p style={{ color: "white" }}>
            <span style={{ color: "white" }} className="font-bold text-lg">
              Ngày chiếu:{" "}
            </span>
            {thongTinPhim.ngayChieu} - {thongTinPhim.gioChieu}
          </p>
          <hr style={{ backgroundColor: "white" }}></hr>
          <div className="flex flex-row my-3">
            <div className="w-4/5">
              <span className="text-white text-lg font-bold">Ghế: </span>
              {danhSachGheDangDat.map((gheDD, index) => {
                return (
                  <span key={index} className="text-green-500 text-2xl">
                    {gheDD.stt}{" "}
                  </span>
                );
              })}
            </div>
            <div className="text-right col-span-1"></div>
          </div>
          <hr style={{ backgroundColor: "white" }}></hr>
          <div>
            <h3 className="text-center text-green-500 mt-3">
              <span className="font-bold text-2xl">
                <span>Tổng tiền: </span>
                {danhSachGheDangDat
                  .reduce((tongTien, ghe, index) => {
                    return (tongTien += ghe.giaVe);
                  }, 0)
                  .toLocaleString()}
              </span>
            </h3>
          </div>
          <div style={{ color: "white" }} className="my-3">
            <i>Email: </i>
            {userLogin.email}
          </div>
          <hr style={{ backgroundColor: "white" }}></hr>
          <div style={{ color: "white" }} className="my-3">
            <i>Phone: </i>
            {userLogin.soDT}
          </div>
          <hr style={{ backgroundColor: "white" }}></hr>
          <div className="icon mb-6 text-center">
            <div className="b">
              <DownOutlined style={{ color: "white" }} />
            </div>
          </div>

          <div className=" flex flex-col justify-end items-center order">
            <button
              onClick={() => {
                const thongTinDatVe = new ThongTinDatVe();
                thongTinDatVe.maLichChieu = props.match.params.id;
                thongTinDatVe.danhSachVe = danhSachGheDangDat;
                console.log(thongTinDatVe);
                dispatch(datVeAction(thongTinDatVe));
              }}
              className=" rounded-2xl transition duration-500 hover:scale-125 cursor-pointer mt-24  text-white w-44 text-center py-2 font-bold text-2xl"
            >
              ĐẶT VÉ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const { TabPane } = Tabs;
// const onChange = (key) => {

// };

export default function CheckoutTab(props) {
  const { tabActive } = useSelector((state) => state.QuanLyDatVeReducer);
  const dispatch = useDispatch();

  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);

  useEffect(() => {
    return () => {
      dispatch({
        type: "CHANGE_TAB_ACTIVE",
        number: "1",
      });
    };
  }, []);

  const operators = (
    <Fragment>
      {!_.isEmpty(userLogin) ? (
        <Fragment>
          <button
            onClick={() => {
              history.push("/profile");
            }}
          >
            {" "}
            <div
              style={{
                width: 40,
                height: 40,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="ml-4 mb-2 rounded-full bg-green-400 transition duration-500 hover:scale-125"
            >
              {userLogin.taiKhoan.substr(0, 1)}
            </div>
            <div style={{ color: "white" }}>Hello ! {userLogin.taiKhoan}</div>
          </button>{" "}
          <button
            onClick={() => {
              //xóa hết thông tin ở localstorage
              localStorage.removeItem(USER_LOGIN);
              localStorage.removeItem(TOKEN_CYBERSOFT);
              localStorage.removeItem(ACCESSTOKEN);
              history.push("/homepage");
              window.location.reload();
            }}
            className="text-gray-400 ml-3 transition duration-500 hover:text-pink-800 scale-125  "
          >
            Đăng xuất
          </button>
        </Fragment>
      ) : (
        ""
      )}
    </Fragment>
  );

  return (
    <div className="p-5 bg-gray-900">
      <Tabs
        tabBarExtraContent={operators}
        defaultActiveKey={"1"}
        activeKey={tabActive}
        onChange={(key) => {
          dispatch({
            type: "CHANGE_TAB_ACTIVE",
            number: key.toString(),
          });
        }}
      >
        <TabPane
          tab={<div style={{ color: "white" }}>Chọn ghế và thanh toán</div>}
          key="1"
        >
          <Checkout {...props}></Checkout>
        </TabPane>
        <TabPane
          tab={<div style={{ color: "white" }}>Kết quả đặt vé</div>}
          key="2"
        >
          <KetQuaDatVe {...props}></KetQuaDatVe>
        </TabPane>
        <TabPane
          tab={
            <div className="transition duration-500 hover:scale-125">
              <NavLink to="/homepage">
                <UndoOutlined style={{ fontSize: 23, color: "red" }} />
              </NavLink>
            </div>
          }
          key="3"
        ></TabPane>
      </Tabs>
    </div>
  );
}

function KetQuaDatVe(props) {
  const dispatch = useDispatch();

  const { thongTinNguoiDung } = useSelector(
    (state) => state.QuanLyNguoiDungReducer
  );
  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);
  // console.log("thongTinNguoiDung", userLogin);

  useEffect(() => {
    const action = layThongTinNguoiDungAction();
    dispatch(action);
  });

  const renderTicketItem = function () {
    return thongTinNguoiDung.thongTinDatVe?.map((ticket, index) => {
      const seats = _.first(ticket.danhSachGhe);
      return (
        <div className="p-2 lg:w-1/3 md:w-1/2 w-full" key={index}>
          <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
            <img
              alt="team"
              className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
              src={ticket.hinhAnh}
            />
            <div className="flex-grow">
              <h2 className="text-pink-500 title-font font-medium text-xl">
                {ticket.tenPhim}
              </h2>
              <p className="text-gray-400">
                <span className="font-bold">Giờ chiếu:</span>{" "}
                {moment(ticket.ngayDat).format("hh:mm A")} <br />{" "}
                <span className="font-bold">Ngày chiếu:</span>{" "}
                {moment(ticket.ngayDat).format("DD-MM-YYYY")}{" "}
              </p>
              <p>
                <span className="font-bold text-white">Địa điểm:</span>{" "}
                {seats.tenHeThongRap}{" "}
              </p>
              <p>
                <span className="font-bold">Tên rạp: </span>
                {seats.tenCumRap} <br />{" "}
                <span className="font-bold">Số ghế: </span>{" "}
                {ticket.danhSachGhe.map((ghe, index) => {
                  return (
                    <span className="text-green-500 text-lg" key={index}>
                      {" "}
                      [ {ghe.tenGhe} ]{" "}
                    </span>
                  );
                })}
              </p>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <div className="">
      <section className="text-gray-100 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-100">
              Thông tin phim bạn đã đặt
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base"></p>
          </div>
          <div className="flex flex-wrap -m-2">{renderTicketItem()}</div>
        </div>
      </section>
    </div>
  );
}
