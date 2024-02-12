import classes from './bit16-snx-button.module.scss';

import cx from 'classnames';

const Bit16SnxButton = ({ children, background }) => {
  const classNames = cx(classes['bit16-button'], {
    [classes[`has-${background}-background`]]: background,
  });

  return <button className={classNames}>{children}</button>;
};

export default Bit16SnxButton;
