import React, { Component } from 'react';

class Form extends Component
{
    construct(proprs) {
        super(props);

        this.initialState = {
            name: '',
            job: '',
            hobby: '',
        };

        this.state = this.initialState;
    }
}