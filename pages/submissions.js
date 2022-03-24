import { Slide } from 'react-awesome-reveal';
import dbConnect from '../lib/dbConnect';
import Submission from '../models/Submission';
import BootstrapCarousel from '../components/BootstrapCarousel';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import GroupNames from '../components/GroupNames';

export default function Submissions({ submissions }) {

  const [items, setItems] = useState(submissions);
  const [popSubmission, setSubmission] = useState(submissions[0])
  const filtered = [...new Set(submissions.map((val) => val.category))];
  const [scroll, setScroll] = useState("none");

  const filterItem = (curcat) => {
    const newItem = submissions.filter((newVal) => {
      return newVal.category === curcat;
    });
    setItems(newItem);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, [])

  const handleScroll = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setScroll("block");
    } else {
      setScroll("none");
    }
  }

  const handleClick = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

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
              <GroupNames pop={popSubmission}/>
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
      <Button id="btn-back-to-top" onClick={handleClick} style={{display: scroll}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
        </svg>
      </Button>
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
