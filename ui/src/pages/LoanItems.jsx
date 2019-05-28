import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Box, Text, Image, Button, Grid } from "grommet";

import products from "../helpers/products.json";

import * as cookie from "../helpers/cookie.js";

class LoanItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }
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

  // componentDidMount() {
  // 	fetch("C:/repositories/DeptML-service/resources/products.csv")
  // 		.then(res => res.json())
  // 		.then(json => {
  // 			this.setState({
  // 				products: json
  // 			})
  // 		});
  // 	console.log(this.state.products)
  // }

  render() {
    return (
      <Box
        direction="column"
        align="center"
        justify="between"
        pad={{ horizontal: "medium", vertical: "small" }}
        gap="large"
        background="light-2"
        responsive={true}
      >
        {/* ItemCard */}
        {/* {products.map(product => (
					<Itemcard></Itemcard>
				))}

				<Text>Please click <Link to="/">here</Link> to select a user</Text> */}

        <Grid
          columns={{
            count: 3,
            size: "small"
          }}
          rows={{
            count: 3,
            size: "flex"
          }}
          gap="small"
        >
          {products.map(product => (
            <Itemcard />
          ))}
        </Grid>
      </Box>
    );
  }
}

const Itemcard = () => {
  return (
    <Box
      direction="column"
      align="start"
      justify="start"
      width="medium"
      pad={{ horizontal: "small", vertical: "small" }}
      background="dark-2"
      responsive={true}
    >
      <Box width="medium" height="small">
        <Image
          fit="cover"
          size="flex"
          src="https://assets.razerzone.com/eeimages/products/26727/razer-blade-hero-laptop-v3.png"
        />
      </Box>

      <Text size="flex">Item name</Text>
      <Text size="xsmall">Match rating</Text>
      <Button
        label="Click"
        size="flex"
        onClick={() => alert("Doesn't work yet")}
      />
    </Box>
  );
};

export default LoanItems;
