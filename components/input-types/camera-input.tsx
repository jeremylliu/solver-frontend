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
    this.capture = this.capture.bind(this);
  }

  enableWebcam = () => {
    this.setState({ webcamOn: true });
  };

  setRef = (webcam) => {
    this.webcam = webcam;
  };

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    const requestObject = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ image: imageSrc }),
    };
    fetch(`http://localhost:5000/api/image/`, requestObject)
      .then((res) => res.json()) //make sure to return a json object
      .then((res) => console.log(res));
  };

  render() {
    return (
      <div className="w-full h-full flex flex-col justify-center items-center border bg-gray-200 rounded-lg">
        {this.state.webcamOn ? (
          <Webcam
            className="z-10 w-full h-full"
            audio={false}
            mirrored={false}
            screenshotFormat="image/jpeg"
            width={1280}
            height={720}
            ref={this.setRef}
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
        <button onClick={this.capture}>TEST</button>
      </div>
    );
  }
}
