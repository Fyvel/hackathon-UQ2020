import firebase from 'firebase/app'
import 'firebase/database'
import { firebaseConfig } from '../config/firebase.prod'

firebase.initializeApp(firebaseConfig)

const database = firebase.database()

export default function useFirebase() {
	return {
		database,
	}
}