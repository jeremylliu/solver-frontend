import React, { Component } from 'react';
import PathBoard from '../board/pathboard';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/outline';

interface MyProps {
  sortedWords: Array<String>;
  solution: Map<String, Array<Number>>;
  board: Array<String>;
}
interface MyState {
  page: number;
}

export default class BoardView extends Component<MyProps, MyState> {
  constructor(props: any) {
    super(props);

    this.state = {
      page: 0,
    };
    this.backPage = this.backPage.bind(this);
    this.nextPage = this.nextPage.bind(this);
  }

  backPage() {
    if (this.state.page > 0) {
      this.setState({ page: this.state.page - 1 });
    }
  }
  nextPage() {
    if (
      this.state.page < Math.floor(this.props.sortedWords.length / 9)
    ) {
      this.setState({ page: this.state.page + 1 });
    }
  }

  render() {
    var partial: Array<String> = [];
    partial = this.props.sortedWords.slice(
      this.state.page * 9,
      this.state.page * 9 + 9,
    );
    return (
      <div className="w-full h-full">
        <div className="grid grid-flow-row grid-cols-3 grid-rows-3 gap-4">
          {partial.map((word, index) => {
            return (
              <div
                className="text-center text-gray-800 text-lg font-semibold -mb-2"
                key={index}
              >
                <PathBoard
                  board={this.props.board}
                  path={this.props.solution.get(word)}
                />
                <div>{word}</div>
              </div>
            );
          })}
        </div>
        <div className="mt-2 text-gray-700">
          <div className="mt-4 ml-8 font-medium">
            Showing page {this.state.page + 1} out of{' '}
            {Math.floor(this.props.sortedWords.length / 9) + 1}
          </div>
          <div className="text-right -mt-6 mr-8">
            <button onClick={this.backPage}>
              <ChevronLeftIcon className="w-8 h-8 border-2 rounded-md" />
            </button>
            <button onClick={this.nextPage}>
              <ChevronRightIcon className="w-8 h-8 border-2 rounded-md" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
