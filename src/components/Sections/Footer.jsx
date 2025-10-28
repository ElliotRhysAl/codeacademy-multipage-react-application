import React from 'react';

export default function Footer() {
  return (
      <footer className="fixed bottom-0 left-0 right-0 w-full bg-gray-800 text-gray-300 p-4 flex flex-col md:flex-row justify-between items-center md:items-start z-50 max-h-64">      <div id="left" className="flex flex-col items-center md:items-start space-y-2">
        <p className="text-sm">&copy; 2025 Elliot Allen. All rights reserved.</p>
        <p className="text-sm">Built with React and Tailwind CSS.</p>
        <div id="socials" className="flex space-x-4 mt-2">
          <a href="#" aria-label="Facebook" className="hover:text-blue-500 transition-colors">
            <img src="src/assets/icons8-facebook.svg" alt="Facebook" className="h-6 w-6" />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-pink-500 transition-colors">
            <img src="src/assets/icons8-instagram.svg" alt="Instagram" className="h-6 w-6" />
          </a>
          <a href="#" aria-label="Stack Overflow" className="hover:text-yellow-400 transition-colors">
            <img src="src/assets/icons8-stack-overflow.svg" alt="Stack Overflow" className="h-6 w-6" />
          </a>
        </div>
      </div>
      <div id="right" className="flex flex-col md:flex-row justify-around mt-4 md:mt-0 space-y-4 md:space-y-0 md:space-x-10 text-center md:text-left">
        <div id="about">
          <h3 className="font-bold mb-2">About</h3>
          <p className="text-sm max-w-xs">This is a sample footer component for a React application.</p>
        </div>
        <div id="contact">
          <h3 className="font-bold mb-2">Contact</h3>
          <p className="text-sm">Email: <a href="mailto:contact@example.com" className="underline hover:text-gray-100">contact@example.com</a></p>
        </div>
      </div>
    </footer>
  );
}
