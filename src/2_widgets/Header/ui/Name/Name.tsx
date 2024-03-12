import { memo } from 'react';
import classNames from 'classnames';
import cls from './Name.module.scss';

interface NameProps {
    isMain: boolean;
    className?: string;
    name: string | null;
    nickname?: string | null;
}

export const Name = memo((props: NameProps) => {
    const {
        name,
        nickname,
        isMain,
        className,
    } = props;

    const Tag: keyof JSX.IntrinsicElements = isMain ? 'h1' : 'p';

    return (
        <Tag
            className={
                classNames(
                    cls.name,
                    { [cls['name--main']]: isMain },
                    className,
                )
            }
        >
            { name || '...' }
            {
                nickname
                && (
                    <span className={cls.nickname}>{` / ${nickname}`}</span>
                )
            }
        </Tag>
    );
});
