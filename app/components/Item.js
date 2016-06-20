import React from 'react';

const Item = (props) => {
	return (
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
	)
}

export default Item;