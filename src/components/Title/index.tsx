import React from 'react';
import cx from 'classnames';

import classes from './title.module.scss';

interface Props {
  children: React.ReactNode;
  variant?: 'regular' | 'colossal' | 'massive' | 'medium';
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: any;
}

const Title: React.FC<Props> = ({
  children,
  tag = 'h2',
  variant = 'regular',
  className,
  ...props
}) => {
  const classNames = cx(classes.title, {
    [className]: className,
    [classes[`title--${variant}`]]: variant,
  });

  const Tag = tag;

  return (
    <Tag className={classNames} {...props}>
      {children}
    </Tag>
  );
};

interface ExcerptProps {
  children: React.ReactNode;
  className?: any;
}

export const TitleExcerpt: React.FC<ExcerptProps> = ({
  children,
  className,
}) => {
  const classNames = cx(classes.title__excerpt, {
    [className]: className,
  });

  return <span className={classNames}>{children}</span>;
};

export default Title;
