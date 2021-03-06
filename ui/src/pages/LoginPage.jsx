import React, { Component, Fragment } from 'react';
import { Box, RadioButton, Form, Button, Heading } from 'grommet';

import * as cookie from '../helpers/cookie'
import history from '../helpers/history'

class LoginPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loggedinUser: JSON.parse(cookie.getUser())
        }
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

    handleSubmit(loggedinUser) {
        this.props.handleFunctionChange(loggedinUser)
        cookie.set('username', this.state.loggedinUser)
        history.push('/recommendedlaptops')
    }

    render() {
        return (
            <Box
                fill
                background='light-2'
                align='center'
                justify='center'
            >
                {this.state.profiles === undefined ? <div>Loading</div> :
                    <Fragment>

                        <Heading level="3">Please select a function group</Heading>
                        <Form>
                            {this.state.profiles.map(profile => (
                                <Box key={profile.Id} margin={{ vertical: 'small' }} align="start">
                                    <RadioButton
                                        name='prop'
                                        checked={this.state.loggedinUser['Id'] === profile['Id']}
                                        label={profile.Functiongroup}
                                        onChange={() => {
                                            this.setState({ loggedinUser: profile })
                                        }
                                        }
                                    />
                                </Box>
                            ))}
                            <Button type="submit" primary label="Submit" onClick={() => this.handleSubmit(this.state.loggedinUser)} />
                        </Form>
                    </Fragment>
                }
            </Box>
        )
    }
}

export default LoginPage;