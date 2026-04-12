import classNames from 'classnames';

import styles from './style.module.scss';
import { Title } from '../../ui/Title/Title';

export const About = () => {
	return (
		<section
			className={classNames(styles.about, 'section', 'container')}
			id='about'
		>
			<Title>About Company</Title>
			<div className={styles.content}>
				<p>
					Lorem ipsum dolor sit amet consectetur. Vestibulum nascetur vitae
					sapien
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur. Vestibulum nascetur vitae
					sapien
				</p>
				<div>12 34 56</div>
			</div>
		</section>
	);
};
