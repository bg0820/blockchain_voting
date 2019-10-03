import React, {PureComponent} from 'react';

import Button from '@components/Button';
import './index.scss';

class VoteListTemplate extends PureComponent {

	continueBtnClickCallback = (e) => {

	}

	resultBtnClickCallback = (e) => {

	}

	render() {
		return (
			<div className="VoteListTemplate">
				<div className="menuBar">
					<Button value="진행중" type="select" clickCallback={this.continueBtnClickCallback}></Button>
					<Button value="결과 보기" type="nonSelect" clickCallback={this.resultBtnClickCallback}></Button>
				</div>
				<div className="content">
					{this.props.children}
				</div>
			</div>
		);
	}
}

export default VoteListTemplate;