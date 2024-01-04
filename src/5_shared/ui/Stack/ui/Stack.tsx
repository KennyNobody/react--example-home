import { ReactNode } from 'react';
import classNames from 'classnames';
import cls from './Stack.module.scss';

interface StackProps {
    className?: string;
    children: ReactNode;
}

export const Stack = (props: StackProps) => {
    const {
        children,
        className,
    } = props;

    return (
        <div className={classNames(cls.block, className)}>
            { children }
        </div>
    );
};
