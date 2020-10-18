import React, { createContext, Dispatch, PropsWithChildren, useEffect, useState } from 'react'
import ServiceFactory, { Clients, Services } from '../services'

type AppContextDefinition = Services &
{ user: firebase.User | null } &
{
	robot: string | null,
	setRobot: Dispatch<React.SetStateAction<string | null>>
} | undefined
export const AppContext = createContext<AppContextDefinition>(undefined)

type Props = {
	clients: Clients,
}
export default function AppContextProvider({ clients, children }: PropsWithChildren<Props>) {
	const appServices = ServiceFactory({
		realtimeDatabaseClient: clients.realtimeDatabaseClient,
		authenticationClient: clients.authenticationClient,
		firestore: clients.firestore,
	})

	const [services] = useState(appServices)
	const [user, setUser] = useState<firebase.User | null>(null)
	const [robot, setRobot] = useState<string | null>(null)

	clients.authenticationClient.onAuthStateChanged(function (user) {
		if (user) {
			// User is signed in.
			const uid = user.uid
			setUser(user)
		} else {
			// User is signed out.
			setUser(null)
		}
	})

	useEffect(() => {
		if (!user?.uid) {
			robot && services.disconnectPi(robot)
			setRobot(null)
			return
		}
		clients.firestore
			.collection('robots')
			.where('uuid', '==', user?.uid)
			.get()
			.then(snapchot => {
				if (!snapchot.size) return
				snapchot.forEach(s => {
					const res = s.data()
					if (!res.name) return console.log(`🚧 We've spotted a robot without name`)
					setRobot(res.name)
				})
			})
	}, [user])

	return (
		<AppContext.Provider value={{ ...services, user, robot, setRobot }}>
			{children}
		</AppContext.Provider>
	)
}