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
            {loggedinUser === '[]' ? null :
                <Text>You are now viewing the group {loggedinUser['Functiongroup']}</Text>
            }
        </Box>
    );
}