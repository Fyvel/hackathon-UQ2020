import React, { createContext, PropsWithChildren, useState } from 'react'
import ServiceFactory, { Clients, Services } from '../services'

export type AppContextDefinition = Services | undefined
export const AppContext = createContext<AppContextDefinition>(undefined)

type Props = {
	clients: Clients,
}
export default function AppContextProvider({ clients, children }: PropsWithChildren<Props>) {
	const appServices = ServiceFactory({
		someClient: clients.someClient,
		anotherClient: clients.anotherClient,
	})

	const [services] = useState(appServices)

	return (
		<AppContext.Provider value={services}>
			{children}
		</AppContext.Provider>
	)
}