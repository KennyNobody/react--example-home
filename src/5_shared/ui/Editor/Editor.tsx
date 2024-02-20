import { ReactNode } from 'react';
import classNames from 'classnames';
import cls from './Editor.module.scss';

export enum EditorMode {
    REGULAR = 'regular',
    PREVIEW = 'preview',
}

interface EditorProps {
    data?: string;
    mode: EditorMode;
    className?: string;
    children?: ReactNode;
}

export const Editor = (props: EditorProps) => {
    const {
        data,
        mode,
        children,
        className,
    } = props;

    if (data) {
        return (
            <div
                className={classNames(cls.editor, cls[`editor--${mode}`], className)}
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                    __html: data,
                }}
            />
        );
    }

    return (
        <div className={classNames(cls.editor, cls[`editor--${mode}`], className)}>
            { children }
        </div>
    );
};
