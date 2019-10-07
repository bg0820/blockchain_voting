import React, {PureComponent} from 'react';
import { observer, inject } from 'mobx-react';

import ModalTemplate from '@templates/ModalTemplate';
import './index.scss';

@inject('page')
@inject('modal')
@observer
class MainTemplate extends PureComponent {


	handleBackPage = () => {
		const {page} = this.props;
		page.pageMove(page.prevPage);
	}

	handleClose = () => {
		const {page} = this.props;
		page.setPage('vote');
	}

	render() {
		let backBtn = null;
		if(this.props.isBackBtn) {
			backBtn = <span className="I_LEFT_ARROW" onClick={this.handleBackPage}></span>
		}
		let titleDiv = null;
		if(this.props.title) {
			titleDiv = (
				<div className="title main">
					<p>
                        {this.props.title}
					</p>
				</div>
			)
		}

		let subTitleDiv = null;
		if(this.props.subTitle) {
			subTitleDiv = (
				<div className="title sub">
					<p>
						{this.props.subTitle}
					</p>
				</div>
			)
		}
		let closeBtn = null;
		if(this.props.isCloseBtn) {
			closeBtn = <span className="I_CLOSE" onClick={this.handleClose}></span>
		}

		let modalDiv = null;
		if(this.props.modal.isView) {
			modalDiv = (<ModalTemplate></ModalTemplate>);
		}
		return (
			<div className="MainTemplate">
				{modalDiv}
				<div className="NavBar">
					{subTitleDiv}
					{backBtn}
					{titleDiv}
					{closeBtn}
				</div>
				<div className="mainContent">
					{this.props.children}
				</div>
			</div>
		);
	}
}

export default MainTemplate;