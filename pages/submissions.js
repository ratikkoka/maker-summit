import { Slide } from 'react-awesome-reveal';
import dbConnect from '../lib/dbConnect';
import Submission from '../models/Submission';
import Image from 'next/image';
import { useState } from 'react';

export default function Submissions({ submissions }) {

  const [items, setItems] = useState(submissions);

  const filtered = [...new Set(submissions.map((val) => val.category))];

  const filterItem = (curcat) => {
    const newItem = submissions.filter((newVal) => {
      return newVal.category === curcat;
    });
    setItems(newItem);
  };

  const driveLoader = ({ src }) => {
    return `https://drive.google.com/${src}`
  }

  function getImages(image) {
    let images = image.split(', ');
    return 'uc?' + images[0].substring(30);
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
      <div className="grid">
        <Slide direction='up'>
          {items.map((submission) => (
            <div key={submission._id}>
              <div className="card">
                <Image 
                  loader={driveLoader} 
                  alt="Project Image" 
                  layout='fill' 
                  src={getImages(submission.images)} 
                />
                <h5 className="submission-name">{submission.title}</h5>
                <div className="main-content">
                  <p className="submission-name">{submission.firstName + " " + submission.lastName}</p>
                  <div className="likes info">
                    <p className="label">{submission.desc}</p>
                  </div>
                </div>
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
