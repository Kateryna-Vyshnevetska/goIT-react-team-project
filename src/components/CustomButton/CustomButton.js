import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function CustomButton({ name, type, handleClick }) {
  const classes = useStyles();

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<Icon>{type}</Icon>}
        onClick={handleClick}
      >
        {name}
      </Button>
    </>
  );
}
