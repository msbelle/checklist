import React from 'react';
import './todoInput.css';
import firebase from 'firebase';

  // Initialize Firebase
(function () {
    // Initialize Firebase
    const config = {
    apiKey: "AIzaSyBCD52rbZrftv5yMjJ4jRz-Xqau6SrR1BY",
    authDomain: "webapp-314f5.firebaseapp.com",
    databaseURL: "https://webapp-314f5.firebaseio.com",
    projectId: "webapp-314f5",
    storageBucket: "webapp-314f5.appspot.com",
    messagingSenderId: "920221224369"
  };
    firebase.initializeApp(config)
}())
const dbRefObject = firebase.database().ref().child('post')
console.log(dbRefObject)
dbRefObject.on('value', snap => {
      let data = snap.val()
	  console.log(data)
  })

  function writeNewPost(text) {
  // A post entry.
  var postData = {
	comment: text
  };

  // Get a key for a new Post.
  var newPostKey = firebase.database().ref().child('posts').push().key;
  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  updates['/posts/' + newPostKey] = postData;
  alert("Already added in Firebase!!!!")
  return firebase.database().ref().update(updates);
}
export default class TodoInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: this.props.todoText};
    this.handleChange = this.handleChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  addTodo(todo) {

	// Ensure a todo was actually entered before submitting
    if (todo.length > 0) {
      this.props.addTodo(todo);
      this.setState({value: ''});
    }
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <button className="btn btn-primary" id="textField" onClick={() => writeNewPost(this.state.value)}>Submit</button>
      </div>
    );
  }
}

