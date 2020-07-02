import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ActionBtn.css";

const ActionBtn = (props) => {
  return (
    <>
      <Button
        variant="none"
        type="button"
        className="ActionBtn"
      >
        <span className="buttonp" >
          <i style={{ color: "goldenrod" }} className="fas fa-shopping-cart"></i>
          {props.cta}
        </span>
      </Button>
    </>
  );
};

export default ActionBtn;
