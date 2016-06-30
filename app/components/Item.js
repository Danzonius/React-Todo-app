import React from 'react';

const Item = (props) => {
	return (
		<div className="item-container">
			<ul className="item-list item-list-completed">
			<h2>Completed</h2>
				{
					props.completed.map(function(item, index) {
						return <li key={ index }  className="list-item completed">
							{ item }
						</li>
					})
				}
			</ul>
			<ul className="item-list">
			<h2>To do's</h2>
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
		</div>

	)
}

export default Item;