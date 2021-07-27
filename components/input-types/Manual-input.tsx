import React, { Component } from 'react';
import $ from 'jquery';

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

    this.autoTab = this.autoTab.bind(this);
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

  onChange = (e) => {
    const { maxLength, value, name } = e.target;
    const fieldIndex = Number(name);

    let newBoard = this.props.board;
    newBoard[fieldIndex] = value.toLowerCase();
    this.props.onBoardChange(newBoard);
    this.check();
  };

  autoTab = (e) => {
    const BACKSPACE_KEY = 8;
    const DELETE_KEY = 46;
    let nameindex = $(e.target).attr('name') || 0;
    nameindex = Number(nameindex);
    if (e.keyCode === BACKSPACE_KEY) {
      nameindex -= 1;
    } else if (e.keyCode !== DELETE_KEY) {
      nameindex += 1;
    }
    const elem = $('[name=' + nameindex + ']');
    if (elem[0]) {
      elem.focus();
    }
  };

  render() {
    const inputIds = [
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
    ];
    const board = this.props.board;
    return (
      <div className="justify-center">
        <div className="border grid grid-flow-row grid-cols-4 grid-rows-4 gap-1">
          {inputIds.map((object, index) => {
            return (
              <input
                className="w-10 h-10 rounded-md border text-2xl text-center"
                key={object}
                name={String(object)}
                type="text"
                maxLength={1}
                value={String(board[index])}
                onChange={this.onChange}
                onKeyUp={this.autoTab}
              />
            );
          })}
        </div>
        <div className="mt-4 flex w-full justify-center ">
          <button
            className="border-4 border-gray-300 hover:bg-blue-200 rounded-md p-1"
            onClick={this.onSubmit}
          >
            Submit
          </button>
        </div>
        <div className="text-red-400 text-center mt-4">
          <div className="text-black">The board...</div>
          {!this.state.filled ? (
            'is not filled'
          ) : !this.state.strings ? (
            'cannot contain #s'
          ) : (
            <p className="text-black">looks fine</p>
          )}
        </div>
      </div>
    );
  }
}
