interface navItemsType {
	id: number;
	path: string;
	title: string;
}

export const navItems: navItemsType[] = [
	{ id: 1, path: '/about', title: 'About' },
	{ id: 2, path: '/services', title: 'IT Services' },
	{ id: 3, path: '/portfolio', title: 'Portfolio' },
	{ id: 4, path: '/contact', title: 'Contact Us' }
];
