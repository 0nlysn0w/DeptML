import React, { Component } from 'react';
import { Link } from "react-router-dom";

import { Box, RadioButton, Text } from 'grommet';

import * as cookie from '../helpers/cookie.js';

class LoanItems extends Component {
	// constructor(props) {
	// 	super(props)
	// 	this.state = {
	// 		username: JSON.parse(cookie.get('username'))
	// 	}

	// 	// username = JSON.parse(cookie.get('username'));

	// 	cookie.set('username', '[]')
	// }


	render() {
		return (
			<Text>Please click <Link to="/">here</Link> to select a user</Text>

		)
	}
}

export default LoanItems;