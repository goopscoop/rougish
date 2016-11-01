import { 
  createStore, applyMiddleware, combineReducers
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import promiseMiddleware from 'redux-promise';
import areas from './areas/areasModule';
import shop from './UI/shopModule';
import notifications from './UI/notificationsModule';
import user from './user/userModule';
import chars from './chars/charsModule';
import battle from './battle/battleModule';

const rootReducer = combineReducers({
  areas,
  chars,
  battle,
  shop,
  user,
  notifications
});

const loggerMiddleware = createLogger();

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  promiseMiddleware,
  loggerMiddleware,
)(createStore);

const initialState = {}

export default createStoreWithMiddleware(rootReducer, initialState);