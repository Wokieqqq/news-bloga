import "./CreateArticle.css"

function CreateArticle(){
    return(
        <div className="container wide">
            <section id="create-article-wrapper">
                <h1 className="create-title">Create Article</h1>
                <div className="create-article">
                    <div>
                        <h1>Title</h1>
                        <input></input>
                    </div>
                    <div>
                        <h1>Date</h1>
                        <input type="date"></input>
                    </div>
                    <div>
                        <h1>Author</h1>
                        <input></input>
                    </div>
                    <div className="tags-main">
                        <h1>Tags</h1>
                        <div className="tags-wrapper">
                            <button>Adventure</button>
                            <button>Nature</button>
                            <button>Sport</button>
                            <button>Travel</button>
                            <button>Fashion</button>
                            <button>Technology</button>
                            <button>Art</button>
                            <button>Beauty</button>
                        </div>
                    </div>
                    <div  className="atricle-content-info">
                        <h1>Article Content</h1>
                        <textarea></textarea>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default CreateArticle