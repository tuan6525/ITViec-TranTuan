import React, { useEffect } from "react";
import { useState } from "react";

const Company = ({ data }) => {
    const [listCompany, setListCompany] = useState([]);
    const [clickCompany, setClickCompany] = useState(null);

    useEffect(() => {
        setListCompany(data[4]?.children);
    }, [data]);

    return (
        <>
            {
                listCompany?.map((company, index) => (
                    <div
                        key={index}
                        className={`content-job`}
                        onClick={() => setClickCompany(index)}
                    >
                        <div className={`job-card ${clickCompany === index ? "job-card-click" : ""}`}>
                            <div className={company.isHot === "SUPER HOT" ? "super-hot" : company.isHot === "HOT" ? "hot" : ""}>
                                {company.isHot === "SUPER HOT" && <svg fill="none" height="15" viewBox="0 0 12 15" width="12" xmlns="http://www.w3.org/2000/svg">
                                    <path clip-rule="evenodd" d="M8.35103 7.22088C8.77945 5.51855 9.97941 4.56322 11.074 4.45661C9.84457 6.98536 12.8712 8.79743 11.1649 11.8192C10.2049 13.5193 8.33941 14.4836 6.25533 14.4997C0.303047 14.5458 -0.829202 8.4487 1.27822 4.29598C0.712659 8.76776 4.77576 8.50349 3.49039 5.62166C2.56746 3.55246 4.57378 0.432578 7.73614 0.50111C5.5579 3.61357 8.78633 4.4127 8.35103 7.22088Z" fill-rule="evenodd" fill="#FFDD85"></path>
                                </svg>
                                }

                                {company.isHot}
                            </div>

                            <div className="info-company">
                                <p className="posted-time">Posted {company.postedTime} ago</p>

                                <h2 className="job-title">{company.jobTitle}</h2>

                                <div className="company">
                                    <div className="logo-in-list"><img alt={company.companyName} className="border-radius-normal border-solid box-shadow-normal ls-is-cached lazyloaded" src={`${company?.logo}`} /></div>
                                    <p className="company-name">{company.companyName}</p>
                                </div>

                                <div className="salary">
                                    <svg fill="none" height="20" stroke="currentColor" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.0044 6V18" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                                        <path d="M14.9287 7.90332H10.5395C9.99625 7.90332 9.47527 8.11912 9.09114 8.50325C8.70701 8.88738 8.49121 9.40836 8.49121 9.9516C8.49121 10.4948 8.70701 11.0158 9.09114 11.4C9.47527 11.7841 9.99625 11.9999 10.5395 11.9999H13.4656C14.0088 11.9999 14.5298 12.2157 14.914 12.5998C15.2981 12.9839 15.5139 13.5049 15.5139 14.0482C15.5139 14.5914 15.2981 15.1124 14.914 15.4965C14.5298 15.8806 14.0088 16.0964 13.4656 16.0964H8.49121" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor"></path>
                                        <circle cx="12.0002" cy="12.0002" r="9.3" stroke-width="2" stroke="currentColor"></circle>
                                    </svg>
                                    <span>Sign in to view salary</span>
                                </div>
                            </div>

                            <div>
                                <div className="location-company">
                                    <div className="location-address">
                                        <svg fill="none" height="16" viewBox="0 0 24 25" width="16" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_947_6633)">
                                                <path d="M19 14.625C19 13.6967 18.6312 12.8065 17.9749 12.1501C17.3185 11.4937 16.4283 11.125 15.5 11.125H8.5C7.57174 11.125 6.6815 11.4937 6.02513 12.1501C5.36875 12.8065 5 13.6967 5 14.625" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor"></path>
                                                <path d="M12 8.5C13.933 8.5 15.5 6.933 15.5 5C15.5 3.067 13.933 1.5 12 1.5C10.067 1.5 8.5 3.067 8.5 5C8.5 6.933 10.067 8.5 12 8.5Z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor"></path>
                                                <path d="M11.5 18.9375H12.5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor"></path>
                                                <path d="M4.56116 22.7812L2.90039 15.0938H21.0996L19.3696 22.7812" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor"></path>
                                                <line stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" x1="1" x2="23" y1="23.5" y2="23.5"></line>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_947_6633">
                                                    <rect fill="white" height="24" transform="translate(0 0.5)" width="24"></rect>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <span>{company.workType}</span>
                                    </div>
                                    <div className="location-address">
                                        <ion-icon name="location-outline"></ion-icon>
                                        <span>{company.location}</span>
                                    </div>

                                    <div className="tags">
                                        {company?.tags.map((item) => (
                                            <span>{item.name}</span>
                                        ))}
                                    </div>

                                </div>
                                {company?.benefits &&
                                    <ul className="benefits">
                                        {company?.benefits.map((item) => (
                                            <div>{item.nameIntroduce}</div>
                                        ))}
                                    </ul>
                                }
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    );
};

export default Company;
