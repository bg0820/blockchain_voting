import React, {PureComponent} from 'react';
import { observer, inject } from 'mobx-react';

import BottomButtonTemplate from '@templates/BottomButtonTemplate';

import Button from '@components/Button';

import bongkoo from '@assets/bongkoo.png';
import james from '@assets/james.png';
import vote_mark from '@assets/vote_mark.png';

import './index.scss'

@inject('page')
class Voting extends PureComponent {
	clickCallback = (e) => {
	}

	render() {
		console.log(bongkoo);
		let buttonDiv = (
			<div className="split">
                 <Button value='기권하기' style='giveUp' clickCallback={this.clickCallback}></Button>
                 <Button value='투표하기' style='select' clickCallback={this.clickCallback}></Button>
             </div>
		)
		return (
			<div className="Voting">
				<BottomButtonTemplate isBackBtn={true} isTitle={true} buttonDiv={buttonDiv}>
					<div className="Candidate">
                        <p className="number">기호 1번 (늘픔)</p>
                        <div className="card">
                            <div className="horizontalList">
                                <div className="profile">
                                    <div className="imageWapper">
                                    <img src={james}></img> 
                                    </div>
                                    <p className="name">제임스</p>
                                    <p className="role">정 학생회장</p>
                                </div>   
                                <div className="profile">
                                    <div className="imageWapper">
                                    <img src={bongkoo}></img> 
                                    </div>
                                    <p className="name">봉구</p>
                                    <p className="role">부 학생회장</p>
                                </div>    
                                <div className="voteArea">
                                    <Button value='경력 및 공략' style='reverse' clickCallback={this.clickCallback}></Button>
                                    <div className="center">
                                        <img className="VoteMark" src={vote_mark}></img> 
                                        <p>터치</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
				</BottomButtonTemplate>
				
            </div>
		);
	}
}

export default Voting;