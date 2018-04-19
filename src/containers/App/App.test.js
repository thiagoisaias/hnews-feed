import React from "react";
import Enzyme, { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import App from "./App";

describe("App", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<App />);
  });

  test("has a valid snapshot", () => {
    const component = shallow(<App />);
    expect(shallowToJson(component)).toMatchSnapshot();
  });
});
