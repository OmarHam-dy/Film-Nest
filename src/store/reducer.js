let INITIAL_STATE = {
    favorite: new Set([
        
    ]),
}


export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD_TO_FAVORITE':
            state.favorite.add(action.payload);
            return {...state};
        case 'DELETE_FROM_FAVORITE':
            const m = [...state.favorite].filter((item)=> item.id !== action.payload);
            return {favorite: new Set(m)};
        default:
            return state;
    }
}