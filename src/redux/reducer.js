const initialState = {
    countdowns: [
        {
            title: 'Mother\'s Day',
            date: new Date('Sun May 10 2021 09:00:00 GMT-0400 (EDT)')
        }
    ]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'COUNTDOWN_ADD':
            const newCountdowns = state.countdowns.map(cd => ({ ...cd }));
            newCountdowns.push({ title: action.title, date: action.date });
            return {
                ...state,
                countdowns: newCountdowns
            }
        default:
            return state;
    }
}

export default reducer;