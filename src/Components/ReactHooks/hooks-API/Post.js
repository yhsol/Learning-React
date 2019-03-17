import React from 'react';
import useRequest from './useRequest';

const Post = () => {
	const [ response, loading, error ] = useRequest('https://jsonplaceholder.typicode.com/posts/1');

	if (loading) {
		return <div>loading...</div>;
	}

	if (error) {
		return <div>error...</div>;
	}

	if (!response) return null;

	const { title, body } = response.data;

	return (
		<div>
			<h1>{title}</h1>
			<p>{body}</p>
		</div>
	);
};

export default Post;
