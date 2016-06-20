import React, { PropTypes } from 'react';

const Prompt = (props) => {
	return (
		<form className="form-group" onSubmit={ props.onSubmit }>
			<input 
				className="form-input"
				type="text"
				placeholder="What are planning to do?"
				onChange={ props.onEntry }
			/>
			<button
				className="btn btn-submit"
				type="submit"
			>
			Add item
			</button>
		</form>
	)
};

Prompt.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	onEntry: PropTypes.func.isRequired,
}



export default Prompt;