function addTofavoriteList(movie){
    return {
        type: 'ADD_TO_FAVORITE',
        payload: movie
    };
}

function deleteFromfavoriteList(movieId){
    return {
        type: 'DELETE_FROM_FAVORITE',
        payload: movieId
    };
}


export { addTofavoriteList, deleteFromfavoriteList };


