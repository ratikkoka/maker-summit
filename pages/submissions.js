import { Slide } from 'react-awesome-reveal';
import dbConnect from '../lib/dbConnect';
import Submission from '../models/Submission';
import BootstrapCarousel from '../components/BootstrapCarousel';
import Image from 'next/image';
import { useState } from 'react';

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

  return (
    <>
      <div className="filters">
        <button
            className="btn btn-primary"
            onClick={() => setItems(submissions)}
          >
            All
        </button>
        {filtered.map((Val, id) => {
          return (
            <button
              className="btn btn-primary"
              onClick={() => filterItem(Val)}
              key={id}
            >
              {Val}
            </button>
          );
        })}
      </div>
      <div className="modal fade" id="popup" tabIndex="-1" role="dialog" aria-labelledby="popupTitle" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="popupTitle">{popSubmission.title}</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body"> 
              <BootstrapCarousel images={getImages(popSubmission.images)} />
              <p>{popSubmission.firstName + " " + popSubmission.lastName}</p>
              <p>{popSubmission.desc}</p>
            </div>
          </div>
        </div>
        </div>
      <div className="grid">
        <Slide direction='up'>
          {items.map((submission) => (
            <div key={submission._id}>
              <div className="card" data-toggle="modal" data-target="#popup" onClick={() => {setSubmission(submission)}}>
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
