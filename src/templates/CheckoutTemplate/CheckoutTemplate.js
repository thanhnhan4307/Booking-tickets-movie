/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */

import { Components } from "antd/lib/date-picker/generatePicker";
import React, { Component, Fragment, useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
import Checkout from "../../pages/Checkout/Checkout";
import { USER_LOGIN } from "../../util/setting";

export default function CheckoutTemplate(props) {
  //props: {component: , path: '', mobileComponent: }

  useEffect(() => {
    window.scrollTo(0, 0);
  });



  if (!localStorage.getItem(USER_LOGIN)) {
    return <Redirect to="/login"></Redirect>;
  }

  

  return (
    <Route
      exact
      path={props.path}
      render={(propsRoute) => {
        return (
          <>
            <Checkout {...propsRoute}></Checkout>
          </>
        );
      }}
    />
  );
}
