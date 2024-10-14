import "./NewsList.css"
import React from "react"

import blog1 from "../../images/images-blogs/1.png"
import blog2 from "../../images/images-blogs/2.png"
import blog3 from "../../images/images-blogs/3.png"
import blog4 from "../../images/images-blogs/4.png"
import blog5 from "../../images/images-blogs/5.png"
import blog6 from "../../images/images-blogs/6.png"
import blog7 from "../../images/images-blogs/7.png"
import blog8 from "../../images/images-blogs/8.png"
import { NavLink } from "react-router-dom"

const  placeholders = Array(8).fill(null)

function NewsList(){
    return(
        <div className="container medium">
            <section id="main-news-list-wrapper">
            <h1 className="title">Popular topics</h1>
            <div className="main-buttons-wrapper">
                <div className="theme-lists">
                    <button id="every-button">All</button>
                    <button>Adventure</button>
                    <button>Travel</button>
                    <button>Fashion</button>
                    <button>Technology</button>
                    <button>Branding</button>
                </div>
                <button>View All</button>
            </div>
            <div className="main-blogs-wrapper">                           
                                {placeholders.map((item, index) => (
                                    <NavLink to="/article-page">
                                        <div className="blog">
                                            <img src={blog1} alt="Logo"/>
                                            <div className="adventure-button2">
                                                <p>Adventure</p>
                                            </div>
                                            <p className="blog-date">08.08.2021</p>
                                            <h1 className="blog-title">Dream destinations to visit this
                                            year in Paris</h1>
                                            <p className="blogs-description">Progressively incentivize cooperative systems through
                                                technically sound functionalities. Credibly productivate
                                                seamless data with flexible schemas.</p>
                                        </div>
                                    </NavLink>
                                ))}

                        </div>
            </section>
        </div>
        
    )
}
export default NewsList