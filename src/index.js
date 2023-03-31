import React              from 'react';
import ReactDOM           from 'react-dom/client';
import { Provider }       from 'react-redux';

import App                from './App';
import reportWebVitals    from './reportWebVitals';

import store              from './redux-store';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerender = () => {
  root.render(
    <Provider store={store}>
      {/* <React.StrictMode> */}
        <App />
      {/* </React.StrictMode> */}
    </Provider>
  )
}

rerender()

// console.log(store.getState());

reportWebVitals();
