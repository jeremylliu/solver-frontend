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
              board={board}
              closeModal={this.closeModal}
            />
          </div>
        </main>

        <footer className="w-full h-20 mt-8 pt-4 border-t text-center text-sm">
          This solver was made by me (GitHub: @jliuu1) to try and
          finally win a game of word hunt against my friends
          <br />
          If you wish to check out my code, the links are below
          <br />
          frontend repository:{' '}
          <a
            className="text-blue-600 underline"
            href="https://www.github.com/"
          >
            https://www.github.com/
          </a>
          <br />
          backend repository:{' '}
          <a
            className="text-blue-600 underline"
            href="https://www.github.com/"
          >
            https://www.github.com/
          </a>
        </footer>
      </div>
    );
  }
}
