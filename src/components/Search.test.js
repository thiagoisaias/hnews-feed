import React from "react";
import Enzyme, { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import Search from "./Search";

describe("Search", () => {
  it("renders properly", () => {
    const props = { value: "", onChange: () => {}, onSubmit: () => {} };
    const SearchTest = shallow(<Search {...props} />);
    expect(shallowToJson(SearchTest)).toMatchSnapshot();
  });
});
