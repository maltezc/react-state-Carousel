import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";
import photos from "./photos.js";

test("smoke test", function () {
  render(<Carousel photos=' "src": "/static/media/image1.08e1519e765278b10548.jpg"'
    title="test caption" />)
})

// snapshot test
test("matches snapshot", function () {
  const { container } = render(<Carousel photos=' "src": "/static/media/image1.08e1519e765278b10548.jpg"'
    title="test caption" />)
  expect(container).toMatchSnapshot();
})

it("works when you click on the right arrow", function () {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />

  );

  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
});


test("demonstrate that leftArrow and rightArrow do the same thing", function () {
  const { debug, container } = render(<Carousel photos={photos} title="testTitle" />)
  debug(container)
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  const leftArrow = container.querySelector("bi bi-arrow-right-circle")
  console.log(container.querySelector("img"))
  fireEvent.click(rightArrow);


  // fireEvent.click(leftArrow);
  // const containerAfterleft = container

  console.log("originalContainer", originalContainer)
  console.log("containerAfterRight", containerAfterRight)

})

