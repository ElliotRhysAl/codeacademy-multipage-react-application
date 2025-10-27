import React from 'react';

import "./Footer.css"
import '../style.css'

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 flex justify-around bg-gray-800 text-gray-300 text-center p-4">
      <div id="left" className="mt-2 flex flex-col">
        <p>&copy; 2025 Elliot Allen. All rights reserved.</p>
        <br/>
        <p>Built with React and Tailwind CSS.</p>
        <br />
        <div id="socials" className="flex flex-row">
            <a href="">
                <img src="src/assets/icons8-facebook.svg" alt="Facebook" className="h-6 w-6 mx-2"/>
            </a>
            <a href="">
                <img src="src/assets/icons8-instagram.svg" alt="Instagram" className="h-6 w-6 mx-2"/>
            </a>
            <a href="">
                <img src="src/assets/icons8-stack-overflow.svg" alt="Stack Overflow" className="h-6 w-6 mx-2"/>
            </a>
        </div>
      </div>
      <div id="right" className=" flex flex-row justify-around mx-5 mt-2">
        <div id="about" className='mx-5'>
            <h3 className="font-bold mb-2">About</h3>
            <p>This is a sample footer component for a React application.</p>
            <br />
        </div>
        <div id="contact" className='mx-5'>
            <h3 className="font-bold mb-2">Contact</h3>
            <p>Email:</p>
        </div>
      </div>
    </footer>
  )
}
