import './App.scss';
import {About} from './components/layout/About/About';
import {Header} from './components/layout/Header/Header';
import {Hero} from './components/layout/Hero/Hero';
import {Partners} from './components/layout/Partners/Partners';
import {Portfolio} from './components/layout/Portfolio/Portfolio';
import {Services} from './components/layout/Services/Services';

import {partnersItems} from './data/partnersItems.ts';
import {portfolioSwiperItems} from './data/portfolioSwiperItems.ts';
import {Testimonials} from './components/layout/Testimonials/Testimonials.tsx';

export const App = () => {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<About />
				<Services />
				<Portfolio data={portfolioSwiperItems} />
				<Partners data={partnersItems} theme="black" />
				<Partners data={partnersItems} />
				<Testimonials />
			</main>
		</>
	);
};
