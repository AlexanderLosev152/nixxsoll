import classNames from 'classnames';
import { partnersItems } from '../../../data/partnersItems';
import styles from './style.module.scss';

interface PartnerItem {
	id: number;
	img: string;
	alt: string;
}

interface PartnersProps {
	className?: string;
	theme?: 'white' | 'black';
	data?: PartnerItem[];
}

export const Partners: React.FC<PartnersProps> = ({
	className,
	theme = 'white',
	data = partnersItems
}) => {
	return (
		<section
			className={classNames(styles.partners, className, {
				[styles.whiteTheme]: theme === 'white',
				[styles.blackTheme]: theme === 'black'
			})}
		>
			<div className='container'>
				<ul className={styles.items}>
					{data.map(({ img, alt, id }) => (
						<li key={id} className={styles.item}>
							<img className={styles.image} src={img} alt={alt} />
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};
