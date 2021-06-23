const initialState="0";
const number = (state=initialState, action) => {
    switch (action.type) {
        case "Inc":
            return state + 1;
        case "Dec":
            return state - 1;
        default:
            return state;
    }
};

export{
    number
}