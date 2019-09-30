import React from 'react';
import ReactDOM from 'react-dom';

import { hot } from 'react-hot-loader/root';
import App from './App';

/*
// MOB X  - 리액트 저장소 관리
import { Provider } from 'mobx-react'; // MobX 에서 사용하는 Provider
import PageStore from '@store/Page'; // 페이지 관련 스토어

const page = new PageStore(); // 스토어 인스턴스를 만들고
*/

import './index.scss';

ReactDOM.render(
	//<Provider page={page}>
		<App />
	//</Provider>
	, document.getElementById('root'));

export default hot(App);


//"babel-plugin-transform-decorators-legacy": "^1.3.5",
//"babel-preset-mobx": "^2.0.0",