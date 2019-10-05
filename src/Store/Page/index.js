import { observable, action } from 'mobx';

export default class Page {
	// otp_auth, student_number_auth, vote_list
	@observable
	page = 'voting';
  
	@action setPage = (page) => {
	  this.page = page;
	}
}
