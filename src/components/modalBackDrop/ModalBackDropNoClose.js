import React from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./ModalBackDrop.module.css";
import stylesTransition from "./ModalBackDropTransition.module.css";

const modalBackDropNoClose = (WrappedComponent) => {
  return class ModalBackDropNoClose extends React.Component {
    state = {
      isOpen: false,
    };

    componentDidMount() {
      this.setState({ isOpen: true });

      document.styleSheets.overflow = "hidden";
    }

    componentWillUnmount() {
      document.styleSheets.overflow = "auto";
    }

    closeModal = () => {
      this.props.close();
    };

    render() {
      return (
        <div className={styles.modal}>
          <CSSTransition
            in={this.state.isOpen}
            timeout={250}
            classname={stylesTransition}
            unmountOnExit
          >
            <WrappedComponent {...this.props} onClick={this.closeModal} />
          </CSSTransition>
        </div>
      );
    }
  };
};

export default modalBackDropNoClose;
