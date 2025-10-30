// libraries
import { useState } from 'react'

// assets
import Nav from '../../../components/Nav/Nav';
import viteLogo from '../../../assets/vite.svg'
import reactLogo from '../../../assets/react.svg'

export default function Header() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <div id="logo" className="mt-20 ml-20 flex space-x-4">
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo vite" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="mt-10 flex flex-col ml-20">
        <h1 className="text-5xl mb-4">Vite + React</h1>
        <div className="text-2xl">
          <button className="btn" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </div>
      </div>
      {/* Add a spacer at bottom for fixed footer if desired */}
      <div className="h-32 md:h-16" />
    </>
  );
}

