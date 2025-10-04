import React from "react";
import searchIcon from "../../assets/icons/icon-search.svg";
const options = ["London", "Wembley", "Maidenhead", "Bath"];

function SearchBar({ isOpen, setIsOpen, country, setCountry }: any) {
  return (
    <div className="flex justify-center mb-8">
      <div className="flex items-center">
        <div className="relative w-[526px] h-[56px]">
          <img
            className="absolute left-5 top-1/2 transform -translate-y-1/2 w-[16px] h-[16px]"
            src={searchIcon}
          ></img>
          <input
            value={country}
            onFocus={() => setIsOpen(true)}
            onBlur={() => setTimeout(() => setIsOpen(false), 150)}
            type="text"
            id="search-bar"
            placeholder="Search for a place..."
            className="bg-[var(--color-bg-search-box)] ps-20 text-[var(--color-text)] w-[526px] h-[56px] rounded-lg"
          />

          {isOpen && (
            <ul className="absolute mt-2 w-full bg-[var(--color-bg-search-box)] rounded-lg shadow-lg ">
              {options.map((city, index) => (
                <li
                  key={index}
                  onClick={() => {
                    setCountry(city);
                    setIsOpen(false);
                  }}
                  className="p-3 hover:bg-[var(--color-color-stroke)] cursor-pointer text-[var(--color-text)] text-left"
                >
                  {city}
                </li>
              ))}
            </ul>
          )}
        </div>
        <button className="bg-[var(--color-search-button)] text-[var(--color-text)] rounded-lg mx-5 px-5 py-2">
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
