import React, { Component } from 'react';

import { Box, Text, Image } from 'grommet';

import { mapProducts } from '../helpers'

class ItemDescription extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: ''
        };
    }

    componentDidMount() {
        let url = "http://localhost:5000/products/" + this.props.match.params.id
        fetch(url)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    product: mapProducts(json)[0]
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
                pad={{ horizontal: "xsmall", vertical: "xsmall" }}
                background="dark-2"
                basis="xsmall"
                gap="small"
            >
                <Box
                    fit="contain"
                    direction="column"
                    align="start"
                    alignSelf="center"
                    justify="center"
                    gap="small"
                    pad={{ horizontal: "xsmall", vertical: "xsmall" }}
                    bacground="light-2"
                >
                    <Box
                        width="large"
                        height="650px"
                        gap="small"
                    >
                        <Image
                            fit="contain"
                            pad={{horizontal:"small", vertical:"small"}}
                            src={this.state.product.Image}
                        />
                    </Box>
                    <Text>{this.state.product.Brand}: CPU {this.state.product.CPUrating}/5 - GPU {this.state.product.GPUrating}/5 - RAM {this.state.product.RAM}GB</Text>
                    <Text>Laptop description:</Text>
                    <Text
                        size="small"
                    > Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</Text>
                </Box>
            </Box>
        );
    }
}

export default ItemDescription;

// App.js en Navbar.js moeten uiteindelijk weer terug aangepast worden