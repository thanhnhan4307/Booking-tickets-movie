import React, { Fragment, useEffect } from "react";
import { Route } from "react-router-dom";
import Footer from "./layout/Footer/Footer";
import Header from "./layout/Header/Header";
import "./HomeTemplate.css";
import HomeMenu from "../pages/HomePage/HomeMenu/HomeMenu";
import HomePage from "../pages/HomePage/HomePage";

// import FooterHome from '../components/FooterHome/FooterHome'
// import HeaderHome from '../components/HeaderHome/HeaderHome'

export default function HomeTemplate(props) {
  //props: {component: , path: '', mobileComponent: }

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <Route
      exact
      path={props.path}
      render={(propsRoute) => {
        return (
          <Fragment>
            <div className="head">
              <Header {...propsRoute}></Header>

              <div style={{ minHeight: "100vh" }}>
                <props.component {...propsRoute} />
             
              </div>

              <hr className="mt-5 border-8 border-gray-600"></hr>
              <div className="mt-5" />
              <Footer></Footer>
            </div>
          </Fragment>
        );
      }}
    />
  );
}
