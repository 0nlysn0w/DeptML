import React, { Component } from 'react';

import Sidebar from '../components/Sidebar';

class LoanItems extends Component {
    render() {
        return (
            <React.Fragment>
                <Sidebar />
                <p>hengel</p>

                <div class="columns">
                    <div class="column">1</div>
                    <div class="column">2</div>
                    <div class="column">3</div>
                    <div class="column">4</div>
                    <div class="column">5</div>
                </div>
            </React.Fragment>
        )
    }
}

export default LoanItems;