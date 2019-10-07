import React, {PureComponent} from 'react';
import { observer, inject } from 'mobx-react';

import BottomButtonTemplate from '@templates/BottomButtonTemplate';

import Button from '@components/Button';

import bongkoo from '@assets/bongkoo.png';
import james from '@assets/james.png';
import vote_mark from '@assets/vote_mark.png';

import './index.scss'

@inject('page')
@inject('vote')
@inject('modal')
@observer
class Voting extends PureComponent {

	handleVoteTouch = (e) => {
		const {vote} = this.props;
		let idx = Number(e.target.dataset.idx);

		vote.voting(idx);
	}
	callbackAbstention = (result) => {
		const {page} = this.props;
		
		if(result === 'ok') {
			page.pageMove('vote_complete');
		}
	}

	callbackVoting = (result) => {
		
	}

	handleAbstention = (e) => {
		const {modal} = this.props;
		modal.show('기권을 하시겠습니까?', '아 뭐라고 쓰지 쓸 말이 없네…', 'dialog', this.callbackAbstention);
	}

	handleVoting = (e) => {
		const {page, modal, vote} = this.props;

		let isSelectCnt = 0;
		vote.candidateGroups.map((item, i) => {
			item.select === true ? isSelectCnt++ : null
		});

		if(isSelectCnt === 0) {
			modal.show('후보를 선택해 주세요.', '기권을 하던지 후보를 투표 하던지, 하나만 해', 'ok', this.callbackVoting);
		} else {
			page.pageMove('vote_complete');
		}
	}

	handleDetailProfile = (e) => {
		const {page} = this.props;
		page.setPage('sub_information')
	}

	render() {
		const {vote} = this.props;

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
						<img src={vote_mark}></img> 
					</div>
				</div>

				<div className="voteSelect">
					<div className="card">
						<p>반대</p>
						<img src={vote_mark}></img> 
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
											<img src={james}></img> 
										</div>
										<p className="name">{candidate.name}</p>
										<p className="role">{candidate.position}</p>
									</div>
								)
							})
							
						}
                        <div className="voteArea">
                            <Button value='경력 및 공약' style='reverse' clickCallback={this.handleDetailProfile}></Button>
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
				<BottomButtonTemplate isBackBtn={true} title='테스트' buttonDiv={buttonDiv}>
					{candidate}
					{solo}
				</BottomButtonTemplate>
				
            </div>
		);
	}
}

export default Voting;