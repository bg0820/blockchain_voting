import React, {PureComponent} from 'react';

import { observer, inject } from 'mobx-react';

import Button from '@components/Button';

import './index.scss';

@inject('modal')
@observer
class ModalTemplate extends PureComponent {

	handleCancel = (e) => {
		const {modal} = this.props;
		modal.done();
		modal.callbackFunc('cancel');

	}

	
	handleOk = (e) => {
		const {modal} = this.props;
		modal.done();
		modal.callbackFunc('ok');
	}


	render() {
		const {modal} = this.props;
		let btnDiv = null;
		if(modal.type === 'ok') {
			btnDiv = (
				<Button value="확인" style='thin ok' clickCallback={this.handleOk}></Button>
			);
		} else if(modal.type === 'dialog') {
			btnDiv = (
				<React.Fragment>
					<Button value="취소" style='thin cancel' clickCallback={this.handleCancel}></Button>
					<Button value="확인" style='thin ok' clickCallback={this.handleOk}></Button>
				</React.Fragment>
			);
		}
		return (
			<div className="ModalTemplate">
				<div className="Modal">
					<div className="modalContent">
						<p className="modalTitle">{modal.title}</p>
						<p className="modalDesc">{modal.desc}</p>
					</div>

					<div className="modalButtonArea">
						<div className="bottomRight">
							{btnDiv}
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default ModalTemplate;