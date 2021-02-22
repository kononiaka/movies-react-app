import React from "react";

const SearchBox = ({ value, onChange }) => {
  return (
    <input
      type="text"
      name="name"
      value={value}
      className="form-control my-3"
      placeholder="Search..."
      onChange={(e) => onChange(e.currentTarget.value)}
    ></input>
  );
};

export default SearchBox;
