import React, { Component } from 'react';

import { Box, Text, Image, Button, Grid } from 'grommet';
import { Link } from "react-router-dom";

import { mapProducts } from '../helpers';
import * as cookie from '../helpers/cookie.js'
import ProductGrid from '../components/ProductGrid'

class RecommendedLaptops extends Component {
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
      <ProductGrid products={this.state.products} />
    );
  }
}

export default RecommendedLaptops;