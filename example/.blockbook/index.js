import {
	registerBlockType,
	registerTheme,
	registerBlockStory,
} from 'blockbook-api';

import twentyNineteenStyle from '!!raw-loader!./themes/twenty-nineteen.css';
import twentyTwentyStyle from '!!raw-loader!./themes/twenty-twenty.css';

// Register BlockBook blocks.
const coreBlocks = [
	'core/paragraph',
	'core/image',
	'core/heading',
	'core/quote',
	'core/gallery',
	'core/archives',
	'core/audio',
	'core/buttons',
	'core/calendar',
	'core/categories',
	'core/code',
	'core/columns',
	'core/cover',
	'core/embed',
	'core/file',
	'core/html',
	'core/media-text',
	'core/latestComments',
	'core/latest-posts',
	'core/list',
	'core/preformatted',
	'core/pullquote',
	'core/rss',
	'core/search',
	'core/group',
	'core/separator',
	'core/shortcode',
	'core/spacer',
	'core/table',
	'core/verse',
	'core/video',
	'core/tag-cloud',
	'core/social-links',
];
coreBlocks.forEach( ( block ) => registerBlockType( block ) );

// Register Themes
registerTheme( {
	name: 'twenty-nineteen',
	title: 'TwentyNineteen',
	editorStyles: twentyNineteenStyle,
} );
registerTheme( {
	name: 'twenty-twenty',
	title: 'TwentyTwenty',
	editorStyles: twentyTwentyStyle,
} );

// Register BlockStories
registerBlockStory( 'core/buttons', {
	name: 'Two Buttons',
	blocks: [
		{
			name: 'core/buttons',
			attributes: {
				align: 'center',
			},
			innerBlocks: [
				{
					name: 'core/button',
					attributes: {
						backgroundColor: 'very-dark-gray',
						borderRadius: 0,
						text: 'Get Started',
					},
					innerBlocks: [],
				},
				{
					name: 'core/button',
					attributes: {
						borderRadius: 0,
						className: 'is-style-outline',
						text: 'Learn more',
						textColor: 'very-dark-gray',
					},
					innerBlocks: [],
				},
			],
		},
	],
} );

registerBlockStory( 'core/buttons', {
	name: 'Three Buttons',
	blocks: [
		{
			name: 'core/buttons',
			attributes: {
				align: 'center',
			},
			innerBlocks: [
				{
					name: 'core/button',
					attributes: {
						borderRadius: 3,
						style: { color: { background: '#007cba' } },
						text: 'Authors',
						textColor: 'white',
					},
					innerBlocks: [],
				},
				{
					name: 'core/button',
					attributes: {
						borderRadius: 3,
						style: { color: { background: '#007cba' } },
						text: 'Publishers',
						textColor: 'white',
					},
					innerBlocks: [],
				},
				{
					name: 'core/button',
					attributes: {
						borderRadius: 3,
						style: { color: { background: '#1e1e1e' } },
						text: 'Books',
						textColor: 'white',
					},
					innerBlocks: [],
				},
			],
		},
	],
} );
