import React from "react";

const Company = () => {
    return (
        <div class="job-card">
            <div class="super-hot">
                <svg fill="none" height="15" viewBox="0 0 12 15" width="12" xmlns="http://www.w3.org/2000/svg">
                    <path clip-rule="evenodd" d="M8.35103 7.22088C8.77945 5.51855 9.97941 4.56322 11.074 4.45661C9.84457 6.98536 12.8712 8.79743 11.1649 11.8192C10.2049 13.5193 8.33941 14.4836 6.25533 14.4997C0.303047 14.5458 -0.829202 8.4487 1.27822 4.29598C0.712659 8.76776 4.77576 8.50349 3.49039 5.62166C2.56746 3.55246 4.57378 0.432578 7.73614 0.50111C5.5579 3.61357 8.78633 4.4127 8.35103 7.22088Z" fill-rule="evenodd" fill="#FFDD85"></path>
                </svg>

                SUPER HOT
            </div>

            <p class="posted-time">Posted 18 minutes ago</p>

            <h2 class="job-title">[SPX Express] Senior Product Operations</h2>

            <div class="company">
                <img alt="Shopee Vietnam Small Logo" class="border-radius-normal border-solid box-shadow-normal ls-is-cached lazyloaded" data-controller="lazyload" data-src="https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBOUpMRGc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--39d48a02f976805620ddc50092a330d97a314636/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RW5KbGMybDZaVjkwYjE5bWFYUmJCMmxwYVdrPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--c8c20c63b868249effdba9ba4f05aa0c5b77cab3/shopee-logo.png" height="48" width="48" src="https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBOUpMRGc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--39d48a02f976805620ddc50092a330d97a314636/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RW5KbGMybDZaVjkwYjE5bWFYUmJCMmxwYVdrPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--c8c20c63b868249effdba9ba4f05aa0c5b77cab3/shopee-logo.png" />
                <p class="company-name">Shopee</p>
            </div>

            <div class="salary">
                💲 <span>Sign in to view salary</span>
            </div>

            <div class="location">
                🏢 At office <span>📍 Ho Chi Minh</span>
            </div>

            <div class="tags">
                <span>QA QC</span>
                <span>IT Support</span>
                <span>Tester</span>
            </div>

            <ul class="benefits">
                <div>Impactful and challenging work</div>
                <div>Vibrant working environment</div>
                <div>Competitive compensation</div>
            </ul>
        </div>
    );
};

export default Company;
