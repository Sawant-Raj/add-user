import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import Button from "./Button";
import "./ErrorModal.css";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onConfirm} />; //backdrop wali div me "background: rgba(0, 0, 0, 0.75)" se modal (overlay box) ka background semi-transparent black kr diya h or "position: fixed" modal ke background elements (form in this case) se interaction block kr dega
  //By setting an overlay element with position: fixed;, it essentially covers the entire viewport, effectively blocking interaction with elements in the background because it's "on top" of them and occupies the same space. It creates a layer on top of the content, preventing users from accessing the content beneath it.
};

const ModalOverlay = (props) => {
  return (
    <Card className="modal">
      <header className="header">
        <h2>{props.title}</h2>
      </header>
      <div className="content">
        <p>{props.message}</p>
      </div>
      <footer className="actions">
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
