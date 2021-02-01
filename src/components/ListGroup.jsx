import React from "react";

const ListGroup = ({ genres, textProperty, selectedGenre, onItemGenre }) => {
  return (
    <ul className="list-group">
      {genres.map((genre) => (
        <li
          key={genre[textProperty]}
          style={{ cursor: "pointer" }}
          className={
            selectedGenre._id === genre._id
              ? "list-group-item active"
              : "list-group-item"
          }
          onClick={() => onItemGenre(genre)}
        >
          {genre[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  valueProperty: "_id",
  textProperty: "name",
};

export default ListGroup;
