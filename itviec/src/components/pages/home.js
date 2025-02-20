import React, { useEffect, useState } from "react";
import Filter from './filter'
import Company from './company'
import DetailCompany from './detailCompany'

const Home = ({ data }) => {
    const [companySpolight, setCompanySpolight] = useState([]);

    const jobs = [
        {
            id: 1,
            title: "C++ Developer",
            company: "ARIS Vietnam",
            location: "Ho Chi Minh",
            salary: "Sign in to view salary",
            skills: ["C++", "Embedded"],
            type: "HOT",
            details: {
                logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/ARIS_Logo.png",
                topReasons: [
                    "Salary review: 2 times; Bonus: Project, 13th month",
                    "Company trip, Team building, Healthcare package",
                    "Training course, Onsite in Japan",
                ],
            },
        },
        {
            id: 2,
            title: "Middle/Senior Backend Engineer (Java)",
            company: "One Mount Group",
            location: "Ha Noi",
            salary: "Sign in to view salary",
            skills: ["Java", "Spring Boot"],
            type: "SUPER HOT",
            details: {
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/One_Mount_Group_logo.svg/1200px-One_Mount_Group_logo.svg.png",
                topReasons: [
                    "Attractive salary & bonuses",
                    "Flexible working hours",
                    "Onsite opportunities in Singapore",
                ],
            },
        },
    ];

    useEffect(() => {
        setCompanySpolight(data[2]?.children);
    }, [data]);

    return (
        <>
            <div className="company-spotlight">
                <div className="company-banner">
                    <span className="badge">Company Spotlight</span>
                    <img alt="NAB Innovation Centre Vietnam Headline Photo" class="company-spotlight-headline-photo object-fit-cover w-100 h-100 ls-is-cached lazyloaded" src="https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMGp2U3c9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--af9c992a3085fd3c5f443d1dfa2ebd51074a5ded/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RW5KbGMybDZaVjkwYjE5bWFYUmJCMmtDV0FJdyIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--762172fab7ca33778168506729c89187a8e761eb/For%20ITviec_updated-600-400.png" />
                </div>

                <div className="company-info">
                    <div className="company-logo">
                        <img alt="NAB Innovation Centre Vietnam Vietnam Big Logo" class="company-spotlight-logo-image irounded-sm ls-is-cached lazyloaded" src="https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBeFQvU3c9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--59b72c9b8c38d3b3cd69edd784051a8691672f00/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RW5KbGMybDZaVjkwYjE5bWFYUmJCMmtCcWpBPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--79eee5883893a012786006950460867831e6f661/NAB_Logo_RGB_1x1.png" />
                    </div>
                    <div className="company-details">
                        <h4>{companySpolight?.nameCompany}</h4>
                        <p className="location">
                            <ion-icon name="location-outline"></ion-icon>{companySpolight?.address}
                        </p>
                        <p className="description">{companySpolight?.introduce}</p>
                        <a href="#" className="view-jobs">View {companySpolight?.countJobs} jobs &gt;</a>
                    </div>
                </div>

                <div className="job-listings">
                    {companySpolight?.recruitmentPosition?.map((item, index) => (
                        <div className="job-item">
                            <ion-icon name="chevron-forward-outline"></ion-icon>
                            <span>{item.name}</span>
                        </div>
                    ))}
                </div>
            </div>
            <Filter data={data}/>
            <div className="content-job">
                <div className="list-company">
                    <Company />
                    <Company />
                    <Company />
                    <Company />
                    <Company />
                </div>
                <DetailCompany jobs={jobs} />
            </div>
        </>
    )
}

export default Home;