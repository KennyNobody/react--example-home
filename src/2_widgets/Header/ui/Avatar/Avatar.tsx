import classNames from 'classnames';
import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string
}

export const Avatar = (props: AvatarProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.block, className)}>
н        </div>
    );
};
