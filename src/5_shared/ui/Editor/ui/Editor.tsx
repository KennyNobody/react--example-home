import { ReactNode } from 'react';
import classNames from 'classnames';
import cls from './Editor.module.scss';

interface EditorProps {
    data?: string;
    className?: string;
    children?: ReactNode;
}

export const Editor = (props: EditorProps) => {
    const {
        data,
        children,
        className,
    } = props;

    if (data) {
        return (
            <div
                className={classNames(cls.editor, className)}
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                    __html: data,
                }}
            />
        );
    }

    return (
        <div className={classNames(cls.editor, className)}>
            { children }
        </div>
    );
};
