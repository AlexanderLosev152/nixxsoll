import LOGO from '/images/logo.png';

import styles from './style.module.scss';

export const Logo = () => {
	return (
		<div className={styles.logo}>
			<a href='#'>
				<img src={LOGO} alt='logo' />
			</a>
		</div>
	);
};
