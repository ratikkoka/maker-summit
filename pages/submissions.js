import { Slide } from 'react-awesome-reveal';
import dbConnect from '../lib/dbConnect';
import Submission from '../models/Submission';
import BootstrapCarousel from '../components/BootstrapCarousel';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

export default function Submissions({ submissions }) {

  const [items, setItems] = useState(submissions);
  const [popSubmission, setSubmission] = useState(submissions[0])
  const filtered = [...new Set(submissions.map((val) => val.category))];

  const filterItem = (curcat) => {
    const newItem = submissions.filter((newVal) => {
      return newVal.category === curcat;
    });
    setItems(newItem);
  };

  function getImages(image) {
    let images = image.split(', ');
    return images;
  }

  const driveLoader = ({ src }) => {
    return `https://res.cloudinary.com/rkoka/image/upload/submission_images/${src}`
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="filters">
        <Button
            variant="primary"
            onClick={() => setItems(submissions)}
          >
            All
        </Button>
        {filtered.map((Val, id) => {
          return (
            <Button
              variant="primary"
              onClick={() => filterItem(Val)}
              key={id}
            >
              {Val}
            </Button>
          );
        })}
      </div>
      <Modal show={show} onHide={handleClose} id="popup">
            <Modal.Header closeButton>
              <h5 className="modal-title" id="popupTitle">{popSubmission.title}</h5>
            </Modal.Header>
            <Modal.Body> 
              <BootstrapCarousel images={getImages(popSubmission.images)} />
              <p>{popSubmission.firstName + " " + popSubmission.lastName}</p>
              <p>{popSubmission.desc}</p>
          </Modal.Body>
      </Modal>
      <div className="grid">
        <Slide direction='up'>
          {items.map((submission) => (
            <div key={submission._id}>
              <div className="card" onClick={() => {handleShow(); setSubmission(submission)}}>
                <Image 
                  loader={driveLoader} 
                  alt="Project Image"
                  layout='fill' 
                  src={getImages(submission.images)[0].substring(33)} 
                />
                <h5 className="submission-name">{submission.title}</h5>
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </>
  )
}

/* Retrieves submission(s) data from mongodb database */
export async function getServerSideProps() {
  try {
    await dbConnect()

    /* find all the data in our database */
    const result = await Submission.find({})
    const submission = result.map((doc) => {
      const submission = doc.toObject()
      submission._id = submission._id.toString()
      return submission
    })

    return { props: { submissions: submission } }
  } catch(e) {
    console.log(e)
  }
}
