import React from 'react';

import Firebase from 'firebase';
// Initialize Firebase
var config = {
  apiKey: "AIzaSyBfIJg8qA1vDp4uy_3Ox_Qh0X4TBborsN0",
  authDomain: "my-first-project-284fb.firebaseapp.com",
  databaseURL: "https://my-first-project-284fb.firebaseio.com",
  storageBucket: "my-first-project-284fb.appspot.com",
};
Firebase.initializeApp(config);

import Prompt from '../components/Prompt';
import Item from '../components/Item';

export default class PromptContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    	item: '',
    	items: [],
      completed: []
    }

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCompletion = this.handleCompletion.bind(this);
    this.componentWillMount = this.componentWillMount.bind(this);
  }

  componentWillMount() {
    var itemList = [];
    Firebase.database().ref('todos/').on("child_added", function(snapshot) {
      itemList.push(snapshot.val());
      console.log(snapshot.val());
    });
    this.setState({
      items: itemList
    });
  }

  handleInput(e) {
  	this.setState({
  		item: e.target.value
  	});
  }

  handleSubmit(e) {
  	const tempItem = this.state.item;
    const itemList = this.state.items;

    if (tempItem != "") {
      Firebase.database().ref('todos/').push(tempItem);
      this.setState({
        items: itemList
      })
    } else {
      alert('Your entry cannot be empty, please fill in something!');
    }
  }

  handleCompletion(e) {
    const item = e.target.value
    const itemList = this.state.items;
    const completedList = this.state.completed;

    completedList.push(itemList[item]);
    itemList.splice(item, 1);

    this.setState({
      items: itemList,
      completed: completedList
    });
  }

  render() {
    return (
      <div>
      	<Prompt 
      		onEntry = { this.handleInput }
      		onSubmit = { this.handleSubmit }
      	/>
      	<Item
      		items = { this.state.items }
          completed = { this.state.completed }
          onCompletion = { this.handleCompletion }
      	/>
      </div>
    );
  }
}
