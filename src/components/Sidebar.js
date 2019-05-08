import React from 'react';

import { Section } from 'react-bulma-components';

const Sidebar = () => {
    return (
        <Section>

            <aside class="menu">

                <p class="menu-label">Loan</p>
                <ul class="menu-list">
                    <li>Item 1</li>
                    <li>
                        <span class="is-active">Item 2</span>
                        <ul>
                            <li>1.1</li>
                            <li>1.2</li>
                            <li>1.3</li>
                        </ul>
                    </li>
                    <li>Item 3</li>
                    <li>Item 4</li>
                    <li>Item 5</li>
                </ul>

            </aside>
        </Section>
    );
}

export default Sidebar;
