import React, { useState } from "react";
import FilterPopup from '../feature/filterPopup'

const Filter = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    // Level
    const [isOpenLevel, setIsOpenLevel] = useState(false);
    const [selectedLevels, setSelectedLevels] = useState([]);

    const levels = ["Fresher", "Junior", "Senior", "Manager"];

    const toggleDropdownLevel = () => {
        setIsOpenLevel(!isOpenLevel);
        setIsOpenSalary(false);
    }

    const handleSelect = (level) => {
        setSelectedLevels((prev) =>
            prev.includes(level) ? prev.filter((item) => item !== level) : [...prev, level]
        );
    };

    // Salary
    const [isOpenSalary, setIsOpenSalary] = useState(false);
    const [minSalary, setMinSalary] = useState(500);
    const [maxSalary, setMaxSalary] = useState(10000);

    const handleMinChange = (e) => {
        const value = parseInt(e.target.value);
        if (value < maxSalary - 100) setMinSalary(value); // Tránh trùng giá trị
    };

    const handleMaxChange = (e) => {
        const value = parseInt(e.target.value);
        if (value > minSalary + 100) setMaxSalary(value);
    };

    const toggleDropdownSalary = () => {
        setIsOpenSalary(!isOpenSalary);
        setIsOpenLevel(false);
    }
    return (
        <div className="job-filter-container">
            <h2 className="job-count">988 IT jobs in Vietnam</h2>

            {/* Hộp bộ lọc */}
            <div className="filter-box">
                <button className="filter-button" onClick={toggleDropdownLevel}>Level <ion-icon name="chevron-down-outline"></ion-icon></button>
                {console.log(levels)}
                {isOpenLevel && (
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
                {isOpenSalary && (
                    <div className="salary-filter">
                        <span className="salary-text">{minSalary}$ - {maxSalary}$</span>
                        <div className="slider-container">
                            {/* Thanh kéo min */}
                            <input
                                type="range"
                                min="500"
                                max="10000"
                                step="100"
                                value={minSalary}
                                onChange={handleMinChange}
                                className="range-slider"
                            />
                            {/* Thanh kéo max */}
                            <input
                                type="range"
                                min="500"
                                max="10000"
                                step="100"
                                value={maxSalary}
                                onChange={handleMaxChange}
                                className="range-slider"
                            />
                        </div>
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
