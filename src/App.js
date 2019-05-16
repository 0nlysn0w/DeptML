import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LoanItems from './pages/LoadItems';
import NavHeader from './components/NavHeader';

import GridPage from './pages/GridPage';

import { Grommet, Grid } from 'grommet';

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
        <Router>
          {/* <NavHeader /> */}
          <Route exact path={'/'} component={GridPage}></Route>
        </Router>
      </Grommet>
    );
  }
}

export default App;
