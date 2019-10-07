import React, {PureComponent} from 'react';
import { observer, inject } from 'mobx-react';

import axios from 'axios';
import AuthTemplate from '@templates/AuthTemplate';

import './index.scss'

@inject('page')
class OTPAuth extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			value: ''
		};
	}

	handleChange = (e) => {
		this.setState({
			value: e.target.value
		});
	}

	clickCallback = (e) => {
		const {page} = this.props;

		axios({
			method: 'GET',
			url: 'http://222.238.100.247:3001/otp',
			params: {
				otp: this.state.value
			}
		}).then(function(result) {
			let data = result.data;
			if(data.result === 'failed') {
				alert(data.msg);
			} else {
				console.log(data);
				page.setPage('student_number_auth');
			}
		}).catch(function(error) {
			console.log(error);
		})

	} 

	render() {
		return (
			<div className="OTPAuth">
				<AuthTemplate btnValue="인증 완료" clickCallback={this.clickCallback}>
					<div className="infoMsg">
						<p className="mainTitle">OTP 인증</p>
						<p className="subTitle">학내 구성원임을 인증해주세요.</p>
					</div>

					<div className="inputArea">
						<input type="text" value={this.state.value} onChange={this.handleChange} className="form_control" placeholder="영어 및 숫자로 구성된 10글자를 입력해주세요."></input>
					</div>
					<div className="inputInfoMsg">
						<div className="horizontalCenter">
							<p className="back">forest 종합정보시스템</p><p>로그인 후</p>
						</div>
						<div className="horizontalCenter">
						<p className="back">‘웹 서비스 > OTP 조회’</p><p> 메뉴를 통해서 확인할 수 있습니다.</p>
						</div>
					</div>
				</AuthTemplate>
			</div>
		);
	}
}

export default OTPAuth;