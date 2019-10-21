import React, {PureComponent} from 'react';
import { observer, inject } from 'mobx-react';

import AuthTemplate from '@templates/AuthTemplate';
import KeypadButton from '@components/KeypadButton';

import './index.scss'

@inject('page')
@observer
class StudentNumberConfirm extends PureComponent {

	keyPadChange = (v) => {
		const {page} = this.props;

		if(page.studentNumberConfirm.length < 9) {
			page.setStudentNumberConfirm(page.studentNumberConfirm + v);
		}

		if(page.studentNumberConfirm.length === 9) {
			if(page.studentNumber !== page.studentNumberConfirm) {
				page.setStudentNumberConfirm('');
				alert('학번이 다릅니다.');
				return;
			}
			page.pageMove('phone_auth');
		}
	}

	render() {
		const {page} = this.props
		
		let bubbles = [];

		for(var i = 0 ; i < 9; i++) {
			let val = '';
			if(page.studentNumberConfirm.length > i) {
				val = page.studentNumberConfirm[i];
			}

			bubbles.push(
				<div key={i} className="bubble">
					<p>{val}</p>
				</div>
			)
		}

		return (
			<div className="StudentNumberConfirm">
				<AuthTemplate btnValue="인증 완료" isKeypad={true}  keyPadChange={this.keyPadChange}>
					<div className="infoMsg">
						<p className="mainTitle">학번 재입력</p>
						<p className="subTitle">학번을 다시 입력해주세요.</p>
					</div>

					<div className="inputArea">
						{bubbles}
					</div>
					<div className="inputInfoMsg">
						<div className="horizontalCenter">
							<p className="back">본인의 학번</p><p>을 다시 입력해주세요.</p>
						</div>
						</div>
					
					
				</AuthTemplate>
			</div>
		);
	}
}

export default StudentNumberConfirm;