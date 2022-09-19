/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { Select } from "antd";
import logo5 from "../../../assets/img/logo5.png";
//Hook đa ngôn ngữ
import { useTranslation } from "react-i18next";
import { history } from "../../../App";
import { useSelector } from "react-redux";
import _ from "lodash";
import {
  ACCESSTOKEN,
  TOKEN_CYBERSOFT,
  USER_LOGIN,
} from "../../../util/setting";
import { ImportOutlined, PoweroffOutlined, SmileOutlined } from "@ant-design/icons";
import "./Header.css";
const { Option } = Select;

export default function Header(props) {
  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);

  const { t, i18n } = useTranslation();

  const handleChange = (value) => {
    i18n.changeLanguage(value);
  };

  const renderLogin = () => {
    if (_.isEmpty(userLogin)) {
      return (
        <Fragment>
          <div className="">
            <button    onClick={() => {
              history.push("/login");
            }} className="custom-btn btn-7 mr-5 font-semibold">
              <span>Sign in</span>
            </button>
            <button  onClick={() => {
              history.push("/register");
            }} className="custom-btn btn-8 font-semibold">
              <span>Sign up</span>
            </button>
          </div>

          {/* <div className="">
        <svg height="40" width="150" xmlns="http://www.w3.org/2000/svg">
          <rect id="shape" height="40" width="150" />
          <div id="text">
          <a
            onClick={() => {
              history.push("/login");
            }}
            className="spot"
          >
            Sign in
          </a>
          <a
            onClick={() => {
              history.push("/register");
            }}
            className="spot"
          >
            Sign up
          </a>
          </div>
        </svg>
       
        </div> */}
        </Fragment>
      );
    }
    return (
      <Fragment>
        <div>
          <a
            onClick={() => {
              history.push("/profile");
            }}
            className=" hover:text-gray-600 self-center px-3 py-3 mr-3 font-semibold "
          >
            <SmileOutlined
              className="mr-2 "
              style={{ fontSize: 23, color: "red" }}
            />
            Hello ! {userLogin.taiKhoan}
          </a>
          <a
            onClick={() => {
              //xóa hết thông tin ở localstorage
              localStorage.removeItem(USER_LOGIN);
              localStorage.removeItem(TOKEN_CYBERSOFT);
              localStorage.removeItem(ACCESSTOKEN);
              history.push("/homepage");
              window.location.reload();
            }}
            className=""
          >
            <ImportOutlined style={{ fontSize: 23, color: "white" }} />
            <span style={{ marginTop: "5px" }} className="ml-2 font-semibold">
              Đăng xuất
            </span>
          </a>
        </div>
      </Fragment>
    );
  };
  return (
    <header className="  p-4 bg-coolGray-100 text-coolGray-800 bg-opacity-50 bg-gray-800 text-white fixed w-full z-10 ">
      <div className=" hd  container flex justify-between h-16 mx-auto">
        <a
          href="/homepage"
          aria-label="Back to homepage"
          className=" flex items-center p-2 "
        >
          <img 
            style={{ width: "50%" }}
            src="https://moviesandmeals.com/wp-content/uploads/2020/08/logo_smalll_0.png"
          ></img>
        </a>
        <ul className="items-stretch hidden space-x-3 lg:flex">
          <li className="flex hd-1">
            <NavLink
              to="/homepage"
              rel="noopener noreferrer"
              href=""
              className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent text-white font-bold transition duration-500 hover:scale-125   text-lg"
              activeClassName=""
            >
              Trang chủ
            </NavLink>
          </li>
          <li className="flex hd-1">
            <NavLink
              to="/homepage"
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent text-white font-bold transition duration-500 hover:scale-125   text-lg"
              // activeClassName="border-b-2 border-white"
            >
              Cụm rạp
            </NavLink>
          </li>
          <li className="flex hd-1">
            <NavLink
              to="/homepage"
              rel="noopener noreferrer"
              href=""
              className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent text-white font-bold transition duration-500 hover:scale-125  text-lg"
              // activeClassName="border-b-1 border-white "
            >
              Tin tức
            </NavLink>
          </li>
        </ul>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          {renderLogin()}
        </div>
        <button className="p-4 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 dark:text-gray-100"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
