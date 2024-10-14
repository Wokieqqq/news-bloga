import "./Header.css"
import React from "react"
// import background_image from "../../images/Image.png"

import youtube from "../../icons/youtube.svg"
import facebook from "../../icons/facebook.svg"
import pinterest from "../../icons/pinterest.svg"
import twitter from "../../icons/twitter.svg"
import behance from "../../icons/behance.svg"
import search from "../../icons/search.svg"
import { NavLink } from "react-router-dom"

function Header(){
    return(
        <div className="container wide">
            
                    <header>
                        <h1 className="main-logo">RUNO</h1>
                        <div className="main-links">
                            <nav className="main-web">
                                <NavLink className={(navData) => navData.isActive ? "selected-link" : null} style={{
                                    color: "rgba(255, 255, 255, 0.815)",
                                    paddingBottom: "4px",
                                    paddingTop: "4px",
                                    textDecoration: "none"
                                }} to="/">Home</NavLink>
                                <NavLink className={(navData) => navData.isActive ? "selected-link" : null}style={{
                                    color: "rgba(255, 255, 255, 0.815)",
                                    paddingBottom: "4px",
                                    paddingTop: "4px",
                                    textDecoration: "none"
                                }} to="/about-us">About</NavLink>
                                <NavLink className={(navData) => navData.isActive ? "selected-link" : null}style={{
                                    color: "rgba(255, 255, 255, 0.815)",
                                    paddingBottom: "4px",
                                    paddingTop: "4px",
                                    textDecoration: "none"
                                }} to="/create-article">Articles</NavLink>
                                <a>Contact us</a>
                            </nav>
                            <div className="vertical-line"></div>
                            <nav className="main-web">
                                <img src={facebook} alt="Logo" />
                                <img src={twitter} alt="Logo" />
                                <img src={youtube} alt="Logo" />
                                <img src={pinterest} alt="Logo" />
                                <img src={behance} alt="Logo" />
                            </nav>
                            <div className="vertical-line"></div>
                                <img src={search} alt="Logo" className="search"/>
                        </div>
                    
                    </header>
                    <section id="preview">
                        <div className="main-wrapper">
                            <div className="adventure-button-header">
                                <p>Adventure</p>
                            </div>

                            <h1>Richird Norton photorealistic<br/>
                            rendering as real photos</h1>

                            <div className="website-history">
                                <div className="date-slider">
                                    <p>08.08.2021</p>
                                    <div className="horizontal-line"></div>
                                </div>
                                <p>Progressively incentivize cooperative systems through technically sound<br/>
                                functionalities. The credibly productivate seamless data.</p>

                            </div>
                            <div className="change-pictures">
                                <div className="circle circle-active"></div>
                                <div className="circle circle-off"></div>
                                <div className="circle circle-off"></div>
                            </div>
                            
                        </div>
                    </section>
                </div>
            
        
    )
}
export default Header