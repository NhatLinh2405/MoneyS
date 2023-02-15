export interface LottieAnimationData {
	v: string;
	fr: number;
	ip: number;
	op: number;
	w: number;
	h: number;
	nm: string;
	ddd: number;
	assets: any[];
	layers: any[];
}

export interface IDetail {
	id: number;
	name: string;
	total: number;
}

export interface IDays {
	id: number;
	day: number;
	total: number;
	detail: IDetail[];
}

export interface IData {
	id: number;
	name: string;
	slug: string;
	total: number;
	days: IDays[];
}
