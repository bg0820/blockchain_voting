import React, {PureComponent} from 'react';

import Button from '@components/Button';
import './index.scss';

class AuthTemplate extends PureComponent {

	clickCallback = (e) => {
		this.props.clickCallback(e);
	}
	
	render() {
		return (
			<div className="AuthTemplate">
				<div className="interactionArea">
					{this.props.children}
				</div>
				<div className="buttonArea">
					<Button value={this.props.btnValue} clickCallback={this.clickCallback}></Button>
				</div>
			</div>
		);
	}
}

export default AuthTemplate;