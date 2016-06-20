import React from 'react';

export class Main extends React.Component {
	render() {
		return (
			<div className="container">
				<h1>React | Todo</h1>
				{ this.props.children }
			</div>
		)
	}
}

export default Main;