import React, { Component } from 'react';
import Head from 'next/head';
import Input from '../components/input-types/input';
import Solution from '../components/solution/solution';
import Tile from '../components/board/tile';
import { solve } from '../lib/api';

interface MyState {
  board: Array<String>;
  solution: Map<String, Array<Number>>;
  solve: boolean;
  loading: boolean;
}

export default class Solver extends Component<{}, MyState> {
  constructor(props: any) {
    super(props);

    this.state = {
      board: Array<String>(16).fill(''),
      solution: null as any,
      solve: false,
      loading: true,
    };

    this.handleBoardChange = this.handleBoardChange.bind(this);
  }

  handleBoardChange = (newBoard: Array<String>) => {
    this.setState({ board: newBoard });
  };

  handleSolve = () => {
    this.setState({ solve: true });
    var solution = new Map();
    solve(this.state.board).then((sol) => {
      for (var key in sol) {
        var path = [];
        for (var key2 in sol[key]) {
          path.push(sol[key][key2]);
        }
        solution.set(key, path);
      }
      this.setState({ solution: solution });
      this.setState({ loading: false });
    });
  };

  render() {
    var content = <div></div>;
    if (!this.state.solve || this.state.loading) {
      content = (
        <Input
          board={this.state.board}
          onChange={this.handleBoardChange}
          onSolve={this.handleSolve}
        />
      );
    } else {
      content = (
        <Solution
          solution={this.state.solution}
          board={this.state.board}
        />
      );
    }
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
          {content}
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
