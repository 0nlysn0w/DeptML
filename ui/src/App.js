import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Grommet } from 'grommet';
import LoanItems from './pages/LoanItems';
import { MainGrid, NavHeader, Sidebar } from './components';

class App extends React.Component {
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
          <Router>
            <NavHeader></NavHeader>
            <Sidebar></Sidebar>

            <Route exact path={'/'} component={LoanItems}></Route>

          </Router>
        </MainGrid>
      </Grommet>
    );
  }
}

export default App;
