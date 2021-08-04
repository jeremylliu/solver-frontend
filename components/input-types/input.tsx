import React, { Component } from 'react';
import ManualInput from './manual-input';
import CameraInput from './camera-input';

interface MyState {
  board: Array<String>;
}

export default class Input extends Component<{}, MyState> {
  constructor(props: any) {
    super(props);

    this.state = {
      board: Array<String>(16).fill(''),
    };

    this.handleBoardChange = this.handleBoardChange.bind(this);
  }

  handleBoardChange = (newBoard: Array<String>) => {
    this.setState({ board: newBoard });
  };

  solve = () => {
    console.log('RECEIVED');
    console.log(this.state.board);
  };

  render() {
    const currentBoard = this.state.board;

    return (
      <div className="h-full w-full flex">
        <div className="container w-3/5 h-full">
          <CameraInput />
        </div>
        <div className="flex flex-col items-center justify-center w-2/5 h-5/6">
          <ManualInput
            board={currentBoard}
            onBoardChange={this.handleBoardChange}
            onSolve={this.solve}
          />
        </div>
      </div>
    );
  }
}
