import React from 'react';

import Prompt from '../components/Prompt';
import Item from '../components/Item';

export default class PromptContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    	item: '',
    	items: []
    }

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCompletion = this.handleCompletion.bind(this);
  }

  handleInput(e) {
  	this.setState({
  		item: e.target.value
  	});
  }

  handleSubmit(e) {
  	const itemList = this.state.items;
  	const tempItem = this.state.item;

    if (tempItem != "") {
      itemList.push(tempItem)
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

    itemList.splice(item, 1);
    this.setState({
      items: itemList
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
          onCompletion = { this.handleCompletion }
      	/>
        <p className="count">There are { this.state.items.length } items on your todo-list. </p>
      </div>
    );
  }
}
