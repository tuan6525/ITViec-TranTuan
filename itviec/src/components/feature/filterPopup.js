import React from "react";

const FilterPopup = ({ isOpen, onClose }) => {
  return (
    <div
      className={`modal fade ${isOpen ? "show d-block" : "d-none"}`}
      tabIndex="-1"
      style={{ background: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          {/* Header */}
          <div className="modal-header">
            <h5 className="modal-title">Filter</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>

          {/* Body */}
          <div className="modal-body">
            {/* Level */}
            <div className="mb-3">
              <label className="fw-bold">Level</label>
              <div className="d-flex flex-wrap gap-2">
                {["Fresher", "Junior", "Senior", "Manager"].map((level) => (
                  <span key={level} className="badge bg-light text-dark p-2">{level} +</span>
                ))}
              </div>
            </div>

            {/* Working Model */}
            <div className="mb-3">
              <label className="fw-bold">Working Model</label>
              <div className="d-flex flex-wrap gap-2">
                {["At office", "Remote", "Hybrid"].map((model) => (
                  <span key={model} className="badge bg-light text-dark p-2">{model} +</span>
                ))}
              </div>
            </div>

            {/* Salary */}
            <div className="mb-3">
              <label className="fw-bold">Salary</label>
              <input type="range" className="form-range" min="500" max="10000" />
              <p>500$ - 10,000$</p>
            </div>

            {/* Industry */}
            <div className="mb-3">
              <label className="fw-bold">Industry</label>
              <input type="text" className="form-control" placeholder="Search industry" />
              <div className="form-check mt-2">
                <input type="checkbox" className="form-check-input" id="industry1" />
                <label className="form-check-label" htmlFor="industry1">Consumer Goods</label>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="modal-footer">
            <button className="btn btn-link text-danger" onClick={() => alert("Reset filters")}>
              Reset filter
            </button>
            <button className="btn btn-danger">Apply</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterPopup;
