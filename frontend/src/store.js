import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import {reducer as formReducer} from 'redux-form'
import thunkMiddleware from '../node_modules/redux-thunk';
import TeamReducer from "./reducers/TeamReducer";
import MatchesReducer from "./reducers/MatchsReducer";
import HomeReducer from "./reducers/HomeReducer";
import ClubReducer from "./reducers/ClubReducer";
import NewsReducer from "./reducers/NewsReducer";
import ContactReducer from "./reducers/ContactReducer";
import AuthReducer from "./reducers/AuthReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combineReducers({
        form: formReducer,
        teamPage: TeamReducer,
        matchesPage: MatchesReducer,
        homePage: HomeReducer,
        clubPage: ClubReducer,
        newsPage: NewsReducer,
        contactPage: ContactReducer,
        authPage: AuthReducer
    })
    , composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store
