import React from "react";
import Enzyme, { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import Button from "./Button";

describe("Button", () => {
  it("renders without crashing", () => {
    const functionForTest = () => {
      return;
    };
    const ButtonForTest = <Button onClick={functionForTest}>Button</Button>;
    const wrapper = shallow(ButtonForTest);
  });

  it("has a valid snapshot", () => {
    const functionForTest = () => {
      return;
    };
    const ButtonForTest = <Button onClick={functionForTest}>Button</Button>;
    expect(shallowToJson(ButtonForTest)).toMatchSnapshot();
  });
});
