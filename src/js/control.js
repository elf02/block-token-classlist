import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, FormTokenField } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { store as blocksStore } from '@wordpress/blocks';

export const withBlockTokenListControl = (BlockEdit) => (props) => {
    const { name, attributes, setAttributes } = props;
    const { className } = attributes;

    const blockSupportClass = useSelect(
        (select) => select(blocksStore).getBlockSupport(name, 'customClassName'),
        [name]
    );

    if (blockSupportClass === false) {
        return <BlockEdit {...props} />;
    }

    const getClassList = () => {
        if (
            typeof className !== 'undefined' &&
            className.trim() !== ''
        ) {
            return className.trim().split(' ');
        }
    }

    return (
        <>
            <BlockEdit {...props} />
            <InspectorControls>
                <PanelBody title={__('Custom CSS-Classes', 'elf02-block-token-classlist')}>
                    <FormTokenField
                        value={getClassList()}
                        label={false}
                        onChange={(tokens) => setAttributes({ className: tokens.join(' ').trim() })}
                    />
                </PanelBody>
            </InspectorControls>
        </>
    );
};