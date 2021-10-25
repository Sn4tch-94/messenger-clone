import {  FormControl, Input, IconButton } from "@material-ui/core";
import React, { useState, useEffect } from "react"
import './App.css'
import Message from "./Message"
import db from "./firebase"
import firebase from "firebase"
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';

function App() {
	const [input, setInput] = useState('')
	const [messages, setMessages] = useState([])
	const [username, setUsername] = useState('')

	useEffect(() => {
		setUsername(prompt('Please enter your username'))
	}, [])

	useEffect(() => {
		db.collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
			setMessages(snapshot.docs.map(doc => ({
				id: doc.id, 
				message: doc.data()
			})))
		})
	}, [])

	const sendMessage = (e) => {
		e.preventDefault()
		db.collection('messages').add({
			message: input,
			username: username,
			timestamp: firebase.firestore.FieldValue.serverTimestamp()
		})
		setInput('')
	}

	return (
		<div className="App">
			<img alt="Messenger" src="https://scontent-cdg2-1.xx.fbcdn.net/v/t39.8562-6/120009688_325579128711709_1736249742330805861_n.png?_nc_cat=1&ccb=1-5&_nc_sid=6825c5&_nc_ohc=9OeoC8KLX6UAX9U7530&_nc_ht=scontent-cdg2-1.xx&oh=6872437df21acbbbd215fb8c5c429e3d&oe=617C713D"/>
			<h1>Messenger clone 💪🏻</h1>
			<h2>Welcome {username}</h2>
			
			<FlipMove>
				{messages.map(({id, message}) => (
					<Message key={id} message={message} username={username}/>
				))}
			</FlipMove>

			<form className="app__form">
				<FormControl className="app__formControl" >
					<Input className="app__input" placeholder="Enter a message..." value={input} onChange={e => setInput(e.target.value)}></Input>
					<IconButton className="app__iconButton" disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>
						<SendIcon/>
					</IconButton>
				</FormControl>
			</form>

		</div>
	);
}

export default App;