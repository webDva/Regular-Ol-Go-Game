import React, { Component } from 'react';
import './Board.css';

import Board from './logic/board';

class Display extends Component {
    constructor(props) {
        super(props);
        this.aBoard = new Board();
    }

    render() {
        return (
                <div className="board">
                    {
                        this.aBoard.gridPoints.map((pointP) => {
                            return (<div className="individualPoint"></div>);
                        })
                    }     
                   </div>
    );
    }
};

export default Display;
