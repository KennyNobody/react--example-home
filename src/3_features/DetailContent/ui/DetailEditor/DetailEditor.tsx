import classNames from 'classnames';
import {
    BlocksRenderer,
    type BlocksContent,
} from '@strapi/blocks-react-renderer';
import { Editor } from '5_shared/ui/Editor/Editor';
import cls from './DetailEditor.module.scss';
import { DetailLink } from '../DetailLink/DetailLink';
import { DetailCode } from '../DetailCode/DetailCode';
import { DetailList } from '../DetailList/DetailList';
import { DetailQuote } from '../DetailQuote/DetailQuote';
import { DetailPicture } from '../DetailPicture/DetailPicture';
import { DetailHeading } from '../DetailHeading/DetailHeading';
import { DetailParagraph } from '../DetailParagraph/DetailParagraph';

interface DetailEditorProps {
    className?: string;
    data: BlocksContent;
}

export const DetailEditor = (props: DetailEditorProps) => {
    const {
        data,
        className,
    } = props;

    return (
        <div className={classNames(cls.block, className)}>
            <Editor className={classNames(cls.editor)}>
                <BlocksRenderer
                    content={data}
                    blocks={{
                        paragraph: ({ children }) => DetailParagraph({ children }),
                        // @ts-ignore
                        image: ({ image }) => DetailPicture({ image }),
                        heading: ({ children, level }) => DetailHeading({ children, level }),
                        link: ({ children, url }) => DetailLink({ children, url }),
                        code: ({ children }) => DetailCode({ children }),
                        list: ({ children, format }) => DetailList({ children, format }),
                        quote: ({ children }) => DetailQuote({ children }),
                    }}
                />
            </Editor>
        </div>
    );
};
