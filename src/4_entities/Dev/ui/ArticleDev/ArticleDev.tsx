import { useMemo } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { GridCategory } from '4_entities/Category';
import grid from '5_shared/css/grid.module.scss';
import Icon from '5_shared/assets/icons/arrow-next.svg';
import { RouterPath } from '5_shared/config/router/routerConfig';
import { ArticleDevType } from '../../model/types/ArticleDev';
import cls from './ArticleDev.module.scss';

interface ArticleDevProps {
    className?: string;
    data?: ArticleDevType;
}

export const ArticleDev = (props: ArticleDevProps) => {
    const {
        data,
        className,
    } = props;

    const skeleton = useMemo(() => (
        <div className={classNames(cls.block, cls['block--skeleton'])} />
    ), []);

    const content = useMemo(() => (
        <Link
            to={`${RouterPath.dev_detail}${data?.id}`}
            className={
                classNames(
                    cls.block,
                    className,
                )
            }
        >
            <div className={classNames(grid.grid, cls.grid)}>
                <div className={classNames(grid['grid__col-2'])}>
                    <h3 className={classNames(cls.title)}>
                        { data?.title }
                    </h3>
                </div>
                <div className={classNames(grid['grid__col-2'])}>
                    <div className={classNames(cls.main)}>
                        <GridCategory
                            showSkeleton={false}
                            data={data?.tags?.data || []}
                        />
                        <Icon className={classNames(cls.icon)} />
                    </div>
                </div>
            </div>
        </Link>
    ), []);

    return data ? content : skeleton;
};
