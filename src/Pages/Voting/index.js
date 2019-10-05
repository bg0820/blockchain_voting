import React, {PureComponent} from 'react';
import { observer, inject } from 'mobx-react';

import './index.scss'


@inject('page')
class Voting extends PureComponent {

	clickCallback = (e) => {
		const {page} = this.props;
		page.setPage('voting');
	}

	render() {
		return (
			<div className="Voting">
				<div className="NavBar">← 성공회대학교 제 33대 총학생회 선거</div>
			</div>
		);
	}
}

export default Voting;