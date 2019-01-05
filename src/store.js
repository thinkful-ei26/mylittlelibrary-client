import {createStore, combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'

export default createStore(
    combineReducers({
        form: formReducer
    })
);

/*
redux method combineReducers lets us use the form reducer alongside other reducers without conflict
If there were multiple reducers,
export default createStore(
    combineReducers({
        form: formReducer,
        trello: trelloReducers
    })
)

*/