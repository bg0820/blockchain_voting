import { observable, action } from 'mobx';

export default class Vote {
	@observable 
	type = 'continue';
  
	// continue, result
	@action setType = (type) => {
	  this.type = type;
	}
}
