import React, {ChangeEvent, useRef} from 'react';

const Search = ({setSearch}: any) => {
  const debounceRef = useRef<NodeJS.Timeout>();

  const changed = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      console.log(e.target.value);
    }, 1000);
  };

  return (
    <form className="text-center m-4">
      <input
        className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
        onChange={changed}
        placeholder="Search..."
        type="text"
      />
    </form>
  );
};

export default Search;
