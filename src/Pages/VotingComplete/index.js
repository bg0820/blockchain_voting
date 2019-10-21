import React, {PureComponent} from 'react';
import { observer, inject } from 'mobx-react';

import Button from '../../Components/Button';

import BottomButtonTemplate from '@templates/BottomButtonTemplate';


import james from '@assets/james.png';
import bongkoo from '@assets/bongkoo.png';

import './index.scss'

@inject('page')
@inject('vote')
@inject('voteList')
@observer
class VotingComplete extends PureComponent {
	clickCallback = (e) => {
		const {page} = this.props;
		page.pageMove('vote_list');
	}

	render() {
		const {voteList, vote} = this.props;

		let buttonDiv = (
			<Button value='목록으로 돌아가기'  clickCallback={this.clickCallback}></Button>
		)

		let card = null;
		if(vote.vote === 3) {
			card = (
				<React.Fragment>
					<div >
						<p>기권표에 투표하셨습니다.</p>
					</div>
				</React.Fragment>
			);
		} else {
			if(vote.candidateGroups.length === 1) {
				let selectCandidateGroup = vote.candidateGroups[0];
				
				card = (
					<React.Fragment>
						<div className="card">
							<div className="horizontalList">
								<div className="profile">
									<div className="imageWapper">
									<img src={selectCandidateGroup.candidate[0].img}></img> 
									</div>
									<p className="name">{selectCandidateGroup.candidate[0].name}</p>
									<p className="role">{selectCandidateGroup.candidate[0].position}</p>
								</div>   
								<div className="profile">
									<div className="imageWapper">
									<img src={selectCandidateGroup.candidate[1].img}></img> 
									</div>
									<p className="name">{selectCandidateGroup.candidate[1].name}</p>
									<p className="role">{selectCandidateGroup.candidate[1].position}</p>
								</div>    
							</div>
						</div>
						<div >
							<p>단일 후보 ({selectCandidateGroup.title}) 을(를)</p>
							<p>{vote.vote === 1 ? '찬성': '반대'} 하셨습니다.</p>
						</div>
					</React.Fragment>
				);
			} else {
				let selectCandidateGroup = vote.candidateGroups[vote.selectCandidate];

				card = (
					<React.Fragment>
						<div className="card">
							<div className="horizontalList">
								<div className="profile">
									<div className="imageWapper">
									<img src={selectCandidateGroup.candidate[0].img}></img> 
									</div>
									<p className="name">{selectCandidateGroup.candidate[0].name}</p>
									<p className="role">{selectCandidateGroup.candidate[0].position}</p>
								</div>   
								<div className="profile">
									<div className="imageWapper">
									<img src={selectCandidateGroup.candidate[1].img}></img> 
									</div>
									<p className="name">{selectCandidateGroup.candidate[1].name}</p>
									<p className="role">{selectCandidateGroup.candidate[1].position}</p>
								</div>    
							</div>
						</div>
						<div >
							<p>기호 {selectCandidateGroup.num}번 ({selectCandidateGroup.title}) 에게</p>
							<p>투표 하셨습니다.</p>
						</div>
					</React.Fragment>
				);
			}
		}
		


		return (
			<div className="VotingComplete">
				<BottomButtonTemplate title={voteList.list[ voteList.selectListIdx].name} buttonDiv={buttonDiv}>
					<div className="centerWrap">
						<div className="center">
							<div className="infoMsg">
								<p>투표 완료</p>
							</div>
							{card}
							
						</div>
					</div>

				</BottomButtonTemplate>
            </div>
		);
	}
}

export default VotingComplete;