import classNames from 'classnames';
import cls from './Loader.module.scss';

interface LoaderProps {
    className?: string
}

export const Loader = (props: LoaderProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.block, className)}>
            Крутящийся лоадер
        </div>
    );
};
