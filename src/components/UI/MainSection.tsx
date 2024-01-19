import React, { ReactNode, FC } from 'react';
import classes from './main-section.module.scss';

interface Props {
  backgroundColor?: string;
  title?: ReactNode | null;
  credits?: ReactNode | null;
  children: ReactNode;
  color?: string;
}

const MainSection: FC<Props> = ({
  backgroundColor = '#FFF',
  title = null,
  credits = null,
  children,
  color = '#030a1d',
}) => {
  return (
    <section
      style={{ backgroundColor: backgroundColor }}
      className={classes['main-section']}
    >
      {title && (
        <div
          style={{ color: color }}
          className={classes['main-section__title']}
        >
          {title}
        </div>
      )}
      <div className={classes['main-section__content']}>{children}</div>
      {credits && (
        <div
          style={{ color: color }}
          className={classes['main-section__credits']}
        >
          {credits}
        </div>
      )}
    </section>
  );
};
export default MainSection;
