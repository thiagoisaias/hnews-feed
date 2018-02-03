import React from "react";
import Enzyme, { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import Table from "./Table";

describe("Table", () => {
  it("renders without crashing", () => {
    const listForTest = [
      {
        objectID: 1,
        url: "random.url.test",
        title: "random item test",
        points: 553.43
      },
      {
        objectID: 2,
        url: "random.url.test.2",
        title: "random item 2 test ",
        points: 253.43
      }
    ];

    const functionForTest = () => {
      return;
    };

    const wrapper = shallow(
      <Table list={listForTest} onDismiss={functionForTest} />
    );
  });

  it("has a valid snapshot", () => {
    const listForTest = [
      {
        objectID: 1,
        url: "random.url.test",
        title: "random item test",
        points: 553.43
      },
      {
        objectID: 2,
        url: "random.url.test.2",
        title: "random item 2 test ",
        points: 253.43
      }
    ];

    const functionForTest = () => {
      return;
    };

    const component = shallow(
      <Table list={listForTest} onDismiss={functionForTest} />
    );
    expect(shallowToJson(component)).toMatchSnapshot();
  });
});
