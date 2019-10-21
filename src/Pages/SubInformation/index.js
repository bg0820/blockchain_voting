import React, {PureComponent} from 'react';
import { observer, inject } from 'mobx-react';


import james from '@assets/james.png';
import bongkoo from '@assets/bongkoo.png';
import MainTemplate from '@templates/MainTemplate';

import './index.scss'

@inject('page')
@inject('vote')
class SubInformation extends PureComponent {
	render() {
		const {vote} = this.props;
		
		let candidateGroup = vote.candidateGroups[vote.subSelect];
		console.log(JSON.parse(JSON.stringify(candidateGroup)));
		let name = '기호 ' + (vote.subSelect + 1) + '번 (' + candidateGroup.title +')';

		let candidate = candidateGroup.candidate;

		let commit = candidateGroup.commit.split('<br/>');
		let oneCareer = candidate[0].career.split('<br/>');
		let twoCareer = candidate[1].career.split('<br/>');

		let oneCareerArr = [];
		let twoCareerArr = [];
		let commitArr = [];

		oneCareerArr = oneCareer.map((item, i) => {
			return (<p key={i} className="career">{item}</p>)
		})

		twoCareerArr = twoCareer.map((item, i) => {
			return (<p key={i} className="career">{item}</p>)
		});

		commitArr = commit.map((item, i) => {
			return (<p key={i} className="pledge">{item}</p>)
		})

		//vote.candidateGroups[vote.subSelect]
		return (
			<div className="SubInformation">
				<MainTemplate isCloseBtn={true} subTitle={name}>

					<div className="box">
						<div className="profileArea">
							<div className="profile">
								<img className="photo" src={candidate[0].img}></img>
								<p className="name">{candidate[0].name}</p>
								<p className="departmentInfo">{candidate[0].departmentName}</p>
								<p className="yearNum">{candidate[0].id.substring(2, 4) + '학번'}</p>
							</div>
							<div className="profile">
								<img className="photo" src={candidate[1].img}></img>
								<p className="name">{candidate[1].name}</p>
								<p className="departmentInfo">{candidate[1].departmentName}</p>
								<p className="yearNum">{candidate[1].id.substring(2, 4) + '학번'}</p>
							</div>
						</div>
						<div className="careerArea">
							<div className="subtitle">경력</div>
							<div className="careerWrap">
								{oneCareerArr}
							</div>
							<div className="careerWrap">
								{twoCareerArr}
							</div>
						</div>
						<div className="pledgeArea">
							<div className="subtitle">공약</div>
							{commitArr}
						</div>
					</div>
				
				</MainTemplate>
			</div>
		);
	}
}

export default SubInformation;