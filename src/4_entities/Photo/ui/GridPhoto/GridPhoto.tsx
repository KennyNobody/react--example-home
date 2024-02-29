import classNames from 'classnames';
import { End } from '5_shared/ui/End';
import grid from '5_shared/css/grid.module.scss';
import cls from './GridPhoto.module.scss';
import { ArticlePhoto } from '../ArticlePost/ArticlePhoto';
import { ArticlePhotoType } from '../../model/types/ArticlePhoto';

interface GridPostsProps {
    className?: string;
    data?: ArticlePhotoType[];
    showSkeleton?: boolean;
    showEnd: boolean;
}

export const GridPhoto = (props: GridPostsProps) => {
    const {
        data,
        showSkeleton,
        className,
        showEnd,
    } = props;

    const skeleton = (
        new Array(12).fill(null).map((_, index) => (
            <div
                key={index}
                className={classNames(grid['grid__col-2'])}
            >
                <ArticlePhoto />
            </div>
        ))
    );

    const content = (
        data
        && data?.length > 0
        && data.map((item: ArticlePhotoType, index: number) => (
            <div
                key={index}
                className={classNames(grid['grid__col-2'])}
            >
                <ArticlePhoto data={item} />
            </div>
        ))
    );

    return (
        <div className={classNames(cls.block)}>
            <div className={classNames(grid.grid, cls.grid, className)}>
                { showSkeleton ? skeleton : content }
            </div>
            {showEnd && <End />}
        </div>
    );
};
