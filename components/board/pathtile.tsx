import React, { Component } from 'react';

interface MyProps {
  letter: String;
  color: string;
}

export default class PathTile extends Component<MyProps, {}> {
  render() {
    return (
      <div className={this.props.color}>
        <div className="box-content h-8 w-8 flex justify-center text-center font-bold text-2xl">
          <div>{this.props.letter}</div>
        </div>
      </div>
    );
  }
}
