import React, {PureComponent} from 'react';
import { observer, inject } from 'mobx-react';

import Button from '@components/Button';
import VoteListItem from '@components/VoteListItem';


import vote_mark from '@assets/vote_mark.png';

import './index.scss'

@inject('vote')
@inject('page')
@observer
class VoteList extends PureComponent {

	handleVoteItemClick = (e, idx) => {
		// 페이지 이동
		const {page} = this.props;
		page.setPage('voting');
	}

	continueBtnClickCallback = (e) => {
		const {vote} = this.props;
		vote.setType('continue');
	}

	resultBtnClickCallback = (e) => {
		const {vote} = this.props;
		vote.setType('result');
	}

	formDate = (startDate, endDate) => {
		let startMonth = startDate.getMonth() + 1;
		let startDay = startDate.getDate();

		let endMonth = endDate.getMonth() + 1;
		let endDay = endDate.getDate();

		let startStr = startDate.getFullYear() + '.' + (startMonth < 10 ? '0' + startMonth : startMonth) + '.' + (startDay < 10 ? '0' + startDay : startDay) ;
		let endStr = endDate.getFullYear() + '.' + (endMonth < 10 ? '0' + endMonth : endMonth) + '.' + (endDay < 10 ? '0' + endDay : endDay) ;

		return startStr + ' ~ ' + endStr;
	}

	remainDate = (endDate) => {
		let now = new Date();
		let dday = endDate;

		// 원하는 날짜, 시간 정확하게 초단위까지 기입.
		let days = (dday - now) / 1000 / 60 / 60 / 24; 
		let daysRound = Math.floor(days); 
		let hours = (dday - now) / 1000 / 60 / 60 - (24 * daysRound); 
		let hoursRound = Math.floor(hours); 
		let minutes = (dday - now) / 1000 /60 - (24 * 60 * daysRound) - (60 * hoursRound); 
		let minutesRound = Math.floor(minutes); 


		return hoursRound + '시 ' + minutesRound + '분 남음';
	}

	render() {
		const {vote} = this.props;
		
		let isContinueSelect = "";
		let isResultSelect = "";

		if(vote.type === 'continue')
			isContinueSelect = " select";
		else if (vote.type === 'result')
			isResultSelect =  " select";

		let voteList = vote.list.map((item, i) => {
			return (<VoteListItem 
				key={i}
				idx={i} 
				clickCallback={this.handleVoteItemClick} 
				logo={vote_mark}
				time={this.formDate(item.startDate, item.endDate)} 
				title={item.title} 
				remain={this.remainDate(item.endDate)} ></VoteListItem>
			)
		});

		

		return (
			<div className="VoteList">
				<div className="menuBar">
					<Button value="진행중" style={"menu" + isContinueSelect} clickCallback={this.continueBtnClickCallback}></Button>
					<Button value="결과 보기" style={"menu" + isResultSelect} clickCallback={this.resultBtnClickCallback}></Button>
				</div>
				<div className="content">
					<div className="count">
						<p>2개 진행중</p>
					</div>
					{voteList}
				</div>
			</div>
		);
	}
}

export default VoteList;