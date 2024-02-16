import { ReactNode } from 'react';
import classNames from 'classnames';
import cls from './Main.module.scss';

interface MainProps {
    className?: string;
    children: ReactNode;
}

export const Main = (props: MainProps) => {
    const {
        children,
        className,
    } = props;

    return (
        <main className={classNames(cls.block, className)}>
            { children }
        </main>
    );
};
