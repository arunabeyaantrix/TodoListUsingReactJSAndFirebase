import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyDjjxhZqCcjjIeLDRYxe9CcasrYW1r8Dbg",
	authDomain: "todolist-app-a20ab.firebaseapp.com",
	databaseURL: "https://todolist-app-a20ab.firebaseio.com",
	projectId: "todolist-app-a20ab",
	storageBucket: "todolist-app-a20ab.appspot.com",
	messagingSenderId: "150189079892",
	appId: "1:150189079892:web:587598b05152e8dd2f5cc1",
	measurementId: "G-RRQTLTX0NE"
});

const db = firebaseApp.firestore();
export default db;