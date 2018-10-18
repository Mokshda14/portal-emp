import React from 'react'



import { render } from 'react-dom'
import { createStore, applyMiddleware  } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import rootReducer from './reducers'
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import { sessionReducer } from 'redux-react-session';
import { sessionService } from 'redux-react-session';
import thunk from 'redux-thunk';


const reducers = {
  rootReducer,
  session: sessionReducer
};
const store = createStore(rootReducer, applyMiddleware(thunk))
sessionService.initSessionService(store);
render(
  <BrowserRouter>
  <Provider store={store}>
      <App />
  </Provider>
  
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker()
