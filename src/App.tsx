import './App.scss';
import { About } from './components/layout/About/About';
import { Header } from './components/layout/Header/Header';
import { Hero } from './components/layout/Hero/Hero';
import { Services } from './components/layout/Services/Services';

export const App = () => {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<About />
				<Services />
			</main>
		</>
	);
};
