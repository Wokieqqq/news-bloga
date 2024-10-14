import "./Footer.css"
import React from "react"
import youtube from "../../icons/youtube.svg"
import facebook from "../../icons/facebook.svg"
import pinterest from "../../icons/pinterest.svg"
import twitter from "../../icons/twitter.svg"
import behance from "../../icons/behance.svg"
import search from "../../icons/search.svg"

function Footer(){
    return(
        <div className="container wide">
            <footer>
                <div className="contact-us-footer">
                    <div className="contacts">
                        <h1>Contact the Publisher</h1>
                        <p>mike@runo.com</p>
                        <p>+944 450 904 505</p>
                    </div>
                    <div className="contacts">
                        <h1>Explorater</h1>
                        <p>About</p>
                        <p>Partners</p>
                        <p>Job Opportunities</p>
                        <p>Advertise</p>
                        <p>Membership</p>
                    </div>
                    <div className="contacts">
                        <h1>Headquarter</h1>
                        <p>191 Middleville Road,<br/>NY 1001, Sydney<br/> Australia</p>
                    </div>
                    <div className="contacts">
                        <h1>Connections</h1>
                        <div className="connections">
                            <img src={facebook} alt="Logo" />
                            <img src={twitter} alt="Logo" />
                            <img src={youtube} alt="Logo" />
                            <img src={pinterest} alt="Logo" />
                            <img src={behance} alt="Logo" />
                        </div>
                    </div>
                </div>
                <div className="sub-footer">
                    <h1>2021 | RUNO Publisher Studio</h1>
                    <p>Subscribe Now</p>
                </div>
            </footer>          
        </div>
        
    )
}
export default Footer