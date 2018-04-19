import React from "react";
import Enzyme, { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import FiltersBar from "./FiltersBar";

describe("FiltersBar", () => {
  it("renders properly", () => {
    const props = { sortByDate: jest.fn(), sortByPopularity: jest.fn() };
    const FiltersBarTest = shallow(<FiltersBar {...props} />);
    expect(shallowToJson(FiltersBarTest)).toMatchSnapshot();
  });
});
