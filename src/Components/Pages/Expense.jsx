import React from "react";

export default function Expense() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          {/* Title */}
          <h2 className="text-center mb-4">Expense Tracker</h2>

          {/* Add Expense Form */}
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Expense Title
                  </label>
                  <input
                    type="text"
                    className="form-control rounded-pill px-3"
                    id="title"
                    placeholder="e.g., Groceries"
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
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <div>
                    <strong>Groceries</strong>{" "}
                    <span className="text-muted">₹500</span>
                  </div>
                  <div>
                    <button className="btn btn-sm btn-outline-primary me-2">
                      Edit
                    </button>
                    <button className="btn btn-sm btn-outline-danger">
                      Delete
                    </button>
                  </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <div>
                    <strong>Electricity Bill</strong>{" "}
                    <span className="text-muted">₹1200</span>
                  </div>
                  <div>
                    <button className="btn btn-sm btn-outline-primary me-2">
                      Edit
                    </button>
                    <button className="btn btn-sm btn-outline-danger">
                      Delete
                    </button>
                  </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <div>
                    <strong>Netflix</strong>{" "}
                    <span className="text-muted">₹199</span>
                  </div>
                  <div>
                    <button className="btn btn-sm btn-outline-primary me-2">
                      Edit
                    </button>
                    <button className="btn btn-sm btn-outline-danger">
                      Delete
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
