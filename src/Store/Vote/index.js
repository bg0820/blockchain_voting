import { observable, action, computed} from 'mobx';

export default class Vote {
	@observable
	candidateGroups = [];
	@observable
	selectCandidate = -1;
	@observable
	vote = 0;


	@observable
	subSelect = 0;


	@action setSubSelect = (idx) => {
		this.subSelect = idx;
	}

	@action setVote = (vote) => {
		if(this.vote === vote) {
			this.vote = 0;
		} else {
			this.vote = vote;
		}
	}

	@action candidateGroupInit = (data) => {
		this.candidateGroups = data;
	}
	
	@action voting = (idx) => {
		this.candidateGroups = this.candidateGroups.map((item, i) => {
			return (i === idx ? {
				...item,
				select: (item.select === true ? false : true)
			} : {
				...item,
				select: false,
			})
		});

		if(this.candidateGroups[idx].select === true)
			this.selectCandidate = idx;
		else 
			this.selectCandidate = -1;
	}

}
