import { ReactNode } from 'react';
import { EditorWrapper } from '5_shared/ui/EditorWrapper/EditorWrapper';

interface DetailCodeProps {
    children: ReactNode;
}

export const DetailCode = (props: DetailCodeProps) => {
    const {
        children,
    } = props;

    return (
        <EditorWrapper>
            <pre>
                <code>
                    { children }
                </code>
            </pre>
        </EditorWrapper>
    );
};
