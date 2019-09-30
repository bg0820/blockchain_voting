import React, {PureComponent} from 'react';
import { observer, inject } from 'mobx-react';

import OTPAuth from '@pages/OTPAuth'

//@inject('page')
//@observer
class App extends PureComponent {

	render() {
		let viewDiv = null;

		//const {page} = this.props;
		//if(page === 'otp_auth') {
			viewDiv = <OTPAuth></OTPAuth>
		//}

		return (
			<React.Fragment>
				{viewDiv}
			</React.Fragment>
		)
	}

}


export default App;