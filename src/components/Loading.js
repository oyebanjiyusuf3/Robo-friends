import React from 'react';
import ReactLoading from 'react-loading';

const Loading = ({ type, color }) => (
	
	<ReactLoading type={"bars"} color={"#ADD8E6"} height={100} width={100} className="loading-gif" />
);

export default Loading;