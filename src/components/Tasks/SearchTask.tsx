import React, { useRef } from "react";

const SearchTask = () => {
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleCheckSearchWord = () => {
    console.log(searchInputRef.current!.value);
  };

  return (
    <div>
      <input
        type="text"
        ref={searchInputRef}
        style={{ outline: "none" }}
        onChange={handleCheckSearchWord}
      />
    </div>
  );
};

export default SearchTask;
