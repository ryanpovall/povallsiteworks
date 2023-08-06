import React from "react"
import instaLogo from "/assets/Instagram_logo_2022.png"


export default function Footer () {
    return (
        <footer className="footer">
            <div className="footer--contact">
                <h4 className="footer-heading">Contact Us</h4>
                <p className="footer-content">845-392-4632</p>
            </div>
            <div className="footer--follow">
                <h4 className="footer-heading">Follow Us</h4>
                <a href="https://www.instagram.com/povall_siteworks/">
                    <img className="footer--instagram" src={instaLogo} alt="Instagram link"></img>
                </a>
            </div>
            <div className="footer--copyright">
                <p>© 2023 Povall Siteworks LLC</p>
            </div>
        </footer>
    )
}