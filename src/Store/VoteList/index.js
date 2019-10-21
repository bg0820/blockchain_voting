import { observable, action, computed} from 'mobx';

export default class VoteList {
	@observable 
	type = 'continue';
	@observable
	list = [];
	@observable
	endList = [];
	@observable 
	selectListIdx = 0;
	@observable 
	selectVoteIdx = 0;
  
	// continue, result
	@action setType = (type) => {
	  this.type = type;
	}

	@action setList = (list) => {
		this.list = list;
	}

	@action setEndList = (list) => {
		this.endList = list;
	}
	
	@action selectVote = (idx) => {
		this.selectListIdx = idx;
		if(this.type === 'continue') {
			this.selectVoteIdx = this.list[idx].voteIdx;
		} else {
			this.selectVoteIdx = this.endList[idx].voteIdx;
		}
	}
}
