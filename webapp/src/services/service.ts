import { Clients } from "."

export default function Service(clients: Clients) {
	const {
		realtimeDatabaseClient,
		authenticationClient,
	} = clients

	const updateState = async () => {
		// const result = await s
		// return result
	}

	const signIn = async () => {
		authenticationClient.signInAnonymously()
	}

	const signOut = async () => {
		authenticationClient.signOut()
	}

	return {
		updateState,
		signIn,
		signOut,
	}
}