import React, {PureComponent} from 'react';
import { observer, inject } from 'mobx-react';

import axios from 'axios';
import BottomButtonTemplate from '@templates/BottomButtonTemplate';

import Button from '@components/Button';

import bongkoo from '@assets/bongkoo.png';
import james from '@assets/james.png';
import vote_mark from '@assets/vote_mark.png';

import './index.scss'

@inject('page')
@inject('vote')
@inject('voteList')
@inject('modal')
@observer
class Voting extends PureComponent {

	componentDidMount() {
		this.getVoteDetail();
	}

	getVoteDetail = async () => {
		const {voteList, vote} = this.props;

		let result = await axios({
			method: 'GET',
			url: 'http://222.238.100.247:3001/vote/detail',
			params: {
				voteIdx: voteList.selectVoteIdx
			}
		});
		let data = result.data;

		if(data.result === 'success') {
			for(var i = 0 ; i < data.data.length; i++) {
				data.data[i].select = false;
			}

			vote.candidateGroupInit(data.data);
		}
	}

	handleVoteTouchAgree = (e) => {
		const {vote} = this.props;

		vote.setVote(1);
	}

	handleVoteTouchOpp = (e) => {
		const {vote} = this.props;
		
		vote.setVote(2);
	}

	handleVoteTouch = (e) => {
		const {vote} = this.props;
		let idx = Number(e.target.dataset.idx);

		vote.voting(idx);
	}

	callbackAbstention = (result) => {
		const {page, vote} = this.props;
		
		if(result === 'ok') {
			vote.setVote(3);
			page.pageMove('vote_complete');
		}
	}

	callbackVoting = (result) => {
		
	}

	handleAbstention = (e) => {
		const {modal} = this.props;
		modal.show('알림', '기권 하시겠습니까?', 'dialog', this.callbackAbstention);
	}

	handleVoting = (e) => {
		const {page, modal, vote} = this.props;

		let isSelectCnt = 0;
		vote.candidateGroups.map((item, i) => {
			item.select === true ? isSelectCnt++ : null
		});

		if(vote.candidateGroups.length === 1) {
			if(vote.vote === 0) {
				modal.show('알림', '투표를 해주세요.', 'ok', this.callbackVoting);
			} else {
				page.pageMove('vote_complete');
			}
		} else {
			if(isSelectCnt === 0) {
				modal.show('알림', '후보를 선택해 주세요.', 'ok', this.callbackVoting);
			} else {
				page.pageMove('vote_complete');
			}
		}
	}

	handleDetailProfile = (idx) => {
		const {page, vote} = this.props;
		vote.setSubSelect(idx);
		page.setPage('vote_sub_info')
	}

	render() {
		const {vote, voteList} = this.props;

		console.log(JSON.parse(JSON.stringify(vote.candidateGroups)));

		let buttonDiv = (
			<div className="split">
                 <Button value='기권하기' style='giveUp' clickCallback={this.handleAbstention}></Button>
                 <Button value='투표하기' style='select' clickCallback={this.handleVoting}></Button>
             </div>
		)

		let solo = (
			<React.Fragment>
				<div className="voteSelect">
					<div className="card">
						<p>찬성</p>
						<img className={ vote.vote === 1 ? 'VoteMark select' : 'VoteMark' } src={vote_mark}  onClick={this.handleVoteTouchAgree} ></img> 
					</div>
				</div>

				<div className="voteSelect">
					<div className="card">
						<p>반대</p>
						<img className={ vote.vote === 2 ? 'VoteMark select' : 'VoteMark' }  src={vote_mark}  onClick={this.handleVoteTouchOpp} ></img> 
					</div>
				</div>
			</React.Fragment>
		);

		if(vote.candidateGroups.length !== 1 ) {
			solo = null;
		}
		
		let len = vote.candidateGroups.length;

		let candidate = vote.candidateGroups.map((item, i) => {
			return (<div className="Candidate" key={i}>
                <p className="number">{'기호 ' + (i + 1) + '번 (' + item.title +')'}</p>
                <div className="card">
                    <div className="horizontalList">
						{
							item.candidate.map((candidate, j) => {
								return (
									<div className="profile" key={j}>
										<div className="imageWapper">
											<img src={candidate.img}></img> 
										</div>
										<p className="name">{candidate.name}</p>
										<p className="role">{candidate.position}</p>
									</div>
								)
							})
							
						}
                        <div className="voteArea">
                            <Button value='경력 및 공약' style='reverse' clickCallback={() => this.handleDetailProfile(i)}></Button>
                            { 
								len !== 1 ? (
									<div className="center" >
										<img className={ item.select === true ? 'VoteMark select' : 'VoteMark' } data-idx={i} onClick={this.handleVoteTouch} src={vote_mark}></img> 
										<p>터치</p>
									</div>
								) : null
							}
                        </div>
                    </div>
                </div>
            </div>)
		});

		return (
			<div className="Voting">
				<BottomButtonTemplate isBackBtn={true} title={voteList.list[ voteList.selectListIdx].name} buttonDiv={buttonDiv}>
					{candidate}
					{solo}
				</BottomButtonTemplate>
				
            </div>
		);
	}
}

export default Voting;