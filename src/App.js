import React, {PureComponent} from 'react';

import Button from '@components/Button';

class App extends PureComponent {
	constructor() {
		super();
		
		this.state = {
			val: 0
		}

		console.log("1");
	}

	componentDidMount() {
		console.log("2");
	}

	plus = () => {
		this.setState({
			val: this.state.val + 1
		})
	}

	minus = () => {
		this.setState({
			val: this.state.val - 1
		})
	}



	render() {
		return (
			<div className="">
				<Button value="+" handleClick={this.plus}></Button>
				<Button value="-" handleClick={this.minus}></Button>
				
				<p>{this.state.val}</p>
			</div>
		)
	}

}


export default App;