/* eslint-disable no-use-before-define */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-dupe-keys */
import React, { useState } from "react";
import moment from "moment";
// import { Formik } from 'formik';
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
} from "antd";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { themPhimUploadHinhAction } from "../../../../redux/actions/QuanLyPhimAction";
import { GROUPID } from "../../../../util/setting";

const AddFilm = () => {
  const [componentSize, setComponentSize] = useState("default");

  const [imgSrc, setImgSrc] = useState("");

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      tenPhim: "",
      trailer: "",
      moTa: "",
      ngayKhoichieu: "",
      dangChieu: false,
      sapChieu: false,
      hot: false,
      hot: false,
      danhGia: 0,
      hinhAnh: {},
    },
    onSubmit: (values) => {
      console.log(values);
      values.maNhom = GROUPID;

      //tạo đối tượng formdata => đưa giá trị values từ formik vào formdata
      let formData = new FormData();
      for (let key in values) {
        if (key !== "hinhAnh") {
          formData.append(key, values[key]);
        } else {
          formData.append("File", values.hinhAnh, values.hinhAnh.name);
        }
      }

      //Gọi api các giá trị formdata về backend xử lý
      dispatch(themPhimUploadHinhAction(formData));

      // console.log('formData',formData.get('File'))
    },
  });

  const handleChangeDatePicker = (value) => {
    console.log("datePickerChange", moment(value).format("DD/MM/YYYY"));

    let ngayKhoichieu = moment(value).format("DD/MM/YYYY");
    formik.setFieldValue("ngayKhoichieu", ngayKhoichieu);
  };

  const handleChangeSwitch = (name) => {
    return (value) => {
      formik.setFieldValue(name, value);
    };
  };

  const handleChangeInputNumber = (name) => {
    return (value) => {
      formik.setFieldValue(name, value);
    };
  };
  const handleChangeFile = (e) => {
    //lấy file từ event
    let file = e.target.files[0];
    if (
      file.type === "image/jpeg" ||
      file.type === "image/jpeg" ||
      file.type === "image/gif" ||
      file.type === "image/png"
    )
      console.log(file);
    //tạo đối tượng đọc file
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      //   console.log(e.target.result);
      setImgSrc(e.target.result); //hình base 64
    };
    //đem dữ liệu file lưu vào formik
    formik.setFieldValue("hinhAnh", file);
    // formik.setErrors()
  };

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
  
      <div className="container">
        <Form
          onSubmitCapture={formik.handleSubmit}
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout="horizontal"
          initialValues={{
            size: componentSize,
          }}
          onValuesChange={onFormLayoutChange}
          size={componentSize}
        >
          <h3 className="text-xl">Thêm phim mới</h3>
          {/* <Form.Item label="Form Size" name="size">
        <Radio.Group>
          <Radio.Button value="small">Small</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="large">Large</Radio.Button>
        </Radio.Group>
      </Form.Item> */}
          <Form.Item label="Tên phim">
            <Input name="tenPhim" onChange={formik.handleChange} />
          </Form.Item>
          <Form.Item label="Trailer">
            <Input name="trailer" onChange={formik.handleChange} />
          </Form.Item>
          <Form.Item label="Mô tả">
            <Input name="moTa" onChange={formik.handleChange} />
          </Form.Item>
          <Form.Item label="Ngày khởi chiếu">
            <DatePicker
              format={"DD/MM/YYYY"}
              onChange={handleChangeDatePicker}
            />
          </Form.Item>
          <Form.Item label="Đang chiếu">
            <Switch onChange={handleChangeSwitch("dangChieu")}></Switch>
          </Form.Item>
          <Form.Item label="Sắp chiếu">
            <Switch onChange={handleChangeSwitch("sapChieu")}></Switch>
          </Form.Item>
          <Form.Item label="Hot">
            <Switch onChange={handleChangeSwitch("hot")}></Switch>
          </Form.Item>
          <Form.Item label="Đánh giá">
            <InputNumber
              onChange={handleChangeInputNumber("danhGia")}
              min={1}
              max={10}
            />
          </Form.Item>
          <Form.Item label="Hình ảnh">
            <input
              onChange={handleChangeFile}
              type="file"
              accept="image/png,image/jpeg,image/gif,image/png"
            />
            <br></br>
            <img
              style={{ width: 150, height: 150 }}
              src={imgSrc}
              alt="..."
            ></img>
          </Form.Item>
          <Form.Item label="Tác vụ">
            <button className="bg-sky-500 text-white p-2 mb-5" type="submit">
              Thêm phim
            </button>
          </Form.Item>
        </Form>
      </div>

  );
};

export default AddFilm;
