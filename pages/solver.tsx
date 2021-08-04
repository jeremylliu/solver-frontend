import React, { Component } from 'react';
import Head from 'next/head';
import Input from '../components/input-types/input';
import Tile from '../components/board/tile';
import Confirm from '../components/popups/confirm';

export default class Solver extends Component {
  constructor(props: any) {
    super(props);

    this.state = {
      popup: false,
    };

    this.handleClick = this.handleClick.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  handleClick() {
    console.log('CLICKED!');
    this.setState({ popup: true });
  }

  closeModal() {
    this.setState({ popup: false });
  }

  onSolve(board: Array<String>) {
    console.log('SOLVING');
  }

  render() {
    const board = [
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
    ];
    return (
      <div className="min-h-screen h-screen p-10">
        <Head>
          <title>Word Hunt Solver</title>
          <meta
            name="description"
            content="Automatically solves word hunt puzzles"
          />
          <link rel="icon" href={'/favicon.ico'} />
        </Head>

        <main className="h-5/6">
          <div className="w-full h-10 flex justify-center text-4xl font-bold mb-10">
            <div className="flex mr-3">
              <Tile letter="W" />
              ord
            </div>
            <div className="flex mr-3">
              <Tile letter="H" />
              unt
            </div>
            Solver
          </div>
          <Input />
          <button onClick={this.handleClick}>TEMP</button>
          <div>
            <Confirm
              open={this.state.popup}
              // onBoardChange={this.onBoardChange}
              onSolve={this.onSolve}
              board={board}
              closeModal={this.closeModal}
            />
          </div>
        </main>

        <footer className="w-full h-10 mt-20 pt-4 border-t text-center text-sm">
          This solver was made by me (
          <a
            className="text-blue-600"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/jliuu1"
          >
            @jliuu
          </a>
          ) to finally be able to win a game of GamePigeon Word Hunt
          against my friends.
          <br />
          If you wish to check out my code, here are the{' '}
          <a
            className="text-blue-600 underline"
            href="https://github.com/word-hunt-solver/solver-frontend"
            target="_blank"
            rel="noreferrer"
          >
            frontend
          </a>{' '}
          and{' '}
          <a
            className="text-blue-600 underline"
            href="https://github.com/word-hunt-solver/solver-backend"
            target="_blank"
            rel="noreferrer"
          >
            backend
          </a>{' '}
          respositories. Enjoy!
        </footer>
      </div>
    );
  }
}
