import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = () => {
  const expenses = [
    { id: 12345, name: "Shopping", cost: 50 },
    { id: 12346, name: "Garage", cost: 80 },
    { id: 12347, name: "Mobile", cost: 30 },
    { id: 12348, name: "Fuel", cost: 20 },
    { id: 12349, name: "Lunch", cost: 60 },
  ];

  return (
    <ul className="list-group">
      {expenses.map((expense) => (
        <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} />
      ))}
    </ul>
  );
};

export default ExpenseList;
