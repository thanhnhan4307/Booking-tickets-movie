/* eslint-disable no-unused-vars */
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import HomePage from "./pages/HomePage/HomePage";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import HomeTemplate from "./templates/HomeTemplate";
import Contact from "./pages/Contact/Contact";
import News from "./pages/News/News";
import Detail from "./pages/Detail/Detail";
import CheckoutTemplate from "./templates/CheckoutTemplate/CheckoutTemplate";
import Checkout from "./pages/Checkout/Checkout";
import {Suspense,lazy} from 'react'
import UserTemplate from "./templates/UserTemplate/UserTemplate";
import Dashboard from "./pages/Admin/Dashboard/Dashboard";
import AdminTemplate from "./templates/AdminTemplate/AdminTemplate"
import Films from "./pages/Admin/Films/Films";
import Showtime from "./pages/Admin/Showtime/Showtime";
import Loading from "./components/Loading/Loading";
import Profile from "./pages/Profile/Profile";
import Admin from "./pages/Admin/Admin/Admin";
import AddFilm from "./pages/Admin/Films/AddFilm/AddFilm";
import EditFilm from "./pages/Admin/Admin/EditFilm/EditFilm";
import ShowTime from "./pages/Admin/Admin/ShowTime/ShowTime";



// const CheckoutTemplate = lazy (()=> import ("./templates/CheckoutTemplate/CheckoutTemplate"))

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Loading></Loading>
      <Switch>
        <HomeTemplate exact path={"/homepage"} component={HomePage} />
        <HomeTemplate exact path={"/contact"} component={Contact} />
        <HomeTemplate exact path={"/news"} component={News} />
        <HomeTemplate exact path={"/detail/:id"} component={Detail} />
        <Route exact path={"/register"} component={Register}></Route>
        <HomeTemplate exact path={"/profile"} component={Profile} />
        <CheckoutTemplate exact path={"/checkout/:id"} component={Checkout} />
        <UserTemplate exact path={"/login"} Component={Login}></UserTemplate>


        {/* <AdminTemplate exact path={"/admin"} component={Admin}></AdminTemplate> */}
        <Route exact path={"/films"} component={Films}></Route>
        <Route exact path={"/editfilm/:id"} component={EditFilm}></Route>
        <Route exact path={"/addfilm"} component={AddFilm}></Route>
        <Route exact path={"/showtime/:id/:tenphim"} component={ShowTime}></Route>


{/* 
        <AdminTemplate exact path={"/admin/"} component={Dashboard}></AdminTemplate>
        <AdminTemplate exact path={"/admin/films"} component={Films}></AdminTemplate>
        <AdminTemplate exact path={"/admin/showtime"} component={Showtime}></AdminTemplate> */}
        


        <HomeTemplate exact path="/" component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
