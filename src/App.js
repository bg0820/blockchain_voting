import React, {PureComponent} from 'react';
import { observer, inject } from 'mobx-react';

import OTPAuth from '@pages/OTPAuth'
import StudentNumberAuth from '@pages/StudentNumberAuth';
import StudentNumberConfirm from '@pages/StudentNumberConfirm';
import PhoneAuth from '@pages/PhoneAuth';
import DigitalSignature from '@pages/DigitalSignature';
import VoteList from '@pages/VoteList';
import Voting from '@pages/Voting';
import VotingSingle from './Pages/VotingSingle';
import VotingComplete from './Pages/VotingComplete';
import VotingResult from './Pages/VotingResult';
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
		} else if(page.page === 'phone_auth') {
			viewDiv = <PhoneAuth></PhoneAuth>
		} else if(page.page === 'digital_signature') {
			viewDiv = <DigitalSignature></DigitalSignature>
		} else if(page.page === 'vote_list') {
			viewDiv = <VoteList></VoteList>
		} else if(page.page === 'voting') {
			viewDiv = <Voting></Voting>
		}else if(page.page === 'votingSingle') {
			viewDiv = <VotingSingle></VotingSingle>
		}else if(page.page === 'votingComplete') {
			viewDiv = <VotingComplete></VotingComplete>
		}else if(page.page === 'votingResult') {
			viewDiv = <VotingResult></VotingResult>
		} else if(page.page === 'sub_information') {
			viewDiv = <SubInformation></SubInformation>
		}

		return (
			<React.Fragment>
				{viewDiv}
			</React.Fragment>
		)
			
		
	}

}
 

export default App;