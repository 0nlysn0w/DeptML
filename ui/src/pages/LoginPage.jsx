import React, { Component } from 'react';
import { Box, RadioButton, Form, Button, FormField, Text } from 'grommet';

import * as cookie from '../helpers/cookie'

class LoginPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: JSON.parse(cookie.get('username'))
        }
    }
    state = {}
    render() {
        const { selected } = this.state;

        return (
            <Box
                fill
                background='light-2'
                align='center'
                justify='center'
            >

                <Form>
                    <Text>Please select a user</Text>
                    {[
                        "Kermit",
                        "Bert",
                        "Ernie",
                        "Grover",
                        "Oscar"
                    ].map(label => (
                        <Box key={label} margin={{ vertical: 'small' }} align="start">
                            <RadioButton
                                name='prop'
                                checked={selected === label}
                                label={label}
                                onChange={() => this.setState({ selected: label })}
                            />
                        </Box>
                    ))}
                    {/* main */}
                    <Button type="submit" primary label="Submit" />
                </Form>
            </Box>

        )
    }
}

export default LoginPage;