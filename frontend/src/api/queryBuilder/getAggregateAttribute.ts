import { ApiV3Instance } from 'api';
import { ErrorResponseHandler } from 'api/ErrorResponseHandler';
import { AxiosError, AxiosResponse } from 'axios';
// ** Helpers
import { ErrorResponse, SuccessResponse } from 'types/api';
// ** Types
import { IGetAggregateAttributePayload } from 'types/api/queryBuilder/getAggregatorAttribute';
import { IQueryAutocompleteResponse } from 'types/api/queryBuilder/queryAutocompleteResponse';

export const getAggregateAttribute = async ({
	aggregateOperator,
	searchText,
	dataSource,
}: IGetAggregateAttributePayload): Promise<
	SuccessResponse<IQueryAutocompleteResponse> | ErrorResponse
> => {
	try {
		const response: AxiosResponse<{
			data: IQueryAutocompleteResponse;
		}> = await ApiV3Instance.get(
			`autocomplete/aggregate_attributes?aggregateOperator=${aggregateOperator}&dataSource=${dataSource}&searchText=${searchText}`,
		);

		return {
			statusCode: 200,
			error: null,
			message: response.statusText,
			payload: response.data.data,
		};
	} catch (e) {
		return ErrorResponseHandler(e as AxiosError);
	}
};
