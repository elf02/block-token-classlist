import { withBlockTokenListControl } from './control';
import { addFilter } from '@wordpress/hooks';

addFilter('editor.BlockEdit', 'elf02/block-token-classlist-edit', withBlockTokenListControl, 9999);