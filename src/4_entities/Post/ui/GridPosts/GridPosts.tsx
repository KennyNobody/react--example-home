import classNames from 'classnames';
import grid from '5_shared/css/grid.module.scss';
import cls from './GridPosts.module.scss';
import { ArticlePost } from '../ArticlePost/ArticlePost';
import { ArticlePostType } from '../../model/types/ArticlePost';

interface GridPostsProps {
    className?: string;
    data: ArticlePostType[];
    showSkeleton?: boolean;
}

export const GridPosts = (props: GridPostsProps) => {
    const {
        data,
        showSkeleton,
        className,
    } = props;

    const skeleton = (
        <>
            {
                new Array(12).fill(null).map((item, index) => (
                    <div
                        key={index}
                        className={classNames(grid['grid__col-1'])}
                    >
                        <ArticlePost />
                    </div>
                ))
            }
        </>
    );

    const content = (
        <>
            {
                data.map((item, index) => (
                    <div
                        key={index}
                        className={classNames(grid['grid__col-1'])}
                    >
                        <ArticlePost data={item} />
                    </div>
                ))
            }
        </>
    );

    return (
        <div className={classNames(grid.grid, cls.grid, className)}>
            { showSkeleton ? skeleton : content }
        </div>
    );
};
