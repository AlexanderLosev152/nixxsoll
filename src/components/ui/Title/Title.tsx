import React from 'react';

import classNames from 'classnames';

import styles from './style.module.scss';

interface TitleProps {
	children: React.ReactNode;
	tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
	className?: string;
}

export const Title = ({ children, tag = 'h2', className = '' }: TitleProps) => {
	const Tag = tag;
	return <Tag className={classNames(styles.title, className)}>{children}</Tag>;
};
