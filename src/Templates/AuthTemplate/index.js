import React, {PureComponent} from 'react';
import { observer, inject } from 'mobx-react';

import Button from '@components/Button';
import KeypadButton from '@components/KeypadButton'

import MainTemplate from '@templates/MainTemplate';
import './index.scss';

@inject('page')
@observer
class AuthTemplate extends PureComponent {

	handleKeyPad = (v) => {
		const {page} = this.props;

		if(page.page === 'student_number_auth') {
			page.setStudentNumber(page.studentNumber + v);

			if(page.studentNumber.length === 9) {
				page.pageMove('student_number_confrim_auth');
			}
		} else if(page.page === 'student_number_confrim_auth') {
			page.setStudentNumberConfirm(page.studentNumberConfirm + v);

			if(page.studentNumberConfirm.length === 9) {
				if(page.studentNumber !== page.studentNumberConfirm) {
					alert('학번이 다릅니다.');
					return;
				}
				page.pageMove('phone_number_auth');
			}
		}

		if(this.props.keyPadChange) {
			this.props.keyPadChange(v);
		}
	}

	handleDeleteKeyPad = (v) => {
		const {page} = this.props;

		if(page.page === 'student_number_auth') {
			page.setStudentNumber(page.studentNumber.substring(0, page.studentNumber.length - 1));
		} else if(page.page === 'student_number_confirm_auth') {
			page.setStudentNumberConfirm(page.studentNumberConfirm.substring(0, page.studentNumberConfirm.length - 1));
		} else if(page.page === 'phone_number_auth') {
			page.setPhoneAuthNum(page.phoneAuthNum.substring(0, page.phoneAuthNum.length - 1));
		}
		
	}

	backPage = () => {
		const {page} = this.props;
		page.pageMove(page.prevPage);
	}

	clickCallback = (e) => {
		this.props.clickCallback(e);
	}
	
	render() {
		const {page} = this.props;
		let isKeypad = this.props.isKeypad;
		let buttonDiv = <Button value={this.props.btnValue} clickCallback={this.clickCallback}></Button>;
		if(isKeypad)
		{
			buttonDiv = (
				<div className="keyPad">
					<KeypadButton value="1" clickCallback={this.handleKeyPad}></KeypadButton>
					<KeypadButton value="2" clickCallback={this.handleKeyPad}></KeypadButton>
					<KeypadButton value="3" clickCallback={this.handleKeyPad}></KeypadButton>
					<KeypadButton value="4" clickCallback={this.handleKeyPad}></KeypadButton>
					<KeypadButton value="5" clickCallback={this.handleKeyPad}></KeypadButton>
					<KeypadButton value="6" clickCallback={this.handleKeyPad}></KeypadButton>
					<KeypadButton value="7" clickCallback={this.handleKeyPad}></KeypadButton>
					<KeypadButton value="8" clickCallback={this.handleKeyPad}></KeypadButton>
					<KeypadButton value="9" clickCallback={this.handleKeyPad}></KeypadButton>
					<div></div>
					<KeypadButton value="0" bottom={true} clickCallback={this.handleKeyPad}></KeypadButton>
					<div className="deleteKey bottomElem" onClick={this.handleDeleteKeyPad}>
						<span className="I_LEFT_ARROW relative"></span>
					</div>
				</div>
			);
		}

		let isBackBtn = true;
		
		if(page.page === 'otp_auth')
			isBackBtn = null;

		return (
			<div className="AuthTemplate">
				<MainTemplate isBackBtn={isBackBtn}>
					<div className="verticalSplit">
						<div className="container">
							{this.props.children}
						</div>
						<div className="buttonArea">
							{buttonDiv}
						</div>
					</div>
				</MainTemplate>
			</div>
		);
	}
}

export default AuthTemplate;