import React, {PureComponent} from 'react';

import './index.scss';

class Button extends PureComponent {

	constructor(props) {
		super(props);

		this.state = {
			style: "btn "
		};
	}
	componentDidMount() {
		console.log("3");
	}

	handleClick = (e) => {
		this.props.clickCallback(e);
	}

	render() {
		let style = this.state.style;

		if(this.props.style) {
			style += this.props.style;
		}

		return (
			<div className="Button">
				<input type="button" className={this.state.style} value={this.props.value} onClick={this.handleClick}></input>
			</div>
		)
	}
}

export default Button;