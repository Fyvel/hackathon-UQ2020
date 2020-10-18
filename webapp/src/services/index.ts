import firebase from 'firebase'
import Service from './service'

export type Clients = {
	realtimeDatabaseClient: firebase.database.Database,
	authenticationClient: firebase.auth.Auth,
	firestore: firebase.firestore.Firestore,
}

export default function ServiceFactory(clients: Clients) {
	const service = Service(clients)

	return {
		...service,
	}
}

export type Services = ReturnType<typeof ServiceFactory>
