import React, {PureComponent} from 'react';
import { observer, inject } from 'mobx-react';

import './index.scss'
import Button from '../../Components/Button';


@inject('page')
class VotingResult extends PureComponent {
	clickCallback = (e) => {
	}

	render() {
		return (
			<div className="VotingResult">
				<div className="NavBar">
					<span className="I_LEFT_ARROW"></span>
					<div className="voteTitle">
						<p>
                            성공회대학교 제 33대 총학생회 선거
						</p>
					</div>
				</div>
                <div className="content">

                <div className="article">
                        <p className="info">투표 결과</p>
                        <div className="card">
                            <div className="graph">
                                <div className="candidate">
                                    <p className="term">기호 1번</p>
                                    <span className="stick"></span>
                                </div>   
                                <div className="candidate">
                                    <p className="term">기호 2번</p>
                                    <span className="stick"></span>
                                </div>    
                                <div className="candidate">
                                    <p className="term">기권</p>
                                    <span className="stick"></span>
                                </div>
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
                                <div className="voteArea">
                                    <p>이 위치에
                                        뭐를 넣으면
                                        좋을지 안정함</p>
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
        </div>
		);
	}
}

export default VotingResult;