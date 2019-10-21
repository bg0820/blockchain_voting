import React, {PureComponent} from 'react';
import { observer, inject } from 'mobx-react';

import AuthTemplate from '@templates/AuthTemplate';
//import SendButton from '@components/SendButton';

import './index.scss'

@inject('page')
class DigitalSignature extends PureComponent {

	clickCallback = (e) => {
		const {page} = this.props;
		//if()d
		page.pageMove('vote_list');
	}
	render() {
		return (
			<div className="DigitalSignature">
				<AuthTemplate btnValue="서명 완료" clickCallback={this.clickCallback}>
					<div className="infoMsg">
						<p className="mainTitle">전자 서명</p>
						<p className="subTitle">본인 필적 확인용 입니다.</p>
					</div>
                    <div className ="sign">
                        <p className="infoMsg">서명해 주세요.</p>
                    </div>
				</AuthTemplate>
    
            </div>
             
		);
	}
}

export default DigitalSignature;