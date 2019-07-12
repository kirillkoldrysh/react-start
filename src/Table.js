"use strict";

import React, { Component } from 'react';

class Table extends Component {
    render() {
        // simple components
        // in React simple component is a function
        const TableHeader = () => {
            return (
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Job</th>
                    </tr>
                </thead>
            );
        }
        // we are using ES6 arrow functions for create these components
        const TableBody = () => {
            return (
                <tbody>
                    <tr>
                        <td>Fenix</td>
                        <td>Actor</td>
                    </tr>
                    <tr>
                        <td>Alexej</td>
                        <td>Programmer</td>
                    </tr>
                    <tr>
                        <td>Tommy</td>
                        <td>Gangster</td>
                    </tr>
                    <tr>
                        <td>Jack</td>
                        <td>How is he?</td>
                    </tr>
                </tbody>
            );
        }
        return (
            <table>
                <TableHeader />
                <TableBody />
            </table>
        );
    }
}

export default Table;
