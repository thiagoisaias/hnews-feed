import React, { Component } from "react";
import axios from "axios";
import App from "../../components/App/App";

class FetchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      results: {},
      searchParam: "search",
      searchKey: "React",
      error: ""
    };
  }

  componentDidMount() {
    if (this.needsToFetchStories) {
      this.fetchSearchTopStories(this.state.searchKey);
    }
  }

  setSearchTopStories = result => {
    const { hits, page } = result;
    const { searchKey, results } = this.state;

    const oldHits =
      results && results[searchKey] ? results[searchKey].hits : [];
    const updatedHits = [...oldHits, ...hits];

    const filteredUpdatedHits = [...updatedHits].filter(hit => {
      return (
        (hit.title || hit.story_title) &&
        hit.points &&
        hit.author &&
        hit.created_at &&
        (hit.url || hit.story_url)
      );
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

  fetchSearchTopStories = (searchTerm = "", page = 0) => {
    const searchParam = this.state.searchParam;
    this.setState({
      searchKey: searchTerm,
      isLoading: true
    });
    axios(
      `https://hn.algolia.com/api/v1/${searchParam}?query=${searchTerm}&page=${page}`
    )
      .then(response => {
        this.setSearchTopStories(response.data);
      })
      .catch(error =>
        this.setState({ error: error.message, isLoading: false })
      );
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
    const customProps = {
      searchKey: this.state.searchKey,
      results: this.state.results,
      error: this.state.error,
      isLoading: this.state.isLoading,
      sortByDate: this.sortByDate,
      sortByPopularity: this.sortByPopularity,
      fetchSearchTopStories: this.fetchSearchTopStories
    };
    return <App {...customProps} />;
  }
}

export default FetchContainer;
