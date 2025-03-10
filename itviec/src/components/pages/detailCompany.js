import React from "react";

const DetailCompany = ({ infoDetail }) => {
    return (
        <div className="job-card-detail">
            {/* Header */}
            <div className="job-header">
                <div className="company-img"><img alt="Shopee Vietnam Small Logo" className="border-radius-normal border-solid box-shadow-normal ls-is-cached lazyloaded" src={infoDetail.logo} /></div>
                <div className="job-info">
                    <h2 className="job-title">
                        {infoDetail.jobTitle}
                    </h2>
                    <span className="job-company">{infoDetail.companyName}</span>
                </div>
            </div>

            {/* Salary */}
            <div className="job-salary">
                <svg fill="none" height="20" stroke="currentColor" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.0044 6V18" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                    <path d="M14.9287 7.90332H10.5395C9.99625 7.90332 9.47527 8.11912 9.09114 8.50325C8.70701 8.88738 8.49121 9.40836 8.49121 9.9516C8.49121 10.4948 8.70701 11.0158 9.09114 11.4C9.47527 11.7841 9.99625 11.9999 10.5395 11.9999H13.4656C14.0088 11.9999 14.5298 12.2157 14.914 12.5998C15.2981 12.9839 15.5139 13.5049 15.5139 14.0482C15.5139 14.5914 15.2981 15.1124 14.914 15.4965C14.5298 15.8806 14.0088 16.0964 13.4656 16.0964H8.49121" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor"></path>
                    <circle cx="12.0002" cy="12.0002" r="9.3" stroke-width="2" stroke="currentColor"></circle>
                </svg>
                <span>Sign in to view salary</span>
            </div>

            {/* Apply Button */}
            <div className="btn-icon">
                <button className="apply-button">Apply now</button>
                <img className="icon-heart" src={`${process.env.PUBLIC_URL}/img/like.png`} alt="iconHeart" />
            </div>
            <div className="underline"></div>

            <div className="content-scroll">
                {/* Job Details */}
                <div className="job-details">
                    <div className="location-info">
                        <ion-icon name="location-outline"></ion-icon>
                        <span>{infoDetail.address}</span>
                    </div>
                    <div className="location-info">
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
                        <span>{infoDetail.workType}</span>
                    </div>
                    <div className="location-info">
                        <ion-icon name="time-outline"></ion-icon>
                        <span>{infoDetail.postedTime} ago</span>
                    </div>
                </div>

                {/* Skills */}
                <div className="job-skills">
                    <span className="name-skill">Skills:</span>
                    {infoDetail?.tags.map((tag) => (
                        <span className="skill">{tag.name}</span>
                    ))}
                </div>

                {/* Reasons to Join */}
                {infoDetail?.jobReason &&
                    <div className="job reasons">
                        <h3>Top 3 reasons to join us</h3>
                        <ul>
                            {infoDetail?.jobReason.map((reason) => (
                                <div>{reason.name}</div>
                            ))}
                        </ul>
                    </div>
                }
                {/* Job description */}
                {infoDetail?.jobDescription &&
                    <div className="job description">
                        <h3>Job description</h3>
                        <span>
                            {infoDetail?.jobDescription}
                        </span>
                    </div>
                }

                {/* Job why */}
                {infoDetail?.jobReason &&
                    <div className="job skill-ex">
                        <h3>Your skills and experience</h3>
                        <ul>
                            {infoDetail?.jobSkill.map((skill) => (
                                <div>{skill.name}</div>
                            ))}
                        </ul>
                    </div>
                }

                {/* Job why */}
                {infoDetail?.jobWhy &&
                    <div className="job why">
                        <h3>Why you'll love working here</h3>
                        <ul>
                            {infoDetail?.jobWhy.map((why) => (
                                <div>{why.name}</div>
                            ))}
                        </ul>
                    </div>
                }
            </div>
        </div>
    );
};

export default DetailCompany;
