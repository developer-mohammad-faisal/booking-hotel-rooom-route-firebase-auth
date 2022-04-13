import React, { Fragment } from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Room.css";

const Room = ({ room }) => {
  const { name, img, price, location } = room;

  return (
    <Fragment>
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
          <Card className="card">
           <div  className="d-flex justify-content-center align-items-center">
           <Card.Img className="pt-3" variant="top" src={img} />
           </div>
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>
                <p>
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi icon bi-geo-alt-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                  </svg>
                  {location}
                </p>
                <hr />
                <div className="book-room-btn">
                  <div>
                    <h6>Member rate from</h6>
                    <h4>${price}</h4>
                    <p>
                      <small>Price for 1 person, 1 night</small>
                    </p>
                  </div>
                  <div>
                   <Link to='/booking' ><button>Book a room</button></Link>
                  </div>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Fragment>
  );
};

export default Room;
