import { Clients } from "."

export default function Service(clients: Clients) {
	const {
		realtimeDatabaseClient,
		authenticationClient,
		firestore,
	} = clients

	const updateState = async (robotName: string, direction: string) => {
		firestore.collection('robots')
			.doc(robotName)
			.set({ direction: direction }, { merge: true });
	}

	const signIn = async () => {
		authenticationClient.signInAnonymously()
	}

	const signOut = async () => {
		authenticationClient.signOut()
	}

	const disconnectPi = async (robot: string) => {
		return assignPi$(robot, '')
	}

	const connectPi = async (uuid: string) => {
		return firestore.collection('robots')
			.where('uuid', '==', '')
			.get()
			.then(snapshot => {
				if (!snapshot.size) {
					const message = '😱 Oh no! 🤖 All robots are busy at the moment'
					alert(message)
					return
				}
				const result = snapshot.docs.map(doc => {
					const res = doc.data()
					return res
				})[0]
				return assignPi$(result.name, uuid)
			})
	}

	const assignPi$ = async (robotName: string, userId: string) => {
		firestore.collection('robots')
			.doc(robotName)
			.set({ uuid: userId }, { merge: true });
		return robotName
	}

	return {
		updateState,
		signIn,
		signOut,
		connectPi,
		disconnectPi,
	}
}