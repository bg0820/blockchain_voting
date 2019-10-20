import React, {PureComponent} from 'react';
import { observer, inject } from 'mobx-react';

import AuthTemplate from '@templates/AuthTemplate';
import SendButton from '@components/SendButton';
import Button from '@components/Button';

import './index.scss'

import * as Util from '@utils';

@inject('page')
@observer
class PhoneNumberAuth extends PureComponent {

	constructor(props) {
		super(props);

		this.state = {
			time : 300
		};
		this.timeInterval = null;
	}

	keyPadChange = async (v) => {
		const {page} = this.props;

		if(page.phoneAuthNum.length < 6) {
			page.setPhoneAuthNum(page.phoneAuthNum + v);
		}

		if(page.phoneAuthNum.length === 6) {
			let result = await Util.ServerRequest('/auth/phone/auth', 'GET', {
				phone: page.phoneNumber,
				key: page.phoneAuthNum
			});
	
			if(result.result === 'success') {
				page.setPage('vote_list');
				alert('인증이 정상적으로 처리되었습니다.')
			} else {
				page.setPhoneAuthNum('');
				alert('인증번호가 다릅니다.');
			}

		}
	}

	componentDidMount() {
		let par = this;
		this.timeInterval = setInterval(function() {
			par.setState({
				time: par.state.time - 1
			});
		}, 1000);
	}

	reSend() {
		clearInterval(timeInterval);
		let par = this;
		this.timeInterval = setInterval(function() {
			par.setState({
				time: par.state.time - 1
			});
		}, 1000);
	}



	render() {
		const {page} = this.props
	
		let bubbles = [];

		for(var i = 0 ; i < 6; i++) {
			let val = '';
			if(page.phoneAuthNum.length > i) {
				val = page.phoneAuthNum[i];
			}

			bubbles.push(
				<div key={i} className="bubble">
					{val}
				</div>
			)
		}

		return (
			<div className="PhoneNumberAuth">
				<AuthTemplate isKeypad={true} keyPadChange={this.keyPadChange}>
					<div className="infoMsg">
						<p className="mainTitle">핸드폰 인증</p>
						<p className="subTitle">핸드폰 한 대로 하나의 투표만 가능합니다.</p>
					</div>

					<div className="inputArea">
						{bubbles}
					</div>
					<div className="inputInfoMsg">
						<div className="horizontalCenter">
							<p>입력된 핸드폰 번호로 전송된</p><p className="back">인증문자 6글자</p><p>를 입력해주세요.</p>
						</div>
					</div>
					{this.state.time}
				</AuthTemplate>
			</div>
		);
	}
}

export default PhoneNumberAuth;