import React, {PureComponent} from 'react';
import { observer, inject } from 'mobx-react';

import AuthTemplate from '@templates/Auth';
import KeypadButton from '@components/KeypadButton';

import './index.scss'

@inject('page')
class StudentNumberConfirm extends PureComponent {

	render() {
		return (
			<div className="StudentNumberConfirm">
				<AuthTemplate btnValue="인증 완료" isKeypad={true}>
					<div className="infoMsg">
						<p className="mainTitle">학번 재입력</p>
						<p className="subTitle">학번을 다시 입력해주세요.</p>
					</div>

					<div className="inputArea">
						<input type="text" className="form_control"></input>
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