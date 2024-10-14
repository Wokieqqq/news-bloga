import "./BlogMetro.css"
import React from "react"
import blog1 from "../../images/metro-blogs/Blog.png"


const  placeholder = Array(3).fill(null)
function BlogMetro(){
    return(
        <div className="container medium">
            <section id="blog-metro-wrapper">
            <h1 className="metro-title">Editor’s Pick</h1>
            <div className="main-metro-blogs">
            {placeholder.map((item, index) => (
                
                <div className="blog-metro-card-list">
                    <img src={blog1} alt=""/>
                    <p className="theme-tag">Fashion</p>
                    <div className="metro-info">
                        <p className="blog-date1">08.08.2021</p>
                        <h1 className="blog-title1">Richird Norton photorealistic rendering as real photos</h1>
                        <p className="blogs-description1">Progressively incentivize cooperative systems through
                        technically sound functionalities. Credibly productivate seamless data with flexible schemas.</p>
                    </div>
                    
                </div>
            
            ))}
            </div>
            </section>
        </div>
    )
}
export default BlogMetro