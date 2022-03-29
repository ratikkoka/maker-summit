import Image from "next/image";
import { Carousel } from "react-bootstrap";
import Iframe from "react-iframe";

const BootstrapCarousel = ({ images, specialLinks, onlyTn }) => {
  const driveLoader = ({ src }) => {
    return `https://res.cloudinary.com/rkoka/image/upload/submission_images/${src}`;
  };
  if (onlyTn) {
    images = [];
  }
  let imageArray = [];
  const links = specialLinks;
  if (!specialLinks) {
    links = [];
  }
  links.forEach((element) => {
    imageArray.push(
      // <iframe src={element}></iframe>
      <Iframe
        url={element}
        width="450px"
        height="450px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"
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
