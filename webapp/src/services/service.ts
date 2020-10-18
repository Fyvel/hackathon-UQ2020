import { Clients } from "."

export default function Service(clients: Clients) {
	const {
		realtimeDatabaseClient,
		authenticationClient,
		firestore,
	} = clients

	const updateState = async () => {
	}

	const signIn = async () => {
		authenticationClient.signInAnonymously()
	}

	const signOut = async () => {
		authenticationClient.signOut()
	}

	const connectToPi = async (uuid: string) => {
		console.log('uuid', uuid)
		const getAvalaiblePi$ = firestore.collection('robots')
			.where('uuid', '==', '')
			.get()
			.then(snapshot => {
				snapshot.forEach(doc => {
					const res = doc.data()
					if (!res) {
						alert('😱 Oh no! 🤖 All robots are busy at the moment')
						return
					}
					return res
				})
			})
		const assignToPi$ = async (robotId: string) => {
			firestore.collection('robots').doc(robotId).update({
				
			});
		}

		const result = await getAvalaiblePi$
		return result
	}

	return {
		updateState,
		signIn,
		signOut,
		connectToPi,
	}
}