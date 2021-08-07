import React, { Component } from 'react';
import BoardInput from '../board/boardInput';

interface MyProps {
  board: Array<String>;
  onBoardChange: Function;
  onSolve: Function;
}

interface MyState {
  strings: Boolean;
  filled: Boolean;
}

export default class ManualInput extends Component<MyProps, MyState> {
  constructor(props: any) {
    super(props);

    this.state = {
      filled: false,
      strings: true,
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.check = this.check.bind(this);
  }

  check = () => {
    this.setState({ filled: this.props.board.every((e) => e > '') });
    this.setState({ strings: true });
    this.props.board.map((e) => {
      var numCast = Number(e);
      if (numCast) {
        this.setState({ strings: false });
      }
    });
  };

  onSubmit = () => {
    if (this.state.strings && this.state.filled) {
      this.props.onSolve();
    } else {
      console.log('Invalid Input');
    }
  };

  onChange = (newBoard: Array<String>) => {
    this.props.onBoardChange(newBoard);
    this.check();
  };

  render() {
    var message;
    if (!this.state.filled) {
      message = (
        <div className="flex justify-center text-red-400">
          Board is not filled
        </div>
      );
    } else if (!this.state.strings) {
      message = (
        <div className="flex justify-center text-red-400">
          Board can only contain letters
        </div>
      );
    } else {
      message = <div></div>;
    }

    const board = this.props.board;
    return (
      <div>
        <div className="flex justify-center items-center">
          <p className="text-2xl font-medium text-gray-700 mb-4">
            Manually enter here:
          </p>
        </div>
        <div className="justify-center">
          <div className="mb-4">
            <BoardInput board={board} onBoardChange={this.onChange} />
          </div>
          <div className="mt-4 flex w-full justify-center ">
            <button
              className="w-44 inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:col-start-2 sm:text-sm"
              onClick={this.onSubmit}
            >
              Submit
            </button>
          </div>
          <div className="text-red-400 text-center mt-4">
            {message}
          </div>
        </div>
      </div>
    );
  }
}
