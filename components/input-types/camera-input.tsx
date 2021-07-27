import React, { Component } from 'react';
import { CameraIcon } from '@heroicons/react/outline';
import Webcam from 'react-webcam';

interface MyState {
  webcamOn: Boolean;
}

export default class ManualInput extends Component<{}, MyState> {
  constructor(props: any) {
    super(props);

    this.state = {
      webcamOn: false,
    };

    this.enableWebcam = this.enableWebcam.bind(this);
  }

  enableWebcam() {
    this.setState({ webcamOn: true });
  }

  render() {
    return (
      <div className="w-full h-full flex flex-col justify-center items-center border bg-gray-200 rounded-lg">
        {this.state.webcamOn ? (
          <Webcam
            className="z-10 w-full h-full"
            audio={false}
            mirrored={true}
          />
        ) : (
          <div className="w-full h-full flex flex-col justify-center items-center">
            <CameraIcon className="w-8 h-8 text-gray-500" />
            <p className="">Webcam</p>
            <button
              className="border-4 border-gray-400 rounded-md mt"
              onClick={this.enableWebcam}
            >
              Enable Webcam
            </button>
          </div>
        )}
      </div>
    );
  }
}
