import React from "react";
import loading from "./spinner.gif";

const Spinner = (props) => {
  return (
    <div className="text-center">
      <img src={loading} alt="loading" />
    </div>
  );
};

export default Spinner;
