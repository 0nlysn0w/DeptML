import React, { Component } from 'react';
import { Link } from "react-router-dom";

import { Box, Text, Image, Button } from 'grommet';

class ItemDescription extends Component {
    state = {  }
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
                    pad={{horizontal:"medium", vertical: "medium"}}
                    bacground="light-2"
                >
                    <Box>
                        <Image
                        fit="cover"
                        src="https://assets.razerzone.com/eeimages/products/26727/razer-blade-hero-laptop-v3.png"
                        />
                    </Box>
                    <Text>Item Name</Text>
                    <Text>Item Description:</Text>
                    <Text
                        size="small"
                    > Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</Text>
                    <Text>Price:&#8364; 999</Text>
                    <Button
					label="Back"
					onClick={()=>alert('Doesn\'t work yet')}
				    />
                </Box>
            </Box>
        );
    }
}
 
export default ItemDescription;

// App.js en Navbar.js moeten uiteindelijk weer terug aangepast worden