import Image from 'next/image';
import { Carousel } from 'react-bootstrap';

const BootstrapCarousel = ({ images }) => {
    const driveLoader = ({ src }) => {
        return `https://res.cloudinary.com/rkoka/image/upload/submission_images/${src}`
    }
    const imageArray = [...images];

    return (
        <>
            <Carousel>
                    {imageArray.map((image, index) => {
                        return (
                            <Carousel.Item key={index}>
                                <Image 
                                    className="d-block w-100"
                                    loader={driveLoader} 
                                    alt="Project Image"
                                    layout='fill' 
                                    src={image.substring(33)} 
                                />
                            </Carousel.Item>
                        );
                    })}
            </Carousel>
        </>
    )
}

export default BootstrapCarousel;