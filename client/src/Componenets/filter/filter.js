import React, { useEffect } from 'react';
import Loader from '../spinneer';
import { getNewBags } from '../../JS/actions/filterAction';
import { getBagsByFilter } from '../../JS/actions/filterAction';
import { useDispatch, useSelector } from 'react-redux';

const Filter = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getNewBags());
	}, [dispatch]);

	useEffect(() => {
		dispatch(getBagsByFilter());
	}, [dispatch]);



	return (
		<section className='home-page'>
		
		</section>
	);
};

export default Filter;