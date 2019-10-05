import React, {PureComponent} from 'react';

import './index.scss';

class Button extends PureComponent {

	constructor(props) {
		super(props);

		this.state = {
			style: "Button "
		};

		if(this.props.style) {
			this.state.style = this.state.style +  this.props.style;
		}
		console.log(this.state);
	}
	componentDidMount() {
		console.log("3");
	}

	handleClick = (e) => {
		this.props.clickCallback(e);
	}

	render() {
		return (
			<div className="Button">
				<input type="button" className={this.state.style} value={this.props.value} onClick={this.handleClick}></input>
			</div>
		)
	}
}

export default Button;