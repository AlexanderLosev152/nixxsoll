import classNames from 'classnames';

import { SwiperComponent } from '../../ui/SwiperComponent/SwiperComponent';
import { portfolioSwiperItems } from '../../../data/portfolioSwiperItems';

import styles from './style.module.scss';
import { SectionWrapper } from '../../ui/SectionWrapper/SectionWrapper.tsx';

interface PortfolioItem {
	img: string;
	title: string;
	link?: string;
}

interface PortfolioProps {
	data?: PortfolioItem[];
}

export const Portfolio = ({ data = portfolioSwiperItems }: PortfolioProps) => {
	return (
		<section className={classNames(styles.portfolio, 'container', 'section')}>
			<SectionWrapper
				title={'Portfolio'}
				description={
					'Lorem ipsum dolor sit amet consectetur. Nunc viverra faucibus tpraesent elementum commodo.'
				}
				btn={'More Portfolio'}
			/>

			<div className={styles.portfolioSlider}>
				<SwiperComponent data={data}>
					{(items: PortfolioItem) => (
						<>
							<img className={styles.img} src={items.img} alt={items.title} />
							<div className={styles.wrapper}>
								<h4 className={styles.title}>{items.title}</h4>
								<a className={styles.link} href='#'>
									{items.link}
								</a>
							</div>
						</>
					)}
				</SwiperComponent>
			</div>
		</section>
	);
};
