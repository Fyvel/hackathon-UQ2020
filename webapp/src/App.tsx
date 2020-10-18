import React from 'react';
import AppContextProvider from './contexts/AppContext';
import { BrowserRouter } from 'react-router-dom';
import Routes from './router/routes';
import Layout from './containers/Layout';
import useFirebase from './hooks/useFirebase';

export default function App() {
	const clients = useFirebase()

	return (
		<AppContextProvider clients={{
			realtimeDatabaseClient: clients.database,
			authenticationClient: clients.auth
		}}>
			<BrowserRouter>
				<Layout>
					<Routes />
				</Layout>
			</BrowserRouter>
		</AppContextProvider>
	);
}
