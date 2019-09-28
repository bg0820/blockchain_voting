import React, {PureComponent} from 'react';

import './index.scss';

class Button extends PureComponent {
	render() {
		return (
			<div className="Button">
				<input type="button" value={this.props.value}></input>
			</div>
		)
	}
}

export default Button;