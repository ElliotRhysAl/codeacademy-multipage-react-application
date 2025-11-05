// libraries
import { useState } from "react"

// assets
import Nav from "../../../components/Nav/Nav";
import viteLogo from "../../../assets/vite.svg"
import reactLogo from "../../../assets/react.svg"

export default function Header() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <div className="flex flex-col">

        <section id="sectionWrapper" className="flex flex-row justify-between items-center w-full">
          <div id="cardWrapper" className="flex flex-col m-10 mb-5 pt-10">
            <div id="logo" className="mb-5 flex space-x-4">
              <a href="https://vite.dev" target="_blank" rel="noreferrer">
                <img src={viteLogo} className="logo vite" alt="Vite logo" />
              </a>
              <a href="https://react.dev" target="_blank" rel="noreferrer">
                <img src={reactLogo} className="logo react" alt="React logo" />
              </a>
            </div>
            <h1 className="text-5xl mb-5">Vite + React</h1>
            <div className="text-2xl">
              <button className="btn" onClick={() => setCount((count) => count + 1)}>
                count is: {count}
              </button>
            </div>
          </div>
          <div id="textWrapper" className="mr-50 m-10">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </section>

        <section id="sectionWrapper" className="flex flex-row-reverse justify-between items-center w-full">
          <div id="cardWrapper" className="flex flex-col m-10 mb-5 pt-10">
            <div id="logo" className="mb-5 flex space-x-4">
              <a href="https://vite.dev" target="_blank" rel="noreferrer">
                <img src={viteLogo} className="logo vite" alt="Vite logo" />
              </a>
              <a href="https://react.dev" target="_blank" rel="noreferrer">
                <img src={reactLogo} className="logo react" alt="React logo" />
              </a>
            </div>
            <h1 className="text-5xl mb-5">Vite + React</h1>
            <div className="text-2xl">
              <button className="btn" onClick={() => setCount((count) => count + 1)}>
                count is: {count}
              </button>
            </div>
          </div>
          <div id="textWrapper" className="ml-50 m-10">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </section>

        <section id="sectionWrapper" className="flex flex-row justify-between items-center w-full">
          <div id="cardWrapper" className="flex flex-col m-10 mb-5 pt-10">
            <div id="logo" className="mb-5 flex space-x-4">
              <a href="https://vite.dev" target="_blank" rel="noreferrer">
                <img src={viteLogo} className="logo vite" alt="Vite logo" />
              </a>
              <a href="https://react.dev" target="_blank" rel="noreferrer">
                <img src={reactLogo} className="logo react" alt="React logo" />
              </a>
            </div>
            <h1 className="text-5xl mb-5">Vite + React</h1>
            <div className="text-2xl">
              <button className="btn" onClick={() => setCount((count) => count + 1)}>
                count is: {count}
              </button>
            </div>
          </div>
          <div id="textWrapper" className="mr-50 m-10">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </section>

      </div>
      {/* Add a spacer at bottom for fixed footer if desired */}
      <div className="h-32 md:h-16" />
    </>
  );
}

