import Head from 'next/head';
import Image from 'next/image';
import Input from './input';

export const Init = () => {
  return (
    <div className="min-h-screen h-screen p-10">
      <Head>
        <title>Word Hunt Solver</title>
        <meta
          name="description"
          content="Automatically solves word hunt puzzles"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-5/6">
        <div className="w-full h-20 flex justify-center text-4xl font-bold">
          Word Hunt Solver
        </div>
        <Input />
      </main>

      <footer className="w-full h-16 border-t flex justify-center items-center">
        TEMP
      </footer>
    </div>
  );
};
