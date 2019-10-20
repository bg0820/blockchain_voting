import React, {PureComponent} from 'react';
import { observer, inject } from 'mobx-react';

import AuthTemplate from '@templates/AuthTemplate';
import KeypadButton from '@components/KeypadButton';

import './index.scss'

@inject('page')
@observer
class StudentNumberAuth extends PureComponent {

	keyPadChange = (v) => {
		const {page} = this.props;
		
		if(page.studentNumber.length < 9) {
			page.setStudentNumber(page.studentNumber + v);
		}

		if(page.studentNumber.length === 9) {
			page.pageMove('student_number_confrim_auth');
		}
	}

	render() {
		const {page} = this.props
		
		let bubbles = [];

		for(var i = 0 ; i < 9; i++) {
			let val = '';
			if(page.studentNumber.length > i) {
				val = page.studentNumber[i];
			}

			bubbles.push(
				<div key={i} className="bubble">
					{val}
				</div>
			)
		}
		
		return (
			<div className="StudentNumberAuth">
				<AuthTemplate btnValue="인증 완료" isKeypad={true} keyPadChange={this.keyPadChange}>
					<div className="infoMsg">
						<p className="mainTitle">학번 입력</p>
						<p className="subTitle">학번을 입력해주세요.</p>
					</div>

					<div className="inputArea">
						{bubbles}
					</div>
					<div className="inputInfoMsg">
						<div className="horizontalCenter">
							<p className="back">본인의 학번</p><p>을 입력해주세요.</p>
						</div>
					</div>
				</AuthTemplate>
			</div>
		);
	}
}

export default StudentNumberAuth;