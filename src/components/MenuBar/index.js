import React, { useState, useEffect } from "react";
import Handle from "../Handle";
import "./menubar.scss";
import PopupElement from "../mainScreen";
import axios from "axios";

function MenuBar() {
  const [popup, setPopup] = useState("");

  const [inventory, setInventory] = useState({});

  const ShowInventory = () => {
    return axios
      .get("http://localhost:3030/inventoryForDays/showInventory")
      .then((response) => setInventory(response.data));
  };

  return (
    <>
      <div className="menu-bar">
        <div onClick={() => setPopup("IMPORT")}>
          <Handle text="Nhập" />
        </div>
        <div onClick={() => setPopup("EXPORT")}>
          <Handle text="Xuất" />
        </div>
        <div
          onClick={() => {
            setPopup("INVENTORY");
            ShowInventory();
          }}
        >
          <Handle text="Tồn Kho" />
        </div>
      </div>
      <PopupElement Popup={popup} Inventory={inventory} />
    </>
  );
}

export default MenuBar;
