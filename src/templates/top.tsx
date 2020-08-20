import React from "react";

type TopProps = {
	name: string;
};

const Top: React.FC<TopProps> = ({ name }) => (
	<div>
		<h1 className="deco-title"> Hello, {name} </h1>
		<p className="deco-text"> This is written in React </p>
	</div>
);

export default Top;
