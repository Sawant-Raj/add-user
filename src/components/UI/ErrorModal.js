import React from "react";
import Card from "./Card";
import Button from "./Button";
import "./ErrorModal.css";

const ErrorModal = (props) => {
  return ( //backdrop wali div me "background: rgba(0, 0, 0, 0.75)" se modal (overlay box) ka background semi-transparent black kr diya h or "position: fixed" modal ke background elements (form in this case) se interaction block kr dega
    //By setting an overlay element with position: fixed;, it essentially covers the entire viewport, effectively blocking interaction with elements in the background because it's "on top" of them and occupies the same space. It creates a layer on top of the content, preventing users from accessing the content beneath it.
    <div>
      <div className="backdrop" onClick={props.onConfirm}></div>
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
    </div>
  );
};

export default ErrorModal;
