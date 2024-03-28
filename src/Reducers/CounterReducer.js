const ConterReducer = (state=0, action) => {
    switch(action.type) {
        case 'counter':
            return state + 1;
        default:
            return state;
    }
}

export default ConterReducer