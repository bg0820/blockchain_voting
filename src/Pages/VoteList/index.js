import React, {PureComponent} from 'react';
import { observer, inject } from 'mobx-react';

import Button from '@components/Button';
import VoteListItem from '@components/VoteListItem';

import './index.scss'

@inject('vote')
@observer
class VoteList extends PureComponent {
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
		
		let isContinueSelect = "";
		let isResultSelect = "";

		if(vote.type === 'continue')
			isContinueSelect = " select";
		else if (vote.type === 'result')
			isResultSelect =  " select";

		return (
			<div className="VoteList">
				<div className="menuBar">
					<Button value="진행중" style={"menu" + isContinueSelect} clickCallback={this.continueBtnClickCallback}></Button>
					<Button value="결과 보기" style={"menu" + isResultSelect} clickCallback={this.resultBtnClickCallback}></Button>
				</div>
				<div className="content">
					<VoteListItem time="" title="" remain="" ></VoteListItem>
					<VoteListItem time="" title="" remain="" ></VoteListItem>ㄴ
				</div>
			</div>
		);
	}
}

export default VoteList;