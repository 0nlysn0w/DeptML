import React, { Component } from 'react';

import { Box, Text, Image, Button, Grid } from 'grommet';
import { Link } from "react-router-dom";

import { mapProducts } from '../helpers';
import * as cookie from '../helpers/cookie.js'

class LoanItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      username: JSON.parse(cookie.getUser())
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

  componentDidMount() {
    fetch("http://localhost:5000/recommendations/3")
      .then(res => res.json())
      .then(json => {
        this.setState({
          products: mapProducts(json)
        })
      })
  }

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
        {/* {this.state.username === false ? "please go back and select your function" : */}
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
            {this.state.products.map(product => (
              <Itemcard product={product} />
            ))}
          </Grid>
        {/* } */}
      </Box>
    );
  }
}

const Itemcard = ({ product }) => {
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
          src={product.Image}
        />
      </Box>

      <Text size="flex">{product.Brand}</Text>
      <Text size="xsmall">Match rating: {product.MatchRating}</Text>
      <Link to={'loanitems/' + product.Id}>
        <Button
          label="Click"
          size="flex"
        // onClick={() => alert("Doesn't work yet")}
        />
      </Link>
    </Box>
  );
};

export default LoanItems;
