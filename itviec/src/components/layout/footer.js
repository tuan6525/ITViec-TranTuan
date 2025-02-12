import React from "react";

const Footer = () => {
    return (
        <footer class="footer">
            <div class="footer-container">
                <div class="footer-column">
                    <div class="logo">
                    <img height="50" class="logo-itviec" alt="logo-itviec" src="https://itviec.com/assets/logo-itviec-4492a2f2577a15a0a1d55444c21c0fa55810822b3b189fc689b450fb62ce0b5b.png"/>
                        <p>Ít nhưng mà chất</p>
                    </div>
                    <div class="social-icons">
                        <a href="#"><i class="fab fa-linkedin"></i></a>
                        <a href="#"><i class="fab fa-facebook"></i></a>
                        <a href="#"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>

                <div class="footer-column">
                    <h3>About Us</h3>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">AI Match Service</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">All Jobs</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </div>

                <div class="footer-column">
                    <h3>Campaign</h3>
                    <ul>
                        <li><a href="#">IT Story</a></li>
                        <li><a href="#">Writing Contest</a></li>
                        <li><a href="#">Featured IT Jobs</a></li>
                        <li><a href="#">Annual Survey</a></li>
                    </ul>
                </div>

                <div class="footer-column">
                    <h3>Terms & Conditions</h3>
                    <ul>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Operating Regulation</a></li>
                        <li><a href="#">Complaint Handling</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Press</a></li>
                    </ul>
                </div>

                <div class="footer-column contact">
                    <h3>Contact us</h3>
                    <p><ion-icon name="call-outline"></ion-icon> Ho Chi Minh: (+84) 977 460 519</p>
                    <p><ion-icon name="call-outline"></ion-icon> Ha Noi: (+84) 983 131 351</p>
                    <p><ion-icon name="mail-outline"></ion-icon> Email: <a href="mailto:love@itviec.com">love@itviec.com</a></p>
                </div>
            </div>
            <hr/>
                <p class="footer-bottom">Copyright © IT VIEC JSC | Tax code: 0312192258</p>
        </footer>
    );
};

export default Footer;