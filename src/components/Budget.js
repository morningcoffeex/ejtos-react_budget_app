import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget, currency, expenses, dispatch } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);

  const checkBudget = (value) => {
    if (value < totalExpenses)
      return alert(
        "You cannot reduce the budget value since its lower than expenses"
      );

    if (value > 20000) return alert("Cannot Exceed Upper Limit 20000");

    dispatch({ type: "SET_BUDGET", payload: value });
  };

  return (
    <div className="alert alert-secondary">
      <span>Budget:</span>
      <label htmlFor="budgt" style={{ fontSize: "20px" }}>
        {currency}
      </label>
      <input
        style={{ width: "80px" }}
        onChange={(e) => checkBudget(e.target.value)}
        max={20000}
        min={expenses}
        value={budget}
        id="budgt"
        type="number"
        step={10}
      ></input>
    </div>
  );
};



export default Budget;
