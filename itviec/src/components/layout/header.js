import React, { useState } from "react";

const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

    return (
        <div className="App-header">
            <div className="top-menu">
                {/* Left Controls */}
                <div className="left-controls">
                    <div className="left">
                        <div className="logo">
                            <img className="logo-itviec" alt="logo-itviec" src="https://itviec.com/assets/logo-itviec-4492a2f2577a15a0a1d55444c21c0fa55810822b3b189fc689b450fb62ce0b5b.png" width="82" height="32" />
                        </div>
                    </div>

                    <div className="right">
                        <nav className="nav">
                            {/* All Jobs */}
                            <div 
                                className="nav-item dropdown" 
                                onMouseEnter={() => setIsDropdownOpen(true)} 
                                onMouseLeave={() => setIsDropdownOpen(false)}
                            >
                                <span>All Jobs</span>
                                <span className="down"><ion-icon name="chevron-down-outline"></ion-icon></span>

                                {isDropdownOpen && (
                                    <ul className="dropdown-menu">
                                        <li 
                                            className="sub-dropdown" 
                                            onMouseEnter={() => setIsSubMenuOpen(true)} 
                                            onMouseLeave={() => setIsSubMenuOpen(false)}
                                        >
                                            <span>Jobs by Skill<ion-icon className="icon-dropdown" name="chevron-forward-outline"></ion-icon></span>
                                            {isSubMenuOpen && (
                                                <ul className="sub-menu">
                                                    <li><span>Java</span></li>
                                                    <li><span>PHP</span></li>
                                                    <li><span>JavaScript</span></li>
                                                    <li><span>HTML5</span></li>
                                                    <li><span>SQL</span></li>
                                                    <li><span>Python</span></li>
                                                    <li><span>ReactJS</span></li>
                                                </ul>
                                            )}
                                        </li>
                                        <li><span>Jobs by Title<ion-icon className="icon-dropdown" name="chevron-forward-outline"></ion-icon></span></li>
                                        <li><span>Jobs by Company<ion-icon className="icon-dropdown" name="chevron-forward-outline"></ion-icon></span></li>
                                        <li><span>Jobs by City<ion-icon className="icon-dropdown" name="chevron-forward-outline"></ion-icon></span></li>
                                    </ul>
                                )}
                            </div>
                            
                            {/* IT Companies */}
                            <div 
                                className="nav-item dropdown" 
                                onMouseEnter={() => setIsDropdownOpen(true)} 
                                onMouseLeave={() => setIsDropdownOpen(false)}
                            >
                                <span>IT Companies</span>
                                <span className="down"><ion-icon name="chevron-down-outline"></ion-icon></span>

                                {isDropdownOpen && (
                                    <ul className="dropdown-menu">
                                        <li 
                                            className="sub-dropdown" 
                                            onMouseEnter={() => setIsSubMenuOpen(true)} 
                                            onMouseLeave={() => setIsSubMenuOpen(false)}
                                        >
                                            <span>Vietnam Best IT Companies<ion-icon className="icon-dropdown" name="chevron-forward-outline"></ion-icon></span>
                                            {isSubMenuOpen && (
                                                <ul className="sub-menu">
                                                    <li><span>Best IT Companies 2024</span></li>
                                                    <li><span>Best IT Companies 2023</span></li>
                                                    <li><span>Best IT Companies 2022</span></li>
                                                    <li><span>Best IT Companies 2021</span></li>
                                                    <li><span>Best IT Companies 2020</span></li>
                                                    <li><span>Best IT Companies 2019</span></li>    
                                                </ul>
                                            )}
                                        </li>
                                        <li><span>Company Reviews<ion-icon className="icon-dropdown" name="chevron-forward-outline"></ion-icon></span></li>
                                    </ul>
                                )}
                            </div>
                            {/* Blog */}
                            <div 
                                className="nav-item dropdown" 
                                onMouseEnter={() => setIsDropdownOpen(true)} 
                                onMouseLeave={() => setIsDropdownOpen(false)}
                            >
                                <span>Blog</span>
                                <span className="down"><ion-icon name="chevron-down-outline"></ion-icon></span>

                                {isDropdownOpen && (
                                    <ul className="dropdown-menu">
                                        <li 
                                            className="sub-dropdown" 
                                            onMouseEnter={() => setIsSubMenuOpen(true)} 
                                            onMouseLeave={() => setIsSubMenuOpen(false)}
                                        >
                                            <span>IT Salary Report<ion-icon className="icon-dropdown" name="chevron-forward-outline"></ion-icon></span>
                                            {isSubMenuOpen && (
                                                <ul className="sub-menu">
                                                    <li><span>IT Salary Report 2024-2025</span></li>
                                                    <li><span>IT Salary Report 2023-2024</span></li>
                                                    <li><span>IT Salary Report 2022-2023</span></li> 
                                                </ul>
                                            )}
                                        </li>
                                        <li><span>IT Career</span></li>
                                        <li><span>Applying & Career Up</span></li>
                                        <li><span>IT Expertise</span></li>
                                    </ul>
                                )}
                            </div>
                        </nav>
                    </div>
                </div>

                {/* Right Controls */}
                <div className="right-controls">
                    <span className="employers link">For Employers</span>
                    <span className="signin link">Sign in/Sign up</span>
                    <div className="language-switcher">
                        <span className="language">EN</span>
                        <span className="separator">|</span>
                        <span className="language">VI</span>
                    </div>
                </div>
            </div>

            {/* Bottom Menu */}
            <div className="bottom-menu">
                <div className="search">
                    {/* Dropdown City */}
                    <div className="address">
                        <ion-icon name="location-outline"></ion-icon>
                        <span className="ml-2 font-semibold text-black">All Cities</span>
                        <ion-icon name="chevron-down-outline"></ion-icon>
                    </div>

                    {/* Search Input */}
                    <input
                        type="text"
                        className="content-search"
                        placeholder="Enter keyword skill (Java, iOS...), job title, company..."
                    />

                    {/* Search Button */}
                    <button className="search-button">
                        <ion-icon name="search-outline" className="text-lg mr-2"></ion-icon>
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;
