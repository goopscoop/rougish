import { 
  createStore, applyMiddleware, combineReducers
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import promiseMiddleware from 'redux-promise';
import areas from './areas/areasModule';
import shop from './UI/shopModule';
import user from './user/userModule';

const rootReducer = combineReducers({
  areas,
  shop,
  user
});

const loggerMiddleware = createLogger();

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  promiseMiddleware,
  loggerMiddleware,
)(createStore);

const initialState = {}

export default createStoreWithMiddleware(rootReducer, initialState);