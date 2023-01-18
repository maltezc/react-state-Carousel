import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";

describe("Card tests", function () {
  // smoke test
  test("smoke test", function () {
    render(<Card caption="test caption" src="test caption" currNum={3} totalNum={3}/>)
  })

  // snapshot test
  test("matches snapshot", function () {
    const {container} = render(<Card caption="test caption" src="test caption" currNum={3} totalNum={3}/>)
    expect(container).toMatchSnapshot();
  })

})

