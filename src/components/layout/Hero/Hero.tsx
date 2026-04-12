import classNames from 'classnames';

import styles from './style.module.scss';
import { Title } from '../../ui/Title/Title';

import BG from '/images/hero.png';

export const Hero = () => {
	return (
		<section className={classNames(styles.hero, 'container', 'section')}>
			<Title className={styles.heroTitle}>
				Bridging the gap between ideas and reality
			</Title>
			<div className={styles.heroBg}>
				<img src={BG} alt='bg' />
			</div>
		</section>
	);
};
