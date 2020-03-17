import React, { Component } from 'react';


// This will be the only page to be included into App JS
export default class Page extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1 className='Bello'><i class="fas fa-headphones    "></i>Hi From Page JS</h1>
            </div>
        )
    }
}
