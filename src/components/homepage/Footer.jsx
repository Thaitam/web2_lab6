import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <span className="ml-3 text-xl">Nextjs Lab 6</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2023 —
            <a
              href="https://github.com/juliocesarfort"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-1 text-gray-600 hover:text-gray-800"
            >
              LeTranThaiTam
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
