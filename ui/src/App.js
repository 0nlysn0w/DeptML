import React from 'react';
import { Router, Route } from 'react-router-dom';

import { Grommet } from 'grommet';
import { MainGrid, NavHeader, Sidebar } from './components';
import LoanItems from './pages/LoanItems';
import LoginPage from './pages/LoginPage';
import ItemDescription from './pages/ItemDescription';

import history from './helpers/history' 

class App extends React.Component {
  state = {
    functiongroup: null
  }

  handleFunctionChange = (functiongroup) =>
    this.setState({functiongroup})

  render() {
    const theme = {
      global: {
        colors: {
          brand: '#228BE6'
        },
        font: {
          family: 'Roboto',
          size: '14px',
          height: '20px',
        },
      },
    };

    return (
      <Grommet theme={theme} full>
        <MainGrid>
          <Router history={history}>
            <NavHeader functiongroup={this.state.functiongroup}></NavHeader>

            {/* if logged in */}
            <Sidebar></Sidebar>

            <Route exact path={'/'} component={() => <LoginPage handleFunctionChange={this.handleFunctionChange} />}></Route>
            <Route exact path={'/loanitems'} component={LoanItems}></Route>
            {/* For testing the UI */}
            <Route exact path={'/loanitems/:id'} component={ItemDescription}></Route>

          </Router>
        </MainGrid>
      </Grommet>
    );
  }
}

export default App;
