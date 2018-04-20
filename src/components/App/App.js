import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import Table from "../../components/Table/Table";
import Spinner from "../../components/Spinner/Spinner";

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  margin: 16px auto;
  &:hover {
    opacity: 0.9;
  }
`;

const ErrorMessage = styled.p`
  font-size: 14px;
  color: red;
  text-align: center;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ""
    };
  }

  onSearchChange = event => {
    this.setState({
      searchTerm: event.target.value
    });
  };

  onSearchSubmit = event => {
    event.preventDefault();
    this.props.fetchSearchTopStories(this.state.searchTerm);
  };

  render() {
    const {
      results,
      searchKey,
      error,
      isLoading,
      sortByDate,
      sortByPopularity,
      fetchSearchTopStories
    } = this.props;

    const page =
      (results && results[searchKey] && results[searchKey].page) || 0;
    const list =
      (results && results[searchKey] && results[searchKey].hits) || [];

    if (error) {
      return <ErrorMessage>{error}</ErrorMessage>;
    }

    return (
      <Container>
        <Header
          value={this.state.searchTerm}
          onChange={this.onSearchChange}
          onSubmit={this.onSearchSubmit}
          sortByDate={sortByDate}
          sortByPopularity={sortByPopularity}
        />
        {isLoading ? (
          <Spinner height={54} width={54} />
        ) : (
          <Fragment>
            <Table list={list} page={page} />
            <LoadMoreButton
              onClick={() => {
                fetchSearchTopStories(searchKey, page + 1);
              }}
            >
              Load More
            </LoadMoreButton>
          </Fragment>
        )}
      </Container>
    );
  }
}

App.propTypes = {
  searchKey: PropTypes.string.isRequired,
  results: PropTypes.object.isRequired,
  error: PropTypes.string,
  isLoading: PropTypes.bool,
  sortByDate: PropTypes.func.isRequired,
  sortByPopularity: PropTypes.func.isRequired,
  fetchSearchTopStories: PropTypes.func.isRequired
};

export default App;
