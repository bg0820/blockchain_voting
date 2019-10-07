import React, {PureComponent} from 'react';

import './index.scss';

class KeypadButton extends PureComponent {

	componentDidMount() {
		console.log("3");
	}

	handleClick = (e) => {
		this.props.clickCallback(this.props.value);
	}

	render() {
		let clsName = "KeypadButton";
		if(this.props.bottom)
			clsName += " bottomElem"

		return (
			<div className={clsName}>
				<input type="button" value={this.props.value} onClick={this.handleClick}></input>
			</div>
		)
	}
}

export default KeypadButton;