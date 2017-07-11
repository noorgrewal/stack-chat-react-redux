// Whoa?!? What is this?
// Thanks to the style-loader, sass-loader and css-loader, webpack allows us import scss,
// compiles it into css, and then auto-magically injects a <style> tag onto the DOM!
// Wowzers! Check out the webpack.config.js to see how to add them!
import './index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Main } from './components';
import store from './store';
import { Provider } from 'react-redux';

ReactDOM.render(
    <Provider store ={store}>
      <Router>
        <Main />
      </Router>
<<<<<<< HEAD
    </Provider>,
    document.getElementById('app')
=======
    </Provider>
    , document.getElementById('app')
>>>>>>> 645e750c554b10c8bdcbf217c8d85bfd9bf7d2fd
);
