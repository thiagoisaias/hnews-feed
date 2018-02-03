import React from "react";
import Enzyme, { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import Search from "./Search";

describe("Search", () => {
  it("renders without crashing", () => {
    const functionForTest = () => {
      return;
    };
    const SearchForTest = (
      <Search
        value={""}
        onChange={functionForTest}
        onSubmit={functionForTest}
      />
    );
    const wrapper = shallow(SearchForTest);
  });

  test("has a valid snapshot", () => {
    const functionForTest = () => {
      return;
    };

    const SearchForTest = (
      <Search
        value={""}
        onChange={functionForTest}
        onSubmit={functionForTest}
      />
    );
    const component = shallow(SearchForTest);
    expect(shallowToJson(component)).toMatchSnapshot();
  });
});
