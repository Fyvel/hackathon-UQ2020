import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import NesController from '../components/NesController'

export const URI = {
	base: '/',
	home: '/home',
	settings: '/settings',
}

export default function Routes() {

	return (
		<Switch>
			<Route exact path={URI.home}>
				<NesController />
			</Route>
			<Redirect exact path={URI.base} to={URI.home} />
		</Switch>
	)
}