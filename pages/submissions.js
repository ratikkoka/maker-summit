import { Slide } from "react-awesome-reveal";
import BootstrapCarousel from "../components/BootstrapCarousel";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Link as Scroll } from "react-scroll";

export default function Submissions({ submissions }) {
  const [items, setItems] = useState(submissions);
  const [popSubmission, setSubmission] = useState(submissions[0]);
  const filtered = [...new Set(submissions.map((val) => val.category))];
  const [scroll, setScroll] = useState("none");

  const filterItem = (curcat) => {
    const newItem = submissions.filter((newVal) => {
      return newVal.category === curcat;
    });
    setItems(newItem);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setScroll("block");
    } else {
      setScroll("none");
    }
  };

  function getImages(image) {
    let images = image.split(", ");
    return images;
  }

  const driveLoader = ({ src }) => {
    return `https://res.cloudinary.com/rkoka/image/upload/submission_images/${src}`;
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div id="submissionStart">
      <div className="filters">
        <Button variant="primary" onClick={() => setItems(submissions)}>
          All
        </Button>
        {filtered.map((Val, id) => {
          return (
            <Button variant="primary" onClick={() => filterItem(Val)} key={id}>
              {Val}
            </Button>
          );
        })}
      </div>
      <Modal show={show} onHide={handleClose} id="popup">
        <Modal.Header closeButton>
          <h5 className="modal-title" id="popupTitle">
            {popSubmission.title}
          </h5>
        </Modal.Header>
        <Modal.Body>
          <BootstrapCarousel images={getImages(popSubmission.images)} />
          <p>{popSubmission.firstName + " " + popSubmission.lastName}</p>
          <p>{popSubmission.desc}</p>
        </Modal.Body>
      </Modal>
      <div className="grid">
        <Slide direction="up">
          {items.map((submission) => (
            <div key={submission._id}>
              <div
                className="card"
                onClick={() => {
                  handleShow();
                  setSubmission(submission);
                }}
              >
                <Image
                  loader={driveLoader}
                  alt="Project Image"
                  layout="fill"
                  src={getImages(submission.images)[0].substring(33)}
                />
                <h5 className="submission-name">{submission.title}</h5>
              </div>
            </div>
          ))}
        </Slide>
      </div>
      <Scroll to="submissionStart" offset={-70} smooth={true}>
        <Button id="btn-back-to-top" style={{ display: scroll }}>
          <ArrowUpwardIcon />
        </Button>
      </Scroll>
    </div>
  );
}
