import React from "react";
import styles from "./PageNotFound.module.css";
export function PageNotFound({ children }) {
  return (
    <>
      <div className={styles.section}>
        <div className={styles.main}>
          <h1 className={styles.errorTitle}>404 error</h1>
          <h1 className={styles.errorTitle}>Page not found :(</h1>
          <p className={styles.errorText}>
            Something went wrong, please try again later
          </p>
          <button>Go home</button>
        </div>
      </div>
    </>
  );
}
