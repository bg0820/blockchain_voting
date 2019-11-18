import React, {PureComponent} from 'react';
import { observer, inject } from 'mobx-react';

import axios from 'axios';
import BottomButtonTemplate from '@templates/BottomButtonTemplate';
import Button from '@components/Button';
import Chart from '@components/Chart';
import StickChart from '@components/StickChart';

import './index.scss'

@inject('voteList')
@inject('voteResult')
@inject('vote')
@inject('page')
@observer
class VotingResult extends PureComponent {
	
	constructor(props) {
		super(props);

		const {voteResult} = this.props;

		voteResult.init();
	}
	componentDidMount() {
		this.getVoteDetail();
	}

	getVoteDetail = async () => {
		const {voteList, voteResult} = this.props;

		console.log('getVoteDetail');
		let result = await axios({
			method: 'GET',
			url: 'http://222.238.100.247:3001/vote/detail',
			params: {
				voteIdx: voteList.selectVoteIdx
			}
		});
		let data = result.data;

		if(data.result === 'success') {
			voteResult.candidateGroupInit(data.data);
			this.getReport();
		}
	}

	getReport = async () => {
		const {voteList, voteResult} = this.props;

		let result = await axios({
			method: 'GET',
			url: 'http://222.238.100.247:3001/user/vote/report',
			params: {
				voteIdx: voteList.selectVoteIdx
			}
		});
		let data = result.data;

		if(data.result === 'success') {
			voteResult.reportInit(data.data);
		}else {
			alert(data.msg);
		}


	}
	
	clickCallback = (e) => {

	}

	calcPercent(a, b) {
		let result = 0;


		result = a / b * 100.0;

		if(isNaN(result))
			result = 0;

		if(result === Infinity)
			result = 0;
		
		console.log(result);
		return Math.round(result);
	}

	render() {
		const {voteList, voteResult} = this.props;

		let color=['#35D0A4', '#4192FF', '#7F9AF7'];

		let graph = [];
		let profile = null;
		let commit = null;
		let electedCandidateGroup = null;
		let statistics = null;
		let report = voteResult.report;


		console.log("NULL");
		if(report.type !== undefined && report.type !== null) {
			console.log("NOT NULL!");
			let graphCnt = 1;
			if(report.type === 0) {
				graph.push(
					<div key={1} className="graph">
						<p className="term">찬성</p>
						<StickChart percent={this.calcPercent(report.aggCnt, report.totalCnt)} color={color[0]}></StickChart>
					</div>
				);
				graph.push(
					<div key={2} className="graph">
						<p className="term">반대</p>
						<StickChart percent={this.calcPercent(report.oppCnt, report.totalCnt)} color={color[1]}></StickChart>
					</div>
				);
				graphCnt += 2;
			} else {
				if(report.candidateGroup !== undefined) {
					graph = report.candidateGroup.map((item, i) => {
						return (
							<div key={i} className="graph">
								<p className="term">{item.num}번 ({item.name})</p>
								<StickChart percent={this.calcPercent(item.cnt, report.totalCnt)} color={color[i]}></StickChart>
							</div>
						)
					})
					graphCnt = report.candidateGroup.length;
				}
			}

			graph.push(
				<div className="graph" key={graphCnt}>
					<p className="term red">기권</p>
					<StickChart percent={this.calcPercent( report.abstenCnt, report.totalCnt)} color="#FF7171"></StickChart>
				</div>
			)

			if(report.candidate !== undefined) {
				let candidate = report.candidate;
	
				let candidateProfile = candidate.map((item, i) => {
					return (
						<div className="profile" key={i}>
							<div className="imageWapper">
							<img src={item.profileImg}></img> 
							</div>
							<p className="name">{item.name}</p>
							<p className="role">{item.position === 1 ? '정 학생회장' : '부 학생회장'}</p>
						</div>   
					)
				})
				profile = (
					<div className="horizontalList">
						
						{candidateProfile}
					</div>
				)
			}

			if(report.info !== undefined) {
				let commitSplit = report.info.commit.split('<br/>');
				commit = commitSplit.map((item, i) => {
					return (<li key={i}>{item}</li>)
				});
			}
	

			statistics = (
				<React.Fragment>
					<div className="chartWrap">
						<Chart color="#17A6FF" isChart={true} percent={report.validVotePercent ? report.validVotePercent : 100} str="개표율 "></Chart>
					</div>
					<div className="chartWrap">
						<Chart color="#7F9AF7" isChart={true} percent={this.calcPercent(report.voteCnt, report.totalCnt)} str="투표율"></Chart>
					</div>
					<div className="chartWrap">
						<Chart percent={report.totalCnt ? report.totalCnt : 0} str="투표자 수"></Chart>
					</div>
					<div className="chartWrap">
						<Chart percent={report.abstenCnt ? report.abstenCnt : 0} str="기권 수"></Chart>
					</div>
				</React.Fragment>
				
			);

			electedCandidateGroup = (
				<React.Fragment>
					<div className="article">
						<p className="info">당선자 ({report.info ? report.info.name : ""})</p>
						<div className="card">
							{profile}
						</div>
					</div>
	
					<div className="article">
						<p className="info">공약</p>
						<div className="card">
							<div className="verticalList">
								<ol>
								{commit}
								</ol>
							</div>
						</div>
					</div>
				</React.Fragment>
			);
	
			if(report.result === undefined || report.result === null) {
				electedCandidateGroup = null;
			}
		}

		return (
			<div className="VotingResult">
				<BottomButtonTemplate isBackBtn={true} title={voteList.endList[ voteList.selectListIdx].name} buttonDiv={null}>
					<div className="content">
						<div className="statistics">
							{statistics}
						</div>
						<div className="article">
							<p className="info">투표 결과</p>
							<div className="card">
								{graph}
								
							</div>
                  	  	</div>
						{electedCandidateGroup}
						
					</div>
				</BottomButtonTemplate>
				
            </div>
		);
	}
}

export default VotingResult;