import React, {PureComponent} from 'react';

import Button from '@components/Button';

class App extends PureComponent {

	render() {
		return (
			<div className="">
				<Button value="로그인"></Button>
				<Button value="회원가입"></Button>
				<Button></Button>
				<Button></Button>
			</div>
		)
	}

}


export default App;