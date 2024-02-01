import React, { ReactNode, FC } from 'react';
import classes from './button-grid.module.scss';
import cx from 'classnames';
import { classNames } from '@/shared/types/types';

interface Props {
  children: ReactNode;
  className?: classNames;
}

export const GridItem: FC<Props> = ({ children, className }) => {
  const classNames = cx(classes['button-grid__item'], {
    [className]: className,
  });

  return <div className={classNames}>{children}</div>;
};

interface ButtonGridProps {
  children: ReactNode;
  className?: classNames;
}

const ButtonGrid: FC<ButtonGridProps> = ({ children, className }) => {
  const classNames = cx(classes['button-grid'], {
    [className]: className,
  });

  return <div className={classNames}>{children}</div>;
};
export default ButtonGrid;
