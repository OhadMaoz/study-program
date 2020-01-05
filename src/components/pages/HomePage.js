import React from "react";
import { link } from "react-router-dom";

const HomePage = () => (
  <div>
    <h1>Home Page</h1>
    <link to="/login">Login</link>
  </div>
);

export default HomePage;
