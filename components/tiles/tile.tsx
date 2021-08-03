import React, { Component } from 'react';

interface MyProps {
  letter: String;
}

export default class Tile extends Component<MyProps, {}> {
  render() {
    return (
      <div className="box-content bg-yellow-300 rounded-md h-10 w-10 flex justify-center">
        {this.props.letter}
      </div>
    );
  }
}
