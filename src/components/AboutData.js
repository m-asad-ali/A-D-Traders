import React from "react";
import styled from "styled-components";

const AboutData = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="details">
          <p>
            A&D Traders is an online retailer that offers a wide selection of
            high-quality products at competitive prices. Our mission is to
            provide our customers with a convenient, hassle-free shopping
            experience and exceptional customer service.
          </p>
          <p>
            We believe that shopping should be easy and fun, so we've designed
            our website to be user-friendly and intuitive. Our product
            categories are organized in a way that makes it easy for you to find
            what you're looking for, and our search bar allows you to quickly
            locate specific products.
          </p>
          <p>
            At A&D Traders, we're passionate about delivering great value to our
            customers. We work hard to keep our prices competitive and our
            product selection fresh and exciting. We also offer free shipping on
            orders over a certain amount and have a hassle-free return policy,
            so you can shop with confidence.
          </p>
          <p>
            We believe in providing exceptional customer service, and we're
            committed to making sure that you're satisfied with your purchase.
            If you have any questions or concerns, our friendly customer support
            team is always available to help.
          </p>
          <p>
            Thank you for choosing A&D Traders as your go-to destination for
            online shopping. We look forward to serving you and providing you
            with a fantastic shopping experience!
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .details {
    /* background-color: red; */
    width: 100%;
    padding: 2rem 0;

    p {
      font-size: 2.5rem;
      margin: 2rem 0;
    }
  }
`;

export default AboutData;
