import React from 'react';

import { Box, Text, Button, Image } from 'grommet';
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
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
            {product.MatchRating === undefined ? null :
                <Text size="xsmall">Match rating: {product.MatchRating}</Text>
            }
            <Link to={'products/' + product.Id}>
                <Button
                    label="View"
                    size="flex"
                />
            </Link>
        </Box>
    );
};

export default ProductCard