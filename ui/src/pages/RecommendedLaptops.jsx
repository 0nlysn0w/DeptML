import React, { Component } from 'react';

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
      <ProductGrid products={this.state.products} page="Recommended" />
    );
  }
}

export default RecommendedLaptops;