import React, { Component } from 'react';
import ManualInput from './manual-input';
import CameraInput from './camera-input';
import { solve } from '../../lib/api';

interface MyProps {
  onChange: Function;
  onSolve: Function;
  board: Array<String>;
}

export default class Input extends Component<MyProps, {}> {
  constructor(props: any) {
    super(props);
  }

  render() {
    const currentBoard = this.props.board;

    return (
      <div className="h-full w-full flex">
        <div className="container w-3/5 h-full">
          <CameraInput
            board={currentBoard}
            onBoardChange={this.props.onChange}
            onSolve={this.props.onSolve}
          />
        </div>
        <div className="flex flex-col items-center justify-center w-2/5 h-5/6">
          <ManualInput
            board={currentBoard}
            onBoardChange={this.props.onChange}
            onSolve={this.props.onSolve}
          />
        </div>
      </div>
    );
  }
}
