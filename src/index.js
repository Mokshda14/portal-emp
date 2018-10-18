import React from 'react'



import { render } from 'react-dom'
import { createStore, applyMiddleware  } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import { Route} from 'react-router-dom';
import rootReducer from './reducers'
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import { sessionReducer } from 'redux-react-session';
import { sessionService } from 'redux-react-session';
import thunk from 'redux-thunk';
import Portal from './components/portal/portal.container';
import LoginCpt from './components/login/login.component';

const reducers = {
  rootReducer,
  session: sessionReducer
};
 const store = createStore(rootReducer, applyMiddleware(thunk))
sessionService.initSessionService(store,{ driver: 'COOKIES' });
render(
  <BrowserRouter>
  <Provider store={store}>
  <Route path="/" component={App}>
  </Route>
  </Provider>
  
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker()
