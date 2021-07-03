import firebase from "firebase"

// eslint-disable-next-line
const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyARyJQGsAJJfAUHY8bfw7gwOAf3YamU_wM",
	authDomain: "messenger-clone-f7a2a.firebaseapp.com",
	projectId: "messenger-clone-f7a2a",
	storageBucket: "messenger-clone-f7a2a.appspot.com",
	messagingSenderId: "74617302660",
	appId: "1:74617302660:web:445d74cd682a398ff0dcd1",
	measurementId: "G-9BSPG95VXJ"
})

const db = firebase.firestore()

export default db