import React, { Component } from 'react';
import { CameraIcon } from '@heroicons/react/outline';
import Webcam from 'react-webcam';
import { Switch } from '@headlessui/react';
import { processImage } from '../../lib/api';
import Confirm from '../popups/confirm';

interface MyProps {
  board: Array<String>;
  onBoardChange: Function;
  onSolve: Function;
}

interface MyState {
  webcamOn: boolean;
  enabled: boolean;
  popup: boolean;
  interval: Number;
}

export default class ManualInput extends Component<MyProps, MyState> {
  constructor(props: any) {
    super(props);

    this.state = {
      webcamOn: false,
      enabled: true,
      popup: false,
      interval: 0,
    };

    this.enableWebcam = this.enableWebcam.bind(this);
    this.capture = this.capture.bind(this);
    this.classNames = this.classNames.bind(this);
    this.setEnabled = this.setEnabled.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  async componentDidUpdate() {
    if (
      this.state.enabled &&
      this.state.webcamOn &&
      !this.state.popup
    ) {
      setTimeout(async () => await this.capture(), 1000);
    }
  }

  enableWebcam = () => {
    this.setState({ webcamOn: true });
    setTimeout(() => {
      this.setState({ webcamOn: false });
    }, 60000);
  };

  setRef = (webcam) => {
    this.webcam = webcam;
  };

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    processImage(imageSrc).then((res) => {
      if (res.length == 16) {
        this.props.onBoardChange(res);
        this.setState({ popup: true });
      } else {
        if (
          this.state.enabled &&
          this.state.webcamOn &&
          !this.state.popup &&
          this.webcam
        ) {
          setTimeout(async () => await this.capture(), 250);
        }
      }
    });
  };

  classNames(...classes: Array<String>) {
    return classes.filter(Boolean).join(' ');
  }

  setEnabled($state: boolean) {
    this.setState({ enabled: $state });
  }

  closeModal() {
    this.setState({ popup: false });
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
        <Confirm
          open={this.state.popup}
          onBoardChange={this.props.onBoardChange}
          onSolve={this.props.onSolve}
          board={this.props.board}
          closeModal={this.closeModal}
        />
      </div>
    );
  }
}
