import React from "react";
import TextField from "@material-ui/core/TextField";

export function BasicInput({ label, value, name, handleChange }) {
  return (
    <>
      <TextField
        id="outlined-basic"
        className="basic-input"
        value={value}
        name={name}
        label={label}
        variant="outlined"
        onChange={({ target: { value } }) => handleChange(value)}
      />
    </>
  );
}
