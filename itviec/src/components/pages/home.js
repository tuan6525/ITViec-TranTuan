import React, { useEffect, useState } from "react";
import Filter from './filter'
import Company from './company'
import DetailCompany from './detailCompany'

const Home = ({ data }) => {
    const [companySpolight, setCompanySpolight] = useState([]);

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
                    <Company data={data}/>
                </div>
                <DetailCompany />
            </div>
        </>
    )
}

export default Home;