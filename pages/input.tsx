import React, { Component } from 'react';
import ManualInput from '../components/input-types/Manual-input';

export default class Input extends Component {
  constructor(props: any) {
    super(props);

    this.state = {
      board: Array(15).fill(''),
    };
  }

  render() {
    return (
      <div className="h-full w-full flex">
        <div className="container border w-3/5 h-5/6 bg-gray-200">
          CAMERA HERE
        </div>
        <div className="flex flex-col items-center justify-center w-2/5 h-5/6">
          <div className="flex justify-center items-center">
            <p className="text-2xl font-medium text-gray-800 mb-4">
              Or Manually Enter Here:
            </p>
          </div>
          <ManualInput />
        </div>
      </div>
    );
  }
}
