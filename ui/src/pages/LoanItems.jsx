import React, { Component } from 'react';
import { Link } from "react-router-dom";

import { Box, RadioButton, Text, Image, Form } from 'grommet';


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
			<Box
			direction="row"
			align="center"
			justify="between"
			pad={{ horizontal: "medium", vertical: "small" }}
			background="blue"
		>
			<Text>Please click <Link to="/">here</Link> to select a user</Text>
			
			

			<Box
			direction="row"
			align="center"
			justify="between"
			pad={{ horizontal: "medium", vertical: "small" }}
			background="light-2">

			<Image
			  fit="cover"
			  src="//v2.grommet.io/assets/Wilderpeople_Ricky.jpg"
			/>
			<Text>Item name</Text>

		  </Box>
		  </Box>

		)
	}
}

export default LoanItems;