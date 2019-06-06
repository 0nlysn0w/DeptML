import React, { Component } from 'react';
import { Link } from "react-router-dom";

import { Box, Text, Image, Button } from 'grommet';

import { mapProducts } from '../helpers'

class ItemDescription extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {}
        };

    }

    componentDidMount() {
        fetch("http://localhost:5000/products")
            .then(res => res.json())
            .then(json => {
                this.setState({
                    product: mapProducts(json).find(p => p.Id === this.props.match.params.id)
                })
            });
    }

    state = {}
    render() {
        return (
            <Box
                direction="row"
                align="center"
                alignContent="center"
                justify="center"
                width="large"
                pad={{ horizontal: "medium", vertical: "medium" }}
                background="dark-2"
            >
                <Box
                    direction="column"
                    align="start"
                    alignSelf="center"
                    justify="center"
                    gap="small"
                    pad={{ horizontal: "medium", vertical: "medium" }}
                    bacground="light-2"
                >
                    <Box>
                        <Image
                            fit="cover"
                            src={this.state.product.Image}
                        />
                    </Box>
                    <Text>{this.state.product.Brand}</Text>
                    <Text>Item Description:</Text>
                    <Text
                        size="small"
                    > Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</Text>
                    <Text>Price:&#8364; 999</Text>
                    <Button
                        label="Back"
                        onClick={() => alert('Doesn\'t work yet')}
                    />
                </Box>
            </Box>
        );
    }
}

export default ItemDescription;

// App.js en Navbar.js moeten uiteindelijk weer terug aangepast worden