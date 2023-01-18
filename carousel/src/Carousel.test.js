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
  const { debug, container } = render(
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


  // move forward in the carousel
  const leftArrow = container.querySelector(".bi-arrow-left-circle");
  fireEvent.click(leftArrow);

  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();

  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();


});


it("tests for hidden arrows on first and last page.", function () {
  const { debug, container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );

  const leftArrow = container.querySelector(".bi-arrow-left-circle");
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  debug(container);

  expect(leftArrow).toHaveClass("hidden")
  // expect(leftArrow).not.toBeVisible()
  // expect(container.querySelector(".bi bi-arrow-left-circle hidden")).toBeInTheDocument()

  fireEvent.click(rightArrow);
  fireEvent.click(rightArrow);
  debug(container);


  // expect(container.querySelector(".bi bi-arrow-right-circle hidden")).toBeInTheDocument()
  // expect(rightArrow).not.toBeVisible()
  expect(rightArrow).toHaveClass("hidden")


});

