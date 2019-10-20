import React, {PureComponent} from 'react';

import './index.scss';

function rect(props) {
    const {ctx, x, y, width, height} = props;
    ctx.fillRect(x, y, width, height);
}

class Chart extends PureComponent {

	constructor(props) {
		super(props);

	}

	componentDidMount() {
		this.canvasRender();	
	}

	canvasRender = () => {
		const canvas = this.refs.canvas;
		const ctx = canvas.getContext('2d');
		let centerX = canvas.width / 2;
		let centerY = canvas.height / 2;
		let min = centerX;
		if (centerX > centerY) {
			min = centerY * 0.5;
		}

		let innerWidth = 40;
		let innerHeight = 40;

		var percent = 90;
		var animation = 0;
		
		var inte = setInterval(function() {
			var angle = animation / 100 * 360;
			ctx.clearRect(0,0, canvas.width, canvas.height);

			ctx.beginPath();
			ctx.arc(50, centerY, min, 0, Math.PI * 2);
			ctx.strokeStyle = "#FBFDFF";
			ctx.lineWidth = 5;
			ctx.stroke();
			ctx.closePath();
	
			ctx.beginPath();
			ctx.arc(50, centerY, min, -90 * Math.PI/180, (angle - 90) * Math.PI/180);
			ctx.strokeStyle = "#17A6FF";
			ctx.lineWidth = 5;
			ctx.stroke();
			ctx.closePath();
	
			ctx.textBaseline = "middle";
			ctx.textAlign = "center";
			ctx.font = "18px arial bold";
			ctx.fillStyle = "#FBFDFF"
			ctx.fillText(animation + "%",  50, centerY);

			if(animation === percent) 
				clearInterval(inte);
			
			animation++;
		}, 5);
	}

	render() {
		
		return (
			<div className="Chart">
				<canvas ref="canvas" ></canvas>
			</div>
		)
	}
}

export default Chart;