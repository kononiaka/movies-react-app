import React, { Component } from "react";
import TableHeader from "./common/TableHeader";
import TableBody from "./common/TableBody";
import Like from "./common/Like";

class MoviesTable extends Component {
  columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: (movie) => (
        <Like onClick={() => this.props.onLike(movie)} liked={movie.liked} />
      ),
    },
    {
      key: "delete",
      content: (movie) => (
        <button
          onClick={() => this.props.onDelete(movie)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      ),
    },
  ];

  render() {
    const { movies, onLike, onDelete, onSort, sortColumn } = this.props;

    return (
      <>
        <table className="table">
          <TableHeader
            onSort={onSort}
            sortColumn={sortColumn}
            columns={this.columns}
          ></TableHeader>
          <TableBody
            data={movies}
            onLike={onLike}
            onDelete={onDelete}
            columns={this.columns}
          ></TableBody>
        </table>
      </>
    );
  }
}

export default MoviesTable;
