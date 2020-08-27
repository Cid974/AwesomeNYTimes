import React from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import "../style/Back.css";

const Back = () => {
  const history = useHistory();

  return (
    <Button
      variant="contained"
      className="Back"
      onClick={() => history.goBack()}
    >
      Back
    </Button>
  );
};

export default Back;
