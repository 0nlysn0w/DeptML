import React from 'react';

import { Box, Text } from 'grommet';

export const NavHeader = () => {
    return (
        <Box
            gridArea="header"
            direction="row"
            align="center"
            justify="between"
            pad={{ horizontal: "medium", vertical: "small" }}
            background="dark-2"
        >

            <Text size="large">Title</Text>

            <Text>my@email</Text>
        </Box>
    );
}