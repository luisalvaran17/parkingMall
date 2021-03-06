import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
//import ScanQR from './containers/ScanQR';
//import HeaderAndFooter from './containers/HeaderAndFooter';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);*/

serviceWorker.unregister();
