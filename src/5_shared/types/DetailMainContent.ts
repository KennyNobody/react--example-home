import { type BlocksContent } from '@strapi/blocks-react-renderer';

interface DetailMainType {
    id: number;
    showPreview: boolean;
    previewTitle: string;
    previewCaption: string;
    previewInverted: boolean;
    introCaption: string;
    content: BlocksContent;
}

export {
    type DetailMainType,
};
