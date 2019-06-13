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
      loggedinUser: JSON.parse(cookie.getUser())
    };

  }

  componentDidMount() {
    if (this.state.loggedinUser['Id'] !== undefined) {
      fetch("http://localhost:5000/recommendations/" + this.state.loggedinUser['Id'])
        .then(res => res.json())
        .then(json => {
          this.setState({
            products: mapProducts(json)
          })
        })
    }
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
        {this.state.loggedinUser['Id'] === undefined? "please go back and select your function" :
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
        }
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
        />
      </Link>
    </Box>
  );
};

export default LoanItems;
