import React from "react";
import Enzyme, { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import Search from "./Search";

describe("Search", () => {
  it("renders properly", () => {
    const props = { value: "", onChange: jest.fn(), onSubmit: jest.fn() };
    const SearchTest = shallow(<Search {...props} />);
    expect(shallowToJson(SearchTest)).toMatchSnapshot();
  });
});
