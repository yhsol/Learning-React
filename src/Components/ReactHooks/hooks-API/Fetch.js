import React, { useState, useEffect } from 'react';
import axios from "axios";

function useFetch(url) {
	const [ payload, setPayload ] = useState(null);
	const [ loading, setLoading ] = useState(true);
	const [ error, setError ] = useState('');

	const callApi = async () => {
		try {
			const { data } = await axios.get(url);
			setPayload(data);
		} catch {
			setError("Error!")
		} finally {
			setLoading(false)
		}
	} 
	useEffect(() => {
		callApi();
	}, [])
	return {payload, loading, error};
}

const Fetch = () => {
	const {payload, loading, error} = useFetch("http://aws.random.cat/meow");
	return <div>{loading && <span>loading...</span>}{!loading && error && <span>{error}</span>}{!loading && payload && <img src={payload.file} width="260" />}</div>;
};

export default Fetch;
