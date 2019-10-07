import React, {PureComponent} from 'react';
import { observer, inject } from 'mobx-react';

import './index.scss';

@inject('page')
@observer
class MainTemplate extends PureComponent {


	handleBackPage = () => {
		const {page} = this.props;
		page.setPage(page.prevPage);
	}

	render() {
		let backBtn = null;
		if(this.props.isBackBtn) {
			backBtn = <span className="I_LEFT_ARROW" onClick={this.handleBackPage}></span>
		}
		let titleDiv = null;
		if(this.props.isTitle) {
			titleDiv = (
				<div className="voteTitle">
					<p>
                        성공회대학교 제 33대 총학생회 선거
					</p>
				</div>
			)
		}
		return (
			<div className="MainTemplate">
				<div className="NavBar">
					{backBtn}
					{titleDiv}
				</div>
				<div className="mainContent">
					{this.props.children}
				</div>
			</div>
		);
	}
}

export default MainTemplate;