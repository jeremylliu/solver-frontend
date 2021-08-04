import React, { Component } from 'react';
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Board from '../board/board';

interface MyProps {
  board: Array<String>;
  open: boolean;
  closeModal: Function;
  onSolve: Function;
}

interface MyState {
  edit: boolean;
}

interface MyState {}

export default class Confirm extends Component<MyProps, MyState> {
  constructor(props: any) {
    super(props);

    this.state = {
      edit: false,
    };

    this.setOpen = this.setOpen.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  setOpen($status: String) {
    if ($status == 'Edit') {
      this.setState({ edit: true });
    } else if ($status == 'Solve') {
      this.props.onSolve(this.props.board);
      this.closeModal(false);
      console.log('redirect');
    } else if ($status == 'Redetect') {
      this.closeModal(false);
      this.setState({ edit: false });
    }
  }

  closeModal($status: boolean) {
    this.props.closeModal($status);
  }

  render() {
    var content;
    if (!this.state.edit) {
      content = (
        <div className="inline-block bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all my-8 align-middle max-w-sm w-full p-6">
          <div>
            <div className="text-center my-2">
              <Dialog.Title
                as="h3"
                className="text-3xl leading-6 font-semibold text-gray-900"
              >
                Does this look right?
              </Dialog.Title>
              <div className="mt-6 mb-10">
                <Board board={this.props.board} />
              </div>
            </div>
          </div>
          <div className="sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
            <button
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-red-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:col-start-2 sm:text-sm"
              onClick={() => this.setOpen('Edit')}
            >
              No, Edit
            </button>
            <button
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-green-300 shadow-sm px-4 py-2 bg-green-50 text-base font-medium text-gray-700 hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:mt-0 sm:col-start-1 sm:text-sm"
              onClick={() => this.setOpen('Solve')}
            >
              Yes
            </button>
          </div>
        </div>
      );
    } else {
      content = (
        <div className="inline-block bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all my-8 align-middle max-w-sm w-full p-6">
          <div>
            <div className="text-center my-2">
              <Dialog.Title
                as="h3"
                className="text-3xl leading-6 font-semibold text-gray-900"
              >
                Edit your board
              </Dialog.Title>
              <div className="mt-6 mb-10">
                <Board board={this.props.board} />
              </div>
            </div>
          </div>
          <div className="sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
            <button
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-red-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:col-start-2 sm:text-sm"
              onClick={() => this.setOpen('Redetect')}
            >
              Re-detect
            </button>
            <button
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-green-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:mt-0 sm:col-start-1 sm:text-sm"
              onClick={() => this.setOpen('Solve')}
            >
              Solve
            </button>
          </div>
        </div>
      );
    }
    return (
      <Transition.Root show={this.props.open} as={Fragment}>
        <Dialog
          as="div"
          static
          className="fixed z-10 inset-0 overflow-y-auto"
          open={this.props.open}
          onClose={this.closeModal}
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              {content}
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    );
  }
}
