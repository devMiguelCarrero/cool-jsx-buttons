import classes from './display-button.module.scss';

import cx from 'classnames';

const DisplayButton = ({
  className = null,
  disabled = false,
  active = false,
  size = 'small',
  ...props
}) => {
  const classNames = cx(classes['display-button'], {
    [className]: className,
    [classes.active]: active,
    [classes[`display-button--size-${size}`]]: size,
  });

  return (
    <button
      {...props}
      type={props.type}
      className={classNames}
      disabled={disabled}
      onClick={props.onClick}
    ></button>
  );
};

export default DisplayButton;
