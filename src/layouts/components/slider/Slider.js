import React from "react";
import { UncontrolledCarousel } from "reactstrap";

const items = [
  {
    src: "https://cf.shopee.vn/file/c31a6c61d9b39d6725c700fc0ef634dc_xxhdpi",
  },
  {
    src: "https://cf.shopee.vn/file/61082f0e6af2ca79044dd6b9f1c53b8a_xxhdpi",
  },
  {
    src: "https://cf.shopee.vn/file/61082f0e6af2ca79044dd6b9f1c53b8a_xxhdpi",
  },
];

function Slider() {
  return <UncontrolledCarousel items={items} style={{ width: "100%" }} />;
}

export default Slider;
