import React, { Component } from 'react';
import { CameraIcon } from '@heroicons/react/outline';
import Webcam from 'react-webcam';

// interface MyProps {
//   board: Array<String>;
//   onBoardChange: Function;
// }

export default class ManualInput extends Component<{}, {}> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <div className="w-full h-full flex flex-col justify-center items-center">
        <CameraIcon className="w-8 h-8 text-gray-500" />
        <p className="">Webcam</p>
        {/* <Webcam className="z-10" /> */}
      </div>
    );
  }
}
