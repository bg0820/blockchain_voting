import React, {PureComponent} from 'react';
import { observer, inject } from 'mobx-react';

import AuthTemplate from '@templates/AuthTemplate';
import SendButton from '@components/SendButton';
import Button from '@components/Button';

import * as Util from '@utils';

import './index.scss'

@inject('page')
class PhoneAuth extends PureComponent {

	constructor(props) {
		super(props);
		this.state = {
			phoneNum: ''
		}
	}

	handleChange = (e) => {
		this.setState({
			phoneNum: e.target.value
		});
	}

	clickCallback = async (e) => {
		const {page}  = this.props;
		let result = await Util.ServerRequest('/auth/phone', 'GET', {
			phone: this.state.phoneNum,
			keys: 'tjdrhdghl1234'
		});

		if(result.result === 'success') {
			page.setPhoneNumber(this.state.phoneNum);
			page.setPage('phone_number_auth');
		}
	}
	
	render() {
		return (
			<div className="PhoneAuth">
				<AuthTemplate btnValue="인증문자 전송" clickCallback={this.clickCallback}>
					<div className="infoMsg">
						<p className="mainTitle">핸드폰 인증</p>
						<p className="subTitle">핸드폰 한 대로 하나의 투표만 가능합니다.</p>
					</div>

					<div className="inputArea">
						<input type="text" className="form_control" value={this.state.phoneNum} onChange={this.handleChange}></input>
					</div>
					<div className="inputInfoMsg">
						<div className="horizontalCenter">
							<p className="back">본인의 핸드폰 번호</p><p>를 입력해주세요.</p>
						</div>
					</div>
				</AuthTemplate>
			</div>
		);
	}
}

export default PhoneAuth;