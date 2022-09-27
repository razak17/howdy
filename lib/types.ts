export interface Post {
	_id: string;
	caption: string;
	video: {
		asset: {
			_id: string;
			url: string;
		};
	};
	postedBy: {
		_id: string;
		userName: string;
		image: string;
	};
	likes: {
		postedBy: {
			_id: string;
			userName: string;
			image: string;
		};
	}[];
	comments: {
		comment: string;
		_key: string;
		postedBy: {
			_ref: string;
		};
	}[];
	userId: string;
}

export interface IUser {
	_id: string;
	_type: string;
	userName: string;
	image: string;
}

export type PostDoc = {
	_type: string;
	caption: string;
	video: {
		_type: string;
		asset: {
			_type: string;
			_ref: string;
		};
	};
	userId: any;
	postedBy: {
		_type: string;
		_ref: any;
	};
	topic: String;
};
