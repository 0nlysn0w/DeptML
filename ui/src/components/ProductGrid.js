import React from 'react';

import { Box, Grid } from 'grommet';

import * as cookie from '../helpers/cookie'

import ProductCard from './ProductCard'

class ProductGrid extends React.Component {
    constructor(props) {
        super(props)
        this.message = null
        this.loggedinUser = JSON.parse(cookie.getUser())['Id']
        this.props.page === 'All' ? this.message = 'Loading' : 
        this.props.page === 'Recommended' && this.loggedinUser === undefined ? this.message = 'Please go back and select your function' : 
        this.props.page === 'Recommended' && this.loggedinUser !== undefined ? this.message = 'Loading' : 
        this.message = String.fromCharCode(160)
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
                {this.props.products.length === 0 ? <div>{this.message}</div> :
                    <Grid
                        columns={{
                            count: 3,
                            size: "small"
                        }}
                        gap="small"
                    >
                        {this.props.products.map(product => (
                            <ProductCard product={product} key={product.Id} />
                        ))}
                    </Grid>
                }
            </Box>
        )
    }
}

export default ProductGrid