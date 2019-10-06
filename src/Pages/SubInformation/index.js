import React, {PureComponent} from 'react';
import { observer, inject } from 'mobx-react';


import './index.scss'

@inject('page')
class SubInformation extends PureComponent {


	render() {
		return (
			<div className="SubInformation">
                <div className="top">
                    <p >기호 1번 (늘픔)</p>    
                    <span className="I_CLOSE"> </span>
                </div>
                <div className="content">
                    <div className="profileArea">
                        <div className="profile">
                            <img className="photo" src="/image/james.png"></img>
                            <p className="name">홍길동</p>
                            <p className="departmentInfo">글로컬 IT 학과 16학번</p>
                        </div>
                        <div className="profile">
                            <img className="photo" src="/image/bongkoo.png"></img>
                            <p className="name">봉구</p>
                            <p className="departmentInfo">글로컬 IT 학과 16학번</p>
                        </div>
                    </div>
                   <div className="careerArea">
                       <div className="subtitle">경력</div>
                            <div className="career1">
                                <p className="career">IT융합 1대 학생회장</p>
                                <p className="career">청년다방 알바 경력 2년</p>
                                <p className="career">택배 상하차 경력 1년</p>
                                <p className="career">편의점 알바 경력 1개월</p>
                            </div>
                            <div className="career1">
                                <p className="career">IT융합 1대 부학생회장</p>
                            </div>
                    </div>
                   <div className="pledgeArea">
                       <div className="subtitle">공약</div>
                       <p className="pledge">1. 성공회대를 국회로</p>
                       <p className="pledge">2. 기말고사 폐지</p>
                       <p className="pledge">3. 중간고사 폐지</p>
                       <p className="pledge">4. 절대평가로 변경</p>
                       <p className="pledge">5. 야식사업 매일</p>
                </div>
				</div>	
            </div>
             
		);
	}
}

export default SubInformation;