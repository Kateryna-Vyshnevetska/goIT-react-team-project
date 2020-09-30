import React from "react";

const ModalBackDrop = (WrappedComponent) => {
  return class HOC extends React.Component {
    render() {
      return <WrappedComponent />;
    }
  };
};
