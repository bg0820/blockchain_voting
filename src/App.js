import React, {PureComponent} from 'react';
import { observer, inject } from 'mobx-react';

import OTPAuth from '@pages/OTPAuth'
import StudentNumberAuth from '@pages/StudentNumberAuth';
import StudentNumberConfirm from '@pages/StudentNumberConfirm';
import PhoneAuth from '@pages/PhoneAuth';
import DigitalSignature from '@pages/DigitalSignature';
import VoteList from '@pages/VoteList';
import Voting from '@pages/Voting';


@inject('page')
@observer
class App extends PureComponent {
 
	render() {
		let viewDiv = null;

		const {page} = this.props;
		console.log(page.page);
		if(page.page === 'otp_auth') {
			viewDiv = <OTPAuth></OTPAuth>
		} else if(page.page === 'student_number_auth') {
			viewDiv = <StudentNumberAuth></StudentNumberAuth>
		} else if(page.page === 'student_number_confrim_auth') {
			viewDiv = <StudentNumberConfirm></StudentNumberConfirm>
		} else if(page.page === 'phone_auth') {
			viewDiv = <PhoneAuth></PhoneAuth>
		} else if(page.page === 'digital_signature') {
			viewDiv = <DigitalSignature></DigitalSignature>
		} else if(page.page === 'vote_list') {
			viewDiv = <VoteList></VoteList>
		} else if(page.page === 'voting') {
			viewDiv = <Voting></Voting>
		}

		return (
			<React.Fragment>
				{viewDiv}
			</React.Fragment>
		)
			
		
	}

}
 

export default App;