import React from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import FormatPrice from "../Helpers/FormatPrice";

const OrderConfirmation = () => {
  const { total_price, order_no } = useCartContext();

  const date = new Date();
  const options = { year: "numeric", month: "2-digit", day: "2-digit" };
  const formattedDate = date.toLocaleDateString("en-US", options);

  return (
    <Wrapper>
      <div className="order-confirmation-card">
        <h2 className="intro-data">Order Confirmed</h2>
        <p className="order-number">Order Number: {order_no}</p>
        <p className="order-date">Date: {formattedDate}</p>
        <p className="shipment-method">Shipment Method: Credit/Bank Card</p>
        <p className="total-amount">
          Total Amount: <FormatPrice price={total_price} />
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .order-confirmation-card {
    max-width: 600px;
    margin: 100px auto;
    padding: 20px;
    border-radius: 10px;
    background-color: #f2f2f2;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }

  .order-confirmation-card h2 {
    margin-bottom: 20px;
    text-align: center;
    font-size: 3rem;
    font-weight: bold;
  }

  .order-confirmation-card p {
    margin-bottom: 10px;
    font-size: 2rem;
    color: #333;
  }

  .order-confirmation-card .order-number {
    font-weight: bold;
  }

  .order-confirmation-card .total-amount {
    font-weight: bold;
    text-align: right;
  }
`;

export default OrderConfirmation;
