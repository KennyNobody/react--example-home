import classNames from 'classnames';
import { Loader } from '5_shared/ui/Loader/Loader';
import cls from './LoaderPage.module.scss';

interface LoaderProps {
    className?: string
}

export const LoaderPage = (props: LoaderProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.Loader, className)}>
            <Loader />
        </div>
    );
};
