import { registerBlock } from 'blockbook-api';

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

// Register BlockBook blocks.
coreBlocks.forEach( ( block ) => registerBlock( block ) );