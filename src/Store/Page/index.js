import { observable, action } from 'mobx';

export default class Page {
	// otp_auth, student_number_auth, student_number_confrim_auth, vote_list
	@observable
	page = 'vote_list';
	prevPage = '';

	@observable
	studentNumber = '';
	@observable
	studentNumberConfirm = '';
	@observable
	phoneAuthNum = '';

  
	@action setPage = (page) => {
		this.prevPage = this.page;
		this.page = page;
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
