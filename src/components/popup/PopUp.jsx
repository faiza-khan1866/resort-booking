import React, { useState, useEffect } from "react";
import { Modal, Container } from "react-bootstrap";
import CancelIcon from "@material-ui/icons/Cancel";
import API from "../../langapi/http";

const PopUp = (props) => {
  const [popUpData, setPopUpData] = useState("");

  const getPopUpData = () => {
    API.get(`/pop-up/63465d630ac6a76716045822`)
      .then((response) => {
        const allData = response.data?.data;
        setPopUpData(allData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPopUpData();
  }, []);

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="Documents"
      style={{ paddingLeft: "0px" }}
    >
      <span className={"modalIcon"} onClick={props.onHide}>
        <CancelIcon class="icon" />
      </span>
      <Container>
        <div>
          <Modal.Body>
            <a href={`/${props.activeLang}${popUpData?.link}`}>
              <img
                src={process.env.REACT_APP_IMAGE_BASE_URL + popUpData?.image}
                alt="popup fishermans cove resort"
                className="img-fluid"
                // style={{
                //     width: "100%",
                //     maxWidth: "600px",
                //     height: "auto"
                // }}
              />
            </a>
          </Modal.Body>
        </div>
      </Container>
    </Modal>
  );
};

export default PopUp;
