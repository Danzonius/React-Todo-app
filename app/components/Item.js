import React from 'react';

const Item = (props) => {
	return (
		<div>
			<ul className="item-list">
			{
				props.items.map(function(item, index) {
					return <li key={ index }  className="list-item">
						{ item }
						<button 
							className="btn"
							onClick={ props.onCompletion }
							value={ index }
						>
							Done!
						</button>
					</li>
				})
			}
			</ul>
			<p className="count">There are { props.items.length } items on your todo-list. </p>
			<ul className="item-list">
			{
				props.completed.map(function(item, index) {
					return <li key={ index }  className="list-item completed">
						{ item }
					</li>
				})
			}
			</ul>
			<p className="count">You have completed { props.completed.length } items of your todo-list. </p>
		</div>

	)
}

export default Item;