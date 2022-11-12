import React, { useState, useEffect } from "react";
import MenuBar from "../MenuBar";
import axios from "axios";

import "./screen.scss";
function Screen() {
  const createInventoryToday = () => {
    return axios.post("http://localhost:3030/inventoryForDays/create");
  };
  useEffect(() => {
    createInventoryToday();
  }, []);
  return (
    <div className="Screen">
      <div className="container">
        <header>
          <h1>QUẢN LÝ KHO HÀNG</h1>
        </header>
        <div className="screen-body">
          <MenuBar />
        </div>
      </div>
    </div>
  );
}

export default Screen;
