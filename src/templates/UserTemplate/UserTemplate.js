/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component, useEffect } from "react";
import { Route } from "react-router-dom";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";

export default function UserTemplate(props) {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  });


  return (
    <Route
      exact
      path={props.path}
      render={(propsRoute) => {
        return (
          <>
            <div>
              <Login {...propsRoute} />
            </div>
            
          </>
        );
      }}
    />
  );
}
