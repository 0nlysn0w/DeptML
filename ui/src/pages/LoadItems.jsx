import React, { Component } from 'react';

// import Sidebar from '../components/Sidebar';
import {
	Box,
	Button,
	Collapsible,
	Heading,
	Layer,
	ResponsiveContext,
} from 'grommet';
import { FormClose, Notification } from 'grommet-icons';

const AppBar = (props) => (
	<Box
		tag='header'
		direction='row'
		align='center'
		justify='between'
		background='brand'
		pad={{ left: 'medium', right: 'small', vertical: 'small' }}
		elevation='medium'
		style={{ zIndex: '1' }}
		{...props}
	/>
);

class LoanItems extends Component {
	state = {
		showSidebar: false,
	}
	render() {
		const { showSidebar } = this.state;

		return (
			<ResponsiveContext.Consumer>
				{size => (
					<Box fill>
						<AppBar>
							<Heading level='3' margin='none'>My App</Heading>
							<Button
								icon={<Notification />}
								onClick={() => this.setState(prevState => ({ showSidebar: !prevState.showSidebar }))}
							/>
						</AppBar>
						<Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
							<Box flex align='center' justify='center'>
								app body
                            </Box>
							{(!showSidebar || size !== 'small') ? (

								<Collapsible direction="horizontal" open={showSidebar}>
									<Box
										flex
										width='medium'
										background='light-2'
										elevation='small'
										align='center'
										justify='center'
									>
										sidebar
                    </Box>
								</Collapsible>
							) : (
									<Layer>
										<Box
											background='light-2'
											tag='header'
											justify='end'
											align='center'
											direction='row'
										>
											<Button
												icon={<FormClose />}
												onClick={() => this.setState({ showSidebar: false })}
											/>
										</Box>
										<Box
											fill
											background='light-2'
											align='center'
											justify='center'
										>
											sidebar
                      </Box>
									</Layer>
								)}
						</Box>

					</Box>
				)}
			</ResponsiveContext.Consumer>
		)
	}
}

export default LoanItems;