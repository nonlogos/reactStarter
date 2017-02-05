import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class HomeComponent extends Component {
	componentDidMount() {
		console.log('props', this.props)
		this.props.exampleAction();

	}

	render() {
		console.log('prop in jsx', this.props.example)
		return (
			<div>
				<h3>home</h3>
				{this.props.example.map( (str, i) => {
					return <p key={i}>{str}</p>
				})}
			</div>
		)

	} 

}

function mapStateToProps(state) {
	console.log('state', state)
	return { example: state.example }
}

export default connect(mapStateToProps, actions)(HomeComponent);