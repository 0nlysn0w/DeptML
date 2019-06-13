import React from 'react';

import { Link } from "react-router-dom";

import { Box, Text } from 'grommet';

import * as cookie from '../helpers/cookie'

export const NavHeader = () => {
    const loggedinUser = JSON.parse(cookie.getUser())
    console.log(loggedinUser)
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
            {loggedinUser === '[]' ? null :
                <Text>{loggedinUser['Functiongroup']}</Text>
            }
        </Box>
    );
}