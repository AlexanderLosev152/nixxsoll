import { navItems } from '../../../data/navItems';
import styles from './style.module.scss';

export const Nav = () => {
	return (
		<nav className={styles.nav}>
			<ul className={styles.menu}>
				{navItems.map(({ id, path, title }) => (
					<li key={id}>
						<a className={styles.link} href={path}>
							{title}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};
