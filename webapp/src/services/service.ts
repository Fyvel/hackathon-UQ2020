import { Clients } from "."

export default function Service(clients: Clients) {
	const { realtimeDatabaseClient } = clients

	const updateState = async () => {
		// const result = await s
		// return result
	}

	return {
		updateState,
	}
}