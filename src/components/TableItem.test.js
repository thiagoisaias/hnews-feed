import React from "react";
import Enzyme, { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import TableItem from "./TableItem";
import moment from "moment";

describe("TableItem", () => {
  it("renders properly", () => {
    const item = {
      objectID: 1,
      title: "random item test",
      points: 553.43,
      author: "Author Lorem",
      created_at: "2017-05-05T14:14:17.000Z",
      url: "random.url.test"
    };

    const TableItemTest = shallow(<TableItem {...item} />);
    expect(shallowToJson(TableItemTest)).toMatchSnapshot();
  });
});
