import React, {PureComponent} from 'react';

import Button from '@components/Button';
import './index.scss';

class AuthTemplate extends PureComponent {
	render() {
		return (
			<div className="AuthTemplate">
				<div className="interactionArea">
					{this.props.children}
				</div>
				<div className="buttonArea">
					<Button value={this.props.btnValue}></Button>
				</div>
			</div>
		);
	}
}

export default AuthTemplate;