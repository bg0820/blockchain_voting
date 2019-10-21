import { observable, action } from 'mobx';

export default class Page {
	// otp_auth, student_number_auth, student_number_confrim_auth, vote_list, voting
	@observable
	isView = false;
	@observable
	title = '';
	@observable
	desc = '';
	// default: ok - ok, dialog
	@observable
	type = 'ok';

	// calbackFunc('ok | cancel');
	callbackFunc = null;

	@action show = (title, desc, type, callbackFunc) => {
		this.isView = true;
		this.title = title;
		this.desc = desc;
		this.type = type;
		this.callbackFunc = callbackFunc;
	}

	@action done = () => {
		this.isView = false;
	}

}
