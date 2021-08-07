import React, { Component } from 'react';

interface MyProps {
  sortedWords: Array<String>;
}

export default class ListView extends Component<MyProps, {}> {
  constructor(props: any) {
    super(props);
  }

  render() {
    var content = <div>LOADING</div>;
    content = this.props.sortedWords.map((sol, index) => {
      return (
        <div className="text-md text-gray-800" key={index}>
          {sol}
        </div>
      );
    });
    return (
      <div className="w-full h-full container overflow-scroll">
        <div className="w-full h-10 font-bold text-2xl text-gray-900 text-center mb-2">
          LIST OF WORDS
        </div>
        <div className="grid grid-cols-4 grid-flow-row-dense text-center">
          {content}
        </div>
      </div>
    );
  }
}
