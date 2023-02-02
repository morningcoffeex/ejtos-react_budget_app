import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
// npm install react-bootstrap bootstrap
import { Dropdown } from "react-bootstrap";

const CURRENCYS = [
  {
    symbol: "$",
    name: "Dollar",
  },
  {
    symbol: "£",
    name: "Pound",
  },
  {
    symbol: "€",
    name: "Euro",
  },
  {
    symbol: "₹",
    name: "Ruppee",
  },
];

const Currency = () => {
  const { dispatch } = useContext(AppContext);
  const [tempCurrency, setTempCurrency] = useState({
    // default value to show
    symbol: "£",
    name: "Pound",
  });

  const changeCurrency = (currency) => {
    setTempCurrency(currency);
    dispatch({ type: "CHG_CURRENCY", payload: currency.symbol });
  };

  return (
    <Dropdown>
      <Dropdown.Toggle
        variant="success"
        id="dropdown-basic"
        style={{ backgroundColor: "#73eca1" }}
      >
        Currency ({tempCurrency.symbol} {tempCurrency.name})
      </Dropdown.Toggle>

      <Dropdown.Menu
        className="currency-dropdown"
        style={{ backgroundColor: "#73eca1" }}
      >
        {CURRENCYS.map((c) => (
          <Dropdown.Item
            className="currency-dropdown-item"
            key={c.symbol}
            onClick={() => changeCurrency(c)}
            style={{ backgroundColor: "#73eca1" }}
          >
            {c.symbol} {c.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Currency;
