import React, {PureComponent} from 'react';
import { observer, inject } from 'mobx-react';

import BottomButtonTemplate from '@templates/BottomButtonTemplate';
import Button from '@components/Button';
import Chart from '@components/Chart';
import StickChart from '@components/StickChart';

import './index.scss'

@inject('voteList')
@inject('vote')
@inject('page')
class VotingResult extends PureComponent {
	clickCallback = (e) => {
	}

	render() {
		const {voteList, vote} = this.props;

		let graph = null;

		return (
			<div className="VotingResult">
				<BottomButtonTemplate isBackBtn={true} title={voteList.endList[ voteList.selectListIdx].name} buttonDiv={null}>
					<div className="content">
						<div className="statistics">
							<div className="chartWrap">
								<Chart color="#17A6FF" isChart={true} value={90} str="개표율 "></Chart>
							</div>
							<div className="chartWrap">
								<Chart color="#7F9AF7" isChart={true} value={75} str="투표율"></Chart>
							</div>
							<div className="chartWrap">
								<Chart value={1522} str="투표자 수"></Chart>
							</div>
							<div className="chartWrap">
								<Chart value={30} str="기권 수"></Chart>
							</div>
						</div>
						<div className="article">
							<p className="info">투표 결과</p>
							<div className="card">
								<div className="graph">
									<p className="term">기호 1번</p>
									<StickChart percent={80} color="#35D0A4"></StickChart>
								</div>
								<div className="graph">
									<p className="term">기호 2번</p>
									<StickChart percent={20} color="#4192FF"></StickChart>
								</div>    
								<div className="graph">
									<p className="term red">기권</p>
									<StickChart percent={0} color="#FF7171"></StickChart>
								</div>
							</div>
                  	  	</div>

						<div className="article">
							<p className="info">당선자 (운동화)</p>
							<div className="card">
								<div className="horizontalList">
									<div className="profile">
										<div className="imageWapper">
										<img src="/image/orang.png"></img> 
										</div>
										<p className="name">오랑우탄</p>
										<p className="role">정 학생회장</p>
									</div>   
									<div className="profile">
										<div className="imageWapper">
										<img src="/image/mogarn.png"></img> 
										</div>
										<p className="name">모건 프리먼</p>
										<p className="role">부 학생회장</p>
									</div>  
								</div>
							</div>
						</div>

						<div className="article">
							<p className="info">공약</p>
							<div className="card">
								<div className="verticalList">
									<ol>
										<li>성공회대를 국회로</li>
										<li>기말고사 폐지</li>
										<li>중간고사 폐지</li>
										<li>절대평가로 변경</li>
										<li>야식사업 매일</li>
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