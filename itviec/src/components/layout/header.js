import React, { useEffect, useState } from "react";

const Header = ({ data }) => {
    const cities = ["All Cities", "Ho Chi Minh", "Ha Noi", "Da Nang", "Others"];

    const [dataHeader, setDataHeader] = useState([]);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [openSubMenu, setOpenSubMenu] = useState(null);

    useEffect(() => {
        if (data) {
            setDataHeader(data);
        }
    }, [data]);

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
                            {dataHeader[0]?.children?.map((item, index) => (
                                <div
                                    key={index}
                                    className="nav-item dropdown"
                                    onMouseEnter={() => setOpenDropdown(index)}
                                    onMouseLeave={() => setOpenDropdown(null)}
                                >
                                    <span>{item.name}</span>
                                    <span className="down"><ion-icon name="chevron-down-outline"></ion-icon></span>

                                    {openDropdown === index && (
                                        <ul className="dropdown-menu">
                                            {item?.children?.map((submenu, indexSub) => (
                                                <li
                                                    key={indexSub}
                                                    className="sub-dropdown"
                                                    onMouseEnter={() => setOpenSubMenu(indexSub)}
                                                    onMouseLeave={() => setOpenSubMenu(null)}
                                                >
                                                    <span>
                                                        {submenu.name}
                                                        {submenu.children && <ion-icon className="icon-dropdown" name="chevron-forward-outline"></ion-icon>}
                                                    </span>

                                                    {openSubMenu === indexSub && submenu.children && (
                                                        <ul className="sub-menu">
                                                            {submenu.children.map((subSubMenu, indexSubSub) => (
                                                                <li key={indexSubSub}><span>{subSubMenu.name}</span></li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ))}
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
                    <div className="address-box">
                        <select className="address">
                            <option>
                                <ion-icon name="location-outline"></ion-icon>
                                <span className="ml-2 font-semibold text-black">All Cities</span>
                                <ion-icon name="chevron-down-outline"></ion-icon>
                            </option>
                        </select>
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
