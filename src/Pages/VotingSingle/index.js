import React, {PureComponent} from 'react';
import { observer, inject } from 'mobx-react';

import './index.scss'
import Button from '../../Components/Button';


@inject('page')
class VotingSingle extends PureComponent {
	clickCallback = (e) => {

	}

	render() {
		return (
			<div className="VotingSingle">
				<div className="NavBar">
					<span className="I_LEFT_ARROW"></span>
					<div className="voteTitle">
						<p>
                            성공회대학교 제 33대 총학생회 선거
						</p>
					</div>
				</div>
                <div className="content">

                    <div className="Candidate">
                        <p className="number">기호 1번 (늘픔)</p>
                        <div className="card">
                            <div className="horizontalList">
                                <div className="profile">
                                    <div className="imageWapper">
                                    <img src="/image/james.png"></img> 
                                    </div>
                                    <p className="name">제임스</p>
                                    <p className="role">정 학생회장</p>
                                </div>   
                                <div className="profile">
                                    <div className="imageWapper">
                                    <img src="/image/bonggu.png"></img> 
                                    </div>
                                    <p className="name">봉구</p>
                                    <p className="role">부 학생회장</p>
                                </div>    
                                <div className="voteArea">
                                    <Button value='경력 및 공략' style='reverse' clickCallback={this.clickCallback}></Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="voteSelect">
                        <div className="card">
                            <p>찬성</p>
                            <img src="/image/vote_mark.png"></img>
                        </div>
                    </div>

                    <div className="voteSelect">
                        <div className="card">
                            <p>반대</p>
                            <img src="/image/vote_mark.png"></img>
                        </div>
                    </div>
                </div>

                <div className="bottomArea">
                    <div className="split">
                        <Button value='기권하기' style='giveUp' clickCallback={this.clickCallback}></Button>
                        <Button value='투표하기' style='select' clickCallback={this.clickCallback}></Button>
                    </div>
                </div>
            </div>
		);
	}
}

export default VotingSingle;