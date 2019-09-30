import React, {PureComponent} from 'react';
import { observer, inject } from 'mobx-react';

import OTPAuth from '@pages/OTPAuth'
import StudentNumberAuth from '@pages/StudentNumberAuth';

@inject('page')
@observer
class App extends PureComponent {

	render() {
		let viewDiv = null;

		const {page} = this.props;
		console.log(page.page);
		if(page.page === 'otp_auth') {
			viewDiv = <OTPAuth></OTPAuth>
		} else if(page.page === 'schoolId_auth') {
			viewDiv = <StudentNumberAuth></StudentNumberAuth>
		}

		return (
			<React.Fragment>
				{viewDiv}
			</React.Fragment>
		)
	}

}


export default App;