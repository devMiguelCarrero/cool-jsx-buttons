import React from 'react';
import classes from './main-section.module.scss';

const MainSection = (props) => {
  return (
    <section
      style={{ backgroundColor: props.backgroundColor }}
      className={classes['main-section']}
    >
      {props.children}
    </section>
  );
};
export default MainSection;
