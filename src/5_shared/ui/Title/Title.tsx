import classNames from 'classnames';
import { memo, ReactNode } from 'react';
import cls from './Title.module.scss';

export enum TitleModeType {
    MAIN = 'main',
    REGULAR = 'regular',
}

interface TitleProps {
    className?: string;
    mode: TitleModeType;
    children: ReactNode;
}

export const Title = memo((props: TitleProps) => {
    const { className, mode, children } = props;

    const Tag: keyof JSX.IntrinsicElements = mode === TitleModeType.MAIN ? 'h1' : 'h2';

    return (
        <Tag
            className={
                classNames(
                    cls.block,
                    cls[`block--${mode}`],
                    className,
                )
            }
        >
            { children }
        </Tag>
    );
});
