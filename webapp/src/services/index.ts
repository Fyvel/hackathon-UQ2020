import DummyService from './dummy-service'

export type Clients = {
	someClient: any,
	anotherClient: any,
}

export default function ServiceFactory(clients: Clients) {
	const dummyService = DummyService(clients)

	return {
		...dummyService,
	}
}

export type Services = ReturnType<typeof ServiceFactory>
