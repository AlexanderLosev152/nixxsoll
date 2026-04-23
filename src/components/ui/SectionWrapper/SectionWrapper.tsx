import styles from './style.module.scss';
import { Title } from '../Title/Title.tsx';

interface SectionWrapperProps {
	title: string;
	btn: string;
	description: string;
}

export const SectionWrapper = ({
	title,
	description,
	btn
}: SectionWrapperProps) => {
	return (
		<div className={styles.wrapper}>
			<Title>{title}</Title>
			<p className={styles.description}>{description}</p>
			<a className={styles.btn} href='#'>
				{btn}
			</a>
		</div>
	);
};
