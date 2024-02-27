import { ReactNode } from 'react';
import classNames from 'classnames';
import { useTheme } from '5_shared/libs/hooks/useTheme';
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

    const { theme } = useTheme();

    if (data) {
        return (
            <div
                className={classNames(cls.editor, cls[`editor--${theme}`], className)}
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                    __html: data,
                }}
            />
        );
    }

    return (
        <div className={classNames(cls.editor, cls[`editor--${theme}`], className)}>
            { children }
        </div>
    );
};
