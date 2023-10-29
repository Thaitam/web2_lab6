import React from "react";

const SearchBox = () => {
  return (
    <div className="flex justify-center flex-1">
      <div className="relative text-gray-600">
        <input
          type="search"
          name="serch"
          placeholder="Search"
          className="bg-white h-10 w-80 px-5 pr-10 rounded-full text-sm focus:outline-none"
        />
        <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
          <svg
            className="h-4 w-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            id="Capa_1"
            x="0px"
            y="0px"
            viewBox="0 0 56.966 56.966"
            width="512px"
            height="512px"
          >
            <path
              d="M55.526,51.075L41.1,36.649c3.396-3.996,5.441-9.128,5.441-14.704c0-12.682-10.318-23-23-23s-23,10.318-23,23
              s10.318,23,23,23c5.576,0,10.708-2.045,14.704-5.441l14.426,14.426c0.391,0.391,0.902,0.586,1.414,0.586
              s1.023-0.195,1.414-0.586C56.116,54.124,56.116,51.98,55.526,51.075z M23.483,41.483c-8.271,0-15-6.729-15-15s6.729-15,15-15
              s15,6.729,15,15S31.754,41.483,23.483,41.483z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
