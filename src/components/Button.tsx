import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const getStyles = makeStyles(() => ({
  button: {
    textTransform: 'none',
  }
}));

interface ButtonProps{
    variant:any;
    color:any;
    label:string;
    onClick: any;
} 

function Buttons(props:ButtonProps) {
  const { variant, color, label, onClick } = props;
  const classes = getStyles();

  return (
    <React.Fragment>
      <Button
        variant={variant}
        color={color}
        onClick={onClick}
        className={classes.button}
      >
        {label}
      </Button>
    </React.Fragment>
  );
}

export default Buttons;