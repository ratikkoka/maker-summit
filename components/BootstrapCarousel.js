import Image from "next/image";
import { Carousel } from "react-bootstrap";

const BootstrapCarousel = ({ images, specialLinks, onlyTn }) => {
  const driveLoader = ({ src }) => {
    return `https://res.cloudinary.com/rkoka/image/upload/submission_images/${src}`;
  };
  if (onlyTn) {
    images=[];
  }
  let imageArray = [];
  const links = specialLinks;
  if (!specialLinks) {
    links = [];
  }
  links.forEach((element) => {
    imageArray.push(<iframe src={element}></iframe>)
  })
  images.forEach((image) => {
    imageArray.push(
      <Image
      className="d-block w-100"
      loader={driveLoader}
      alt="Project Image"
      layout="fill"
      src={image.substring(33)}
    />);
  })
  return (
    <>
      <Carousel>
        {imageArray.map((image, index) => {
          return (
            <Carousel.Item key={index}>
              {image}
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
};

export default BootstrapCarousel;
