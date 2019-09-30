import React, {PureComponent} from 'react';

import './index.scss';

class Button extends PureComponent {

	componentDidMount() {
		console.log("3");
	}

	handleClick = (e) => {
		this.props.clickCallback(e);
	}

	render() {
		return (
			<div className="Button">
				<input type="button" value={this.props.value} onClick={this.handleClick}></input>
			</div>
		)
	}
}

export default Button;