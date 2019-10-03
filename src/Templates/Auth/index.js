import React, {PureComponent} from 'react';

import Button from '@components/Button';
import KeypadButton from '@components/KeypadButton'
import './index.scss';

class AuthTemplate extends PureComponent {

	clickCallback = (e) => {
		this.props.clickCallback(e);
	}
	
	render() {
		let isKeypad = this.props.isKeypad;
		let buttonDiv = <Button value={this.props.btnValue} clickCallback={this.clickCallback}></Button>;
		if(isKeypad)
		{
			buttonDiv = (
				<div className="keyPad">
					<KeypadButton value="1"></KeypadButton>
					<KeypadButton value="2"></KeypadButton>
					<KeypadButton value="3"></KeypadButton>
					<KeypadButton value="4"></KeypadButton>
					<KeypadButton value="5"></KeypadButton>
					<KeypadButton value="6"></KeypadButton>
					<KeypadButton value="7"></KeypadButton>
					<KeypadButton value="8"></KeypadButton>
					<KeypadButton value="9"></KeypadButton>
					<div></div>
					<KeypadButton value="0"></KeypadButton>
				</div>
			);
		}

		return (
			<div className="AuthTemplate">
				<div className="interactionArea">
					{this.props.children}
				</div>
				<div className="buttonArea">
					{buttonDiv}
				</div>
			</div>
		);
	}
}

export default AuthTemplate;