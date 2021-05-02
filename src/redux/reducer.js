const initialState = {
    countdowns: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'COUNTDOWN_ADD':
            const newCountdowns = state.countdowns.map(cd => ({ ...cd }));
            newCountdowns.push({ title: action.title, date: action.date, id: action.id });
            return {
                ...state,
                countdowns: newCountdowns
            }
        case 'COUNTDOWN_DELETE':
            return {
                ...state,
                countdowns: state.countdowns.map(cd => ({ ...cd })).filter(cd => cd.id !== action.id)
            }
        case 'COUNTDOWNS_SET':
            return {
                ...state,
                countdowns: action.countdowns
            }
        default:
            return state;
    }
}

export default reducer;