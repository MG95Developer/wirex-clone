import {
	RiFacebookCircleFill,
	RiLinkedinBoxFill,
	RiTwitterXFill,
} from 'react-icons/ri';

export const footerData = [
	{
		id: 1,
		title: 'Wirex app & card',
		links: [
			{
				id: 1,
				name: 'Currency Exchange',
				link: 'https://wirexapp.com/currency-exchange',
			},
			{
				id: 2,
				name: 'Security',
				link: 'https://wirexapp.com/security',
			},
			{
				id: 3,
				name: 'Cryptocurrencies',
				link: 'https://wirexapp.com/cryptocurrencies',
			},
			{
				id: 4,
				name: 'X-tras',
				link: 'https://wirexapp.com/x-tras',
			},
			{
				id: 5,
				name: 'Refer a Friend',
				link: 'https://wirexapp.com/refer-a-friend',
			},
		],
	},
	{
		id: 2,
		title: 'Resources',
		links: [
			{
				id: 1,
				name: 'Help Centre',
				link: 'https://wirexapp.com/help',
			},
			{
				id: 2,
				name: 'Blog',
				link: 'https://wirexapp.com/blog',
			},
			{
				id: 3,
				name: 'Discord',
				link: 'https://discord.com/invite/f8UGp4dH6g',
			},
			{
				id: 4,
				name: 'Careers',
				link: 'https://wirexapp.com/careers',
			},
		],
	},
	{
		id: 3,
		title: 'Accounts',
		links: [
			{
				id: 1,
				name: 'Sign In',
				link: 'https://id.wirexapp.com/login',
			},
			{
				id: 2,
				name: 'Join Wirex',
				link: 'https://id.wirexapp.com/registration',
			},
		],
	},
];

export const footerSocialMedia = [
	{
		id: 1,
		icon: <RiTwitterXFill />,
		socialLink: 'https://twitter.com/wirexapp?lang=en',
	},
	{
		id: 2,
		icon: <RiFacebookCircleFill />,
		socialLink: 'https://www.facebook.com/wirexapp/',
	},
	{
		id: 3,
		icon: <RiLinkedinBoxFill />,
		socialLink: 'https://uk.linkedin.com/company/wirex-limited',
	},
];
