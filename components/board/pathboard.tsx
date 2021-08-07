import React, { Component } from 'react';
import PathTile from './pathtile';

interface MyProps {
  board: Array<String>;
  path: Array<Number>;
}

export default class PathBoard extends Component<MyProps, {}> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <div className="flex justify-center">
        <div className="grid grid-flow-row grid-cols-4 grid-rows-4 gap-1">
          {this.props.board.map((letter, index) => {
            var color = 'bg-yellow-300 rounded-md';
            if (this.props.path[0] == index) {
              color = 'bg-green-300 rounded-md';
            }
            if (
              this.props.path
                .slice(1, this.props.path.length - 1)
                .includes(index)
            ) {
              color = 'bg-green-200 rounded-md';
            }
            if (
              this.props.path[this.props.path.length - 1] == index
            ) {
              color = 'bg-red-200 rounded-md';
            }
            return (
              <PathTile key={index} letter={letter} color={color} />
            );
          })}
        </div>
      </div>
    );
  }
}
