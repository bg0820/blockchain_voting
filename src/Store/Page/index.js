import { observable, action } from 'mobx';

export default class Page {
	page = 'vote_list';
	// otp_auth, student_number_auth, vote_list
	@observable
	page = 'student_number_auth';
  
	@action setPage = (page) => {
	  this.page = page;
	}
}
