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
			time : 180
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
				id: page.studentNumber,
				phone: page.phoneNumber,
				phoneIMEI: localStorage.deviceID,
				key: page.phoneAuthNum
			});
	
			if(result.result === 'success') {
				page.setPage('vote_list');

				localStorage.token = result.token;
				localStorage.auth = 'true';
				localStorage.walletAddr = result.walletAddr;

				alert('인증이 정상적으로 처리되었습니다.')
			} else {
				page.setPhoneAuthNum('');
				alert(result.msg);
			}

		}
	}

	componentDidMount() {
		let par = this;
		this.timeInterval = setInterval(function() {
			par.setState({
				time: par.state.time - 1
			});
			if(par.state.time === 0)
				clearInterval(par.timeInterval);
		}, 1000);

		console.log(this.timeInterval);
	}

	reSend = async () => {
		const {page} = this.props

		let result = await Util.ServerRequest('/auth/phone/resend', 'GET', {
			phone: page.phoneNumber
		});

		if(result.result === 'success') {
			clearInterval(this.timeInterval);

			this.setState({
				time: 180
			});

			let par = this;
			this.timeInterval = setInterval(function() {
				par.setState({
					time: par.state.time - 1
				});
				if(par.state.time === 0)
					clearInterval(par.timeInterval);
			}, 1000);
		}
	}



	render() {
		const {page} = this.props
	
		let time = this.state.time;
		let min = Math.floor(time / 60);
		let sec = Math.floor(time % 60);

		let timeStr = (min < 10 ? '0' + min : min) + ":" + (sec < 10 ? '0' + sec : sec);
		let bubbles = [];

		for(var i = 0 ; i < 6; i++) {
			let val = '';
			if(page.phoneAuthNum.length > i) {
				val = page.phoneAuthNum[i];
			}

			bubbles.push(
				<div key={i} className="bubble">
					<p>{val}</p>
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
							<p>입력된 핸드폰 번호로 전송된</p>
						</div>
						<div className="horizontalCenter">
							<p className="back">인증문자 6글자</p><p>를 입력해주세요.</p>
						</div>

						<div className="reSend">
							<p className="time">{timeStr}</p>
							<Button value="재전송" clickCallback={this.reSend}></Button>
						</div>
					</div>
				</AuthTemplate>
			</div>
		);
	}
}

export default PhoneNumberAuth;