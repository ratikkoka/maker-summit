import { Modal } from "react-bootstrap";
import BootstrapCarousel from "./BootstrapCarousel";
import GroupNames from "./GroupNames";

export default function CreateModal({ popSubmission, show, handleClose }) {
  function getImages(image) {
    let images = image.split(", ");
    return images;
  }

  return (
    <Modal show={show} onHide={handleClose} id="popup">
      <Modal.Header closeButton>
        <div className="title-div">
          <h5 className="modal-title" id="popupTitle">
            {popSubmission.title}
          </h5>
        </div>
      </Modal.Header>
      <Modal.Body>
        <BootstrapCarousel images={getImages(popSubmission.images)} />
        <GroupNames pop={popSubmission} />
        <p>{popSubmission.desc}</p>
      </Modal.Body>
    </Modal>
  );
}
