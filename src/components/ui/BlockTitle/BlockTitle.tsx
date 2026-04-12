import styles from './style.module.scss';

interface BlockTitleType {
	children: string;
}

export const BlockTitle = ({ children }: BlockTitleType) => {
	return <h3 className={styles.title}>{children}</h3>;
};
