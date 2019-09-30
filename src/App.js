import React, {PureComponent} from 'react';

import OTPAuth from '@pages/OTPAuth'

class App extends PureComponent {

	render() {
		let view = 'auth_1';
		let viewDiv = null;

		if(view === 'auth_1') {
			viewDiv = <OTPAuth></OTPAuth>
		}

		return (
			<React.Fragment>
				{viewDiv}
			</React.Fragment>
		)
	}

}


export default App;