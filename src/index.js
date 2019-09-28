import React from 'react';
import ReactDOM from 'react-dom';

import { hot } from 'react-hot-loader/root';
import App from './App';

import './index.scss';

ReactDOM.render(<App />, document.getElementById('root'));

export default hot(App);
