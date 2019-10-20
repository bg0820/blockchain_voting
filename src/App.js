import React, {PureComponent} from 'react';
import { observer, inject } from 'mobx-react';
import { hot } from 'react-hot-loader/root';

import OTPAuth from '@pages/OTPAuth'
import StudentNumberAuth from '@pages/StudentNumberAuth';
import StudentNumberConfirm from '@pages/StudentNumberConfirm';
import PhoneNumberAuth from '@pages/PhoneNumberAuth';
import PhoneAuth from '@pages/PhoneAuth';
import DigitalSignature from '@pages/DigitalSignature';
import VoteList from '@pages/VoteList';
import Voting from '@pages/Voting';
import VotingComplete from '@pages/VotingComplete';
import VotingResult from '@pages/VotingResult';
import SubInformation from '@pages/SubInformation';


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
		} else if(page.page === 'phone_number_auth') {
			viewDiv = <PhoneNumberAuth></PhoneNumberAuth>
		} else if(page.page === 'phone_auth') {
			viewDiv = <PhoneAuth></PhoneAuth>
		}  else if(page.page === 'vote_list') {
			viewDiv = <VoteList></VoteList>
		} else if(page.page === 'vote') {
			viewDiv = <Voting></Voting>
		} else if(page.page === 'vote_complete') {
			viewDiv = <VotingComplete></VotingComplete>
		} else if(page.page === 'vote_result') {
			viewDiv = <VotingResult></VotingResult>
		} else if(page.page === 'vote_sub_info') {
			viewDiv = <SubInformation></SubInformation>
		}

		return (
			<React.Fragment>
				{viewDiv}
			</React.Fragment>
		)
			
		
	}

}
 

export default hot(App);