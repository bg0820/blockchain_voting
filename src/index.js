import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';
import App from './App.js';

import './index.scss';

ReactDOM.render(<App></App>, document.getElementById('root'));

export default  hot(App);
