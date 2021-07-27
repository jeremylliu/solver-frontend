import React, { Component } from 'react';
import $ from 'jquery';

interface MyProps {
  board: Array<String>;
  onBoardChange: Function;
}

export default class ManualInput extends Component<MyProps, {}> {
  constructor(props: any) {
    super(props);

    this.autoTab = this.autoTab.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onTrigger = this.onTrigger.bind(this);
  }

  onTrigger = () => {
    console.log('CLICKED');
  };

  onChange = (e) => {
    const { maxLength, value, name } = e.target;
    const fieldIndex = Number(name);

    let newBoard = this.props.board;
    newBoard[fieldIndex] = value;
    this.props.onBoardChange(newBoard);
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
      <div>
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
            onClick={this.onTrigger}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}
