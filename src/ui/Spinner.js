import React from "react";
import Loader from "react-loader-spinner";

export class Spinner extends React.Component {
  render() {
    return (
      <Loader
        className="spinner"
        type="BallTriangle"
        color="#7cf7a3"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    );
  }
}
