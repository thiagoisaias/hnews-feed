import React from "react";
import Enzyme, { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import Spinner from "./Spinner";

describe("Spinner", () => {
  it("renders properly", () => {
    const component = shallow(<Spinner width={32} height={32} />);
    expect(shallowToJson(component)).toMatchSnapshot();
  });
});
