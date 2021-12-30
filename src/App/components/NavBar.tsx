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
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>{NavLinks()}</div>
  );
}

export default Navbar;
