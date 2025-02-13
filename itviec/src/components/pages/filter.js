import React, { useState } from "react";
import FilterPopup from '../feature/filterPopup'

const Filter = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    // Level
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLevels, setSelectedLevels] = useState([]);

    const levels = ["Fresher", "Junior", "Senior", "Manager"];

    const toggleDropdownLevel = () => setIsOpen(!isOpen);

    const handleSelect = (level) => {
        setSelectedLevels((prev) =>
            prev.includes(level) ? prev.filter((item) => item !== level) : [...prev, level]
        );
    };

    // Salary
    const [minSalary, setMinSalary] = useState(500);
    const [maxSalary, setMaxSalary] = useState(10000);

    const toggleDropdownSalary = () => setIsOpen(!isOpen);
    return (
        <div className="job-filter-container">
            <h2 className="job-count">988 IT jobs in Vietnam</h2>

            {/* Hộp bộ lọc */}
            <div className="filter-box">
                <button className="filter-button" onClick={toggleDropdownLevel}>Level <ion-icon name="chevron-down-outline"></ion-icon></button>
                {console.log(levels)}
                {isOpen && (
                    <div className="dropdown-menu-filter">
                        {levels.map((level) => (
                            <label key={level} className="dropdown-item-filter">
                                <input
                                    type="checkbox"
                                    checked={selectedLevels.includes(level)}
                                    onChange={() => handleSelect(level)}
                                />
                                {level}
                            </label>
                        ))}
                    </div>
                )}
                <button className="filter-button">Working Model <ion-icon name="chevron-down-outline"></ion-icon></button>
                <button className="filter-button" onClick={toggleDropdownSalary}>Salary <ion-icon name="chevron-down-outline"></ion-icon></button>
                {isOpen && (
                    <div className="dropdown-menu salary-dropdown">
                        <span>{minSalary}$ - {maxSalary}$</span>

                        {/* Thanh kéo chỉnh mức lương */}
                        <input
                            type="range"
                            min="500"
                            max="10000"
                            step="100"
                            value={minSalary}
                            onChange={(e) => setMinSalary(e.target.value)}
                        />
                        <input
                            type="range"
                            min="500"
                            max="10000"
                            step="100"
                            value={maxSalary}
                            onChange={(e) => setMaxSalary(e.target.value)}
                        />

                        <button className="apply-button">Apply</button>
                    </div>
                )}
                <button className="filter-button">Industry <ion-icon name="chevron-down-outline"></ion-icon></button>

                {/* Nút Filter */}
                <button className="filter-icon-button" onClick={() => setIsPopupOpen(true)}>
                    <span className="icon"><ion-icon name="funnel-outline"></ion-icon></span>Filter
                </button>
                <FilterPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
            </div>
        </div>
    );
};

export default Filter;
