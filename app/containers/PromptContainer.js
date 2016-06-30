import React from 'react';

import Firebase from 'firebase';
import config from '../config/firebase';

Firebase.initializeApp(config);
var db = [];
Firebase.database().ref('todos/').on("child_added", function(snapshot) {
  db.push(snapshot.val());
});

import Prompt from '../components/Prompt';
import Item from '../components/Item';

export default class PromptContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    	item: '',
    	items: db,
      completed: []
    }

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCompletion = this.handleCompletion.bind(this);
    // this.componentWillMount = this.componentWillMount.bind(this);
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
        <nav className="navigation-bar">
          <h1>React | <strong>Todo</strong></h1>
          <Prompt 
            onEntry = { this.handleInput }
            onSubmit = { this.handleSubmit }
          />
        </nav>
      	<Item
      		items = { this.state.items }
          completed = { this.state.completed }
          onCompletion = { this.handleCompletion }
      	/>
      </div>
    );
  }
}
