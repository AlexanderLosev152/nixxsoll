import React from 'react';
import { Title } from '../../ui/Title/Title';
import { servicesItems } from '../../../data/servicesItems';
import classNames from 'classnames';
import styles from './style.module.scss';

interface ServiceItem {
	id: number | string;
	img: string;
	title: string;
	description: string;
}

const typedServicesItems: ServiceItem[] = servicesItems;

export const Services: React.FC = () => {
	return (
		<section className={classNames(styles.services, 'section')} id='services'>
			<div className={classNames(styles.wrapper, 'container')}>
				<Title className={styles.title}>Services</Title>

				<ul className={styles.servicesItems}>
					{typedServicesItems.map(({ id, img, title, description }) => (
						<li className={styles.servicesItem} key={id}>
							<img className={styles.servicesImg} src={img} alt={title} />
							<h3 className={styles.servicesTitle}>{title}</h3>
							<p className={styles.servicesDescription}>{description}</p>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};
