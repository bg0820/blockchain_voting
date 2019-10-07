import React, {PureComponent} from 'react';

import './index.scss';

class VoteListItem extends PureComponent {

	voteListItemClick = (e) => {
		this.props.clickCallback(e, this.props.idx);
	}

	render() {
		return (
			<div className="VoteListItem" onClick={this.voteListItemClick}>
				<div className="logo">
					<img src={this.props.logo}></img>
				</div>
				<div className="infoArea">
					<p className="date">{this.props.time}</p>
					<p className="title">{this.props.title}</p>
				</div>
				<div className="remainTime">
					<p>
						{this.props.remain}
					</p>
				</div> 
			</div>
		)
	}
}

export default VoteListItem;