import { IQueryBuilderState } from 'constants/queryBuilder';

export interface InitialStateI {
	search: string;
}

export interface ContextValueI {
	values: InitialStateI;
	onChangeHandler: (type: IQueryBuilderState) => (value: string) => void;
	onSubmitHandler: VoidFunction;
}

export type Option = {
	value: string;
	selected?: boolean;
};
