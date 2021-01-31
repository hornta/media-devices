import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { App } from './app.jsx';
import { MediaStreamProvider } from './media-stream-provider.jsx';
import { store } from './store.js';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<MediaStreamProvider>
				<App />
			</MediaStreamProvider>
		</Provider>
	</React.StrictMode>,
	document.querySelector('#root'),
);

if (import.meta.hot) {
	import.meta.hot.accept();
}
