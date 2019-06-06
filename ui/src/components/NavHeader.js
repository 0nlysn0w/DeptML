import React from 'react';

import { Link } from "react-router-dom";

import { Box, Text } from 'grommet';

export const NavHeader = () => {
    return (
        <Box
            gridArea="header"
            direction="row"
            align="center"
            justify="center"
            pad={{ horizontal: "medium", vertical: "small" }}
            background="dark-2"
        >
            <Link to="/">

            <Text size="large">DeptML</Text>
            </Link>

            <Link to="/loanitems">
                <Text size="large">Loan Items</Text>
            </Link>
            <Text>UserName</Text>
        </Box>
    );
}