import logo from './logo.svg';
import './App.css';
import { createElement } from 'react';

const year = new Date();

const code = createElement('code', null, 'src/App.js');

export const App = () => {
	return createElement(
		'div',
		{ className: 'App' },
		createElement(
			'header',
			{ className: 'App-header' },
			createElement('img', {
				className: 'App-logo',
				src: `${logo}`,
				alt: 'logo',
			}),
			createElement('p', null, `Edit `, code, ` and save to reload.`),
			createElement(
				'a',
				{
					className: 'App-link',
					href: `https://reactjs.org`,
					target: '_blank',
					rel: 'noopener noreferrer',
				},
				'Learn React',
			),
			createElement('div', null, `На данный момент ${year.getFullYear()} год`),
		),
	);
};

// export const App = () => {
// 	const appToHTML = `<div class="App">
// 			<header class="App-header">
// 				<img src=${logo} class="App-logo" alt="logo" />
// 				<p>
// 					Edit <code>src/App.js</code> and save to reload.
// 				</p>
// 				<a
// 					class="App-link"
// 					href="https://reactjs.org"
// 					target="_blank"
// 					rel="noopener noreferrer"
// 				>
// 					Learn React
// 				</a>
// 				<div>На данный момент ${year.getFullYear()} год</div>
// 			</header>
// 		</div>
// 	`;

// 	return (document.body.innerHTML = appToHTML);
// };
