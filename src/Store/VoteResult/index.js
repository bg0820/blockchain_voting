import { observable, action, computed} from 'mobx';

export default class VoteResult {
	@observable
	report = {};
	@observable
	candidateGroups = [];

	@action init = () => {
		this.report = {};
	}

	@action candidateGroupInit = (data) => {
		this.candidateGroups = data;
	}
	
	@action reportInit = (report) => {
		this.report = report;
	}

}
