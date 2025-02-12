import React from "react";

const Filter = () => {
  return (
    <div className="job-filter-container">
      <h2 className="job-count">988 IT jobs in Vietnam</h2>

      {/* Hộp bộ lọc */}
      <div className="filter-box">
        <button className="filter-button">Level <ion-icon name="chevron-down-outline"></ion-icon></button>
        <button className="filter-button">Working Model <ion-icon name="chevron-down-outline"></ion-icon></button>
        <button className="filter-button">Salary <ion-icon name="chevron-down-outline"></ion-icon></button>
        <button className="filter-button">Industry <ion-icon name="chevron-down-outline"></ion-icon></button>

        {/* Nút Filter */}
        <button className="filter-icon-button">
            <span className="icon"><ion-icon name="funnel-outline"></ion-icon></span>Filter
        </button>
      </div>
    </div>
  );
};

export default Filter;
