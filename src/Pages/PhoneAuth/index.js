import React, {PureComponent} from 'react';
import { observer, inject } from 'mobx-react';

import AuthTemplate from '@templates/AuthTemplate';
import SendButton from '@components/SendButton';
import Button from '@components/Button';

import './index.scss'

@inject('page')
class PhoneAuth extends PureComponent {


	render() {
		return (
			<div className="PhoneAuth">
				<AuthTemplate btnValue="인증문자 전송" clickCallback={this.clickCallback}>
					<div className="infoMsg">
						<p className="mainTitle">핸드폰 인증</p>
						<p className="subTitle">핸드폰 한 대로 하나의 투표만 가능합니다.</p>
					</div>

					<div className="inputArea">
						<input type="text" className="form_control"></input>
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