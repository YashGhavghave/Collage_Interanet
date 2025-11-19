import React from "react";

function Navbar() {
  return (
    <header className="relative flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white dark:bg-neutral-800 text-sm py-3">
      <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
        
        {/* Left Brand */}
        <div className="flex items-center justify-between">
          <a
            href="#"
            aria-label="Brand"
            className="text-xl font-semibold dark:text-white"
          >
            AEP
          </a>

          {/* Mobile Hamburger */}
          <div className="sm:hidden">
            <button
              type="button"
              className="hs-collapse-toggle size-9 flex justify-center items-center rounded-lg border border-gray-200 bg-white text-gray-800 hover:bg-gray-50 dark:bg-transparent dark:border-neutral-700 dark:text-white dark:hover:bg-white/10"
              data-hs-collapse="#mobile-menu"
            >
              {/* Open Icon */}
              <svg
                className="hs-collapse-open:hidden size-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>

              {/* Close Icon */}
              <svg
                className="hs-collapse-open:block hidden size-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Navigation Menu */}
        <div
          id="mobile-menu"
          className="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block sm:mt-0 sm:ps-5"
        >
          <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0">
            
            {/* Links */}
            <a className="font-medium text-blue-500" href="#">
              Landing
            </a>

            <a className="font-medium text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500" href="#">
              Account
            </a>

            <a className="font-medium text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500" href="#">
              Work
            </a>

            <a className="font-medium text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500" href="#">
              Blog
            </a>

            {/* Dropdown */}
            <div className="hs-dropdown relative">
              <button
                type="button"
                className="hs-dropdown-toggle flex items-center text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 font-medium"
              >
                Dropdown
                <svg
                  className="hs-dropdown-open:-rotate-180 duration-300 ms-1 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              <div
                className="hs-dropdown-menu hidden z-10 bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-lg mt-2 p-1 shadow-md w-48"
              >
                <a
                  href="#"
                  className="block px-3 py-2 rounded-lg text-sm text-gray-800 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-neutral-700"
                >
                  About
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 rounded-lg text-sm text-gray-800 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-neutral-700"
                >
                  Downloads
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 rounded-lg text-sm text-gray-800 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-neutral-700"
                >
                  Team Account
                </a>
              </div>
            </div>
          </div>
        </div>

      </nav>
    </header>
  );
}

export default Navbar;
