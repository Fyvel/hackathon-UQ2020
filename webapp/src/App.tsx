import React from 'react';
import AppContextProvider from './contexts/AppContext';
import { BrowserRouter } from 'react-router-dom';
import Routes from './router/routes';
import Layout from './containers/Layout';

export default function App() {
	const clients = {
		someClient: {},
		anotherClient: {},
	}

	return (
		<AppContextProvider clients={clients}>
			<BrowserRouter>
				<Layout>
					<Routes />
				</Layout>
			</BrowserRouter>
		</AppContextProvider>
	);
}
