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
		let btnClsName = "";
		let child = <p>{this.props.value}</p>;
		if(this.props.isDeleteKey) {
			btnClsName = "I_LEFT_ARROW";
			clsName="KeypadButton DeleteKey";
			child = <span className="I_LEFT_ARROW"></span>
		} 

		if(this.props.bottom)
			clsName += " bottomElem"

			
		return (
			<div className={clsName}>
				<div className="wrap">
					<div className="button" onClick={this.handleClick}>
						{child}
					</div>
				</div>
			</div>
		)
	}
}

export default KeypadButton;