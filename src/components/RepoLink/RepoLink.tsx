import { FC } from 'react';
import GithubIcon from './icon/GithubIcon';

import classes from './repo-link.module.scss';

interface Props {
  link: string;
}

const RepoLink: FC<Props> = ({ link }) => {
  return (
    <a className={classes['repo-link']} href={link} target="_blank">
      <span className={classes['repo-link__content']}>
        <GithubIcon />
        Go to source repository
      </span>
    </a>
  );
};
export default RepoLink;
