import React, {PureComponent} from 'react';
import { observer, inject } from 'mobx-react';

import './index.scss'
import Button from '../../Components/Button';


@inject('page')
class VotingComplete extends PureComponent {
	clickCallback = (e) => {
	}

	render() {
		return (
			<div className="VotingComplete">
				<div className="NavBar">
					<div className="voteTitle">
						<p>
                            성공회대학교 제 33대 총학생회 선거
						</p>
					</div>
				</div>
                <div className="content">
                    <div className="center">
                        <div className="infoMsg">
                            <p>투표 완료</p>
                        </div>
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
                                </div>
                            </div>
                        <div >
                            <p>기호 1번 (늘픔) 에게</p>
                            <p>투표 하셨습니다.</p>
                        </div>
                    </div>
                </div>

                <div className="bottomArea">
                    <Button value='목록으로 돌아가기' style='select' clickCallback={this.clickCallback}></Button>
                </div>
            </div>
		);
	}
}

export default VotingComplete;