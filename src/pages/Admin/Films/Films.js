/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-template-curly-in-string */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { Fragment } from "react";
import { Table } from "antd";
import {
  AudioOutlined,
  DeleteOutlined,
  EditOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import { Input, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  layDanhSachPhimAction,
  xoaPhimAction,
} from "../../../redux/actions/QuanLyPhimAction";
import { object } from "yup";
import { history } from "../../../App";
import { NavLink } from "react-router-dom";

const { Search } = Input;

export default function Films(props) {
  const { arrFilmDefault } = useSelector((state) => state.QuanLyPhimReducer);

  const dispatch = useDispatch();
  console.log(arrFilmDefault);

  useEffect(() => {
    dispatch(layDanhSachPhimAction());
  }, []);
  const columns = [
    // {
    //   title: 'Mã phim',
    //   dataIndex: 'maPhim',
    //   value:(text,object)=>{return <span>{text}</span>},

    // },

    {
      title: "Mã phim",
      dataIndex: "maPhim",
      width: "5%",
      value: (text, object) => {
        return <span>{text}</span>;
      },
      sorter: {
        compare: (a, b) => a.maPhim - b.maPhim,
        multiple: 3,
      },
    },
    {
      title: "Hình ảnh",
      dataIndex: "hinhAnh",
      width: "5%",
      render: (text, film, index) => {
        return (
          <Fragment>
            <img
              src={film.hinhAnh}
              alt={film.tenPhim}
              width={50}
              height={50}
              onError={(e) => {
                e.target.onError = null;
                e.target.src = `https://picsum.photos/id/${index}/50/50`;
              }}
            ></img>
          </Fragment>
        );
      },
      // sorter: {
      //   compare: (a, b) => a.math - b.math,
      //   multiple: 2,
      // },
    },
    {
      title: "Tên phim",
      dataIndex: "tenPhim",
      width: "20%",
      // sorter: {
      //   compare: (a, b) => a.english - b.english,
      //   multiple: 1,
      // },
    },
    {
      title: "Giới thiệu",
      dataIndex: "moTa",
      width: "25%",
      // sorter: {
      //   compare: (a, b) => a.english - b.english,
      //   multiple: 1,
      // },
    },
    {
      title: "Hành động",
      dataIndex: "maPhim",
      width: "7%",
      render: (text, film) => {
        return (
          <Fragment>
            <button
              onClick={() => {
                history.push(`/editfilm/${film.maPhim}`);
              }}
              className="mr-2 text-xl"
            >
              <EditOutlined style={{ color: "blue" }}></EditOutlined>
            </button>
            <button
              onClick={() => {
                //Gọi action xóa
                if (window.confirm("Bạn có chắc xóa phim" + film.tenPhim)) {
                  //Gọi action
                  dispatch(xoaPhimAction(film.maPhim));
                }
              }}
              className="text-xl "
            >
              <DeleteOutlined style={{ color: "red" }}></DeleteOutlined>
            </button>
            <button
              onClick={() => {
                history.push(`/showtime/${film.maPhim}/${film.tenPhim}`);
              }}
              className="ml-2 text-xl"
            >
              <CalendarOutlined style={{ color: "green" }}></CalendarOutlined>
            </button>
          </Fragment>
        );
      },
      // sorter: {
      //   compare: (a, b) => a.english - b.english,
      //   multiple: 1,
      // },
    },
  ];

  const data = arrFilmDefault;

  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: "#1890ff",
      }}
    />
  );
  const onSearch = (value) => {
    console.log(value);
    //Gọi api lấy danh sách phim
    dispatch(layDanhSachPhimAction(value));
  };

  function onChange(pagination, filters, sorter, extra) {
    // console.log("params", pagination, filters, sorter, extra);
  }
  return (
    <div className="container">
      <h3 className="text-4xl">Quản lý phim</h3>
      <button
        onClick={() => {
          history.push("/addfilm");
        }}
        className="mb-3 rounded-lg px-3 py-2 text-white"
        style={{ backgroundColor: "black" }}
      >
        Thêm phim mới
      </button>
      <Search
        className="mb-3"
        placeholder="Nhập vào phim bạn muốn tìm"
        allowClear
        enterButton="Tìm kiếm"
        size="large"
        onSearch={onSearch}
      />
      <Table
        columns={columns}
        dataSource={data}
        onChange={onChange}
        rowKey={"maPhim"}
      />
    </div>
  );
}
