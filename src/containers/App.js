import React, { Component, Fragment } from "react";
import styled from "styled-components";
import axios from "axios";
import Header from "../components/Header";
import Table from "../components/Table";
import Spinner from "../utils/Spinner";

const DEFAULT_QUERY = "React";
const DEFAULT_HPP = "30";
const DEFAULT_RANGE = "ALL";
const PATH_BASE = "https://hn.algolia.com/api/v1/search?query=";
const PARAM_PAGE = "page=";
const PARAM_HPP = "hitsPerPage=";

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const LoadMoreButton = styled.button`
  display: block;
  outline: none;
  border: none;
  cursor: pointer;
  color: #fff;
  background-color: #ff742b;
  border-radius: 3px;
  padding: 6px 12px;
  font-size: 12px;
  margin: 0 auto;
  &:hover {
    opacity: 0.9;
  }
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      results: null,
      searchKey: "",
      searchTerm: DEFAULT_QUERY,
      searchRange: DEFAULT_RANGE,
      error: null
    };
  }

  componentDidMount() {
    const { searchTerm } = this.state;
    this.setState({
      searchKey: searchTerm
    });
    if (this.needsToFetchStories) {
      this.fetchSearchTopStories(searchTerm);
    }
  }

  setSearchTopStories = result => {
    const { hits, page } = result;
    const { searchKey, results } = this.state;

    const oldHits =
      results && results[searchKey] ? results[searchKey].hits : [];
    const updatedHits = [...oldHits, ...hits];

    const filteredUpdatedHits = [...updatedHits].filter(hit => {
      return hit.title && hit.points && hit.author && hit.created_at && hit.url;
    });

    this.setState({
      results: {
        ...results,
        [searchKey]: { hits: filteredUpdatedHits, page }
      },
      isLoading: false
    });
  };

  needsToFetchStories = searchTerm => {
    console.log(
      "Does it need to fetch new hits?",
      !this.state.results[searchTerm]
    );
    return !this.state.results[searchTerm];
  };

  fetchSearchTopStories = (searchTerm, page = 0) => {
    this.setState({
      isLoading: true
    });
    axios(
      `${PATH_BASE}${searchTerm}&${PARAM_PAGE}${page}&${PARAM_HPP}${DEFAULT_HPP}`
    )
      .then(response => {
        this.setSearchTopStories(response.data);
      })
      .catch(error => this.setState({ error, isLoading: false }));
  };

  onSearchChange = event => {
    this.setState({
      searchTerm: event.target.value
    });
  };

  onSearchSubmit = event => {
    const { searchTerm } = this.state;
    this.setState({
      searchKey: searchTerm
    });
    if (this.needsToFetchStories(searchTerm)) {
      this.fetchSearchTopStories(searchTerm);
    }
    event.preventDefault();
  };

  sortByPopularity = () => {
    const { searchKey } = this.state;
    const list = [...this.state.results[searchKey].hits];

    const sortedList = list.sort((a, b) => {
      return b.points - a.points;
    });

    this.setState({
      results: {
        [searchKey]: {
          hits: sortedList
        }
      }
    });
  };

  sortByDate = () => {
    const { searchKey } = this.state;
    const list = [...this.state.results[searchKey].hits];

    const sortedList = list.sort((a, b) => {
      return new Date(b.created_at) - new Date(a.created_at);
    });

    this.setState({
      results: {
        [searchKey]: {
          hits: sortedList
        }
      }
    });
  };

  render() {
    const { results, searchTerm, searchKey, error } = this.state;
    const page =
      (results && results[searchKey] && results[searchKey].page) || 0;
    const list =
      (results && results[searchKey] && results[searchKey].hits) || [];

    if (error) {
      return <p>Something went wrong.</p>;
    }

    return (
      <Container>
        <Header
          value={searchTerm}
          onChange={this.onSearchChange}
          onSubmit={this.onSearchSubmit}
          sortByDate={this.sortByDate}
          sortByPopularity={this.sortByPopularity}
        />
        {this.state.isLoading ? (
          <Spinner />
        ) : (
          <Fragment>
            <Table list={list} />
            <LoadMoreButton
              onClick={() => this.fetchSearchTopStories(searchKey, page + 1)}
            >
              Load More
            </LoadMoreButton>
          </Fragment>
        )}
      </Container>
    );
  }
}

export default App;
