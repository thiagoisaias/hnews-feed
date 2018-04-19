import React from "react";
import Enzyme, { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import Table from "./Table";

describe("Table", () => {
  it("renders properly", () => {
    const list = [
      {
        objectID: 1,
        url: "random.url.test",
        title: "random item test",
        author: "Author Lorem",
        created_at: "2017-05-05T14:14:17.000Z",
        points: 553.43
      },
      {
        objectID: 2,
        url: "random.url.test.2",
        title: "random item 2 test ",
        author: "Author Lorem",
        created_at: "2017-05-05T14:14:17.000Z",
        points: 253.43
      }
    ];

    const props = { list };
    const TableTest = shallow(<Table {...props} />);
    expect(shallowToJson(TableTest)).toMatchSnapshot();
  });
});
