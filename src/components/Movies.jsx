import { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Pagination from "./common/Pagination";
import ListGroup from "./ListGroup";
import MoviesTable from "./MoviesTable";
import { paginate } from "./utils/paginate";
import SearchBox from "./common/SearchBox";
import { Link } from "react-router-dom";
import _ from "lodash";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    searchQuery: "",
    selectedGenre: "",
    sortColumn: {
      path: "title",
      order: "asc",
    },
  };

  componentDidMount() {
    const genres = [{ _id: null, name: "All Genres" }, ...getGenres()];
    this.setState({
      movies: getMovies(),
      genres,
    });
  }

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };

  handleLiked = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...this.state.movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };
  handleGenreClick = (genre) => {
    this.setState({ selectedGenre: genre, searchQuery: "", currentPage: 1 });
  };

  handleSearch = (query) => {
    this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      sortColumn,
      movies: allMovies,
      selectedGenre,
      searchQuery,
    } = this.state;

    let filtered = allMovies;

    if (searchQuery) {
      filtered = allMovies.filter((m) => console.log(m));
    } else if (selectedGenre && selectedGenre._id) {
      allMovies.filter(
        (m) => console.log(selectedGenre._id)
        // m.genre._id === selectedGenre._id
      );
    }

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: movies };
  };

  render() {
    const { length: count } = this.state.movies;
    const {
      pageSize,
      currentPage,
      sortColumn,
      selectedGenre,
      searchQuery,
      genres,
    } = this.state;

    if (count === 0) return <p>There are no movies in the database</p>;

    const { totalCount, data } = this.getPagedData();
    return (
      <>
        <div className="row">
          <div className="col-2">
            <ListGroup
              genres={genres}
              onItemGenre={this.handleGenreClick}
              selectedGenre={selectedGenre}
            ></ListGroup>
          </div>
          <div className="col">
            <Link
              className="btn btn-primary"
              style={{ marginBottom: 20 }}
              to="movies/new"
            >
              New Movie
            </Link>
            <SearchBox
              value={searchQuery}
              onChange={this.handleSearch}
            ></SearchBox>
            <p>Showing {totalCount} movies in the database</p>
            <MoviesTable
              sortColumn={sortColumn}
              movies={data}
              onLike={this.handleLiked}
              onDelete={this.handleDelete}
              onSort={this.handleSort}
            />
            <Pagination
              itemsCount={totalCount}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            ></Pagination>
          </div>
        </div>
      </>
    );
  }
}

export default Movies;
