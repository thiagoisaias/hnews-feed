import React from "react";
import Enzyme, { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import TableItem from "./TableItem";
import moment from "moment";

describe("TableItem", () => {
  it("renders without crashing", () => {
    const itemTest = {
      objectID: 1,
      title: "random item test",
      points: 553.43,
      author: "Author Lorem",
      created_at: "2017-05-05T14:14:17.000Z",
      url: "random.url.test"
    }
    const TableItemForTest = <TableItem created_at={moment(itemTest.created_at).fromNow()} {...itemTest} />;
    const wrapper = shallow(TableItemForTest);
  });

  it("has valid snapshot", () => {
    const itemTest = {
      objectID: 1,
      title: "random item test",
      points: 553.43,
      author: "Author Lorem",
      created_at: "2017-05-05T14:14:17.000Z",
      url: "random.url.test"
    }
    const HeaderForTest = <TableItem created_at={moment(itemTest.created_at).fromNow()} {...itemTest} />;
    expect(shallowToJson(HeaderForTest)).toMatchSnapshot();
  });
});
