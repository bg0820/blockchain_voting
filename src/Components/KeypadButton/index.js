import React, {PureComponent} from 'react';

import './index.scss';

class KeypadButton extends PureComponent {

	componentDidMount() {
		console.log("3");
	}

	handleClick = (e) => {
		this.props.clickCallback(e);
	}

	render() {
		return (
			<div className="KeypadButton">
				<input type="button" value={this.props.value} onClick={this.handleClick}></input>
			</div>
		)
	}
}

export default KeypadButton;