const defaultState = [
    {
        nombre: 'Jordan'
    },
    {
        nombre: 'Alex'
    }
]

function reducer(state = defaultState, action) {
    switch (action.type) {
        default:
            return state;
    }
}

export default reducer;