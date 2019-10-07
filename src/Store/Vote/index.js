import { observable, action } from 'mobx';

export default class Vote {
	@observable 
	type = 'continue';
	@observable
	list = [{
		startDate: new Date(2019, 9 - 1, 3),
		endDate: new Date(2019, 9 - 1, 6),
		title: '성공회대학교 제 33대 총학생회 선거 어쩌구 저쩌구'
	},
	{
		startDate: new Date(2019, 9 - 1, 3),
		endDate: new Date(2019, 9 - 1, 6),
		title: '성공회대학교 IT융합자율학부 학생회장 선거'
	}];
	@observable 
	selectVoteIdx = 0;
  
	// continue, result
	@action setType = (type) => {
	  this.type = type;
	}

	@action setList = (list) => {
		this.list = list;
	}
	
	@action selectVote = (idx) => {
		this.selectVoteIdx = idx;
	}
}
