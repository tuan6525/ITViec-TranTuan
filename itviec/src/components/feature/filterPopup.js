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
          <div className="modal-body" style={{ maxHeight: "60vh", overflowY: "auto", paddingRight: "10px" }}>
            {/* Level */}
            <div className="mb-3">
              <label className="fw-bold">Level</label>
              <div className="d-flex flex-wrap gap-2 job-level">
                {["Fresher", "Junior", "Senior", "Manager"].map((level) => (
                  <span key={level} className="bg-light text-dark p-2">{level} +</span>
                ))}
              </div>
            </div>

            {/* Working Model */}
            <div className="mb-3">
              <label className="fw-bold">Working Model</label>
              <div className="d-flex flex-wrap gap-2 job-level">
                {["At office", "Remote", "Hybrid"].map((model) => (
                  <span key={model} className="bg-light text-dark p-2">{model} +</span>
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
              <input
                type="text"
                className="form-control"
                placeholder="Search industry"
              />
              <div className="border rounded p-2 mt-2 industry-scroll">
                {[
                  "Consumer Goods",
                  "E-commerce",
                  "Education and Training",
                  "Banking",
                  "Food & Beverage",
                  "Game",
                  "Government",
                  "IT Hardware and Computing",
                  "Non-Profit and Social Service",
                  "Manufacturing and Engineering",
                  "Media, Advertising and Entertainment",
                  "Environment",
                  "Pharmaceuticals",
                  "Real Estate, Property and Construction",
                  "Retail and Wholesale",
                  "IT Services and IT Consulting",
                  "Telecommunication",
                  "Tourism & Hospitality Services",
                  "Transportation, Logistics and Warehouse",
                  "Cyber Security",
                  "Trading and Commercial",
                  "Network and Infrastructure"
                ].map((industry, index) => (
                  <div className="form-check" key={index}>
                    <input type="checkbox" className="form-check-input" id={`industry${index}`} />
                    <label className="form-check-label" htmlFor={`industry${index}`}>
                      {industry}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          

            {/* Company Type */}
            <div className="mb-3">
                <label className="fw-bold">Company Type</label>
                <div className="d-flex flex-wrap gap-3 job-level">
                  {["IT Outsourcing", "IT Product", "Headhunt", "IT Service and IT Consulting", "Non-IT"].map((level) => (
                    <span key={level} className="bg-light text-dark p-2">{level} +</span>
                  ))}
                </div>
              </div>
          </div>
          {/* Footer */}
          <div className="modal-footer">
            <button className="reset-filter">
              Reset filter
            </button>
            <button className="btn-apply-filter">Apply</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterPopup;
