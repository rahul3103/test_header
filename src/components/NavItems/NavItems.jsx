import React from 'react';
import { Popover } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './NavItems.css';

const useStyles = makeStyles(theme => ({
  pop: {
    overflow: 'initial',
    top: '60px !important'
  }
}));

export default function NavItems(props) {
  const classes = useStyles();
  const { id, popEl, handleClose, open } = props;
  let left = popEl && popEl.offsetLeft;
  if (left > 500) left = popEl.offsetWidth - 17;
  return (
    <Popover
      id={id}
      open={open}
      anchorEl={popEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center'
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center'
      }}
      classes={{ paper: classes.pop }}
    >
      <div>
        {popEl && popEl.offsetLeft && (
          <div style={{ left }} className="arrow-up" />
        )}
        {props.children}
      </div>
    </Popover>
  );
}
