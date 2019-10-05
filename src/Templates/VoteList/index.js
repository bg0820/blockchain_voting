import React, {PureComponent} from 'react';
import { observer, inject } from 'mobx-react';

import Button from '@components/Button';
import './index.scss';

@inject('vote')
@observer
class VoteListTemplate extends PureComponent {

	continueBtnClickCallback = (e) => {
		// 페이지 이동
		const {vote} = this.props;
		vote.setType('continue');
	}

	resultBtnClickCallback = (e) => {
		// 페이지 이동
		const {vote} = this.props;
		vote.setType('result');
	}

	render() {
		const {vote} = this.props;
		console.log(vote.type);
		let isContinueSelect = "";
		let isResultSelect = "";

		if(vote.type === 'continue')
			isContinueSelect = " select";
		else if (vote.type === 'result')
			isResultSelect =  " select";

		console.log(isContinueSelect);
		console.log(isResultSelect);

		return (
			<div className="VoteListTemplate">
				<div className="menuBar">
					<Button value="진행중" style={"menu" + isContinueSelect} clickCallback={this.continueBtnClickCallback}></Button>
					<Button value="결과 보기" style={"menu" + isResultSelect} clickCallback={this.resultBtnClickCallback}></Button>
				</div>
				<div className="content">
					{this.props.children}
				</div>
			</div>
		);
	}
}

export default VoteListTemplate;