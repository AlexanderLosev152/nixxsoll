import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';

import {ReactNode} from 'react';

import 'swiper/swiper.css';

export const SwiperComponent = <T, >({
	                                     data,
	                                     children
                                     }: {
	data: T[],
	children: (item: T) => ReactNode,
	data?: PortfolioItem[] | undefined
}) => {
	return (
		<Swiper navigation={true} modules={[Navigation]} className="mySwiper">
			{data.map((item, index) => (
				<SwiperSlide key={index}>{children(item)}</SwiperSlide>
			))}
		</Swiper>
	);
};
