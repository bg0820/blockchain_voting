import React, {PureComponent} from 'react';
import { observer, inject } from 'mobx-react';

import VoteListTemplate from '@templates/VoteList';

import './index.scss'

@inject('page')
class VoteList extends PureComponent {
	render() {
		return (
			<div className="VoteList">
				<VoteListTemplate>

				</VoteListTemplate>
			</div>
		);
	}
}

export default VoteList;