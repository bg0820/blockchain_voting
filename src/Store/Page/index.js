import { observable, action } from 'mobx';

export default class Page {
	@observable 
	page = 'otp_auth';
  
	@action setPage = (page) => {
	  this.page = page;
	}
}
