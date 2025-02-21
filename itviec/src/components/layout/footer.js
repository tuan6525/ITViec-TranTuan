import React, { useEffect, useState } from "react";

const Footer = ({ data }) => {
    const [footer, setFooter] = useState([]);
    const [contact, setContact] = useState([]);

    useEffect(() => {
        setFooter(data[5]?.children);
        setContact(data[5]);
    }, [data]);

    return (
        <footer class="footer">
            <div class="footer-container">
                <div class="footer-column">
                    <div class="logo">
                        <img height="50" class="logo-itviec" alt="logo-itviec" src="https://itviec.com/assets/logo-itviec-4492a2f2577a15a0a1d55444c21c0fa55810822b3b189fc689b450fb62ce0b5b.png" />
                        <p>Ít nhưng mà chất</p>
                    </div>
                    <div class="social-icons">
                        <a href="#"><box-icon type='logo' name='linkedin' color='#fff'></box-icon></a>
                        <a href="#"><box-icon name='facebook' type='logo' color='#fff'></box-icon></a>
                        <a href="#"><box-icon name='youtube' type='logo' color='#fff'></box-icon></a>
                    </div>
                </div>

                {footer?.map((item, index) => (
                    <div class="footer-column">
                        <h3>{item.name}</h3>
                        <ul>
                            {item.children.map((subitem) => (
                                <li><a href="#">{subitem.name}</a></li>
                            ))}
                        </ul>
                    </div>
                ))}

                <div class="footer-column contact">
                    <h3>{contact?.nameContact}</h3>
                    {contact?.contact?.map((ct) => (
                        <p><ion-icon name="call-outline"></ion-icon> {ct.location}: {ct.hotLine}</p>
                    ))}
                    <p><ion-icon name="mail-outline"></ion-icon> Email: {contact?.email}</p>
                    <p><ion-icon name="paper-plane-outline"></ion-icon> {contact?.subContact}</p>
                </div>
            </div>
            <hr />
            <p class="footer-bottom">Copyright © IT VIEC JSC | Tax code: 0312192258</p>
        </footer>
    );
};

export default Footer;