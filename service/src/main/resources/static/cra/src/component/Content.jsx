import React from "react";
import Grid from "./Grid";

const Content = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
      <Grid></Grid>
    </div>
  );
};

export default Content;
