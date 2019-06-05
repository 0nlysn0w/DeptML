import React from 'react';

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
            {["First", "Second", "Third"].map(name => (
                <Button key={name} href="#" hoverIndicator>
                    <Box pad={{ horizontal: "medium", vertical: "small" }}>
                        <Text>{name}</Text>
                    </Box>
                </Button>
            ))}
        </Box>
    );
}