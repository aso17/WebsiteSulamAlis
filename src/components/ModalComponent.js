import { Modal, Image } from "react-bootstrap";
import "../Components/StyleComponents/StyleModalComponent.css";
import ProcedureSulamAlis from "../assets/images/Services/ProcedureSulamAlis.webp";
import ProcedureSulamBibir from "../assets/images/Services/ProcedureSulamBibir.webp";
import ProcedureSulamEyeliner from "../assets/images/Services/ProcedureSulamEyeliner.webp";
const ModalComponent = (props) => {
  let modalHeading;
  let modalParagraf;

  switch (props.id) {
    case `1`:
      // code block
      modalHeading = `Procedure Sulam Alis`;
      modalParagraf = ProcedureSulamAlis;
      break;
    case `2`:
      // code block
      modalHeading = `Procedure Sulam Bibir`;
      modalParagraf = ProcedureSulamBibir;
      break;
    default:
      // code block
      modalHeading = `Procedure Sulam Eyeliner`;
      modalParagraf = ProcedureSulamEyeliner;
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {modalHeading}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Image className="ImagesModal" src={modalParagraf} alt="paragraf" />
      </Modal.Body>
    </Modal>
  );
};

export default ModalComponent;
