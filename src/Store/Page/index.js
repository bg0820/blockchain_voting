import { observable, action } from 'mobx';

export default class Page {
	// otp_auth, student_number_auth, vote_list
	@observable
	page = 'otp_auth';
  
	@action setPage = (page) => {
	  this.page = page;
	}
}
