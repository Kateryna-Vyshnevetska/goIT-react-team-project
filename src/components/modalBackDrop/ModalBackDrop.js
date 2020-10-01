import React from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./ModalBackDrop.module.css";
import stylesTransition from "./ModalBackDropTransition.module.css";

const modalBackDrop = (WrappedComponent) => {
  return class ModalBackDrop extends React.Component {
    state = {
      isOpen: false,
    };

    componentDidMount() {
      this.setState({ isOpen: true });
      window.addEventListener("keydown", this.closeModalKeydown);
      document.addEventListener("click", this.closeModalOverlay);
      document.styleSheets.overflow = "hidden";
      console.log(this.props);
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
        <div cdata-type="modal" className={styles.modal}>
          <CSSTransition
            in={this.state.isOpen}
            timeout={250}
            classname={stylesTransition}
            unmountOnExit
          >
            <WrappedComponent
              {...this.props}
              classname={styles.component}
              onClick={this.closeModal}
            />
          </CSSTransition>
        </div>
      );
    }
  };
};

export default modalBackDrop;
