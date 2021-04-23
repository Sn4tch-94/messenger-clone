import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import React, { useState, useEffect } from "react"
import './App.css';
import Message from "./Message";

function App() {
	const [input, setInput] = useState('')
	const [messages, setMessages] = useState([
		{username: 'Alexis', text: 'Bonjour !'},
		{username: 'Manon', text: 'Hey !'}
	])
	const [username, setUsername] = useState('')

	useEffect(() => {
		setUsername(prompt('Please enter your username'))
		return () => {
		
		}
	}, [])

	const sendMessage = (e) => {
		e.preventDefault()
		setMessages([...messages, {username: username, text: input}])
		setInput('')
	}

	return (
		<div className="App">
		<h1>Messenger clone 💪🏻</h1>
		<h2>Welcome {username}</h2>
		
		<FormControl>
			<InputLabel>Enter a message...</InputLabel>
			<Input value={input} onChange={e => setInput(e.target.value)}></Input>
			<Button disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>Send message</Button>
		</FormControl>

		{
			messages.map(message => (
			<Message message={message} username={username}/>
			// <p>{message}</p>
			))
		}

		</div>
	);
}

export default App;