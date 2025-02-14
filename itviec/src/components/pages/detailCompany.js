import React from "react";

const DetailCompany = (jobs) => {
    return (
        <div className="job-card-detail">
            {/* Header */}
            <div className="job-header">
                <img alt="Shopee Vietnam Small Logo" className="border-radius-normal border-solid box-shadow-normal ls-is-cached lazyloaded" data-controller="lazyload" data-src="https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBOUpMRGc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--39d48a02f976805620ddc50092a330d97a314636/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RW5KbGMybDZaVjkwYjE5bWFYUmJCMmxwYVdrPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--c8c20c63b868249effdba9ba4f05aa0c5b77cab3/shopee-logo.png" height="48" width="48" src="https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBOUpMRGc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--39d48a02f976805620ddc50092a330d97a314636/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RW5KbGMybDZaVjkwYjE5bWFYUmJCMmxwYVdrPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--c8c20c63b868249effdba9ba4f05aa0c5b77cab3/shopee-logo.png" />
                <div className="job-info">
                    <h2 className="job-title">
                    [SPX Express] Senior Product Operations
                    </h2>
                    <p className="job-company">Shopee</p>
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
            <button className="apply-button">Apply now</button>

            {/* Job Details */}
            <div className="job-details">
                <p>📍 Block B, Waseco Building, 10 Pho Quang Street, Tan Binh, Ho Chi Minh</p>
                <p>🏢 At office</p>
                <p>⏳ 4 hours ago</p>
            </div>

            {/* Skills */}
            <div className="job-skills">
                <h3>Skills:</h3>
                <span className="skill">C++</span>
                <span className="skill">Embedded</span>
            </div>

            {/* Reasons to Join */}
            <div className="job-reasons">
                <h3>Top 3 reasons to join us</h3>
                <ul>
                    <li>Salary review: 2 times; Bonus: Project, 13th month</li>
                    <li>Company trip, Team building, Healthcare package</li>
                    <li>Training course, Onsite in Japan</li>
                </ul>
            </div>
        </div>
    );
};

export default DetailCompany;
