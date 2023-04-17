import React from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";

const OrderAmount = () => {
  const { total_price, shipping_fee } = useCartContext();

  return (
    <Wrapper>
      <div className="order-total--amount">
        <div className="order-total--subdata">
          <div>
            <p>subtotal:</p>
            <p>
              {/* <FormatPrice price={total_price} /> */}
              {total_price.toFixed(2)}
            </p>
          </div>
          <div>
            <p>shipping fee:</p>
            <p>
              {/* <FormatPrice price={shipping_fee} /> */}
              {shipping_fee}
            </p>
          </div>
          <hr />
          <div>
            <p>order total:</p>
            <p>
              {/* <FormatPrice price={shipping_fee + total_price} /> */}
              {shipping_fee + total_price}
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;

  .order-total--amount {
    width: 100%;
    margin: 4.8rem 0;
    text-transform: capitalize;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    /* align-items: flex-end; */

    .order-total--subdata {
      border: 0.1rem solid #f0f0f0;
      display: flex;
      flex-direction: column;
      gap: 1.8rem;
      padding: 3.2rem;
    }
    div {
      display: flex;
      gap: 3.2rem;
      justify-content: space-between;
      border-radius: 10px;
    }

    div:last-child {
      background-color: #fafafa;
    }

    div p:last-child {
      font-weight: bold;
      color: ${({ theme }) => theme.colors.heading};
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .order-total--amount {
      width: 100%;
      text-transform: capitalize;
      justify-content: flex-start;
      align-items: flex-start;

      .order-total--subdata {
        width: 100%;
        border: 0.1rem solid #f0f0f0;
        display: flex;
        flex-direction: column;
        gap: 1.8rem;
        padding: 3.2rem;
      }
    }
  }
`;

export default OrderAmount;
