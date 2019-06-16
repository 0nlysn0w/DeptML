import React from 'react';

import { Box, Text } from 'grommet';

import * as cookie from '../helpers/cookie'

export const NavHeader = () => {
    const loggedinUser = JSON.parse(cookie.getUser())
    return (
        <Box
            gridArea="header"
            direction="row"
            align="center"
            justify="center"
            pad={{ horizontal: "medium", vertical: "small" }}
            background="dark-2"
        >
            {loggedinUser === '[]' ? String.fromCharCode(160) :
                <Text>You are now logged in as function group: {loggedinUser['Functiongroup']}</Text>
            }
        </Box>
    );
}