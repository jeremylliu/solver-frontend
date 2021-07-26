import React, { Component } from 'react';
import $ from 'jquery';

export default class Input extends Component {
  constructor(props: any) {
    super(props);

    this.state = {
      board: Array(15).fill(''),
    };

    this.autoTab = this.autoTab.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange = (data: any) => {
    const { maxLength, value, name } = data.target;
    const fieldIndex = Number(name);

    let newBoard = this.state.board.slice();
    newBoard[fieldIndex] = value;
    this.setState({ board: newBoard });
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
    return (
      <div className="h-full w-full flex">
        <div className="container border w-3/5 h-5/6 bg-gray-200">
          CAMERA HERE
        </div>
        <div className="flex flex-col items-center justify-center w-2/5 h-5/6">
          <div className="flex justify-center items-center">
            <p className="text-lg font-medium text-gray-800">
              Or manually enter:
            </p>
          </div>
          <div>
            <div className="border grid grid-flow-row grid-cols-4 grid-rows-4 gap-3">
              {inputIds.map((object, index) => {
                return (
                  <input
                    className="w-8 h-8 rounded-md border"
                    key={object}
                    name={String(object)}
                    type="text"
                    maxLength={1}
                    value={this.state.board[index]}
                    onChange={this.onChange}
                    onInput={this.autoTab}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
