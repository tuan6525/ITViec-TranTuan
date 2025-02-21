import React, { useEffect, useState } from "react";
import FilterPopup from '../feature/filterPopup';

const Filter = ({ data }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [dataFilter, setDataFilter] = useState(null);

    // Level
    const [isOpenLevel, setIsOpenLevel] = useState(false);
    const [selectedLevels, setSelectedLevels] = useState([]);

    const toggleDropdownLevel = () => {
        setIsOpenLevel(!isOpenLevel);
        setIsOpenSalary(false);
        setIsOpenWorkingModel(false);
        setIsOpenIndustry(false);
    };

    const handleSelectLevel = (level) => {
        setSelectedLevels((prev) =>
            prev.includes(level) ? prev.filter((item) => item !== level) : [...prev, level]
        );
    };

    // Working Model
    const [isOpenWorkingModel, setIsOpenWorkingModel] = useState(false);
    const [selectedWorkingModels, setSelectedWorkingModels] = useState([]);

    const toggleDropdownWorkingModel = () => {
        setIsOpenWorkingModel(!isOpenWorkingModel);
        setIsOpenLevel(false);
        setIsOpenSalary(false);
        setIsOpenIndustry(false);
    };

    const handleSelectWorkingModel = (model) => {
        setSelectedWorkingModels((prev) =>
            prev.includes(model) ? prev.filter((item) => item !== model) : [...prev, model]
        );
    };

    // Industry
    const [isOpenIndustry, setIsOpenIndustry] = useState(false);
    const [selectedIndustries, setSelectedIndustries] = useState([]);

    const toggleDropdownIndustry = () => {
        setIsOpenIndustry(!isOpenIndustry);
        setIsOpenLevel(false);
        setIsOpenSalary(false);
        setIsOpenWorkingModel(false);
    };

    const handleSelectIndustry = (industry) => {
        setSelectedIndustries((prev) =>
            prev.includes(industry) ? prev.filter((item) => item !== industry) : [...prev, industry]
        );
    };

    // Salary
    const [isOpenSalary, setIsOpenSalary] = useState(false);
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

    const toggleDropdownSalary = () => {
        setIsOpenSalary(!isOpenSalary);
        setIsOpenLevel(false);
        setIsOpenWorkingModel(false);
        setIsOpenIndustry(false);
    };

    useEffect(() => {
        const filterData = data.find(item => item.name === "filter");
        setDataFilter(filterData);
    }, [data]);

    return (
        <div className="job-filter-container">
            <h2 className="job-count">{dataFilter?.allJobs} IT jobs in Vietnam</h2>

            {/* Hộp bộ lọc */}
            <div className="filter-box">
                {/* Level Filter */}
                <button className="filter-button" onClick={toggleDropdownLevel}>
                    Level <ion-icon name="chevron-down-outline"></ion-icon>
                </button>
                {isOpenLevel && dataFilter && (
                    <div className="dropdown-menu-filter-level">
                        {dataFilter.nameFilter
                            .find(filter => filter.name === "Level")
                            ?.children.map((level) => (
                                <label key={level.name} className="dropdown-item-filter">
                                    <input
                                        type="checkbox"
                                        checked={selectedLevels.includes(level.name)}
                                        onChange={() => handleSelectLevel(level.name)}
                                    />
                                    {level.name}
                                </label>
                            ))}
                    </div>
                )}

                {/* Working Model Filter */}
                <button className="filter-button" onClick={toggleDropdownWorkingModel}>
                    Working Model <ion-icon name="chevron-down-outline"></ion-icon>
                </button>
                {isOpenWorkingModel && dataFilter && (
                    <div className="dropdown-menu-filter-working">
                        {dataFilter.nameFilter
                            .find(filter => filter.name === "Working Model")
                            ?.children.map((model) => (
                                <label key={model.name} className="dropdown-item-filter">
                                    <input
                                        type="checkbox"
                                        checked={selectedWorkingModels.includes(model.name)}
                                        onChange={() => handleSelectWorkingModel(model.name)}
                                    />
                                    {model.name}
                                </label>
                            ))}
                    </div>
                )}

                {/* Salary Filter */}
                <button className="filter-button" onClick={toggleDropdownSalary}>
                    Salary <ion-icon name="chevron-down-outline"></ion-icon>
                </button>
                {isOpenSalary && (
                    <div className="salary-filter">
                        <span className="salary-text">{minSalary}$ - {maxSalary}$</span>
                        <div className="range-track"></div>
                        <div className="slider-container">
                            <input
                                type="range"
                                min="500"
                                max="10000"
                                step="500"
                                value={minSalary}
                                onChange={handleMinChange}
                                className="range-slider min"
                            />
                            <input
                                type="range"
                                min="500"
                                max="10000"
                                step="500"
                                value={maxSalary}
                                onChange={handleMaxChange}
                                className="range-slider max"
                            />
                        </div>
                        <button className="apply-button-salary">Apply</button>
                    </div>
                )}

                {/* Industry Filter */}
                <button className="filter-button" onClick={toggleDropdownIndustry}>
                    Industry <ion-icon name="chevron-down-outline"></ion-icon>
                </button>
                {isOpenIndustry && dataFilter && (
                    <div className="dropdown-menu-filter-industry">
                        <input
                            type="text"
                            className="search-industry"
                            placeholder="Search industry"
                        />
                        {dataFilter.nameFilter
                            .find(filter => filter.name === "Industry")
                            ?.children.map((industry) => (
                                <label key={industry.name} className="dropdown-item-filter">
                                    <input
                                        type="checkbox"
                                        checked={selectedIndustries.includes(industry.name)}
                                        onChange={() => handleSelectIndustry(industry.name)}
                                    />
                                    {industry.name}
                                </label>
                            ))}
                    </div>
                )}

                {/* Filter Button */}
                <button className="filter-icon-button" onClick={() => setIsPopupOpen(true)}>
                    <span className="icon"><ion-icon name="funnel-outline"></ion-icon></span>Filter
                </button>
                <FilterPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} dataFilter={dataFilter}/>
            </div>
        </div>
    );
};

export default Filter;
