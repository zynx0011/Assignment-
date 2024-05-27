import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="flex justify-between items-center p-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          {/* <img src="path/to/logo.png" alt="Logo" className="h-8" /> */}
          <span className="text-2xl font-bold text-blue-600">unfluke</span>
        </div>

        {/* Navigation */}
        <nav className="flex space-x-6">
          <a href="#" className="text-blue-600">
            LeaderBoard
          </a>
          <div className="relative">
            <button className="text-gray-700 hover:text-blue-600">
              Historical Trading
              <span className="ml-1">&#9662;</span>
            </button>
            {/* Dropdown menu */}
            <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-lg z-10 hidden group-hover:block">
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Option 1
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Option 2
              </a>
            </div>
          </div>
          <a href="#" className="text-gray-700 hover:text-blue-600">
            Historical Chart
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600">
            Scanners
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600">
            Alerts
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600">
            Basic Backtest
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600">
            Advanced Backtest
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600">
            Pricing
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600">
            My Earnings
          </a>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <button className="relative">
            <span className="text-yellow-500">&#128276;</span>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
          </button>
          <button className="flex items-center space-x-1">
            <span className="text-yellow-500">&#128176;</span>
            <span>0</span>
          </button>
          <button className="flex items-center">
            <img
              src="data:image/png;base64,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"
              alt="User Avatar"
              className="w-8 h-8 rounded-full"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
