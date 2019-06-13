import React from 'react';

import { Box, Grid } from 'grommet';

import * as cookie from '../helpers/cookie'

import ProductCard from './ProductCard'

class ProductGrid extends React.Component {
    render() {

        const loggedinUser = JSON.parse(cookie.getUser())
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
                {loggedinUser['Id'] === undefined ? "please go back and select your function" :
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
                        {this.props.products.map(product => (
                            <ProductCard product={product} />
                        ))}
                    </Grid>
                }
            </Box>

        )
    }
}

export default ProductGrid