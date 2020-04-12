interface Rect {
	readonly id: string,
	color?: string,
	size: {
		width: number,
		height: number
	}
}

const rect1: Rect = {
	id: '1234',
	size: {
		width: 20,
		height: 20
	},
	color: '#ccc'
};

const rect2: Rect = {
	id: '12345',
	size: {
		width: 10,
		height: 10
	}
};

rect2.color = '#000';

const rect3 = {} as Rect;
const rect4 = <Rect>{};
console.log(1);