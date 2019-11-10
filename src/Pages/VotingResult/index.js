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

	render() {
		const {voteList, voteResult} = this.props;

		let graph = null;

		let color=['#35D0A4', '#4192FF', '#7F9AF7'];

		if(voteResult.report.candidateGroup !== undefined) {
			graph = voteResult.report.candidateGroup.map((item, i) => {
				return (
					<div key={i} className="graph">
						<p className="term">{item.num}번 ({item.name})</p>
						<StickChart percent={item.cnt / voteResult.report.totalCnt * 100.0} color={color[i]}></StickChart>
					</div>
				)
			})
		}

		let profile = null;

		if(voteResult.report.candidate !== undefined) {
			let candidate = voteResult.report.candidate;
			profile = (
				<div className="horizontalList">
					<div className="profile">
						<div className="imageWapper">
						<img src={candidate[0].profileImg}></img> 
						</div>
						<p className="name">{candidate[0].name}</p>
						<p className="role">{candidate[0].position === 1 ? '정 학생회장' : '부 학생회장'}</p>
					</div>   
					<div className="profile">
						<div className="imageWapper">
						<img src={candidate[1].profileImg}></img> 
						</div>
						<p className="name">{candidate[1].name}</p>
						<p className="role">{candidate[1].position === 1 ? '정 학생회장' : '부 학생회장'}</p>
					</div>  
				</div>
			)
		}

		let commit = null;

		if(voteResult.report.info !== undefined) {
			let commitSplit = voteResult.report.info.commit.split('<br/>');
			commit = commitSplit.map((item, i) => {
				return (<li key={i}>{item}</li>)
			});
		}
		
		let absPer = voteResult.report.abstenCnt / voteResult.report.totalCnt * 100.0;
		if(absPer === Infinity)
		absPer = 0;

		return (
			<div className="VotingResult">
				<BottomButtonTemplate isBackBtn={true} title={voteList.endList[ voteList.selectListIdx].name} buttonDiv={null}>
					<div className="content">
						<div className="statistics">
							<div className="chartWrap">
								<Chart color="#17A6FF" isChart={true} value={voteResult.report.validVoteCnt} str="개표율 "></Chart>
							</div>
							<div className="chartWrap">
								<Chart color="#7F9AF7" isChart={true} value={voteResult.report.voteCnt / voteResult.report.totalCnt * 100.0} str="투표율"></Chart>
							</div>
							<div className="chartWrap">
								<Chart value={voteResult.report.totalCnt? voteResult.report.totalCnt : 0} str="투표자 수"></Chart>
							</div>
							<div className="chartWrap">
								<Chart value={voteResult.report.abstenCnt ? voteResult.report.abstenCnt : 0} str="기권 수"></Chart>
							</div>
						</div>
						<div className="article">
							<p className="info">투표 결과</p>
							<div className="card">
								{graph}
								<div className="graph">
									<p className="term red">기권</p>
									<StickChart percent={absPer} color="#FF7171"></StickChart>
								</div>
							</div>
                  	  	</div>

						<div className="article">
							<p className="info">당선자 ({voteResult.report.info === undefined ? "" : voteResult.report.info.name})</p>
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
					</div>
				</BottomButtonTemplate>
				
            </div>
		);
	}
}

export default VotingResult;