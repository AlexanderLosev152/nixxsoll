import styles from './style.module.scss';

interface ButtonType {
	children: string;
}

export const Button = ({ children }: ButtonType) => {
	return <button className={styles.btn}>{children}</button>;
};
