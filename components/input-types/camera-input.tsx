import React, { Component } from 'react';
import { CameraIcon } from '@heroicons/react/outline';
import Webcam from 'react-webcam';
import { Switch } from '@headlessui/react';

interface MyState {
  webcamOn: boolean;
  enabled: boolean;
}

export default class ManualInput extends Component<{}, MyState> {
  constructor(props: any) {
    super(props);

    this.state = {
      webcamOn: false,
      enabled: true,
    };

    this.enableWebcam = this.enableWebcam.bind(this);
    this.capture = this.capture.bind(this);
    this.classNames = this.classNames.bind(this);
    this.setEnabled = this.setEnabled.bind(this);
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

  classNames(...classes: Array<String>) {
    return classes.filter(Boolean).join(' ');
  }

  setEnabled($state: boolean) {
    this.setState({ enabled: $state });
  }

  render() {
    return (
      <div className="w-full h-full">
        <div className="w-full h-5/6 flex flex-col justify-center items-center border bg-gray-200 rounded-lg">
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
                className="w- inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:col-start-2 sm:text-sm"
                onClick={this.enableWebcam}
              >
                Enable Webcam
              </button>
            </div>
          )}
        </div>

        <div className="w-full h-1/6">
          <div className="inline-block mt-2">
            <Switch.Group as="div" className="flex items-center">
              <Switch
                checked={this.state.enabled}
                onChange={this.setEnabled}
                className={this.classNames(
                  this.state.enabled
                    ? 'bg-indigo-600'
                    : 'bg-gray-200',
                  'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
                )}
              >
                <span
                  aria-hidden="true"
                  className={this.classNames(
                    this.state.enabled
                      ? 'translate-x-5'
                      : 'translate-x-0',
                    'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200',
                  )}
                />
              </Switch>
              <Switch.Label as="span" className="ml-3">
                <span className="text-sm font-medium text-gray-900">
                  Automatic Capturing{' '}
                </span>
              </Switch.Label>
            </Switch.Group>
          </div>
          <div className="w-full flex justify-center -mt-4">
            {this.state.webcamOn && !this.state.enabled ? (
              <button
                className="w- inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:col-start-2 sm:text-sm"
                onClick={this.capture}
              >
                Manual Capture
              </button>
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>
    );
  }
}
