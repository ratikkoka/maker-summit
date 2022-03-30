import Image from "next/image";
import { Carousel } from "react-bootstrap";
import Iframe from "react-iframe";

const BootstrapCarousel = ({ images, attachedVids, onlyTn }) => {
  const driveLoader = ({ src }) => {
    return `https://res.cloudinary.com/rkoka/image/upload/f_auto/submission_images/${src}`;
  };
  if (onlyTn) {
    images = [];
  }
  let imageArray = [];
  const links = attachedVids;
  if (!attachedVids) {
    links = [];
  }
  links.forEach((element) => {
    imageArray.push(
      <Iframe
        url={element}
        width="80%"
        height="450px"
        display="initial"
        position="relative"
        className="iframe-vid"
      />
    );
  });
  images.forEach((image, index) => {
    imageArray.push(
      <Image
        className="d-block w-100"
        loader={driveLoader}
        alt={"Project Image " + index}
        layout="fill"
        src={image.substring(33)}
      />
    );
  });
  return (
    <>
      <Carousel>
        {imageArray.map((image, index) => {
          return <Carousel.Item key={index}>{image}</Carousel.Item>;
        })}
      </Carousel>
    </>
  );
};

export default BootstrapCarousel;
