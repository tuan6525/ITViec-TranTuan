import { useState } from "react";

const FilterPopup = ({ isOpen, onClose, dataFilter }) => {
  // Tìm danh mục phù hợp từ dataFilter.nameFilter
  const levels = dataFilter?.nameFilter?.find(item => item.name === "Level")?.children || [];
  const workingModels = dataFilter?.nameFilter?.find(item => item.name === "Working Model")?.children || [];
  const industries = dataFilter?.nameFilter?.find(item => item.name === "Industry")?.children || [];
  const companyTypes = dataFilter?.nameFilter?.find(item => item.name === "Company Type")?.children || [];

  const [minSalary, setMinSalary] = useState(500);
  const [maxSalary, setMaxSalary] = useState(10000);

  const handleMinChange = (e) => {
    const value = parseInt(e.target.value);
    if (value < maxSalary - 100) setMinSalary(value);
  };

  const handleMaxChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > minSalary + 100) setMaxSalary(value);
  };


  return (
    <div className={`modal fade ${isOpen ? "show d-block" : "d-none"}`} tabIndex="-1"
      style={{ background: "rgba(0,0,0,0.5)" }}>
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
              <label className="fw-bold">{dataFilter?.nameFilter[0]?.name}</label>
              <div className="d-flex flex-wrap gap-2 job-level">
                {levels.map((level, index) => (
                  <span key={index} className="bg-light text-dark p-2">{level.name} +</span>
                ))}
              </div>
            </div>

            {/* Working Model */}
            <div className="mb-3">
              <label className="fw-bold">{dataFilter?.nameFilter[1]?.name}</label>
              <div className="d-flex flex-wrap gap-2 job-level">
                {workingModels.map((model, index) => (
                  <span key={index} className="bg-light text-dark p-2">{model.name} +</span>
                ))}
              </div>
            </div>

            {/* Salary */}
            <label className="fw-bold">{dataFilter?.nameFilter[2]?.name}</label>
            <div className="mb-3 salary-popup">
              <span className="salary-text-popup">{minSalary}$ - {maxSalary}$</span>
              <div className="range-track-popup"></div>
              <div className="slider-container-popup">
                <input
                  type="range"
                  min="500"
                  max="10000"
                  step="500"
                  value={minSalary}
                  onChange={handleMinChange}
                  className="range-slider-popup min"
                />
                <input
                  type="range"
                  min="500"
                  max="10000"
                  step="500"
                  value={maxSalary}
                  onChange={handleMaxChange}
                  className="range-slider-popup max"
                />
              </div>
            </div>

            {/* Industry */}
            <div className="mb-3">
              <label className="fw-bold">{dataFilter?.nameFilter[3]?.name}</label>
              <input type="text" className="form-control" placeholder="Search industry" />
              <div className="border rounded p-2 mt-2 industry-scroll">
                {industries.map((industry, index) => (
                  <div className="form-check" key={index}>
                    <input type="checkbox" className="form-check-input" id={`industry${index}`} />
                    <label className="form-check-label" htmlFor={`industry${index}`}>
                      {industry.name}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Company Type */}
            <div className="mb-3">
              <label className="fw-bold">{dataFilter?.nameFilter[4]?.name}</label>
              <div className="d-flex flex-wrap gap-3 job-level">
                {companyTypes.map((type, index) => (
                  <span key={index} className="bg-light text-dark p-2">{type.name} +</span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="modal-footer">
            <button className="reset-filter">Reset filter</button>
            <button className="btn-apply-filter">Apply</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterPopup;
