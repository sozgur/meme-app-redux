const INITIAL_STATE = { memes: [] };

function rootReducer(state = INITIAL_STATE, action) {
    if (action.type === "ADD") {
        return {
            ...state,
            memes: [...state.memes, { ...action.meme }],
        };
    }

    if (action.type === "REMOVE") {
        return {
            ...state,
            memes: state.memes.filter((meme) => meme.id !== action.id),
        };
    }

    return state;
}

export default rootReducer;
