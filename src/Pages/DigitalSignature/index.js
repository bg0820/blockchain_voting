import React, {PureComponent} from 'react';
import { observer, inject } from 'mobx-react';

import AuthTemplate from '@templates/Auth';
//import SendButton from '@components/SendButton';

import './index.scss'

@inject('page')
class DigitalSignature extends PureComponent {


	render() {
		return (
			<div className="DigitalSignature">
				<AuthTemplate btnValue="서명 완료" clickCallback={this.clickCallback}>
					<div className="infoMsg">
						<p className="mainTitle">전자 서명</p>
						<p className="subTitle">본인 필적 확인용 입니다.</p>
					</div>
                    <div className ="sign">
                        
                        </div>
				</AuthTemplate>
    
            </div>
             
		);
	}
}

export default DigitalSignature;