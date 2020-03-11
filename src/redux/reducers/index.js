import { combineReducers } from 'redux';
import usuarios from './usuarios';
import ordenes from './ordenes';
import tareas from './tareas';

const reducer = combineReducers(
    {
        usuarios,
        ordenes,
        tareas
    }
);

export default reducer;