import axios from 'axios';

import { GET_NEW_BAGS,GET_PRODUCTS,SHOW_ERROR_MESSAGE,START_LOADING, STOP_LOADING } from '../const/filterConstant';

export const getNewBags =
	(sortBy = 'desc', limit = 3) =>
	async dispatch => {
		try {
			dispatch({ type: START_LOADING });
			const response = await axios.get(
				`filter/?sortBy=${sortBy}&limit=${limit}`
			);
			dispatch({ type: STOP_LOADING });
			dispatch({
				type: GET_NEW_BAGS,
				payload: response.data.newBags,
			});
		} catch (err) {
			console.log('getNewProducts api error: ', err);
			dispatch({ type: STOP_LOADING });
			dispatch({
				type: SHOW_ERROR_MESSAGE,
				payload: err.response.data.errorMessage,
			});
		}
	};

export const getBagsByFilter = arg => async dispatch => {
	try {
		const response = await axios.post('filter/search', arg);

		dispatch({
			type: GET_PRODUCTS,
			payload: response.data.bags,
		});
	} catch (err) {
		console.log('getProductsByFilter api error: ', err);
		dispatch({ type: STOP_LOADING });
		dispatch({
			type: SHOW_ERROR_MESSAGE,
			payload: err.response.data.errorMessage,
		});
	}
};