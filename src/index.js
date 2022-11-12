import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AllContext from './context/AllContext';
import 'react-modal-video/scss/modal-video.scss';
import 'react-image-lightbox/style.css';
import './index.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

ReactDOM.render(
  <React.Fragment>
    <AllContext>
      <App />
    </AllContext>
  </React.Fragment>,
  document.getElementById('root')
);


