let id = 0;
function reducer(state=[], action){
    switch (action.type) {
        case 'AGREGAR':
            id++;
            return [
                ...state,
                {
                    id,
                    text: action.payload.text
                }
            ]
            break;
        case 'BORRAR':
            const index = state.findIndex(n => n.id === action.payload.id);
            state.splice(index, 1);
            return [
                ...state
            ];
            break;
        case 'ALTERNAR':
            const item = state.find(n => n.id === action.payload.id);
            item.completado = !item.completado;
            return [
                ...state
            ]
            break;
        default:
            break;
    }
}

export default reducer;