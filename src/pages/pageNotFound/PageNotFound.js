import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./PageNotFound.module.css";
export function PageNotFound() {
  const history = useHistory();
  return (
    <>
      <div className={styles.body}>
        <div className={styles.main}>
          <button
            onClick={() =>
              history.push({
                pathname: "/",
              })
            }
            className={styles.button}
          >
            Go home
          </button>
        </div>
      </div>
    </>
  );
}
