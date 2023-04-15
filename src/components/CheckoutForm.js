import styled from "styled-components";
import React, { useState } from "react";
import OrderAmount from "./OrderAmount";
import { Button } from "../styles/Button";
import { NavLink } from "react-router-dom";

const CheckoutForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [orderNotes, setOrderNotes] = useState("");
  const [orderNo, setOrderNo] = useState(1452);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Your submit logic here
  };

  return (
    <Wrapper>
      <div className="container">
        <form className="checkout-form" onSubmit={handleSubmit}>
          <h2 className="intro-data">Shipping and Checkout</h2>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              type="text"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              type="text"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="country">Country/Region</label>
            <select
              id="country"
              value={country}
              onChange={(event) => setCountry(event.target.value)}
              required
            >
              <option value="">Select a Country/Region</option>
              <option value="USA">USA</option>
              <option value="Canada">Canada</option>
              {/* Add more countries as needed */}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="state">State/Province</label>
            <select
              id="state"
              value={state}
              onChange={(event) => setState(event.target.value)}
              required
            >
              <option value="">Select a State/Province</option>
              {country === "USA" && (
                <>
                  <option value="CA">California</option>
                  <option value="NY">New York</option>
                  {/* Add more states as needed */}
                </>
              )}
              {country === "Canada" && (
                <>
                  <option value="BC">British Columbia</option>
                  <option value="ON">Ontario</option>
                  {/* Add more provinces as needed */}
                </>
              )}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="city">City</label>
            <select
              id="city"
              value={city}
              onChange={(event) => setCity(event.target.value)}
              required
            >
              <option value="">Select a City</option>
              {state === "CA" && (
                <>
                  <option value="Los Angeles">Los Angeles</option>
                  <option value="San Francisco">San Francisco</option>
                  {/* Add more cities in California as needed */}
                </>
              )}
              {state === "NY" && (
                <>
                  <option value="New York City">New York City</option>
                  <option value="Albany">Albany</option>
                  {/* Add more cities in New York as needed */}
                </>
              )}
              {state === "BC" && (
                <>
                  <option value="Vancouver">Vancouver</option>
                  <option value="Victoria">Victoria</option>
                  {/* Add more cities in British Columbia as needed */}
                </>
              )}
              {state === "ON" && (
                <>
                  <option value="Toronto">Toronto</option>
                  <option value="Ottawa">Ottawa</option>
                  {/* Add more cities in Ontario as needed */}
                </>
              )}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="address">Street Address</label>
            <input
              id="address"
              type="text"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="zipCode">ZIP/Postal Code</label>
            <input
              id="zipCode"
              type="text"
              value={zipCode}
              onChange={(event) => setZipCode(event.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="orderNotes">Order Notes (Optional)</label>
            <textarea
              id="orderNotes"
              value={orderNotes}
              onChange={(event) => setOrderNotes(event.target.value)}
              rows="4"
            />
          </div>
        </form>

        <div>
          <OrderAmount />
          <NavLink to={"/orderconfirmed"}>
            <Button onClick={() => setOrderNo(orderNo + 1)}>
              Pay with Credit/Bank Card
            </Button>
          </NavLink>
          {/* <Button type="submit" onClick={}>Pay with Credit/Bank Card</Button> */}
        </div>
        {/* order total_amount */}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;

  .container {
    display: flex;
    padding: 0px 50px;
  }

  .checkout-form {
    display: flex;
    flex-direction: column;
    width: 600px;
    max-width: 600px;
    margin: 0 auto;
    padding: 0 20px;
    border-radius: 10px;
  }

  .checkout-form h2 {
    margin-bottom: 40px;
    text-align: center;
    font-size: 4rem;
  }

  .form-group {
    margin-bottom: 40px;
  }

  .form-group label {
    display: block;
    margin-bottom: 10px;
    font-size: 1.4rem;
    font-weight: bold;
    color: #333;
  }

  .form-group input,
  .form-group select,
  .form-group textarea {
    display: block;
    width: 100%;
    padding: 15px;
    font-size: 1.2rem;
    border: 1px solid #ccc;
    border-radius: 10px;
    background-color: #fff;
    color: #333;
    transition: border-color 0.2s ease-in-out;
  }

  .form-group input:focus,
  .form-group select:focus,
  .form-group textarea:focus {
    border-color: rgb(98 84 243);
    outline: none;
  }

  .form-group select option {
    font-size: 1.2rem;
  }

  .form-group select:invalid {
    color: #999;
  }

  @media only screen and (max-width: 600px) {
    .container {
      display: block;
    }
    .checkout-form {
      max-width: 100%;
    }
  }
`;

export default CheckoutForm;
