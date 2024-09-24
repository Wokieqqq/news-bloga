import "./NewsList.css"
import React from "react"

import blog1 from "../../images-blogs/1.png"
import blog2 from "../../images-blogs/2.png"
import blog3 from "../../images-blogs/3.png"
import blog4 from "../../images-blogs/4.png"
import blog5 from "../../images-blogs/5.png"
import blog6 from "../../images-blogs/6.png"
import blog7 from "../../images-blogs/7.png"
import blog8 from "../../images-blogs/8.png"


function NewsList(){
    return(
        <section id="main-news-list-wrapper">
            <h1>Popular topics</h1>
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


            <section id="main-info-images">

            </section>
        </section>
    )
}
export default NewsList