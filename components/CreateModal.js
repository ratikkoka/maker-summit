import { Modal } from "react-bootstrap";
import BootstrapCarousel from "./BootstrapCarousel";
import GroupNames from "./GroupNames";
import Iframe from "react-iframe";

export default function CreateModal({ popSubmission, show, handleClose }) {
  function getImages(image) {
    let images = image.split(", ");
    return images;
  }

  let size = "";

  if (popSubmission.newLinks) {
    size = "lg";
  }

  return (
    <Modal size={size} show={show} onHide={handleClose} id="popup">
      <Modal.Header closeButton>
        <div className="title-div">
          <h5 className="modal-title" id="popupTitle">
            {popSubmission.title}
          </h5>
        </div>
      </Modal.Header>
      <Modal.Body>
        {popSubmission.newLinks ? (
          <Iframe
            url={popSubmission.newLinks[0]}
            width="600px"
            height="450px"
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"
          />
        ) : (
          <BootstrapCarousel
            images={getImages(popSubmission.images)}
            specialLinks={popSubmission.newLinks}
          />
        )}
        <GroupNames pop={popSubmission} />
        <p>{popSubmission.desc}</p>
      </Modal.Body>
    </Modal>
  );
}
