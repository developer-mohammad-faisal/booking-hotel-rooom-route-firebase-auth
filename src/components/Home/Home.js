import React, { Fragment, useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import image from "../../Images/circle.png";
import "./Home.css";
import Room from "./Room/Room";

const Home = () => {
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    fetch("hotel.json")
      .then((res) => res.json())
      .then((data) => setRooms(data));
  }, []);

  return (
    <Fragment>
      <div className=" d-flex flex-column-reverse flex-md-row justify-content-between px-10 home">
        <div className="d-flex flex-column align-items-center align-items-md-start p-4">
          <h1>It's a Big World Out There, Go Explore</h1>
          <p>
            We always make our customer happy by providing as many ces as
            possible
          </p>
        </div>
        <div className="">
          <img width={"550"} src={image} alt="" />
        </div>
      </div>

      <section>
        <h1 className="m-5 mt-5">Recommendation Our Hotel Room for you </h1>
        <Row xs={1} md={3} className="g-4 m-0">
          {rooms.map((room) => (
            <Room key={room.id} room={room}></Room>
          ))}
        </Row>
      </section>
    </Fragment>
  );
};

export default Home;
