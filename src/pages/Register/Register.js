/* eslint-disable no-unused-vars */
// /* eslint-disable jsx-a11y/anchor-is-valid */
// /* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { values } from "lodash";
import { useDispatch } from "react-redux";
import { dangKyAction } from "../../redux/actions/QuanLyNguoiDungAction";

export default function Register(props) {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDienThoai: "",
      hoTen: "",
      maNhom: "GP03",
    },
    onSubmit: (values) => {
      // alert("OK");
      dangKyAction(values);

      // console.log("values", values);
    },
    //  validationSchema: Yup.object({
    //   name: Yup.string().min(5,'Your name must be at least 5 character!').max(20,'Your name must be under 20 character').required('You must fill in this section'),
    //   password: Yup.string().min(5,'Your password must be at least 5 character!'),
    //   email: Yup.string().email('Invalid Email').required('You must fill in this section'),
    //   soDienThoai: Yup.string(),
    //   hoTen: Yup.string(),
    //   maNhom: Yup.string()
    //  })
  });
  return (
    <form>
      <div style={{ minHeight: "100vh" }}>
        <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
          <div>
            <a>
              <h3 className="text-2xl text-pink-800 text-center">ĐĂNG KÝ</h3>
            </a>
          </div>
          <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
            <form>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 undefined"
                >
                  Tài khoản
                </label>
                <div className="flex flex-col items-start">
                  <input
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    type="text"
                    name="name"
                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                  {formik.errors.name && formik.touched.name && (
                    <p>{formik.errors.name}</p>
                  )}
                </div>
              </div>
              <div className="mt-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 undefined"
                >
                  Mật khẩu
                </label>
                <div className="flex flex-col items-start">
                  <input
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    type="password"
                    name="password"
                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                  {formik.errors.matKhau && formik.touched.matKhau && (
                    <p>{formik.errors.matKhau}</p>
                  )}
                </div>
              </div>
              <div className="mt-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 undefined"
                >
                  Email
                </label>
                <div className="flex flex-col items-start">
                  <input
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    type="email"
                    name="email"
                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                  {formik.errors.email && formik.touched.email && (
                    <p>{formik.errors.email}</p>
                  )}
                </div>
              </div>
              <div className="mt-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 undefined"
                >
                  Số điện thoại
                </label>
                <div className="flex flex-col items-start">
                  <input
                    value={formik.values.soDienThoai}
                    onChange={formik.handleChange}
                    type="soDienThoai"
                    name="soDienThoai"
                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 undefined"
                >
                  Họ và tên
                </label>
                <div className="flex flex-col items-start">
                  <input
                    value={formik.values.hoTen}
                    onChange={formik.handleChange}
                    type="text"
                    name="hoTen"
                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
              </div>

              <label
                for="countries_disabled"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900 mt-3"
              >
                Mã nhóm
              </label>
              <select
                disabled=""
                id="countries_disabled"
                class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              >
                <option
                  value={formik.values.maNhom}
                  onChange={formik.handleChange}
                >
                  GP01
                </option>
                <option
                  value={formik.values.maNhom}
                  onChange={formik.handleChange}
                >
                  GP02
                </option>
                <option
                  value={formik.values.maNhom}
                  onChange={formik.handleChange}
                >
                  GP03
                </option>
                <option
                  value={formik.values.maNhom}
                  onChange={formik.handleChange}
                >
                  GP04
                </option>
                {/* <option
                  value={formik.values.maNhom}
                  onChange={formik.handleChange}
                >
                  GP05
                </option>
                <option
                  value={formik.values.maNhom}
                  onChange={formik.handleChange}
                >
                  GP07
                </option>
                <option
                  value={formik.values.maNhom}
                  onChange={formik.handleChange}
                >
                  GP08
                </option> */}
              </select>

              <div className="flex items-center justify-end mt-4">
                <a
                  className="text-sm text-gray-600 underline hover:text-gray-900"
                  href="/login"
                >
                  Bạn đã có tài khoản?
                </a>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    const action = dangKyAction(formik.values);
                    dispatch(action);
                  }}
                  type="submit"
                  className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-pink-800 border border-transparent rounded-md active:bg-gray-900 false hover:bg-pink-700 "
                >
                  Đăng ký
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </form>
  );
}
