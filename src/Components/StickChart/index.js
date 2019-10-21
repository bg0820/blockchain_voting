import React, {PureComponent} from 'react';

import './index.scss';


class StickChart extends PureComponent {

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

		let paddingLeft = 10;

		let line = 10;
		let lineStroke = (canvas.height - line) / 2.0;

		var percent = this.props.percent;
		var animation = 0;
		let parent = this;

		var inte = setInterval(function() {
			let max = canvas.width - 50.0;
			let widthMapp = (100.0 - (100.0 - animation)) / 100.0;
			let width = ((max * widthMapp) * 2);

			if(width > max) 
				width = max;

			ctx.clearRect(0,0, canvas.width, canvas.height);
			ctx.beginPath();

			ctx.shadowColor= 'rgba(0, 0, 0, 0.16)';
			ctx.shadowOffsetX = 0;
			ctx.shadowOffsetY = 3;
			ctx.shadowBlur = 6;

			ctx.fillStyle = parent.props.color;

			if(percent > paddingLeft) {
				ctx.fillRect(paddingLeft, lineStroke, width - paddingLeft, canvas.height -(lineStroke * 2));
			} else {
				ctx.fillRect(paddingLeft, lineStroke, width, canvas.height - (lineStroke * 2));
			}
			
			ctx.stroke();
			ctx.closePath();

			if(percent > paddingLeft) {
				ctx.moveTo(width + 10, centerY);
				ctx.lineTo(width+ 15, centerY);
			} else {
				ctx.moveTo(width + (10 + paddingLeft), centerY);
				ctx.lineTo(width+ (15 + paddingLeft), centerY);
			}
				
			

			
			ctx.strokeStyle =  parent.props.color;
			ctx.stroke();

			ctx.textBaseline = "middle";
			ctx.textAlign = "center";
			ctx.font = "14px arial bold";
			ctx.fillStyle = parent.props.color;

			if(percent > paddingLeft) {
				ctx.fillText(animation + "%",  width + 35, centerY + 2);
			} else {
				ctx.fillText(animation + "%",  width + (35 + paddingLeft), centerY + 2);
			}

			

			if(animation === percent) 
					clearInterval(inte);
				
			animation++;
		}, 10);
		
	}

	render() {
		
		return (
			<div className="StickChart">
				<canvas ref="canvas" ></canvas>
			</div>
		)
	}
}

export default StickChart;