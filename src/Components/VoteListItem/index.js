import React, {PureComponent} from 'react';

import './index.scss';

class VoteListItem extends PureComponent {

	render() {
		return (
			<div className="VoteListItem">
				<div className="logo">
					<img></img>
				</div>
				<div className=""></div>
				<div className="remainTime">
					<p>
						1일 3시간
					</p>
				</div>
			</div>
		)
	}
}

export default VoteListItem;