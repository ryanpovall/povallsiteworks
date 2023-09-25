import React from "react"
import instaIcon from "/assets/Instagram_logo_2022.png"



export default function Footer () {
    return (
        <footer className="footer">
            <div className="footer--contact">
                <h4 className="footer-heading">CONTACT US</h4>
                <div className="footer-contact-grid">
                    <span class="material-icons-outlined">phone</span>                    
                    <span className="footer-content-number">845-392-4632</span>
                    <a href="mailto:povallsiteworks@gmail.com" className="footer-content">
                        <span class="material-icons-outlined">email</span>
                    </a>                   
                    <a href="mailto:povallsiteworks@gmail.com" className="footer-content">povallsiteworks@gmail.com</a>
                    <a className="footer-content" href="https://www.instagram.com/povall_siteworks/">                    
                        <img className="footer-icon" src={instaIcon} alt="Instagram link"></img>
                    </a>
                    <a className="footer-content" href="https://www.instagram.com/povall_siteworks/">@povall_siteworks</a>
                </div>
            </div>
            <div className="footer--copyright">
                <p>© 2023 Povall Siteworks LLC</p>
            </div>
        </footer>
    )
}