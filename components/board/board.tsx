import React, { Component } from 'react';
import Tile from './tile';

interface MyProps {
  board: Array<String>;
}

export default class Board extends Component<MyProps, {}> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <div className="flex justify-center">
        <div className="grid grid-flow-row grid-cols-4 grid-rows-4 gap-1">
          {this.props.board.map((letter, index) => {
            return <Tile key={index} letter={letter}></Tile>;
          })}
        </div>
      </div>
    );
  }
}
