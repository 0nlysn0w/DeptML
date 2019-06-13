import React, { Component } from 'react';
import { Box, RadioButton, Form, Button, FormField, Text } from 'grommet';

import * as cookie from '../helpers/cookie'
import history from '../helpers/history'

class LoginPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loggedinUser: JSON.parse(cookie.getUser())
        }
        console.log(JSON.parse(cookie.getUser()), this.state.loggedinUser)
    }

    componentDidMount() {
        fetch("http://localhost:5000/profiles")
            .then(res => res.json())
            .then(json => {
                this.setState({
                    profiles: json
                })
            })
    }

    render() {
        if (this.state.profiles === undefined) {
            return <div>Loading</div>
        }

        return (
            <Box
                fill
                background='light-2'
                align='center'
                justify='center'
            >

                <Form>
                    <Text>Please select a user</Text>
                    {this.state.profiles.map(profile => (
                        <Box key={profile.Id} margin={{ vertical: 'small' }} align="start">
                            <RadioButton
                                name='prop'
                                checked={this.state.loggedinUser['Id'] === profile['Id']}
                                label={profile.Functiongroup}
                                onChange={() => {
                                    this.setState({ loggedinUser: profile })}
                            }
                            />
                        </Box>
                    ))}
                    {/* main */}
                    <Button type="submit" primary label="Submit" onClick={() => {
                        cookie.set('username', this.state.loggedinUser)
                        history.push('/loanitems')
                    }} />
                </Form>
            </Box>

        )
    }
}

export default LoginPage;