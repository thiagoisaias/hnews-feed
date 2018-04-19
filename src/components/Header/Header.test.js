import React from "react";
import Enzyme, { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import Header from "./Header";

describe("Header", () => {
  it("renders properly", () => {
    const props = {
      value: "",
      onChange: jest.fn(),
      onSubmit: jest.fn(),
      sortByDate: jest.fn(),
      sortByPopularity: jest.fn()
    };
    const HeaderTest = shallow(<Header {...props} />);
    expect(shallowToJson(HeaderTest)).toMatchSnapshot();
  });
});
