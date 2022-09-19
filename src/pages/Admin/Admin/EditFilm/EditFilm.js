/* eslint-disable no-use-before-define */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-dupe-keys */
import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import {
    capNhatPhimUploadAction,
  layThongTinPhimAction,
  themPhimUploadHinhAction,
} from "../../../../redux/actions/QuanLyPhimAction";
import { GROUPID } from "../../../../util/setting";

const EditFilm = (props) => {
  const [componentSize, setComponentSize] = useState("default");

  const { thongTinPhim } = useSelector((state) => state.QuanLyPhimReducer);
  console.log(thongTinPhim);

  const [img, setImg] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    let { id } = props.match.params;

    dispatch(layThongTinPhimAction(id));
  }, []);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      maPhim:thongTinPhim?.maPhim,
      tenPhim: thongTinPhim?.tenPhim,
      trailer: thongTinPhim?.trailer,
      moTa: thongTinPhim?.moTa,
      ngayKhoichieu: thongTinPhim?.ngayKhoichieu,
      dangChieu: thongTinPhim?.dangChieu,
      sapChieu: thongTinPhim?.sapChieu,
      hot: thongTinPhim?.hot,
      danhGia: thongTinPhim?.danhGia,
      hinhAnh: null,
      // maNhom: "GP03",
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
            if(values.hinhAnh !== null){
                formData.append("File", values.hinhAnh, values.hinhAnh.name);
            }
        }
      }
      //Cật nhật phim upload hình
      dispatch(capNhatPhimUploadAction(formData))
    },
  });

  const handleChangeDatePicker = (value) => {
    console.log("datePickerChange", moment(value).format("DD/MM/YYYY"));

    let ngayKhoichieu = moment(value);
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
  const handleChangeFile = async (e) => {
    //lấy file từ event
    let file = e.target.files[0];
    if (
      file.type === "image/jpeg" ||
      file.type === "image/jpeg" ||
      file.type === "image/gif" ||
      file.type === "image/png"
    )
      console.log(file);

       //Đem dữ liệu file lưu vào formik
    await formik.setFieldValue("hinhAnh", file);
    //Tạo đối tượng đọc file
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      //   console.log(e.target.result);
      setImg(e.target.result); //hình base 64
    };
   
    // formik.setErrors()
  };

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <div className="container px-10 py-10">
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
        <h3 className="text-xl">Cập nhật phim mới</h3>
        {/* <Form.Item label="Form Size" name="size">
        <Radio.Group>
          <Radio.Button value="small">Small</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="large">Large</Radio.Button>
        </Radio.Group>
      </Form.Item> */}
        <Form.Item label="Tên phim">
          <Input
            name="tenPhim"
            onChange={formik.handleChange}
            value={formik.values.tenPhim}
          />
        </Form.Item>
        <Form.Item label="Trailer">
          <Input
            name="trailer"
            onChange={formik.handleChange}
            value={formik.values.trailer}
          />
        </Form.Item>
        <Form.Item label="Mô tả">
          <Input
            name="moTa"
            onChange={formik.handleChange}
            value={formik.values.moTa}
          />
        </Form.Item>
        <Form.Item label="Ngày khởi chiếu">
          <DatePicker
            format="DD/MM/YYYY"
            onChange={handleChangeDatePicker}
            value={moment(formik.values.ngayKhoichieu)}
          />
        </Form.Item>
        <Form.Item label="Đang chiếu">
          <Switch
            onChange={handleChangeSwitch("dangChieu")}
            checked={formik.values.dangChieu}
          ></Switch>
        </Form.Item>
        <Form.Item label="Sắp chiếu">
          <Switch
            onChange={handleChangeSwitch("sapChieu")}
            checked={formik.values.sapChieu}
          ></Switch>
        </Form.Item>
        <Form.Item label="Hot">
          <Switch
            onChange={handleChangeSwitch("hot")}
            checked={formik.values.hot}
          ></Switch>
        </Form.Item>
        <Form.Item label="Số sao">
          <InputNumber
            onChange={handleChangeInputNumber("danhGia")}
            value={formik.values.danhGia}
            min={1}
            max={10}
          />
        </Form.Item>

        <Form.Item label="Hình ảnh">
          <input
            type="file"
            accept="image/png,image/jpeg,image/gif,image/png"
            onChange={handleChangeFile}
          />
          <img
            width={150}
            height={150}
            src={img === "" ? thongTinPhim.hinhAnh : img}
          ></img>
        </Form.Item>

        <Form.Item label="Tác vụ">
          <button className="bg-sky-500 text-white p-2" type="submit">
            Cập nhật
          </button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EditFilm;
