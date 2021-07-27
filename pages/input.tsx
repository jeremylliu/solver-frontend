import React, { Component } from 'react';
import ManualInput from '../components/input-types/manual-input';
import CameraInput from '../components/input-types/camera-input';

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

  handleBoardChange(newBoard: any) {
    this.setState({ board: newBoard });
  }

  render() {
    const currentBoard = this.state.board;

    return (
      <div className="h-full w-full flex">
        <div className="container border w-3/5 h-5/6 bg-gray-200">
          <CameraInput />
        </div>
        <div className="flex flex-col items-center justify-center w-2/5 h-5/6">
          <div className="flex justify-center items-center">
            <p className="text-2xl font-medium text-gray-800 mb-4">
              Or Manually Enter Here:
            </p>
          </div>
          <ManualInput
            board={currentBoard}
            onBoardChange={this.handleBoardChange}
          />
        </div>
      </div>
    );
  }
}
