import * as React from "react";
import * as babel from "@babel/core";
import App from "../";

it("renders properly", () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot(<App isShow/>);
});