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
				<div className="NavBar">
					<span className="I_LEFT_ARROW"></span>
					<div className="voteTitle">
						<p>
							성공회대학교 제 33대 총학생회 선거
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Voting;