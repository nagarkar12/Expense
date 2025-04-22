import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Expense() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [expenses, setExpenses] = useState([]);
  const [edit, setEdit] = useState(false);
  const [currentExpense, setCurrentExpense] = useState({});

  useEffect(() => {
    axios.get("http://localhost:3001/get").then((result) => {
      console.log("Successfully read the data");
      console.log(result.data);
      setExpenses(result.data);
    });
  }, []);

  const addExpense = (e) => {
    e.preventDefault();
    console.log("Hello calling API");
    if (edit) {
      console.log(currentExpense);

      axios
        .put("http://localhost:3001/update/" + currentExpense._id, { amount })
        .then((res) => {
          console.log("Edited successfully");
        })
        .catch((err) => {
          console.log("Failed");
        });
    } else {
      axios
        .post("http://localhost:3001/add", { title, amount })
        .then((res) => {
          console.log("Successfully added");
        })
        .catch((err) => {
          console.log("Failed");
        });
    }
  };

  const handleEdit = (expense) => {
    setAmount((prev) => expense.amount);
    setTitle((prev) => expense.title);
    setEdit((prev) => true);
    setCurrentExpense((prev) => expense);
  };

  const handleDelete = (expense) => {
    axios
      .delete("http://localhost:3001/delete/" + expense._id)
      .then((res) => {
        console.log("Successfully deleted");
      })
      .catch((err) => {
        console.log("Failed");
      });
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          {/* Title */}
          <h2 className="text-center mb-4">Expense Tracker</h2>

          {/* Add Expense Form */}
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <form onSubmit={addExpense}>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Expense Title
                  </label>
                  <input
                    type="text"
                    className="form-control rounded-pill px-3"
                    id="title"
                    placeholder="e.g., Groceries"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="amount" className="form-label">
                    Amount
                  </label>
                  <input
                    type="number"
                    className="form-control rounded-pill px-3"
                    id="amount"
                    placeholder="e.g., 500"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-success w-100 rounded-pill"
                >
                  Add Expense
                </button>
              </form>
            </div>
          </div>

          {/* Expense List */}
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title mb-3">Your Expenses</h5>

              {/* Dummy Expenses */}
              <ul className="list-group">
                {expenses.map((expense) => {
                  return (
                    <li
                      className="list-group-item d-flex align-items-center justify-content-between"
                      key={expense._id}
                    >
                      {/* Title */}
                      <div className="flex-grow-1">
                        <strong>{expense.title}</strong>
                      </div>

                      {/* Amount (centered) */}
                      <div
                        className="text-muted text-center"
                        style={{ width: "120px" }}
                      >
                        ₹ {expense.amount}
                      </div>

                      {/* Buttons */}
                      <div className="d-flex gap-2">
                        <button
                          className="btn btn-sm btn-outline-primary"
                          type="button"
                          onClick={() => handleEdit(expense)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-sm btn-outline-danger"
                          type="button"
                          onClick={() => handleDelete(expense)}
                        >
                          Delete
                        </button>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
