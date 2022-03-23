import Image from 'next/image';
import { useState } from 'react';

const BootstrapCarousel = ({ images }) => {
    const driveLoader = ({ src }) => {
        return `https://res.cloudinary.com/rkoka/image/upload/submission_images/${src}`
    }
    const imageArray = [...images];

    return (
        <>
            <div id="submissionCarousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    {imageArray.map((image, index) => {
                        if (index ===0) {
                            return (<li data-target="#submissionCarousel" data-slide-to="0" className="active"></li>);
                        } else {
                            return (<li data-target="#submissionCarousel" data-slide-to={index}></li>)
                        }
                    })}
                </ol>
                <div className="carousel-inner">
                    {imageArray.map((image, index) => {
                        let classNames = "carousel-item";
                        if (index === 0) {
                            classNames = "carousel-item active";
                        }
                        return (
                            <div className={classNames} key={index}>
                                <Image 
                                    className="d-block w-100"
                                    loader={driveLoader} 
                                    alt="Project Image"
                                    layout='fill' 
                                    src={image.substring(33)} 
                                />
                            </div>
                        );
                    })}
                </div>
                <a className="carousel-control-prev" href="#submissionCarousel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#submissionCarousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </>
    )
}

export default BootstrapCarousel;