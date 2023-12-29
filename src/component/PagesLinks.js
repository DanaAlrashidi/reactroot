import React from "react";
import { NavLink } from "react-router-dom";

const PagesLinks = () => {
  return (
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/products">products</NavLink>
      </li>
      <li>
        <NavLink to="/coffee">Coffee</NavLink>
      </li>
      <li>
        <NavLink to="/payment">Checkout</NavLink>
      </li>
    </ul>
  );
};

export default PagesLinks;
