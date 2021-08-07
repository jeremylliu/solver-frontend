import React, { Component } from 'react';
import BoardView from './boardview';
import ListView from './listview';

interface MyProps {
  solution: Map<String, Array<Number>>;
  board: Array<String>;
}
interface MyState {
  sortedWords: Array<String>;
}

export default class Solution extends Component<MyProps, MyState> {
  constructor(props: any) {
    super(props);

    this.state = {
      sortedWords: [],
    };
  }

  render() {
    const arrOfKeys = [...this.props.solution.keys()];
    const asc = arrOfKeys.sort((a, b) => b.length - a.length);
    return (
      <div className="w-full h-full flex">
        <div className="container w-3/5 h-full">
          <BoardView
            sortedWords={asc}
            solution={this.props.solution}
            board={this.props.board}
          />
        </div>
        <div className="w-2/5 h-full">
          <ListView sortedWords={asc} />
        </div>
      </div>
    );
  }
}
