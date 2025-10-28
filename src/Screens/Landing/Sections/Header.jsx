// libraries
import { useState } from 'react'

// assets
import Nav from '../../../components/Nav/Nav.jsx';
import viteLogo from '../../../assets/vite.svg';
import reactLogo from '../../../assets/react.svg';

// styles
import '../../../style.css'


export default function Header() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
        <div id='logo' className="flex justify-center mt-10">
            <a href="https://vite.dev" target="_blank">
                <img src={viteLogo} className="logo vite" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
        </div>
    </>
  )
}

