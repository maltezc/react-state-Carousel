import { useState } from "react";
import "./Carousel.css";
import Card from "./Card";


/** Carousel: displays images and arrows to navigate through them
 *
 * Props:
 * - photos: array of {src, caption} objects
 * - title: string describing the collection of images
 *
 * State:
 * - currCardIdx: integer for current card index
 *
 * App --> Carousel --> Card
 */
function Carousel({ photos, title }) {
  const [currCardIdx, setCurrCardIdx] = useState(0);

  const currCard = photos[currCardIdx];
  const total = photos.length;

  //if currCard is equal to 0 then left button should be hidden
  let leftHidden = "";
  if (currCardIdx === 0) {
    leftHidden = "hidden"
  }

  //if currCard is equal to total - 1, then right button should be hidden
  let rightHidden = "";
  if (currCardIdx === total - 1) {
    rightHidden = "hidden"
  }

  //Increments currCardIdx state by 1
  function goForward() {
    setCurrCardIdx(currCardIdx + 1);
  }

  //Decrements currCardIdx state by 1
  function goBackward() {
    setCurrCardIdx(currCardIdx - 1);
  }

  return (
    <div className="Carousel">
      <h1>{title}</h1>
      <div className="Carousel-main">
        <i
          className={`bi bi-arrow-left-circle ${leftHidden}`}
          onClick={goBackward}
        />
        <Card
          caption={currCard.caption}
          src={currCard.src}
          currNum={currCardIdx + 1}
          totalNum={total}
        />
        <i
          className={`bi bi-arrow-right-circle ${rightHidden}`}
          onClick={goForward}
        />
      </div>
    </div>
  );
}

export default Carousel;
