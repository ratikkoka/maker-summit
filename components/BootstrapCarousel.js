import Image from "next/image";
import { Carousel } from "react-bootstrap";

const BootstrapCarousel = ({ images, specialLinks }) => {
  const driveLoader = ({ src }) => {
    return `https://res.cloudinary.com/rkoka/image/upload/submission_images/${src}`;
  };
  let imageArray = images.map((image) => {
    return (
      <Image
      className="d-block w-100"
      loader={driveLoader}
      alt="Project Image"
      layout="fill"
      src={image.substring(33)}
    />
    )
  })
  const links = specialLinks;
  if (!specialLinks) {
    links = [];
  }
  links.forEach((element) => {
    imageArray.push(<iframe src={element}></iframe>)
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
