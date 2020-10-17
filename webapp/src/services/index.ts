import firebase from 'firebase'
import Service from './service'

export type Clients = {
	realtimeDatabaseClient: firebase.database.Database,
}

export default function ServiceFactory(clients: Clients) {
	const dummyService = Service(clients)

	return {
		...dummyService,
	}
}

export type Services = ReturnType<typeof ServiceFactory>
