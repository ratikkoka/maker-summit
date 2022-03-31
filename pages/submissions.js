import { Slide } from "react-awesome-reveal";
import dbConnect from "../lib/dbConnect";
import Submission from "../models/Submission";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Link as Scroll } from "react-scroll";
import dynamic from "next/dynamic";

export default function Submissions({ submissions }) {
  const [items, setItems] = useState(submissions);
  const [popSubmission, setSubmission] = useState(submissions[0]);
  const filtered = [...new Set(submissions.map((val) => val.category))];
  const [scroll, setScroll] = useState("none");

  let categoryCount = Object.fromEntries(filtered.map((k) => [k, 1]));

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
      document.body.scrollTop > 750 ||
      document.documentElement.scrollTop > 750
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
    return `https://res.cloudinary.com/rkoka/image/upload/f_auto/submission_images/${src}`;
  };

  const secondLoader = ({ src }) => {
    return `https://res.cloudinary.com/john-you/image/upload/f_auto/thumbnails/${src}`;
  };

  function getCategory(submission) {
    let category = submission.category;
    let count = categoryCount[category];
    let title = category + " " + count;
    categoryCount[category] = count + 1;
    return title;
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  function getImg(submission) {
    let tempLoader = driveLoader;
    if (submission.onlyThumbnail) {
      tempLoader = secondLoader;
    }
    return (
      <Image
        loader={tempLoader}
        alt="Project Image"
        layout="intrinsic"
        width={400}
        height={350}
        src={getImages(submission.images)[0].substring(33)}
      />
    );
  }

  const CreateModal = dynamic(() => import("../components/CreateModal"));

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
        <Button variant="primary" 
          href="https://docs.google.com/forms/d/e/1FAIpQLSckqpJ9azNKkrc--oJkQIvU-NlbPEUr8riF3SsrqkgKffxtCA/viewform?usp=sf_link">
          Vote Here!
        </Button>
        <Button variant="primary" href="https://hfs.uw.edu/Maker-Summit-2022/Schedule-of-Events">
          Events
        </Button>
      </div>
      {show && (
        <CreateModal
          popSubmission={popSubmission}
          show={show}
          handleClose={handleClose}
        />
      )}
      <div className="grid">
        <Slide direction="up" triggerOnce={true}>
          {items.map((submission) => (
            <div key={submission._id}>
              <div
                className="card"
                onClick={() => {
                  handleShow(driveLoader);
                  setSubmission(submission);
                }}
              >
                {getImg(submission)}
                <div className="title-box">
                  <p className="submission-name">{submission.title}</p>
                </div>
                <div className="category-box">
                  <p className="submission-name">{getCategory(submission)}</p>
                </div>
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

export async function getStaticProps() {
  try {
    await dbConnect();
    /* find all the data in our database */
    const result = await Submission.find({});
    const submission = result.map((doc) => {
      const submission = doc.toObject();
      submission._id = submission._id.toString();
      return submission;
    });

    return { props: { submissions: submission } };
  } catch (e) {
    console.log(e);
  }
}
