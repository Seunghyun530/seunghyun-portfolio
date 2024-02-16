import React from 'react'

export default function Footer() {
  return (
    <footer
    className='px-4 mb-10 text-center text-gray-500'
    >
        <small
        className="block mb-2 text-s"
        >
            &copy; 2024 Seunghyun Ko All rights reserved.
        </small>
        <p
        className="text-xs"
        >
            <span className="font-semibold">About this website:</span> built by {" "}
            <a href="https://www.linkedin.com/in/dkbozkurt/">@dkbozkurt</a>
        </p>
    </footer>
  )
}
