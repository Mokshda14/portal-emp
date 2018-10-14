import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware  } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import rootReducer from './reducers'
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk';
const store = createStore(rootReducer, applyMiddleware(thunk))

render(
  <BrowserRouter>
  <Provider store={store}>
    
    <App />
    
  </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker()
