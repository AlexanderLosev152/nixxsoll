import classNames from 'classnames';

import styles from './style.module.scss';
import { Logo } from '../../ui/Logo/Logo';
import { Nav } from '../../ui/Nav/Nav';

export const Header = () => {
	return (
		<header className={classNames(styles.header, 'container')}>
			<Logo />
			<Nav />
		</header>
	);
};
