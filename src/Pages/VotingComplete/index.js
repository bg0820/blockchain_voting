import React, {PureComponent} from 'react';
import { observer, inject } from 'mobx-react';

import Button from '../../Components/Button';

import BottomButtonTemplate from '@templates/BottomButtonTemplate';


import james from '@assets/james.png';
import bongkoo from '@assets/bongkoo.png';

import './index.scss'

@inject('page')
class VotingComplete extends PureComponent {
	clickCallback = (e) => {
		const {page} = this.props;
		page.pageMove('vote_list');
	}

	render() {
		let buttonDiv = (
			<Button value='목록으로 돌아가기'  clickCallback={this.clickCallback}></Button>
		)

		return (
			<div className="VotingComplete">
				<BottomButtonTemplate title="성공회대학교 제33대 총학생회 선거" buttonDiv={buttonDiv}>
					<div className="centerWrap">
						<div className="center">
							<div className="infoMsg">
								<p>투표 완료</p>
							</div>
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
								</div>
							</div>
							<div >
								<p>기호 1번 (늘픔) 에게</p>
								<p>투표 하셨습니다.</p>
							</div>
						</div>
					</div>

				</BottomButtonTemplate>
            </div>
		);
	}
}

export default VotingComplete;