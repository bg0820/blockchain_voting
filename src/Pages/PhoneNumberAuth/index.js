import React, {PureComponent} from 'react';
import { observer, inject } from 'mobx-react';

import AuthTemplate from '@templates/AuthTemplate';
import SendButton from '@components/SendButton';
import Button from '@components/Button';

import './index.scss'

@inject('page')
@observer
class PhoneNumberAuth extends PureComponent {

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
				<AuthTemplate isKeypad={true}>
					<div className="infoMsg">
						<p className="mainTitle">핸드폰 인증</p>
						<p className="subTitle">핸드폰 한 대로 하나의 투표만 가능합니다.</p>
					</div>

					<div className="inputArea">
						{bubbles}
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

export default PhoneNumberAuth;