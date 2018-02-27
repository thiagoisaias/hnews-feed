import React from "react";
import Enzyme, { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import Header from "./Header";

describe("Header", () => {
  it("renders without crashing", () => {
    const functionForTest = () => {
      return;
    };
    const HeaderForTest = (
      <Header
        value={""}
        onChange={functionForTest}
        onSubmit={functionForTest}
      />
    );
    const wrapper = shallow(HeaderForTest);
  });

  it("has a valid snapshot", () => {
    const functionForTest = () => {
      return;
    };
    const HeaderForTest = (
      <Header
        value={""}
        onChange={functionForTest}
        onSubmit={functionForTest}
      />
    );
    expect(shallowToJson(HeaderForTest)).toMatchSnapshot();
  });
});
