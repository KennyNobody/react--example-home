import classNames from 'classnames';
import cls from './DetailPost.module.scss';

interface DetailPostProps {
    className?: string
}

export const DetailPost = (props: DetailPostProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.block, className)}>
            Full post content
        </div>
    );
};
