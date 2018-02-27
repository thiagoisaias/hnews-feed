import React, { Component } from "react";
import styled from "styled-components";
import Table from "../components/Table";
import Header from "../components/Header";
import FiltersBar from "../components/FiltersBar";
import axios from "axios";

const DEFAULT_QUERY = "React";
const DEFAULT_HPP = "20";
const PATH_BASE = "https://hn.algolia.com/api/v1/search?query=";
const PARAM_PAGE = "page=";
const PARAM_HPP = "hitsPerPage=";

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: null,
      searchKey: "",
      searchTerm: DEFAULT_QUERY,
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

    this.setState({
      results: {
        ...results,
        [searchKey]: { hits: updatedHits, page }
      }
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
    axios(
      `${PATH_BASE}${searchTerm}&${PARAM_PAGE}${page}&${PARAM_HPP}${DEFAULT_HPP}`
    )
      .then(response => {
        this.setSearchTopStories(response.data);
      })
      .catch(error => this.setState({ error }));
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
        />
        <FiltersBar />
        <Table list={list} />
        <button onClick={() => this.fetchSearchTopStories(searchKey, page + 1)}>
          Load More
        </button>
      </Container>
    );
  }
}

export default App;
