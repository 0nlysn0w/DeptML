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
			direction="column"
			align="start"
			justify="between"
			pad={{ horizontal: "medium", vertical: "small" }}
			background="dark-4"
		>
			<Box
			direction="column"
			align="start"
			justify="between"
			width="medium"
			pad={{ horizontal: "medium", vertical: "small" }}
			background="light-2">
			<Box
				width="medium"
				height="medium"
			>
			<Image
			  fit="contain"
			  src="//v2.grommet.io/assets/Wilderpeople_Ricky.jpg"
			/>
			</Box>
			<Text>Item name</Text>

		  </Box>
			
				<Text>Please click <Link to="/">here</Link> to select a user</Text>
			
			


		  </Box>

		)
	}
}

export default LoanItems;