import './App.css';
import Header from './component/header/Header';
import NewsList from './component/news-list/NewsList'
import BigPost from './component/big-post/BigPost';
import BlogMetro from './component/blog-metro/BlogMetro';
import Footer from './component/footer/Footer';
import AboutUs from './component/about-us/AboutUsPage';
import MainPage from './pages/main-page/MainPage';
import CreateArticle from './component/create-article/CreateArticle';
import ArticlePage from './pages/article-page/ArticlePage';
import {BrowserRouter, Route, Routes} from "react-router-dom"

function App() {
  return (
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/about-us" element={<AboutUs/>}/>
          <Route path="/create-article" element={<CreateArticle/>}/>
          <Route path="/article-page" element={<ArticlePage/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
  );
}

export default App;
