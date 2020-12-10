import React from "react";

type Content = {
	content: React.DOMElement<React.HTMLAttributes<Element>, Element>
};

const Layout: React.FC<Content> = ({ content }) => (
	<html>
		<head>
			<title> In Development! </title>
			<meta charSet="utf-8"/>
			<link rel="stylesheet" href="static/global.css"/>
		</head>
		<body>
			<div id="content">
				{content}
			</div>
		</body>
	</html>
);

export default Layout;
