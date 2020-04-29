import React, { useState } from "react"
import logo from "../../images/logo-inverted.svg"

const Header = () => {
  const [isOpen, setOpen] = useState(false)

  const onClick = () => {
    setOpen(!isOpen)
  }

  return (
    <header className="container bg-gray-900">
      <div className="flex justify-between items-center px-4 py-3">
        <div>
          <img src={logo} alt="Circle of Life" className="h-8" />
        </div>
        <div>
          <button
            type="button"
            className="text-gray-500 hover:text-white focus:text-white focus:outline-none block"
            onClick={onClick}
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isOpen && (
                <path
                  fillRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              )}
              {!isOpen && (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div className={`px-2 pt-2 pb-4 ${isOpen ? "block" : "hidden"}`}>
        <a
          href="#"
          className="text-white block font-semibold rounded hover:bg-gray-800 px-2 py-1 mt-1"
        >
          List Property
        </a>
        <a
          href="#"
          className="text-white block font-semibold rounded hover:bg-gray-800 px-2 py-1 mt-1"
        >
          Trips
        </a>
        <a
          href="#"
          className="text-white block font-semibold rounded hover:bg-gray-800 px-2 py-1 mt-1"
        >
          Messages
        </a>
      </div>
    </header>
  )
}

export default Header
