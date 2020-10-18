import React, { createContext, PropsWithChildren, useState } from 'react'
import ServiceFactory, { Clients, Services } from '../services'

type AppContextDefinition = Services & { user: firebase.User | null } | undefined
export const AppContext = createContext<AppContextDefinition>(undefined)

type Props = {
	clients: Clients,
}
export default function AppContextProvider({ clients, children }: PropsWithChildren<Props>) {
	const appServices = ServiceFactory({
		realtimeDatabaseClient: clients.realtimeDatabaseClient,
		authenticationClient: clients.authenticationClient,
	})

	const [services] = useState(appServices)
	const [user, setUser] = useState<firebase.User | null>(null)

	clients.authenticationClient.onAuthStateChanged(function (user) {
		if (user) {
			// User is signed in.
			const isAnonymous = user.isAnonymous
			const uid = user.uid
			setUser(user)
			console.log('user', user)
			// ...
		} else {
			// User is signed out.
			setUser(null)
		}
	})

	return (
		<AppContext.Provider value={{ ...services, user }}>
			{children}
		</AppContext.Provider>
	)
}