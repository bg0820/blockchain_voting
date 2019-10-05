import React, {PureComponent} from 'react';
import { observer, inject } from 'mobx-react';

import AuthTemplate from '@templates/Auth';

import './index.scss'

@inject('page')
class OTPAuth extends PureComponent {

	clickCallback = (e) => {
		const {page} = this.props;
		//if()d
		page.setPage('schoolId_auth');
		console.log('btnClick', e);
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
						<input type="text" className="form_control" placeholder="영어 및 숫자로 구성된 10글자를 입력해주세요."></input>
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