import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { addTofavoriteList, deleteFromfavoriteList} from '../../store/actions';
import './details.css';



function Details() {
    const apiKey = '15191d6e037f9aa7729f76d2d53b6390';
    const imagePath = 'https://image.tmdb.org/t/p/original';
    const [movie, setMovie] = useState([]);
    const { id, type } = useParams();
    let detailsApi;

    if(type == 0){
        detailsApi = `https://api.themoviedb.org/3/movie/${id}`;
    }
    else{
        detailsApi = `https://api.themoviedb.org/3/tv/${id}`
    }
    useEffect(() => {
        axios.get(detailsApi,{
            params:{
                api_key: apiKey,
            }
        })
            .then((response) => {
                setMovie(response.data);
                console.log(response.data);
            })
            .catch((err) => {
            console.log(err);
        })
        window.scrollTo({ top: 90, left: 0, behavior: 'smooth' });
    }, [])


    const imgStyle = {
        backgroundImage: 'url('+imagePath+movie.poster_path+')'
    }
    
    const favo = useSelector((state) => state.favorite);
    const dispatch = useDispatch();
    // console.log(favo);
    const IDs = [...favo].map((movie) => movie.id);
    // console.log(IDs);
    const [change, setChange] = useState(false);
    
    
    const add = function (movie) {
        IDs.includes(movie.id)? dispatch(deleteFromfavoriteList(movie.id)):dispatch(addTofavoriteList(movie));
        setChange(!change);
    }

    
    return ( 
        <div className="details" style={imgStyle}>
            <div className="container">
                <div className="image" style={{ borderColor: IDs.includes(movie.id) ? 'gold': ''}}>
                    <img src={`${imagePath}${movie.poster_path}`} alt="" />
                </div>
                <div className="content"> 
                    <div className="title">{type == 0 ? movie.title: movie.name}</div>
                    <div className="year">{ String(type == 0? movie.release_date:movie.first_air_date).substring(0, 4)}</div>
                    <div className="review"><i class="fa-solid fa-star"></i> {String(movie.vote_average).substring(0, 3)} <span>IMDb</span></div>
                    <div className="overview">{ movie.overview }</div>
                    <div className="btns">
                        <Link className="watch" to={`/favorites`}>Watch Now</Link>
                        <div className="favorite" onClick={() => { add(movie) }}>{
                        IDs.includes(movie.id) ?
                        <i class="fa-solid fa-circle-minus"></i> : <i class="fa-solid fa-circle-plus"></i>
                        }Add To Favorite</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Details;