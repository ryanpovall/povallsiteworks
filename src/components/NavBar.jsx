import React from "react"
import mainLogo from "/assets/logo.jpeg"

export default function NavBar () {
    const [dropdownVisible, setDropdownVisible] = React.useState(false);

    function toggleMenu () {
        setDropdownVisible((prevDropdownVisible) => {
            return !prevDropdownVisible;
        });
    }

    return (
        <div>
            <nav className="nav">
                <img src={mainLogo} className="nav--icon"/>
                <ul className="nav--menu-bar">
                    <li><a href="#General Site Work" className="nav--item">General Site Work</a></li>
                    <li><a href="#Excavation" className="nav--item">Excavation</a></li>
                    <li><a href="#Landscaping" className="nav--item">Landscaping</a></li>
                    <li><a href="#Drainage" className="nav--item">Drainage</a></li>
                    <li><a href="#Septic" className="nav--item">Septic</a></li>
                </ul>
                <div onClick={toggleMenu} className="nav--burger-menu">
                    <div className="nav--burger-line"></div>
                    <div className="nav--burger-line"></div>
                    <div className="nav--burger-line"></div>
                </div>
            </nav>
            {dropdownVisible && 
                <ul className='nav-dropdown'>
                    <div class="separator separator--top"></div>
                    <li><a href="#General Site Work" className="nav-dropdown--item" onClick={toggleMenu}>General Site Work</a></li>
                    <div class="separator"></div>
                    <li><a href="#Excavation" className="nav-dropdown--item" onClick={toggleMenu}>Excavation</a></li>
                    <div class="separator"></div>
                    <li><a href="#Landscaping" className="nav-dropdown--item" onClick={toggleMenu}>Landscaping</a></li>
                    <div class="separator"></div>
                    <li><a href="#Drainage" className="nav-dropdown--item" onClick={toggleMenu}>Drainage</a></li>
                    <div class="separator"></div>
                    <li><a href="#Septic" className="nav-dropdown--item" onClick={toggleMenu}>Septic</a></li>
                </ul>}
        </div>
    )
}