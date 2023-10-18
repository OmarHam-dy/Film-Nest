import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import { Route, Routes } from "react-router-dom";
import Movie from './components/movies/movies';
import TvShow from "./components/tvshow/tvshow";
import Sign from "./components/signup/signup";
import About from "./components/about/about";
import ContactUs from "./components/contact/contact";
import Home from "./components/home/home";
import PageNotFound from "./components/pageNotFound/pageNotFound";
import JoinUs from "./components/joinus/joinus";
import Login from "./components/login/login";
import MovieDetails from "./components/moviedetails/movieDetails";
import TvDetails from "./components/tvshowdetails/tvdetails";
import MyNavbar from './components/header/header';

function App() {
  return (
    <>
      {/* <h3>hello from app component</h3> */}
      <MyNavbar/>
      {/* <Sign/> */}
      {/* <Home /> */}
      {/* <div className="container"> */}
        {/* <Header data="hello from app"/> */}
        
       
        
         <Routes>
          <Route  path="/" element={<Home />}/>
          <Route  path="/movie" element={<Movie />}/>
          <Route  path="/tv" element={<TvShow />}/>
          <Route  path="/join" element={<Sign />}>
          <Route path="login"  element={<Sign />}/>
          <Route path="signup"  element={<Sign />}/>
          </Route>
          <Route  path="/movieDetails/:id" element={<MovieDetails />}/>
          <Route  path="/tvDetails/:id" element={<TvDetails />}/>
          <Route  path="/about" element={<About />}/>
          <Route  path="/contact" element={<ContactUs />}/>
          <Route  path="*" element={<PageNotFound />}/>
        </Routes>
        <Footer />
      {/* </div> */}
    </>
  );
}

export default App;
