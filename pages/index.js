import { Fade, Slide } from 'react-awesome-reveal';
import dbConnect from '../lib/dbConnect'
import Submission from '../models/Submission'

export default function Home({ submissions }) {

  function getImages(image) {
    let images = image.split(', ');
    return images;
  }

  return (
    <>
      <Slide direction='up'>
        {submissions.map((submission) => (
          <div key={submission._id}>
            <div className="card">
              <img src={getImages(submission.images)[0]} />
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
