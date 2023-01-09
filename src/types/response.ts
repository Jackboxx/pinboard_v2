export type ResponseOne<T> = {
	message: string;
	result: T;
};

export type ResponseMany<T> = {
	message: string;
	result: T[];
};
