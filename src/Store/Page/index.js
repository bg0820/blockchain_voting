
import { observable, action } from 'mobx';

export default class Page {
	// otp_auth, student_number_auth, student_number_confrim_auth, vote_list, voting,
	// phone_auth, phone_number_auth
	@observable
	page = 'otp_auth';
	@observable
	prevPage = '';

	page_log = [];
	

	@observable
	studentNumber = '';
	@observable
	studentNumberConfirm = '';
	@observable
	phoneAuthNum = '';
	@observable
	phoneNumber = '';

	@action setPhoneNumber = (phoneNumber) => {
		this.phoneNumber = phoneNumber;
	}

  
	@action setPage = (page) => {
		//console.log('setPage', this.prevPage, this.page);
		this.page = page;
		
		this.page_log.push(page);
	}

	@action pageMove = (page) => {
		//console.log('setPage', this.prevPage, this.page);
		this.prevPage = this.page;
		this.page = page;

		this.page_log.push(page);
	}

	

	@action setStudentNumber = (studentNumber) => {
		this.studentNumber = studentNumber;
	}

	@action setStudentNumberConfirm = (studentNumberConfirm) => {
		this.studentNumberConfirm = studentNumberConfirm;
	}

	@action setPhoneAuthNum = (phoneAuthNum) => {
		this.phoneAuthNum = phoneAuthNum;
	}
}
