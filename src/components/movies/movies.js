import axios, { all } from 'axios';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import './movies.css';
import PageNotFound from '../pageNotFound/pageNotFound';


function Movies() {
    const apiKey = '15191d6e037f9aa7729f76d2d53b6390';
    const [movies, setMovies] = useState([]);
    const [categoryAndPageNumber, setCategoryPageNumber] = useState({pageNumber: 1, category: 'all'});
    const { pageNumber, category } = categoryAndPageNumber;
    const [firstOption, setFirstOption] = useState(1); 
    const [secondOption, setSecondOption] = useState(2); 
    const [thirdOption, setThirdOption] = useState(3); 
    const [totalPages, setTotalPages] = useState(0);
    const { type } = useParams();

    let allPages = useRef(0);
    let nowPlayingPages = useRef(0);
    let popularPages = useRef(0);
    let topRatedPages = useRef(0);
    let upcomingPages = useRef(0);
    let allApi;
    let firstCategoryApi;
    let secondCategoryApi;
    let thirdCategoryApi;
    let fourthCategoryApi;
    let searchApi;
    let firstCategory;
    let secondCategory;
    let thirdCategory;
    let fourthCategory;

    if (type == 0){
        allApi = 'https://api.themoviedb.org/3/discover/movie';
        firstCategoryApi = 'https://api.themoviedb.org/3/movie/now_playing';
        secondCategoryApi = `https://api.themoviedb.org/3/movie/popular`;
        thirdCategoryApi = `https://api.themoviedb.org/3/movie/top_rated`;
        fourthCategoryApi = `https://api.themoviedb.org/3/movie/upcoming`;
        searchApi = `https://api.themoviedb.org/3/search/movie`;
        firstCategory = 'Now Playing';
        secondCategory = 'Popular';
        thirdCategory = 'Top Rated';
        fourthCategory = 'Upcoming';
    }
    else if(type == 1){
        allApi = 'https://api.themoviedb.org/3/discover/tv';
        firstCategoryApi = 'https://api.themoviedb.org/3/tv/airing_today';
        secondCategoryApi = `https://api.themoviedb.org/3/tv/on_the_air`;
        thirdCategoryApi = `https://api.themoviedb.org/3/tv/popular`;
        fourthCategoryApi = `https://api.themoviedb.org/3/tv/top_rated`;
        searchApi = 'https://api.themoviedb.org/3/search/tv';
        firstCategory = 'Airing Tody';
        secondCategory = 'On The Air';
        thirdCategory = 'Popular';
        fourthCategory = 'Top Rated';
    }
    // else{
    //     return <PageNotFound/>;
    // }

    const fetchAllMovies = function () {
        axios.get(allApi,{
            params:{
                api_key: apiKey,
                page: pageNumber,
            }
        })
        .then((result) => {
            allPages.current = result.total_pages;
            setMovies(result.data.results);
            setTotalPages(allPages.current);
        })
        .catch((err) => {
            console.log('error = ' + err);
        })
    }

    const fetchNowPlaying = function () {
        axios.get(firstCategoryApi,{
            params:{
                api_key: apiKey,
                page: pageNumber,
            }
        })
        .then((result) => {
            nowPlayingPages.current = result.total_pages;
            setMovies(result.data.results);
        })
        .catch((err) => {
            console.log('error = ' + err);
        })
    }

    const fetchPopular = function (){
        axios.get(secondCategoryApi,{
            params:{
                api_key: apiKey,
                page: pageNumber,
            }
        })
        .then((result) => {
            popularPages.current = result.total_pages;
            setMovies(result.data.results);
        })
        .catch((err) => {
            console.log('error = ' + err);
        })
    }

    const fetchTopRated = function () {
        axios.get(thirdCategoryApi,{
            params:{
                api_key: apiKey,
                page: pageNumber,
            }
        })
        .then((result) => {
            topRatedPages.current = result.total_pages;
            setMovies(result.data.results);

        })
        .catch((err) => {
            console.log('error = ' + err);
        })
    }

    const fetchUpcoming = function () {
        axios.get(fourthCategoryApi,{
            params:{
                api_key: apiKey,
                page: pageNumber,
            }
        })
        .then((result) => {
            upcomingPages.current = result.total_pages;
            setMovies(result.data.results);
        })
        .catch((err) => {
            console.log('error = ' + err);
        })
    }

    
    const moviesSearch = function (e) {
        const searchValue = e.target.value;
        axios.get(searchApi, {
            params:{
                api_key: apiKey,
                query: searchValue
            }
        })
        .then((result) => {
            setMovies(result.data.results);
        })
        .catch((err) => {
            console.log('error = ' + err);
        })
        
    }






    const firstOptionHandler = function () {
        if (pageNumber === firstOption)
            return;
        
        setCategoryPageNumber({ category: category, pageNumber: firstOption });

        if (firstOption !== 1) {
            setFirstOption(firstOption - 1);
            setSecondOption(secondOption - 1);
            setThirdOption(thirdOption - 1);
        }
    }

    const secondOptionHandler = function () {
        if (pageNumber == secondOption)
            return;
        
            setCategoryPageNumber({ category: category, pageNumber: secondOption });
    }

    const thirdOptionHandler = function () {
        if (pageNumber === thirdOption)
            return;
        
            setCategoryPageNumber({ category: category, pageNumber: thirdOption });

        if (thirdOption !== totalPages) {
            setFirstOption(firstOption + 1);
            setSecondOption(secondOption + 1);
            setThirdOption(thirdOption + 1);
        }
    }

    const resetPages = function (Currentcategory){
        
        setCategoryPageNumber({category: Currentcategory, pageNumber: 1});

        setFirstOption(1);
        setSecondOption(2);
        setThirdOption(3);
    }








    useEffect(() => {
        // fetch all movies
        fetchAllMovies();
    }, [type]);

    useEffect(() => {
        
        switch (category) {
            case 'all':
                fetchAllMovies();
                break;
            case firstCategory:
                fetchNowPlaying();
                break;
            case secondCategory:
                fetchPopular();
                break;
            case thirdCategory:
                fetchTopRated();
                break;
            case fourthCategory:
                fetchUpcoming();
        };
        window.scrollTo({ top: 150, left: 0, behavior: 'smooth' });
    }, [categoryAndPageNumber]);



    const favo = useSelector((state) => state.favorite);
    const IDs = [...favo].map((movie) => movie.id);


    return (
        <div className="movies">
            <div className="container">
                <div className="filters">
                    <input type="text" placeholder='Search...' onChange={(event) => { moviesSearch(event)}}/>
                    <div className='icon'>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div   className="btns">
                        <a className='btn' onClick={() => {  resetPages('all');  }} style={{backgroundColor: category === 'all'?  '#e67b5c':'', color: category === 'all'? 'black': ''}}>All</a>
                        <a className='btn' onClick={() => {  resetPages(firstCategory);  }} style={{backgroundColor: category === firstCategory? '#e67b5c':'', color: category === firstCategory? 'black':''} }> {firstCategory} </a>
                        <a className='btn' onClick={() => {  resetPages(secondCategory);  }} style={{backgroundColor: category === secondCategory?  '#e67b5c':'', color: category === secondCategory? 'black': ''}}>  {secondCategory} </a>
                        <a className='btn' onClick={() => {  resetPages(thirdCategory);  }} style={{backgroundColor: category === thirdCategory?  '#e67b5c':'', color: category === thirdCategory? 'black': ''}}>{thirdCategory}</a>
                        <a className='btn' onClick={() => {  resetPages(fourthCategory);  }} style={{backgroundColor: category === fourthCategory? '#e67b5c':'', color: category === fourthCategory? 'black':''} }>{fourthCategory}</a>
                    </div>
                </div>
                <div className="movies-list">
                    {
                        movies.map((movie) =>
                            <Link className="box" to={`/movie/${type}/details/${movie.id}`} style={{borderColor: IDs.includes(movie.id)? 'gold':''}} >
                                <div className="image">
                                    <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" />
                                    {/* <i class="fa-regular fa-circle-play"></i> */}
                                    <i class="fa-solid fa-play play-icon"></i>
                                </div>
                                {/* <div className="title">{ movie.title } { pageNumber} {movie.id}</div> */}
                            </Link>
                        )
                    }
                </div>
                <div className="page">
                    <i class="fa-solid fa-angles-left" style={{ display: pageNumber === 1 ? 'none' :''}} onClick={() => { resetPages(category) }}></i>
                    <i class="fa-solid fa-angle-left"  style={{ display: pageNumber === 1 ? 'none' :''}} onClick={firstOptionHandler}></i>
                    <div onClick={firstOptionHandler}  style={{backgroundColor: pageNumber===firstOption? '#e67b5c':'', color: pageNumber===firstOption? 'black':''}}>{ firstOption }</div>
                    <div onClick={secondOptionHandler} style={{backgroundColor: pageNumber===secondOption? '#e67b5c':'', color: pageNumber===secondOption? 'black':''}} >{ secondOption }</div>
                    <div onClick={thirdOptionHandler}  style={{backgroundColor: pageNumber===thirdOption? '#e67b5c':'', color: pageNumber===thirdOption? 'black':''}}>{thirdOption}</div>
                    <i class="fa-solid fa-angle-right" style={{ display: pageNumber === totalPages ? 'none' : '' }} onClick={() => { pageNumber === 1? secondOptionHandler() : thirdOptionHandler() }}></i>
                </div>
            </div>
        </div>
    );
}

export default Movies;