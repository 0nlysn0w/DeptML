import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LoanItems from './pages/LoadItems';
import NavHeader from './components/NavHeader';

class App extends React.Component {
  render() {

    return (
      <Router>
        <NavHeader />
        <Route exact path={'/'} component={LoanItems}></Route>
      </Router>
    );
  }
}

export default App;
