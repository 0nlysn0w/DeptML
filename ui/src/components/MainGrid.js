import React from 'react'

import { Grid } from 'grommet'

export const MainGrid = (props) => {
    return (
        <Grid
            fill
            rows={["auto", "flex"]}
            columns={["auto", "flex"]}
            areas={[
                { name: 'header', start: [0, 0], end: [1, 0] },
                { name: 'sidebar', start: [0, 1], end: [0, 1] },
                { name: 'main', start: [1, 1], end: [1, 1] },
            ]}
        >
        {props.children}
        </Grid>
    );
}
