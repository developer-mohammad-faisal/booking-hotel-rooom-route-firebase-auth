import React, { useState } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import "./Booking.css";

const Booking = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className=" w-50 shadow mx-auto p-5 booking-container">
      <h2 className="text-center fw-bold text-info bg-gradient mb-5 fs-1" >Booking Room</h2>

      <Form
        className="w-100"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <Row className="mb-3 mx-auto">
          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label>First name *</Form.Label>
            <Form.Control
              className="rounded-pill"
              required
              type="text"
              placeholder="First name"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom02">
            <Form.Label>Last name *</Form.Label>
            <Form.Control
              className="rounded-pill "
              required
              type="text"
              placeholder="Last name"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3 mx-auto">
          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label>Address 1 *</Form.Label>
            <Form.Control
              className="rounded-pill"
              required
              type="text"
              placeholder="Address 1"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom02">
            <Form.Label>Address 2</Form.Label>
            <Form.Control
              className="rounded-pill "
              required
              type="text"
              placeholder="Address 2"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>City *</Form.Label>
            <Form.Control
              className="rounded-pill"
              type="text"
              placeholder="City"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>State *</Form.Label>
            <Form.Control
              className="rounded-pill"
              type="text"
              placeholder="State"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>Zip *</Form.Label>
            <Form.Control
              className="rounded-pill"
              type="text"
              placeholder="Zip"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="3" controlId="validationCustom03">
            <Form.Label>
              {" "}
              <small>Check in Date *</small>{" "}
            </Form.Label>
            <Form.Control className="rounded-pill" type="date" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Chen in Date.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>
              {" "}
              <small>Check in Time *</small>{" "}
            </Form.Label>

            <Form.Select aria-label="Default select example">
              <option> </option>
              <option value="1"> 12:00 PM</option>
              <option value="2"> 02:00 PM </option>
              <option value="3"> 07:00 PM </option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please provide a valid Check in Time.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>
              {" "}
              <small>Check Out Date *</small>{" "}
            </Form.Label>
            <Form.Control className="rounded-pill" type="date" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Check Out Date.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>
              {" "}
              <small>Check Out Time *</small>{" "}
            </Form.Label>
            <Form.Select aria-label="Default select example">
              <option> </option>
              <option value="1"> 10:00 AM</option>
              <option value="2"> 09:00 PM </option>
              <option value="3"> 04:00 PM </option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please provide a valid Check Out Time.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
{/* 
        {["checkbox", "radio"].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check
              inline
              label="1"
              name="group1"
              type={type}
              id={`inline-${type}-1`}
            />
          </div>
        ))}

        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
      </Form.Group> */}
        <button type="submit">Submit form</button>
      </Form>
    </div>
  );
};

export default Booking;
