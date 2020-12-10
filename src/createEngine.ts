import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Layout from './layout';

export type EngineOptions = {
	doctype?: string;
};

export const renderToStaticMarkup = (component:React.ComponentType<any>, options:any) => {
	return ReactDOMServer.renderToStaticMarkup(
		React.createElement(component, options)
	);
};

export const createEngine = ({ doctype = '<!doctype html>' }: EngineOptions = {}) => {
	return (path: string, options: any, callback: (e: any, rendered: string) => void): void => {
		try {
			const component = require(path).default as React.ComponentType<any>; // This Response<any>.render implementation has a limitation in representing the type
			const markup = renderToStaticMarkup(Layout, {
				content: React.createElement(component, options)
			});
			return callback(null, doctype + markup);
		} catch (e) {
			return callback(e, '');
		}
	};
};
