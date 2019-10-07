import React, {PureComponent} from 'react';
import { observer, inject } from 'mobx-react';

import MainTemplate from '@templates/MainTemplate';
import './index.scss';

class BottomButtonTemplate extends PureComponent {

	render() {
		return (
			<div className="BottomButtonTemplate">
				<MainTemplate  isBackBtn={this.props.isBackBtn} title={this.props.title}>
					<div className="verticalSplit">
						<div className="container">
							{this.props.children}
						</div>
						<div className="buttonArea">
							{this.props.buttonDiv}
						</div>
					</div>
				</MainTemplate>
			</div>
		);
	}
}

export default BottomButtonTemplate;