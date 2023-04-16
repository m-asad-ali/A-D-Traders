import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";

const HeroSection = ({ myData, type }) => {
  const { name } = myData;

  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <p className="intro-data">Welcome to</p>
            <h1> {name} </h1>
            {type !== "about" && (
              <>
                <p>
                  we are an online retailer that offers a wide selection of
                  high-quality products at competitive prices. Our mission is to
                  provide our customers with a convenient, hassle-free shopping
                  experience and exceptional customer service.
                </p>
                <NavLink to={"products"}>
                  <Button>show now</Button>
                </NavLink>
              </>
            )}
          </div>
          {/* our homepage image  */}
          <div className="hero-section-image">
            <figure>
              <img
                src="images/hero.jpg"
                alt="hero-section"
                className="img-style"
              />
            </figure>
          </div>
          <div className="details">
            {type === "about" ? (
              <>
                <p>
                  A&D Traders is an online retailer that offers a wide selection
                  of high-quality products at competitive prices. Our mission is
                  to provide our customers with a convenient, hassle-free
                  shopping experience and exceptional customer service.
                </p>
                <p>
                  We believe that shopping should be easy and fun, so we've
                  designed our website to be user-friendly and intuitive. Our
                  product categories are organized in a way that makes it easy
                  for you to find what you're looking for, and our search bar
                  allows you to quickly locate specific products.
                </p>
                <p>
                  At [website name], we're passionate about delivering great
                  value to our customers. We work hard to keep our prices
                  competitive and our product selection fresh and exciting. We
                  also offer free shipping on orders over a certain amount and
                  have a hassle-free return policy, so you can shop with
                  confidence.
                </p>
                <p>
                  We believe in providing exceptional customer service, and
                  we're committed to making sure that you're satisfied with your
                  purchase. If you have any questions or concerns, our friendly
                  customer support team is always available to help.
                </p>
                <p>
                  Thank you for choosing [Website Name] as your go-to
                  destination for online shopping. We look forward to serving
                  you and providing you with a fantastic shopping experience!
                </p>
              </>
            ) : (
              console.log("home")
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 12rem 0;

  img {
    min-width: 10rem;
    height: 10rem;
  }
  .details {
    background-color: red;
    width: 700px;

    p {
      font-size: 2rem;
      margin: 2rem 0;
    }
  }

  .hero-section-data {
    p {
      margin: 2rem 0;
    }

    h1 {
      text-transform: capitalize;
      font-weight: bold;
    }

    .intro-data {
      margin-bottom: 0;
    }
  }

  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;

    &::after {
      content: "";
      width: 60%;
      height: 80%;
      background-color: rgba(81, 56, 238, 0.4);
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }

    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`;

export default HeroSection;
