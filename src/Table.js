"use strict";

import React, { Component } from 'react';

class Table extends Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Job</th>
                    </tr>
                </thead>
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
            </table>
        );
    }
}

export default Table;