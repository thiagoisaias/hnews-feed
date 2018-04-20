import React from "react";
import Enzyme, { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import FetchContainer from "./FetchContainer";

describe("FetchContainer", () => {
  it("renders properly", () => {
    const component = shallow(<FetchContainer />);
    expect(shallowToJson(component)).toMatchSnapshot();
  });
});
