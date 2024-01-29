import classes from './bit16-snx-button.module.scss';

import cx from 'classnames';

const Bit16SnxButton = ({ children, background }) => {
  const classNames = cx(classes['bit16-button'], {
    [classes[`has-${background}-background`]]: background,
  });

  return (
    <button className={classNames}>
      <div
        className={cx(
          classes['bit16-button__background'],
          classes['bit16-button__background--lower']
        )}
      />
      <div
        className={cx(
          classes['bit16-button__background'],
          classes['bit16-button__background--upper']
        )}
      />
      <span className={classes['bit16-button__content']}>{children}</span>
    </button>
  );
};

export default Bit16SnxButton;
