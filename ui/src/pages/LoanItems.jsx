import React, { Component } from 'react';
import { Link } from "react-router-dom";

import { Box, Text, Image, Button } from 'grommet';


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

	// function ActionLink(){
	// 	function handleClick(e){
	// 		e.preventDefault();
	// 		console.log('The link is clickable.');
	// 	}
	// }


	render() {
		return (
			<Box
			direction="row"
			align="start"
			justify="between"
			pad={{ horizontal: "medium", vertical: "small" }}
			gap="small"
			background="light-2"
		>
			{/* ItemCard */}
			<Box
			direction="column"
			align="start"
			justify="start"
			width="medium"
			pad={{ horizontal: "small", vertical: "small" }}
			background="dark-2">
				<Box
					width="medium"
					height="small"
				>
					<Image
					fit="cover"
					src="https://assets.razerzone.com/eeimages/products/26727/razer-blade-hero-laptop-v3.png"
					/>
				</Box>

				<Text>Item name</Text>
				<Text
					size="small"
				>
					Match rating
				</Text>
				<Button
					label="Click"
					onClick={()=>alert('Doesn\'t work yet')}
				/>
			</Box>
				<Text>Please click <Link to="/">here</Link> to select a user</Text>
		  </Box>

		)
	}
}

export default LoanItems;