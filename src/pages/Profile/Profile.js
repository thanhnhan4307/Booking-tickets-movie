/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { layThongTinNguoiDungAction } from "../../redux/actions/QuanLyNguoiDungAction";
import moment from "moment";
import "./Profile.css";



export default function Profile(props) {
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
      return (
        <div className="p-2 lg:w-1/3 md:w-1/2 w-full" key={index}>
          <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
            <img
              alt="team"
              className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
              src={ticket.hinhAnh}
            />
            <div className="flex-grow">
              <h2 className="text-gray-100 title-font font-medium">
                {ticket.tenPhim}
              </h2>
              <p className="text-gray-100">
                {moment(ticket.ngayDat).format("hh:mm A - DD-MM-YYYY")}
              </p>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <Fragment>
      <div className="h-screen bg-black flex flex-row flex-wrap p-3">
        <div className="mx-auto w-8/12 mt-36">
          <div
            className="rounded-lg shadow-lg bg-gray-600 w-full flex flex-row flex-wrap p-3 antialiased"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1578836537282-3171d77f8632?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80")',
              backgroundRepeat: "no-repat",
              backgroundSize: "cover",
              backgroundBlendMode: "multiply",
            }}
          >
            <div className="md:w-1/3 w-full">
              <img
                className="rounded-full shadow-lg antialiased"
                src="https://picsum.photos/200/200"
              />
            </div>
            <div className="mx-8 my-8">
              <div style={{ color: "white" }} className="my-3">
                <i>Họ tên: </i>
                {userLogin.hoTen}
              </div>
              <div style={{ color: "white" }} className="my-3">
                <i>Email: </i>
                {userLogin.email}
              </div>
              <div style={{ color: "white" }} className="my-3">
                <i>Số điện thoại: </i>
                {userLogin.soDT}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="">
          <section className="text-gray-100 body-font">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-col text-center w-full mb-20">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-100">
                  Lịch sử đặt vé xem phim của bạn
                </h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base"></p>
              </div>
              <div className="flex flex-wrap -m-2">{renderTicketItem()}</div>
            </div>
          </section>
        </div>
      </div>
    </Fragment>
  );
}
