import React, {PureComponent} from 'react';
import { observer, inject } from 'mobx-react';

import './index.scss'
import Button from '../../Components/Button';


@inject('page')
class Voting extends PureComponent {
	clickCallback = (e) => {
	}

	render() {
		return (
			<div className="Voting">
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
                        <div className="CandidateNum">기호 1번 (늘품) </div>
                        <div className="CandidateCard">
                            <div className="ButtonWrap">
                                <Button value='경력 및 공략' style='reverse' clickCallback={this.clickCallback}></Button>
                                <img className="VoteMark" src="/image/vote_mark.png"></img>
                                <div className="Touch">터치</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
		);
	}
}

export default Voting;