import React,{useState} from 'react';
import {List,ListItem,ListItemText,Avatar,ListItemAvatar,Button, Modal, Input} from '@material-ui/core';
import ImageIcon from '@material-ui/icons/Image';
import './Todo.css';
import db from "./firebase";
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import CreateIcon from '@material-ui/icons/Create';
import { blue,red } from '@material-ui/core/colors';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles((theme) => ({
	paper: {
		position: 'absolute',
		width: 400,
		backgroundColor: theme.palette.background.paper,
		border: '2px solid #000',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
	},
}));
function Todo(props){
	const classes = useStyles();
	const [open,setOpen] = useState(false);
	const [input,setInput] = useState('');
	const updateTodo = () => {
		db.collection('todos').doc(props.todo.id).set({
			todo : input
		}, {merge : true})
		setOpen(false);
	} 

	return(
		<>
		<Modal
			open={open}
			onClose={e => setOpen(false)}
		>
		<div className={classes.paper} style={{padding:"30"}}>
			<h1 style={{fontSize:"20",fontFamily: "Roboto",fontWeight: "400", color:"Blue"}}>Edit Comment</h1>
			<Input placeholder={props.todo.todo} value={input} onChange={event => setInput(event.target.value)}/>
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<SendIcon onClick={updateTodo}/>
		</div>
		</Modal>
		<List style={{textAlign: "center", margin:"auto"}}>
			<ListItem>
				<ListItemAvatar>
					<Avatar>
						<ChatBubbleOutlineIcon />
					</Avatar>
				</ListItemAvatar>
				<ListItemText primary= {props.todo.todo} secondary="Author : Undefined"/>
			</ListItem>
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<CreateIcon style={{ color: blue[500] }} onClick={e =>setOpen(true)} style={{position:"absolute", top:"70"}} />
			<DeleteIcon style={{ color: red[500] }} onClick={event => db.collection('todos').doc(props.todo.id).delete()} style={{position:"absolute", top:"30"}}/> 
		</List>
		</>
	)
}
export default Todo;