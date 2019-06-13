import React from 'react';

import { Link } from "react-router-dom";

import {
    Box,
    Button,
    Text
} from 'grommet';

export const Sidebar = () => {
    return (
        <Box
            gridArea="sidebar"
            background="dark-3"
            width="small"
        >
            <Button as={Link} to="/" hoverIndicator>
                <Box pad={{ horizontal: "medium", vertical: "small" }}>
                    <Text>User selection</Text>
                </Box>
            </Button>

            <Button as={Link} to="/loanitems" hoverIndicator>
                <Box pad={{ horizontal: "medium", vertical: "small" }}>
                    <Text>Recommended items</Text>
                </Box>
            </Button>

        </Box>
    );
}