import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <Wrapper>
      <NavLink to="/">
        <img className="logo" src={logo} alt="my logo" />
      </NavLink>
      <Nav />
    </Wrapper>
  );
};

const Wrapper = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    max-height: 100px;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .logo {
      max-height: 70px;
    }
  }
`;
export default Header;
