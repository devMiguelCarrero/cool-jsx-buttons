import React from 'react';
import classes from './button-grid.module.scss';

export const GridItem = ({ children }) => {
  return <div className={classes['button-grid__item']}>{children}</div>;
};

const ButtonGrid = ({ children }) => {
  return <div className={classes['button-grid']}>{children}</div>;
};
export default ButtonGrid;
