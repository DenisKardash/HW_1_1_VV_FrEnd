import logo from './logo.svg';
import './App.css';

const year = new Date();

export const App = () => {
	const appToHTML = `<div class="App">
			<header class="App-header">
				<img src=${logo} class="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					class="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<div>На данный момент ${year.getFullYear()} год</div>
			</header>
		</div>
	`;

	return (document.body.innerHTML = appToHTML);
};
