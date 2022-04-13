import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import About from "./components/About/About";
import Booking from "./components/Booking/Booking";
import Header from "./components/Header/Header"
import Home from "./components/Home/Home";
import Login from "./components/Header/Login/Login";
import Services from "./components/Services/Services";
import Pricing from "./components/Pricing/Pricing";
import SignUp from "./components/Header/SignUp/SignUp";
import RequireAuth from "./components/RequreAuth/RequireAuth";


function App() {
  return (
    <Fragment>

        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>} ></Route>
          <Route path="/booking" element={
            <RequireAuth>
              <Booking></Booking>
            </RequireAuth>
          } ></Route>
          <Route path="services" element={<Services></Services>} ></Route>
          <Route path="/pricing" element={<Pricing></Pricing>} ></Route>
          <Route path="/about" element={<About></About>} ></Route>
          <Route path="/login" element={<Login></Login>} ></Route>
          <Route path="/signup" element={<SignUp></SignUp>} ></Route>
        </Routes>

    </Fragment>
  );
}

export default App;
