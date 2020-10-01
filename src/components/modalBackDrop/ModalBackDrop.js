import React from "react";
import { CSSTransition } from "react-transition-group";

const ModalBackDrop = (WrappedComponent) => {
  return class HOC extends React.Component {
    state = {
      isOpen: false,
    };

    componentDidMount() {
      this.setState({ isOpen: true });
      window.addEventListener("keydown", this.closeModalKeydown);
      document.addEventListener("click", this.closeModalOverlay);
      document.styleSheets.overflow = "hidden";
    }

    componentWillUnmount() {
      window.removeEventListener("keydown", this.closeModalKeydown);
      document.removeEventListener("click", this.closeModalOverlay);
      document.styleSheets.overflow = "auto";
    }

    closeModal = () => {
      this.props.close();
    };

    closeModalKeydown = (evt) => {
      if (evt.code === "Escape") {
        this.closeModal();
      }
    };

    closeModalOverlay = (evt) => {
      if (evt.target.dataset.type === "modal") {
        this.closeModal();
      }
    };

    render() {
      return (
        <div data-type="modal" classname={}>
          <CSSTransition
            in={this.state.isOpen}
            timeout={250}
            classname={}
            unmountOnExit
          >
            <WrappedComponent {...this.props} classname={} />
          </CSSTransition>
        </div>
      );
    }
  };
};
