import { combineReducers } from 'redux';
import configureStore from './CreateStore';
import rootSaga from '../Sagas/';
import GitReducer from './gitReducer';
import ActiveRepo from './activeReducer';
// Navigation
import { TabBar } from '../Navigation/navigationConfiguration';


export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    navigation: require('./NavigationRedux').reducer,
    appState: require('./AppStateRedux').reducer,
    github: require('./GithubRedux').reducer,
    login: require('./LoginRedux').reducer,
    search: require('./SearchRedux').reducer,
    repos: GitReducer,
    activeRepo: ActiveRepo,
    tabBar: (state, action) => TabBar.router.getStateForAction(action, state),

  });

  return configureStore(rootReducer, rootSaga);
};
