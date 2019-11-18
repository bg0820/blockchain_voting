import React, {PureComponent} from 'react';

import './index.scss';

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

		canvas.width = canvas.offsetWidth;
		canvas.height = canvas.offsetHeight;

		let centerX = canvas.width / 2;
		let centerY = canvas.height / 2;
		let min = centerX;
		if (centerX > centerY) {
			min = centerY * 0.45;
		}

		let innerWidth = 40;
		let innerHeight = 40;

		var percent = this.props.percent;
		var animation = 0;
		
		let parent = this;

		if(this.props.percent === 0 || this.props.percent === undefined || this.props.percent === null) {
			percent = 0;
		}

		if(this.props.isChart) {

			var inte = setInterval(function() {
				ctx.clearRect(0,0, canvas.width, canvas.height);
	
				ctx.textBaseline = "middle";
				ctx.textAlign = "center";
				ctx.font = "18px arial bold";
				ctx.fillStyle = "#FBFDFF"
				ctx.fillText(parent.props.str,  centerX, 10);
	
				var angle = animation / 100.0 * 360.0;
	
				ctx.beginPath();
				ctx.arc(centerX, centerY + 10, 32, 0, Math.PI * 2);
				ctx.strokeStyle = "#FBFDFF";
				ctx.lineWidth = 10;
				ctx.stroke();
				ctx.closePath();
		
				ctx.beginPath();
				ctx.arc(centerX, centerY + 10, 32, -90 * Math.PI/180, (angle - 90) * Math.PI/180);
				ctx.strokeStyle = parent.props.color;
				ctx.lineWidth = 10;
				ctx.stroke();
				ctx.closePath();
		
				ctx.textBaseline = "middle";
				ctx.textAlign = "center";
				ctx.font = "14px arial bold";
				ctx.fillStyle = "#FBFDFF"
				ctx.fillText(animation + "%",  centerX, centerY + 10);
	
				if(animation === percent) 
					clearInterval(inte);
				
				animation++;
			}, 5);
		} else {
			ctx.clearRect(0,0, canvas.width, canvas.height);
	
			ctx.textBaseline = "middle";
			ctx.textAlign = "center";
			ctx.font = "18px arial bold";
			ctx.fillStyle = "#FBFDFF"
			ctx.fillText(this.props.str,  centerX, 10);

			ctx.textBaseline = "middle";
			ctx.textAlign = "ce                         nter";
			ctx.font = "14px arial bold";
			ctx.fillStyle = "#FBFDFF"
			ctx.fillText(percent + "명",  centerX, centerY + 10);
		}
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