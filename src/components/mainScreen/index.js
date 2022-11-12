import React, { useState } from "react";
import "./main-screen.scss";
import axios from "axios";

function Popup(props) {
  const { Popup = "", Inventory = { begin: 0, end: 0 } } = props;

  const [inputValue, setInputValue] = useState(0);

  const upDateInventory = (additional, quantity) => {
    return axios
      .put("http://localhost:3030/inventory/636dbe586f6e64b0fae4fb45/update", {
        additional: additional,
        quantity: quantity,
      })
      .then(function (res) {
        if (res.data == "Update failed") {
          return alert("Update failed");
        }
        alert("Update successful");
      });
  };

  const checkValue = (e) => {
    let newValue = e;
    if (e < 0) {
      newValue = -e;
    }
    setInputValue(newValue);
  };

  function showPopup(Popup) {
    let title;
    let text;

    switch (Popup) {
      case "IMPORT":
        title = "NHẬP HÀNG";
        text = "NHẬP SỐ LƯỢNG HÀNG CẦN NHẬP: ";
        break;

      case "EXPORT":
        title = "XUẤT HÀNG";
        text = "NHẬP SỐ LƯỢNG HÀNG CẦN XUẤT: ";
        break;

      case "INVENTORY":
        title = "HÀNG TỒN KHO";
        break;

      default:
        break;
    }

    return (
      <div className="popup">
        <div className="popup-header">
          <h1>{title}</h1>
        </div>
        {Popup === "INVENTORY" && (
          <div>
            <h3>
              TỒN ĐẦU NGÀY: <span>{Inventory.begin}</span>
            </h3>
            <h3>
              TỒN CUỐI NGÀY: <span>{Inventory.end}</span>
            </h3>
          </div>
        )}
        {(Popup === "IMPORT" || Popup === "EXPORT") && (
          <div>
            <h3>{text}</h3>
            <>
              <input
                type="number"
                name="quantity"
                min="1"
                value={inputValue}
                onChange={(e) => checkValue(e.target.value)}
              ></input>
              <button
                type="button"
                onClick={() => {
                  upDateInventory(Popup, inputValue);
                  setInputValue(0);
                }}
              >
                Xác Nhận
              </button>
            </>
          </div>
        )}
      </div>
    );
  }

  return showPopup(Popup);
}

export default Popup;
