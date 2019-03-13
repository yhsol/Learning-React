import React from 'react';
import styled from 'styled-components';

const SPageTemplate = styled.div`
	margin-top: 10px;
	margin-left: auto;
	margin-right: auto;
	width: 500px;
	background: white;
	padding-top: 5px;

	@media (max-width: 768px) {
		margin-top: 2px;
		width: calc(100% - 5px);
	}
`;

const SHeader = styled.div`
	text-align: center;
	font-size: 50px;
	font-weight: 300;
	margin: 0;
`;

const SContent = styled.div`margin-top: 5px;`;

const SContentTwo = styled.div`margin-top: 5px;`;

const PageTemplate = ({ children }) => {
	return (
		<SPageTemplate>
			<SHeader>Scheduler</SHeader>
			<SContent>{children}</SContent>
			{/* Input 과 List로 나뉠 수 있다면 따로 구성할 수 있는데 그걸 어떻게 할까. */}
			{/* 전달하는 prop을 from 과 children 으로 나눌 수 있다!! */}
		</SPageTemplate>
	);
};

export default PageTemplate;
