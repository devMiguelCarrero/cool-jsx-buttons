import classes from './scifi-action-button.module.scss';

const SciFiActionButton = ({
  className = '',
  variant = 'regular',
  tag = 'button',
  disabled = false,
  ...props
}) => {
  switch (tag) {
    case 'link':
      return (
        <a
          {...props}
          href={props.href ? props.href : `#`}
          className={`${props.className && props.className} ${
            classes['scifi-action-button']
          } ${classes[`scifi-action-button--${variant}`]}`}
        >
          <span className={classes['button-text']}>{props.children}</span>
        </a>
      );
      break;

    default:
      return (
        <button
          type={props.type ? props.type : `button`}
          className={`${props.className && props.className} ${
            classes['scifi-action-button']
          } ${classes[`scifi-action-button--${variant}`]}`}
          disabled={disabled ? disabled : false}
        >
          <span className={classes['button-text']}>{props.children}</span>
        </button>
      );
      break;
  }
};
export default SciFiActionButton;
