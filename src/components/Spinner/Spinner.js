import React from "react";

function Spinner() {
  return (
    <div
      class="spinner-border"
      style="width: 3rem; height: 3rem;"
      role="status"
    >
      <span class="sr-only">Loading...</span>
    </div>
  );
}

export default Spinner;
