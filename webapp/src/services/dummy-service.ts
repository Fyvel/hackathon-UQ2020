type DummyServiceClients = {
	someClient: any,
}

export default function DummyService(clients: DummyServiceClients) {
	const { someClient } = clients

	const fetchSomething = async () => {
		const result = await someClient.blah()
		return result
	}

	return {
		fetchSomething,
	}
}