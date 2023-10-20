import './App.css';
import Footer from './components/footer/footer';
import { Route, Routes } from "react-router-dom";
import Sign from "./components/signup/signup";
import Home from "./components/home/home";
import PageNotFound from "./components/pageNotFound/pageNotFound";
import MyNavbar from './components/header/header';
import Favorite from './components/favorite/favorite';
import Details from './components/movie-details/details';
import Movies from './components/movies/movies';


function App() {
  return (
    <>
      <MyNavbar/>

        <Routes>
          <Route  path="/" element={<Home />}/>
          <Route  path="/movie/:type" element={<Movies />}/>
          <Route  path="/tv/:type" element={<Movies />}/>
          <Route  path="/join" element={<Sign />}>
          </Route>
          <Route  path="/movie/:type/details/:id" element={< Details />}/>
          <Route  path='/favorites' element={<Favorite />} />
          <Route  path="*" element={<PageNotFound />}/>
        </Routes>

      <Footer />
    </>
  );
}

export default App;
