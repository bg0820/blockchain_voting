import { observable, action } from 'mobx';

export default class Page {
	// otp_auth, student_number_auth, student_number_confrim_auth, vote_list
	@observable
	page = 'votingComplete';
  
	@action setPage = (page) => {
	  this.page = page;
	}
}
