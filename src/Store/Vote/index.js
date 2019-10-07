import { observable, action, computed} from 'mobx';

export default class Vote {
	@observable
	candidateGroups = [
		{
			title: '늘픔',
			candidate: [
				{
					name: '제임스',
					position: '정 학생회장',
					img: '',
				},
				{
					name: '봉구',
					position: '부 학생회장',
					img: '',
				}
			],
			select: false
		},
		{
			title: '늘픔',
			candidate: [
				{
					name: '제임스',
					position: '정 학생회장',
					img: '',
				},
				{
					name: '봉구',
					position: '부 학생회장',
					img: '',
				}
			],
			select: false
		}
	];
	@observable
	selectCandidate = -1;

	@action voting = (idx) => {
		this.candidateGroups = this.candidateGroups.map((item, i) => {
			return (i === idx ? {
				...item,
				select: (item.select === true ? false : true)
			} : {
				...item,
				select: false,
			})
		});

		if(this.candidateGroups[idx].select === true)
			this.selectCandidate = idx;
		else 
			this.selectCandidate = -1;
	}

}
