import "./ArticlePage.css"
import facebook from "../../icons/Facebook.png"
import pinterest from "../../icons/Pinterest.png"
import twitter from "../../icons/Twitter.png"
import behance from "../../icons/Behance.png"
import avatar from "../../images/ava.png"

function ArticlePage(){
    return(
        <div className="container wide">
            <section id="article-wrapper">
                <div className="article-content">
                    <div className="date-article">
                        <p>08.08.2021</p>
                        <hr/>
                        <p>4 minutes</p>
                    </div>
                    <div className="main-info-article-wrapper">
                    <p className="article-info">Seamlessly syndicate cutting-edge architectures rather than collaborative collaboration and idea-sharing.
                        Proactively incubate visionary interfaces whereas premium benefits.
                        Seamlessly negotiate ubiquitous leadership skills rather than parallel ideas. 
                        Dramatically visualize superior interfaces for best-of-breed alignments. 
                        Synergistically formulate performance based users through customized relationships. 
                        Interactively deliver cross-platform ROI via granular systems. Intrinsicly enhance effective initiatives vis-a-vis orthogonal 
                        outsourcing. Rapidiously monetize market-driven opportunities with multifunctional users. Collaboratively 
                        enhance visionary opportunities through revolutionary schemas. Progressively network just in time customer 
                        service without real-time scenarios.
                        Synergistically drive e-business leadership with unique synergy. Compellingly seize market positioning
                        ROI and bricks-and-clicks e-markets. Proactively myocardinate timely platforms through distributed ideas.
                        Professionally optimize enabled core competencies for leading-edge sources. Professionally enhance stand-alone 
                        leadership with innovative synergy. Rapidiously generate backend experiences vis-a-vis long-term high-impact relationships. 
                        Authoritatively supply market-driven mindshare and bricks-and-clicks opportunities. Holisticly create diverse innovation 
                        through adaptive communities. Efficiently empower seamless meta-services with impactful opportunities. Distinctively 
                        transition virtual outsourcing with focused e-tailersCompellingly enhance seamless resources through competitive content. 
                        Continually actualize 24/365 alignments for resource-leveling platforms. Energistically enhance high 
                        standards in models and professional expertise. Intrinsicly iterate extensible metrics for prospective 
                        opportunities. Continually develop leading-edge experiences through quality e-services.</p>
                    <div className="tags-article">
                        <p>ADVENTURE</p>
                        <p>PHOTO</p>
                        <p>DESIGN</p>
                    </div>
                    <hr className="horizontal-line"/>
                    <div className="the-author-article-wrapper">
                        <div className="author-wrapper">
                            <img src={avatar} alt=""/>
                            <div className="main-author-info">
                                <h1>By Jennifer Lawrence</h1>
                                <p>Thinker & Designer</p>
                            </div>
                        </div>
                        <div className="author-links">
                                <img src={facebook} alt="Logo" />
                                <img src={twitter} alt="Logo" />
                                <img src={pinterest} alt="Logo" />
                                <img src={behance} alt="Logo" />
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default ArticlePage