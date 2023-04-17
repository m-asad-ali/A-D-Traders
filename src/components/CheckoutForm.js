import React, { useState } from "react";
import { useCartContext } from "../context/cart_context";
import styled from "styled-components";
import OrderAmount from "./OrderAmount";
import { Button } from "../styles/Button";
import { NavLink } from "react-router-dom";
import { Country, State, City } from "country-state-city";
import { clear } from "@testing-library/user-event/dist/clear";

const CheckoutForm = () => {
  const [canPay, setCanPay] = useState(false); // to check if the form is filled, make it true if yor are testing
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [stAddress, setStAddress] = useState(""); // street address
  const [apAddress, setApAddress] = useState(""); // appartement address
  const [zipCode, setZipCode] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [orderNotes, setOrderNotes] = useState("");
  const [allCountry, setAllCountry] = useState(Country.getAllCountries());
  const [allState, setAllState] = useState(State.getStatesOfCountry(1));
  const [allCity, setAllCity] = useState(City.getCitiesOfState(1));

  const { clearCart } = useCartContext();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Your submit logic here
    setCanPay(true);
  };

  const handlePayment = (event) => {
    console.log("Payment");
    clearCart();
  };

  const selectCountry = (event) => {
    setCountry(event.target.value);
    setAllState(State.getStatesOfCountry(event.target.value));
  };

  const selectState = (event) => {
    setState(event.target.value);
    setAllCity(City.getCitiesOfState(country, event.target.value));
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
              placeholder="First Name"
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
              placeholder="last Name"
              onChange={(event) => setLastName(event.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="country">Country/Region</label>
            <select
              id="country"
              value={country}
              onChange={selectCountry}
              required
            >
              <option value="">Select a Country/Region</option>
              {allCountry.map((getcountry, index) => (
                <option value={getcountry.isoCode} key={index}>
                  {getcountry.name}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="state">State/Province</label>
            <select id="state" value={state} onChange={selectState} required>
              <option value="">Select a State/Province</option>
              {allState.map((getState, index) => (
                <option value={getState.isoCode} key={index}>
                  {getState.name}
                </option>
              ))}
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
              {allCity.map((getCity, index) => (
                <option value={getCity.isoCode} key={index}>
                  {getCity.name}
                </option>
              ))}{" "}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="address">Street Address</label>
            <input
              id="stAddress"
              type="text"
              value={stAddress}
              placeholder="House no and Street"
              onChange={(event) => setStAddress(event.target.value)}
              required="true"
            />
            <input
              style={{ marginTop: "2rem" }}
              id="apAddress"
              type="text"
              value={apAddress}
              placeholder="Appartment, suite, unit etc. (optional)"
              onChange={(event) => setApAddress(event.target.value)}
              required="true"
            />
          </div>

          <div className="form-group">
            <label htmlFor="zipCode">ZIP/Postal Code</label>
            <input
              id="zipCode"
              type="text"
              value={zipCode}
              placeholder="ZIP code Or Postal Code"
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
              placeholder="Phone Number"
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
              placeholder="Email Address"
              onChange={(event) => setEmail(event.target.value)}
              required
            ></input>
          </div>

          <div className="form-group">
            <label htmlFor="orderNotes">Order Notes (Optional)</label>
            <textarea
              id="orderNotes"
              value={orderNotes}
              placeholder="Notes about your order, e.g. special notes for delivery."
              onChange={(event) => setOrderNotes(event.target.value)}
              rows="4"
            />
          </div>

          <input type="submit" value="Submit" />
        </form>

        <div>
          <OrderAmount />
          {canPay && (
            <NavLink to={"/orderconfirmed"}>
              <Button onClick={handlePayment}>Pay with Credit/Bank Card</Button>
            </NavLink>
          )}
        </div>
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
    font-size: 1.5rem;
    border: 1px solid #ccc;
    border-radius: 10px;
    background-color: #fff;
    color: #333;
    transition: border-color 0.2s ease-in-out;
    height: 50px;
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
