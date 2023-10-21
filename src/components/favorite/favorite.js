import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteFromfavoriteList } from './../../store/actions'
import './favorite.css';

function Favorite() {

    const favo = useSelector((state) => state.favorite);
    const dispatch = useDispatch();
    const IDs = [...favo].map((movie) => movie.id);
    const [change, setChange] = useState(false);
    const { id, type } = useParams();
    
    const remove  = function (id){
        dispatch(deleteFromfavoriteList(id));
        setChange(!change);
    }
    
    return ( 
        <div className="movies">
            <div className="container">
                <div className="movies-list">
                    {
                        [...favo].map((movie) =>
                        <div className='bag'>
                            <i class="fa-solid fa-trash-can delete-icon" onClick={()=>{remove(movie.id)}}></i>
                            <Link className="box favo" to={`/movie/${type}/details/${movie.id}`} style={{borderColor: IDs.includes(movie.id)? 'gold':''}} >
                                <div className="image">
                                    <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" />
                                    <i class="fa-solid fa-play play-icon"></i>
                                </div>
                            </Link>
                        </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default Favorite;
