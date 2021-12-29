import React from "react";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

const pages = [
  { name: "about", link: "about" },
  { name: "annotation", link: "annotation" },
  { name: "ipa tables", link: "ipaTables" },
];

function NavLinks() {
  return pages.map((page) => {
    return (
      <NavLink to={page.link}>
        {/* activeStyle> */}
        {page.name}
      </NavLink>
    );
  });
}

const NavLink = styled(Link)`
  color: #808080;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #000000;
  }
`;

function Navbar() {
  return <div>{NavLinks()}</div>;
  // <>
  //   {/* <Nav>
  //     <Bars /> */}

  //   {/* <NavMenu> */}
  //   <NavLink to="/about" activeStyle>
  //     About
  //   </NavLink>
  //   <NavLink to="/events" activeStyle>
  //     Events
  //   </NavLink>
  //   <NavLink to="/annual" activeStyle>
  //     Annual Report
  //   </NavLink>
  //   <NavLink to="/team" activeStyle>
  //     Teams
  //   </NavLink>
  //   <NavLink to="/blogs" activeStyle>
  //     Blogs
  //   </NavLink>
  //   <NavLink to="/sign-up" activeStyle>
  //     Sign Up
  //   </NavLink>
  //   {/* Second Nav */}
  //   {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
  //   {/* </NavMenu>
  //     <NavBtn>
  //       <NavBtnLink to="/signin">Sign In</NavBtnLink>
  //     </NavBtn>
  //   </Nav> */}
  // </>
}

export default Navbar;
