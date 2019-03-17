import React from 'react';
import useRequest from './hooks/useRequest';

const Post = (props) => {
	const [ response, loading, error ] = useRequest('https://jsonplaceholder.typicode.com/posts/1');

	if (loading) {
		return <div>loading...</div>;
	}

	if (error) {
		return <div>error...</div>;
	}

	if (!response) return null;

	const { title, body, id } = response.data;

	return (
		<div>
			<h1>{title}</h1>
			<p>{body}</p>
		</div>
	);
};

export default Post;
