import React, {PureComponent} from 'react';
import { observer, inject } from 'mobx-react';

import axios from 'axios';
import Button from '@components/Button';
import VoteListItem from '@components/VoteListItem';


import vote_logo from '@assets/vote.png';
import vote_mark from '@assets/vote_mark.png';

import './index.scss'

@inject('voteList')
@inject('page')
@observer
class VoteList extends PureComponent {

	componentDidMount() {
		this.getVoteList();
	}

	getVoteList = async() => {
		const {voteList} = this.props;

		let result = await axios({
			method: 'GET',
			url: 'http://222.238.100.247:3001/vote/list'
		});
		let data = result.data;

		if(data.result === 'success') {
			console.log(data);
			voteList.setList(data.rows);
		}
	}

	getVoteEndList = async() => {
		const {voteList} = this.props;

		let result = await axios({
			method: 'GET',
			url: 'http://222.238.100.247:3001/vote/list/end'
		});
		let data = result.data;

		if(data.result === 'success') {
			console.log(data);
			voteList.setEndList(data.rows);
		}
	}

	handleVoteItemClick = (e, idx) => {
		// 페이지 이동
		const {page, voteList} = this.props;
		page.pageMove('vote');
		voteList.selectVote(idx);
	}

	handleEndVoteItemClick = (e, idx) => {
		// 페이지 이동
		const {page, voteList} = this.props;
		page.pageMove('vote_result');
		voteList.selectVote(idx);
	}

	continueBtnClickCallback = (e) => {
		const {voteList} = this.props;
		voteList.setType('continue');

		this.getVoteList();
	}

	resultBtnClickCallback = (e) => {
		const {voteList} = this.props;
		voteList.setType('result');

		this.getVoteEndList();
	}

	formDate = (startDate, endDate) => {
		let _startDate = new Date(startDate);
		let _endDate = new Date(endDate);

		let startMonth = _startDate.getMonth() + 1;
		let startDay = _startDate.getDate();

		let endMonth = _endDate.getMonth() + 1;
		let endDay = _endDate.getDate();

		let startStr = _startDate.getFullYear() + '.' + (startMonth < 10 ? '0' + startMonth : startMonth) + '.' + (startDay < 10 ? '0' + startDay : startDay) ;
		let endStr = _endDate.getFullYear() + '.' + (endMonth < 10 ? '0' + endMonth : endMonth) + '.' + (endDay < 10 ? '0' + endDay : endDay) ;

		return startStr + ' ~ ' + endStr;
	}

	remainDate = (endDate) => {
		let _endDate = new Date(endDate);

		let now = new Date();
		let dday = _endDate;

		// 원하는 날짜, 시간 정확하게 초단위까지 기입.
		let days = (dday - now) / 1000 / 60 / 60 / 24; 
		let daysRound = Math.floor(days); 
		let hours = (dday - now) / 1000 / 60 / 60 - (24 * daysRound); 
		let hoursRound = Math.floor(hours); 
		let minutes = (dday - now) / 1000 /60 - (24 * 60 * daysRound) - (60 * hoursRound); 
		let minutesRound = Math.floor(minutes); 

		return daysRound + '일 ' + hoursRound + '시 ' + minutesRound + '분 남음';
	}

	render() {
		const {voteList} = this.props;
		
		let isContinueSelect = "";
		let isResultSelect = "";

		if(voteList.type === 'continue')
			isContinueSelect = " select";
		else if (voteList.type === 'result')
			isResultSelect =  " select";

		let voteListDiv = null;

		let countStr = "";

		if(voteList.type === 'continue') {
			countStr = voteList.list.length + '개 진행중';

			if(voteList.list.length !== 0) {
				voteListDiv = voteList.list.map((item, i) => {
					return (<VoteListItem 
						key={i}
						idx={i} 
						clickCallback={this.handleVoteItemClick} 
						logo={vote_mark}
						time={this.formDate(item.startDate, item.endDate)} 
						title={item.name} 
						remain={this.remainDate(item.endDate)} ></VoteListItem>
					)
				});
			} else {
				voteListDiv = (
					<div className="centerWrap">
						<div className="center">
							<p>진행중인 투표가</p>
							<p>존재하지 않습니다.</p>
						</div>
					</div>
				);
			}
	
		} else {
			if(voteList.endList.length !== 0) {
				voteListDiv = voteList.endList.map((item, i) => {
					return (<VoteListItem 
						key={i}
						idx={i}
						isEnd={true} 
						clickCallback={this.handleEndVoteItemClick} 
						logo={vote_mark}
						time={this.formDate(item.startDate, item.endDate)} 
						title={item.name} 
						remain={this.remainDate(item.endDate)} ></VoteListItem>
					)
				});
			} else {
				voteListDiv = (
					<div className="centerWrap">
						<div className="center">
							<p>종료된 투표가</p>
							<p>존재하지 않습니다.</p>
						</div>
					</div>
				);
			}
			
		}
		

		return (
			<div className="VoteList">
				<div className="menuBar">
					<Button value="진행중" style={"menu" + isContinueSelect} clickCallback={this.continueBtnClickCallback}></Button>
					<Button value="결과 보기" style={"menu" + isResultSelect} clickCallback={this.resultBtnClickCallback}></Button>
				</div>
				<div className="content">
					<div className="count">
						<p>{countStr}</p>
					</div>
					{voteListDiv}
				</div>
			</div>
		);
	}
}

export default VoteList;