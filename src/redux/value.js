export default (state = 0, action) => {
    if (action.type === 'INCREMENT_START') {
        return state;
    } else if (action.type === 'INCREMENT_SUCCESS') {
        return action.payload.value + 1;
    } else if (action.type === 'INCREMENT_FAILURE') {
        return state;
    } else {
        return state;
    }
};
