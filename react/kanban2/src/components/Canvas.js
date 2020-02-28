import React, { Component } from 'react';

import List from "./List"

class Canvas extends Component {
    render() {
        return (
            <div className="row">
                <List key={1} name="ToDo" />
                <List key={2} name="Doing" />
                <List key={3} name="Done" />
            </div>
        );
    }
}

export default Canvas;  