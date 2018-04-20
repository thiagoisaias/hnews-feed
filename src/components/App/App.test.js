import React from "react";
import Enzyme, { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import App from "./App";

describe("App", () => {
  it("renders properly", () => {
    const props = {
      searchKey: "Hello",
      results: {},
      error: null,
      isLoading: false,
      sortByDate: jest.fn(),
      sortByPopularity: jest.fn(),
      setSearchKey: jest.fn(),
      fetchSearchTopStories: jest.fn()
    };
    const component = shallow(<App {...props} />);
    expect(shallowToJson(component)).toMatchSnapshot();
  });
});
