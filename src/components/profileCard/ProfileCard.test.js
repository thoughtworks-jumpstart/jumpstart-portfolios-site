import React from "react";
import { shallow } from "enzyme";
import ProfileCard from "./ProfileCard";

test("ProfileCard should be displayed as two columns ", () => {
  const wrapper = shallow(<ProfileCard />);

  expect(wrapper.find("Col").length).toEqual(2);
  expect(wrapper.find("CardImg").length).toEqual(1);
  expect(wrapper.find("ProfileDescription").length).toEqual(1);
});
