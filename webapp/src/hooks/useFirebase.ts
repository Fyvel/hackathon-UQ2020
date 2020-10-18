import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import { firebaseConfig } from '../config/firebase.prod'

firebase.initializeApp(firebaseConfig)

const database = firebase.database()
const auth = firebase.auth()

export default function useFirebase() {
	return {
		database,
		auth
	}
}